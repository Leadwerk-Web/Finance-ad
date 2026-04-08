import type { Metadata, Viewport } from 'next'
import { Fraunces, Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const fraunces = Fraunces({ 
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: 'Unabhängige Finanzberatung | Vertrauen. Klarheit. Orientierung.',
  description: 'Persönliche und unabhängige Finanzberatung für junge Berufstätige. Absicherung, Vermögensaufbau und Altersvorsorge – verständlich, transparent und ohne Verkaufsdruck.',
  generator: 'v0.app',
  keywords: ['Finanzberatung', 'Versicherung', 'Vermögensaufbau', 'Altersvorsorge', 'unabhängig', 'Beratung'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#2d4a47',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
