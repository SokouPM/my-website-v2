/**
 * Protections anti-spam du formulaire de contact.
 *
 * 1. Honeypot : champ invisible pour un humain, rempli par les robots.
 * 2. Délai minimum : un humain met plusieurs secondes à remplir le formulaire.
 * 3. Limite de débit : nombre d'envois maximum par IP sur une fenêtre de temps.
 * 4. Neutralisation des liens : les URL du message ne sont plus cliquables dans l'email.
 */

export const HONEYPOT_FIELD = "website"
export const MIN_FILL_TIME_MS = 3_000

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000 // 1 heure
const RATE_LIMIT_MAX = 3

// Mémoire locale à l'instance serverless : protection "best effort".
// Pour une limite fiable entre instances, utiliser un store partagé (ex. Upstash Redis).
const hits = new Map<string, number[]>()

export function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS)

  if (recent.length >= RATE_LIMIT_MAX) {
    hits.set(ip, recent)

    return true
  }

  recent.push(now)
  hits.set(ip, recent)

  return false
}

export function isBotSubmission(body: Record<string, unknown>): boolean {
  const honeypot = body[HONEYPOT_FIELD]
  const startedAt = body.startedAt

  // Champ piège rempli → robot
  if (typeof honeypot === "string" && honeypot.trim() !== "") return true

  // Pas d'horodatage → requête envoyée directement à l'API, sans passer par le formulaire
  if (typeof startedAt !== "number") return true

  // Formulaire rempli trop vite (ou date dans le futur) → robot
  const elapsed = Date.now() - startedAt

  return elapsed < MIN_FILL_TIME_MS || elapsed > 24 * 60 * 60 * 1000
}

const URL_REGEX =
  /\b((?:https?:\/\/|www\.)[^\s<>"']+|[a-z0-9-]+(?:\.[a-z0-9-]+)*\.(?:online|xyz|top|site|click|link|shop|id|ru|cn|info|live|icu)\b[^\s<>"']*)/gi

export function containsLink(text: string): boolean {
  URL_REGEX.lastIndex = 0

  return URL_REGEX.test(text)
}

/**
 * "Désarme" les liens pour qu'aucun client mail ne les rende cliquables :
 * https://evil.online/page → hxxps://evil[.]online/page
 */
export function defangLinks(text: string): string {
  return text.replace(URL_REGEX, (url) => url.replace(/^http/i, "hxxp").replace(/\./g, "[.]"))
}
