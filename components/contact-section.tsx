"use client"

import { useState } from "react"
import { Calendar, Mail, Phone, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Check className="h-8 w-8 text-primary" />
          </div>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground">
            Vielen Dank für deine Nachricht!
          </h2>
          <p className="mt-4 text-muted-foreground">
            Ich melde mich innerhalb von 24 Stunden bei dir. Bis bald!
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="kontakt" className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left side - Text & Calendar link */}
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
              Kontakt
            </p>
            <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              Lass uns kennenlernen
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Du hast Fragen oder möchtest ein unverbindliches Erstgespräch?
              Schreib mir oder buche direkt einen Termin – ich freue mich auf
              dich.
            </p>

            {/* Contact options */}
            <div className="mt-8 space-y-4">
              <a
                href="tel:+4917612345678"
                className="flex items-center gap-4 rounded-xl border border-border/60 bg-card p-4 transition-colors hover:bg-accent"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefon</p>
                  <p className="font-medium text-foreground">0176 123 456 78</p>
                </div>
              </a>

              <a
                href="mailto:hallo@finanzberatung.de"
                className="flex items-center gap-4 rounded-xl border border-border/60 bg-card p-4 transition-colors hover:bg-accent"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">E-Mail</p>
                  <p className="font-medium text-foreground">
                    hallo@finanzberatung.de
                  </p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-4 rounded-xl border border-primary/30 bg-primary/5 p-4 transition-colors hover:bg-primary/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                  <Calendar className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">
                    Termin buchen
                  </p>
                  <p className="font-medium text-foreground">
                    Kostenloses Erstgespräch vereinbaren
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
            <h3 className="font-serif text-xl font-semibold text-foreground">
              Schreib mir eine Nachricht
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Ich antworte in der Regel innerhalb von 24 Stunden.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    placeholder="Max Mustermann"
                    required
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-Mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="max@beispiel.de"
                    required
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon (optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="0176 123 456 78"
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="topic">Thema</Label>
                  <Select>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Wähle ein Thema" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kennenlernen">
                        Unverbindlich kennenlernen
                      </SelectItem>
                      <SelectItem value="absicherung">Absicherung</SelectItem>
                      <SelectItem value="vermoegensaufbau">
                        Vermögensaufbau
                      </SelectItem>
                      <SelectItem value="altersvorsorge">
                        Altersvorsorge
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Nachricht *</Label>
                <Textarea
                  id="message"
                  placeholder="Erzähl mir kurz, worum es geht..."
                  rows={4}
                  required
                  className="bg-background"
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox id="consent" required />
                <Label
                  htmlFor="consent"
                  className="text-sm leading-relaxed text-muted-foreground"
                >
                  Ich stimme zu, dass meine Angaben zur Kontaktaufnahme
                  verarbeitet werden. Mehr dazu in der{" "}
                  <a href="/datenschutz" className="text-primary underline">
                    Datenschutzerklärung
                  </a>
                  .
                </Label>
              </div>

              <Button type="submit" size="lg" className="w-full rounded-full">
                Nachricht senden
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
