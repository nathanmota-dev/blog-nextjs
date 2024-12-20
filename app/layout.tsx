import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css'
import cn from 'classnames';
import Footer from './components/footer';

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
          "min-h-screen flex flex-col bg-white dark:bg-slate-950 antialiased text-white",
          inter.className
        )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
