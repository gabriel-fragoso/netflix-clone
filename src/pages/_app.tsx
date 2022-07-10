import '../styles/globals.scss'
import '../components/Header/styles.scss'
import '../components/Main/styles.scss'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
