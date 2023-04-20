import Layout from '@/components/Layout/Layout'
import '@/styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import type { AppProps } from 'next/app'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import reduxStore from "../redux/index"
import { persistStore } from 'redux-persist'
import { useEffect } from 'react';

let persistor = persistStore(reduxStore);

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []); 
  return (
    <Provider store={reduxStore} >
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        </PersistGate>
    </Provider>
  )
}
