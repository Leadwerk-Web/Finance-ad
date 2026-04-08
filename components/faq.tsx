"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: 'Was bedeutet "unabhängig" bei der Beratung?',
    answer:
      "Als freier Versicherungsmakler bin ich an keinen Versicherer gebunden. Ich vergleiche über 100 Anbieter und wähle die Produkte aus, die wirklich zu deiner Situation passen – nicht die, bei denen ich die höchste Provision bekomme.",
  },
  {
    question: "Kostet mich das Erstgespräch etwas?",
    answer:
      "Nein, das Erstgespräch ist kostenlos und unverbindlich. Wir lernen uns kennen, ich verstehe deine Situation, und du entscheidest danach in Ruhe, ob du mit mir zusammenarbeiten möchtest.",
  },
  {
    question: "Wie verdienst du dann dein Geld?",
    answer:
      "Bei Versicherungen erhalte ich eine Courtage vom Versicherer – das kostet dich nichts extra. Bei manchen Beratungsleistungen arbeite ich auf Honorarbasis. Beides erkläre ich dir transparent vorab.",
  },
  {
    question: "Wie läuft die Beratung ab – online oder vor Ort?",
    answer:
      "Ganz wie es dir passt. Die meisten Gespräche finden per Video statt, aber persönliche Treffen sind natürlich auch möglich. Du entscheidest, was für dich am bequemsten ist.",
  },
  {
    question: "Ich habe schon Versicherungen – lohnt sich ein Check trotzdem?",
    answer:
      "Auf jeden Fall. Viele Verträge sind veraltet, zu teuer oder passen nicht mehr zur aktuellen Lebenssituation. Ein Vertragscheck zeigt dir, wo du gut aufgestellt bist und wo Optimierungspotenzial besteht.",
  },
  {
    question: "Was muss ich zum Erstgespräch vorbereiten?",
    answer:
      "Nichts Besonderes. Wenn du bestehende Verträge hast, ist es hilfreich, diese griffbereit zu haben. Aber auch ohne Unterlagen können wir starten – das Kennenlernen steht im Vordergrund.",
  },
]

export function FAQ() {
  return (
    <section className="bg-secondary/30 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            Häufige Fragen
          </p>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Noch unsicher? Das ist normal.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Hier findest du Antworten auf die Fragen, die mir am häufigsten
            gestellt werden.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-xl border border-border/60 bg-card px-6 data-[state=open]:bg-card"
            >
              <AccordionTrigger className="py-5 text-left font-medium text-foreground hover:no-underline [&[data-state=open]>svg]:rotate-180">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
