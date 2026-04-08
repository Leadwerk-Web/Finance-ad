import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Lisa M.",
    role: "Ärztin, 32 Jahre",
    quote:
      "Endlich jemand, der mir Finanzen erklärt, ohne dass ich mich dumm fühle. Die Beratung war ehrlich, transparent und ohne jeden Verkaufsdruck. Ich fühle mich jetzt viel sicherer.",
    rating: 5,
  },
  {
    name: "Tobias K.",
    role: "Ingenieur, 28 Jahre",
    quote:
      "Ich hatte ein komplettes Chaos aus alten Versicherungen. Nach der Beratung habe ich endlich Überblick und spare sogar Geld – bei besserer Absicherung!",
    rating: 5,
  },
  {
    name: "Sarah & Jan",
    role: "Junge Familie",
    quote:
      "Als wir unser erstes Kind bekamen, wussten wir nicht, wo wir anfangen sollten. Die persönliche Betreuung hat uns enorm geholfen, die richtigen Entscheidungen zu treffen.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            Kundenstimmen
          </p>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Was meine Mandanten sagen
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Echte Erfahrungen von Menschen, die den Schritt gewagt haben.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative flex flex-col rounded-2xl border border-border/60 bg-card p-6 sm:p-8"
            >
              {/* Quote icon */}
              <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/10" />

              {/* Rating */}
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="flex-1 text-foreground">
                &quot;{testimonial.quote}&quot;
              </blockquote>

              {/* Author */}
              <div className="mt-6 border-t border-border/60 pt-4">
                <p className="font-medium text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badge */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-primary text-primary"
                />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">
              4,9 / 5,0
            </span>
          </div>
          <span className="text-sm text-muted-foreground">
            Basierend auf 50+ Bewertungen
          </span>
        </div>
      </div>
    </section>
  )
}
