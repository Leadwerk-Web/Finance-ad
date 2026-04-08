import { Check, Heart, Users, Scale } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const reasons = [
  {
    icon: Scale,
    title: "100% unabhängig",
    description:
      "Als freier Makler bin ich keinem Versicherer verpflichtet – ich arbeite ausschließlich in deinem Interesse.",
  },
  {
    icon: Users,
    title: "Für junge Berufstätige",
    description:
      "Ich verstehe die Fragen und Unsicherheiten, die am Anfang der Karriere auftauchen – weil ich selbst dort gestartet bin.",
  },
  {
    icon: Heart,
    title: "Mensch statt Nummer",
    description:
      "Bei mir gibt es keine Standardlösungen. Jede Empfehlung ist individuell auf dich zugeschnitten.",
  },
]

const credentials = [
  "IHK-geprüfter Finanzanlagenfachmann",
  "Zertifizierter Versicherungsfachmann (IHK)",
  "Mitglied im Bundesverband Deutscher Versicherungsmakler",
]

export function AboutSection() {
  return (
    <section className="bg-secondary/30 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-square max-w-md overflow-hidden rounded-2xl bg-muted lg:max-w-none">
              <Image
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=600&fit=crop&crop=faces"
                alt="Über mich"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-2xl border border-primary/20 bg-primary/5 -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
              Über mich
            </p>
            <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              Finanzberatung, die sich anders anfühlt
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Ich bin davon überzeugt, dass gute Finanzberatung mit Zuhören
              beginnt – nicht mit Verkaufen. Mein Ziel ist es, dir die
              Sicherheit zu geben, informierte Entscheidungen zu treffen.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              In der Schule lernt niemand, wie man mit Geld umgeht. Genau diese
              Lücke möchte ich schließen: mit klaren Erklärungen, echtem
              Interesse an deiner Situation und ohne versteckte Agenden.
            </p>

            {/* Reasons */}
            <div className="mt-8 space-y-4">
              {reasons.map((reason) => {
                const Icon = reason.icon
                return (
                  <div key={reason.title} className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">
                        {reason.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Credentials */}
            <div className="mt-8 rounded-xl border border-border/60 bg-card p-4">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Qualifikationen
              </p>
              <ul className="space-y-2">
                {credentials.map((credential) => (
                  <li
                    key={credential}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <Check className="h-4 w-4 text-primary" />
                    {credential}
                  </li>
                ))}
              </ul>
            </div>

            <Button size="lg" className="mt-8 rounded-full">
              Mehr über mich erfahren
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
