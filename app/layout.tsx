import './globals.css'
import type { Metadata } from 'next'
import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ashwini DyeChem Industries',
  description: 'A trusted leader in manufacturing reliable reactive dyes, with a proven track record, skilled staff, punctual delivery, customization options, and competitive prices, we’re the preferred choice for textile manufacturers worldwide.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <script src="https://web3forms.com/client/script.js" async defer></script>
      </Head>
      <body className={inter.className}>{children}
      </body>
    </html>
  )
}
