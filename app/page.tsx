"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TopicCards } from "@/components/topic-cards"
import { ProcessSteps } from "@/components/process-steps"
import { AboutSection } from "@/components/about-section"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TopicCards />
        <ProcessSteps />
        <AboutSection />
        <Testimonials />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
