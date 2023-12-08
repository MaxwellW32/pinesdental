import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ReusableNavBar, { menuItem } from '@/components/reusableNavBar/ReusableNavBar'
import AtomLoader from '@/utility/AtomLoader'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pines Dental',
  description: 'Your one true dentist',
}


const menuInfoArr: menuItem[] = [
  {
    title: "Home",
    link: "",
    subMenu: undefined
  },
  {
    title: "About Us",
    link: "",
    subMenu: [
      {
        title: "Gallery",
        link: "",
        subSubMenu: [
          {
            title: "Team",
            link: ""
          },
          {
            title: "Contact Us",
            link: ""
          }
        ]
      },
      {
        title: "Services",
        link: "",
        subSubMenu: undefined
      },
      {
        title: "Documents",
        link: "",
        subSubMenu: undefined
      }
    ]
  },
  {
    title: "Services",
    link: "",
    subMenu: [
      {
        title: "Consultations",
        link: "",
        subSubMenu: undefined
      }
    ]
  },
  {
    title: "Blog",
    link: "",
    subMenu: undefined
  },
  {
    title: "Contact Us",
    link: "",
    subMenu: undefined
  },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <AtomLoader />
        <ReusableNavBar menuInfoArr={menuInfoArr} />
        {children}
      </body>
    </html>
  )
}
