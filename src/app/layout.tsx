import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'


export const metadata: Metadata = {
  title: "Builder Velocity: it's about time",
  description: 'AI launch event',
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
