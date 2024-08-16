import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import cn from 'classnames';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog com suporte a MDX',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-sans bg-slate-900 antialiased",
          inter.className
        )}>
        {children}
      </body>
    </html>
  )
}
