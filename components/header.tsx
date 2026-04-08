"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Start", href: "/" },
  { label: "Absicherung", href: "/absicherung" },
  { label: "Vermögensaufbau", href: "/vermoegensaufbau" },
  { label: "Altersvorsorge", href: "/altersvorsorge" },
  { label: "Über mich", href: "/ueber-mich" },
  { label: "Kontakt", href: "/kontakt" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-xl font-semibold tracking-tight text-foreground">
            Finanzberatung
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:+4917612345678"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden lg:inline">0176 123 456 78</span>
          </a>
          <Button size="sm" className="rounded-full">
            Termin vereinbaren
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out md:hidden",
          isOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <nav className="flex flex-col gap-1 border-t border-border/40 bg-background px-4 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-3 border-t border-border/40 pt-4">
            <a
              href="tel:+4917612345678"
              className="flex items-center gap-2 px-3 text-sm text-muted-foreground"
            >
              <Phone className="h-4 w-4" />
              0176 123 456 78
            </a>
            <Button className="w-full rounded-full">Termin vereinbaren</Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
