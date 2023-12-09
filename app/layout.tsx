import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ReusableNavBar, { menuItem } from '@/resuables/navBar/ReusableNavBar'
import AtomLoader from '@/utility/AtomLoader'
import ThemeProvider from '@/utility/ThemeProvider'
import OtherNavItems from '@/components/Layout/OtherNavItems'
import Footer from '@/components/Layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pines Dental',
  description: 'Your one true dentist',
}


const menuInfoArr: menuItem[] = [
  {
    title: "Home",
    link: "/",
    subMenu: undefined
  },
  {
    title: "About Us",
    link: "/aboutUs",
    subMenu: [
      {
        title: "Gallery",
        link: "/gallery",
        subSubMenu: [
          {
            title: "Team",
            link: "/team"
          },
          {
            title: "Contact Us",
            link: "/contactUs"
          }
        ]
      },
      {
        title: "Services",
        link: "/services",
        subSubMenu: undefined
      },
      {
        title: "Documents",
        link: "/documents",
        subSubMenu: undefined
      }
    ]
  },
  {
    title: "Services",
    link: "/services",
    subMenu: [
      {
        title: "Consultation",
        link: "/consultation",
        subSubMenu: undefined
      }
    ]
  },
  {
    title: "Blog",
    link: "/blog",
    subMenu: undefined
  },
  {
    title: "Contact Us",
    link: "/contactUs",
    subMenu: undefined
  },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AtomLoader />
          <OtherNavItems />
          <ReusableNavBar menuInfoArr={menuInfoArr} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
