import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import './globals.css'

const inter = Ubuntu({
  weight: "300",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: 'Dominic Henley',
}

// gsap configuration
gsap.registerPlugin(useGSAP)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
