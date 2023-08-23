import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The art of videogames',
  description: 'Best videogames recommendations for you',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
