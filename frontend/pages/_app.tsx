import Layout from '@/components/Layout/Layout'
import '@/styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
