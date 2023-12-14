import { AppProps } from 'next/app'
import "@/wp_styles/index.css"
import '@/app/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
