import Link from "next/link"

const navigation = {
  main: [
    { label: "Start", href: "/" },
    { label: "Absicherung", href: "/absicherung" },
    { label: "Vermögensaufbau", href: "/vermoegensaufbau" },
    { label: "Altersvorsorge", href: "/altersvorsorge" },
    { label: "Über mich", href: "/ueber-mich" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  legal: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "Erstinformation", href: "/erstinformation" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="font-serif text-xl font-semibold text-foreground">
              Finanzberatung
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Unabhängige Finanzberatung für junge Berufstätige.
              Vertrauen. Klarheit. Orientierung.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Navigation
            </p>
            <ul className="mt-4 space-y-2">
              {navigation.main.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Rechtliches
            </p>
            <ul className="mt-4 space-y-2">
              {navigation.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-border/60 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
            <p>
              © {new Date().getFullYear()} Finanzberatung. Alle Rechte
              vorbehalten.
            </p>
            <p>
              Mit Sorgfalt erstellt in Deutschland.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
