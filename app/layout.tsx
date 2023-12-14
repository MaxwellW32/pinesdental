import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ReusableNavBar, { menuItem } from '@/resuables/navBar/ReusableNavBar'
import AtomLoader from '@/utility/AtomLoader'
import ThemeProvider from '@/utility/ThemeProvider'
import OtherNavItems from '@/components/Layout/OtherNavItems'
import Footer from '@/components/Layout/Footer'
import { navMenuInfoArr } from '@/utility/globalState'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pines Dental',
  description: 'Your one true dentist',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
          <AtomLoader />
          <OtherNavItems />
          <ReusableNavBar menuInfoArr={navMenuInfoArr} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
