import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import '../globals.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NavBar from '../components/NavBar';

const inter = Ubuntu({
  weight: "300",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: 'Dominic Henley',
}

// gsap configuration
gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className='bg-grey'
          >
          <NavBar />
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  )
}
