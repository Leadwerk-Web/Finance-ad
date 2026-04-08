import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8 lg:pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">
              Unabhängige Finanzberatung
            </p>
            <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              <span className="text-balance">
                Klarheit statt Chaos.{" "}
                <span className="text-primary">Vertrauen statt Verkauf.</span>
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Ich helfe jungen Berufstätigen, ihre Finanzen zu verstehen und die
              richtigen Entscheidungen zu treffen – ohne Fachjargon, ohne Druck
              und immer auf Augenhöhe.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button size="lg" className="rounded-full gap-2">
                Unverbindlich kennenlernen
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="rounded-full text-muted-foreground"
              >
                <ChevronDown className="mr-2 h-4 w-4" />
                Themen entdecken
              </Button>
            </div>

            {/* Trust Indicators - inspired by A.S.I. stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border/60 pt-8">
              <div>
                <p className="font-serif text-3xl font-semibold text-foreground">
                  150+
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Beratungsmandate
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl font-semibold text-foreground">
                  8 Jahre
                </p>
                <p className="mt-1 text-sm text-muted-foreground">Erfahrung</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-semibold text-foreground">
                  100%
                </p>
                <p className="mt-1 text-sm text-muted-foreground">Unabhängig</p>
              </div>
            </div>
          </div>

          {/* Portrait Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-2xl bg-muted lg:max-w-none">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=750&fit=crop&crop=faces"
                alt="Ihr Finanzberater"
                fill
                className="object-cover"
                priority
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
            </div>
            {/* Floating credential badge - inspired by disabatino trust badges */}
            <div className="absolute -bottom-4 -left-4 rounded-xl border border-border/60 bg-card p-4 shadow-lg sm:-left-8">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Zertifiziert
              </p>
              <p className="mt-1 font-serif text-sm font-semibold text-foreground">
                IHK Finanzanlagenfachmann
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
