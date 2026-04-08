import { Shield, TrendingUp, PiggyBank, ArrowRight } from "lucide-react"
import Link from "next/link"

const topics = [
  {
    icon: Shield,
    title: "Absicherung",
    question: "Bin ich richtig abgesichert?",
    description:
      "Berufsunfähigkeit, Haftpflicht, Krankenversicherung – gemeinsam klären wir, welcher Schutz wirklich zu deiner Lebenssituation passt.",
    href: "/absicherung",
    accentColor: "bg-primary/10 text-primary",
  },
  {
    icon: TrendingUp,
    title: "Vermögensaufbau",
    question: "Wie lege ich mein Geld sinnvoll an?",
    description:
      "ETFs, Fonds oder Immobilien? Ich zeige dir, wie du mit einem klaren Plan langfristig Vermögen aufbaust – ohne Zockerei.",
    href: "/vermoegensaufbau",
    accentColor: "bg-primary/10 text-primary",
  },
  {
    icon: PiggyBank,
    title: "Altersvorsorge",
    question: "Reicht meine Rente später aus?",
    description:
      "Private Rentenversicherung, Rürup oder betriebliche Vorsorge – zusammen finden wir die Strategie, die zu dir passt.",
    href: "/altersvorsorge",
    accentColor: "bg-primary/10 text-primary",
  },
]

export function TopicCards() {
  return (
    <section className="bg-secondary/30 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            Deine Themen
          </p>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Was beschäftigt dich gerade?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Jeder startet an einem anderen Punkt. Finde das Thema, das für dich
            gerade am wichtigsten ist.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {topics.map((topic) => {
            const Icon = topic.icon
            return (
              <Link
                key={topic.title}
                href={topic.href}
                className="group relative flex flex-col rounded-2xl border border-border/60 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg sm:p-8"
              >
                {/* Icon */}
                <div
                  className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl ${topic.accentColor}`}
                >
                  <Icon className="h-6 w-6" />
                </div>

                {/* Question as headline */}
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {topic.question}
                </h3>

                {/* Topic label */}
                <p className="mt-2 text-sm font-medium text-primary">
                  {topic.title}
                </p>

                {/* Description */}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {topic.description}
                </p>

                {/* CTA */}
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                  Mehr erfahren
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
