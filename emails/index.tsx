import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components"
import * as React from "react"
import { ReactElement } from "react"

export default function Email({
  firstName,
  lastName,
  email,
  subject,
  message,
}: {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}): ReactElement {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              primary: {
                DEFAULT: "#aa00ff",
                foreground: "#ffffff",
              },
              secondary: {
                DEFAULT: "#ff0062",
                foreground: "#ffffff",
              },
            },
          },
        },
      }}
    >
      <Head>
        <title>Demande effectuée sur pierre-marquet.fr</title>
      </Head>
      <Preview>Une demande a été effectuée sur pierre-marquet.fr</Preview>
      <Body className="font-sans">
        <Container
          className="bg-black"
          style={{
            padding: "20px",
            clipPath:
              "polygon(0% 0%, calc(100% - 20px) 0%, 100% calc(0% + 20px), 100% 100%, calc(0% + 20px) 100%, 0% calc(100% - 20px))",
          }}
        >
          <Img
            src="https://camo.githubusercontent.com/0985d32ad9836d70523e52283e68744a94b9042742bb49ae3191936424088b5d/68747470733a2f2f7777772e7069657272652d6d6172717565742e66722f5f6e6578742f7374617469632f6d656469612f77686974654c6f676f2e63646332646637642e737667"
            height={200}
            className="mx-auto"
          />

          <Heading as="h1" className="mb-8 text-center text-white">
            Une demande a été effectuée sur <br />{" "}
            <Link className="text-primary" href="https://pierre-marquet.fr">
              pierre-marquet.fr
            </Link>
          </Heading>

          <Section className="text-white">
            <Text>Bonjour Pierre,</Text>
            <Text className="text-justify">
              Vous avez reçu une nouvelle demande de contact sur votre site internet envoyé le{" "}
              {new Date().toLocaleDateString("fr")} à {new Date().toLocaleTimeString("fr")} :
            </Text>
          </Section>

          <Section className="text-white">
            <Row>
              <Column className="w-1/2">
                <Text>
                  <span className="font-bold underline">Expéditeur :</span> {firstName}{" "}
                  {lastName || "Impossible à récupérer"}
                </Text>
              </Column>
              <Column className="w-1/2">
                <Text>
                  <span className="font-bold underline">Email :</span> {email || "Impossible à récupérer"}
                </Text>
              </Column>
            </Row>
          </Section>

          <Section
            className="mb-0 bg-white"
            style={{
              padding: "0 20px",
              clipPath:
                "polygon(0% 0%, calc(100% - 10px) 0%, 100% calc(0% + 10px), 100% 100%, calc(0% + 10px) 100%, 0% calc(100% - 10px))",
            }}
          >
            <Text>
              <span className="font-bold underline">Objet :</span>{" "}
              {subject || "Une erreur est survenue lors de la récupération de l'objet."}
            </Text>
            <Text>{message || "Une erreur est survenue lors de la récupération du message."}</Text>
          </Section>

          {email && (
            <Section className="mt-5 text-white">
              <Text className="text-justify">
                Vous pouvez répondre à cette demande en cliquant sur le lien ci-dessous :
              </Text>

              <Button
                className="bg-secondary font-bold text-white"
                style={{
                  padding: "1rem 0.75rem",
                  clipPath:
                    "polygon(0% 0%, calc(100% - 10px) 0%, 100% calc(0% + 10px), 100% 100%, calc(0% + 10px) 100%, 0% calc(100% - 10px))",
                }}
                href={`mailto:${email}?subject=Re: ${subject || "Demande de contact"}`}
              >
                Répondre à la demande
              </Button>
            </Section>
          )}
        </Container>

        <Text className="text-center text-sm text-gray-500">© {new Date().getFullYear()} Pierre Marquet.</Text>
      </Body>
    </Tailwind>
  )
}
