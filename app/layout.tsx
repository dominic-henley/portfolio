import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import NavBar from './components/NavBar'
import './globals.css'

const inter = Ubuntu({
  weight: "300",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: 'Dominic Henley',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
