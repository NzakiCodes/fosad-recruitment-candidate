import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { LandingLayout } from '../components/Layouts'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LandingLayout>
      <Component {...pageProps} />
    </LandingLayout>
  )
}

export default MyApp
