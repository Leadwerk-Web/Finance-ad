import { MessageCircle, FileSearch, Handshake } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Kennenlernen",
    description:
      "In einem kostenlosen Erstgespräch lernen wir uns kennen. Du erzählst mir von deiner Situation, ich höre zu – ganz ohne Verkaufsdruck.",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Analyse & Konzept",
    description:
      "Ich analysiere deine bestehenden Verträge und entwickle ein transparentes Konzept, das wirklich zu deinen Zielen passt.",
  },
  {
    number: "03",
    icon: Handshake,
    title: "Umsetzung & Begleitung",
    description:
      "Gemeinsam setzen wir das Konzept um. Und auch danach bin ich für dich da – bei Fragen, Änderungen oder im Schadensfall.",
  },
]

export function ProcessSteps() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            So arbeite ich
          </p>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Drei Schritte zu deiner Klarheit
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Mein Beratungsprozess ist einfach, transparent und immer an deinen
            Bedürfnissen orientiert.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="absolute left-0 right-0 top-16 hidden h-0.5 bg-gradient-to-r from-transparent via-border to-transparent md:block" />

          <div className="grid gap-8 md:grid-cols-3 md:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.title} className="relative text-center">
                  {/* Step number circle */}
                  <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-card">
                    <span className="font-serif text-lg font-semibold text-primary">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
