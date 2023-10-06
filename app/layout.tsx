import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Box } from '@mui/material'
import NavBar from './components/NavBar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const boxStyles = {
  mx: 'auto',
  mt: 5,
  width: 0.85,
  display: 'flex',
  flexWrap: 'wrap'
}

// const theme = createTheme({
  
// })

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
        <Box
          sx={ boxStyles }
          >
          {children}
        </Box>
      </body>
    </html>
  )
}
