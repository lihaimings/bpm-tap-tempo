import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BPM Tap Tempo - Find the Tempo of Any Song',
  description: 'Tap to find the BPM (beats per minute) of any song. Perfect for musicians, DJs, and music producers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}><Header /><main className="min-h-screen">{children}</main><Footer /></body>
    </html>
  )
}
