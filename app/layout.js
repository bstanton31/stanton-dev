import { Inter } from 'next/font/google'
import { Fraunces } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const metadata = {
  title: 'Ben Stanton | MIS Student at University of Montana',
  description: 'Ben Stanton is a Management Information Systems student at the University of Montana College of Business, incoming Strategic Consulting Fellow at Artemis Connection, and aspiring consultant and builder.',
  openGraph: {
    title: 'Ben Stanton | MIS Student at University of Montana',
    description: 'Ben Stanton is a Management Information Systems student at the University of Montana College of Business, incoming Strategic Consulting Fellow at Artemis Connection, and aspiring consultant and builder.',
    url: 'https://benstanton.dev',
    siteName: 'Ben Stanton',
    images: [
      {
        url: 'https://benstanton.dev/headshot.jpg',
        width: 800,
        height: 600,
        alt: 'Ben Stanton',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ben Stanton | MIS Student at University of Montana',
    description: 'Ben Stanton is a Management Information Systems student at the University of Montana College of Business, incoming Strategic Consulting Fellow at Artemis Connection, and aspiring consultant and builder.',
    images: ['https://benstanton.dev/headshot.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  )
}