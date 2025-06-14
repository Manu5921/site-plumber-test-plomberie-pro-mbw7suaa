import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Test Plomberie Pro - plumber à Paris',
  description: 'Votre plombier de confiance',
  keywords: 'plumber, Paris, professionnel',
  authors: [{ name: 'Test Plomberie Pro' }],
  creator: 'Test Plomberie Pro',
  openGraph: {
    title: 'Test Plomberie Pro',
    description: 'Votre plombier de confiance',
    type: 'website',
    locale: 'fr_FR',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}