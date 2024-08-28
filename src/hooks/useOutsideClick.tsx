import { RefObject, useEffect } from "react"

export const useOutsideClick = (ref: RefObject<HTMLDivElement>, callback: () => void): void => {
  useEffect(() => {
    const listener = (event: Event): void => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }

      callback()
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)

    return (): void => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [ref, callback])
}
