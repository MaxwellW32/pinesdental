import Footer from '@/components/Layout/Footer'
import OtherNavItems from '@/components/Layout/OtherNavItems'
import ReusableNavBar, { menuItem } from '@/resuables/navBar/ReusableNavBar'
import { navMenuInfoArr } from '@/utility/globalState'
import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <OtherNavItems />
        <ReusableNavBar menuInfoArr={navMenuInfoArr} />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}
