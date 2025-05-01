import type React from "react"
import type { Metadata } from "next/types"
import { Inter } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import DashboardLayout from "@/components/dashboard-layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CV Analyzer - Dashboard",
  description: "Admin dashboard built with Next.js and Tailwind CSS",
    generator: 'webwiz-1.0'
}

export default function RootLayout({ children }: { children: React.ReactNode })
// ({
//   children,.
// }: Readonly<{
//   children: React.ReactNode
// }>) 
{
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <DashboardLayout>{children}</DashboardLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}


