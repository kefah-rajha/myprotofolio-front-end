import '@/styles/globals.css'
import '@nextcss/reset';
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  )
}
