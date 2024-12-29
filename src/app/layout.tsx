import './globals.css'
import { Inter } from 'next/font/google'
// import ThemeProvider from '@/components/ThemeProvider'
// import ThemeToggle from '@/components/ThemeToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Status Dashboard',
  description: 'Monitor your websites and software status',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
          <div className="flex flex-col min-h-screen">
            <header className="border-b">
              <div className="container mx-auto p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Status Dashboard</h1>
                {/* <ThemeToggle /> */}
              </div>
            </header>
            {children}
          </div>
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}

