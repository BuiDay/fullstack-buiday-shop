import Layout from "@/components/Layout/Layout";
import "@/styles/globals.scss";
import "@/styles/404.scss";
import "bootstrap/dist/css/bootstrap.css"; // Add this line
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { wrapper } from "../redux/store";
import { store } from "../redux/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import {Toaster} from "react-hot-toast"

let persistor = persistStore(store);

function App({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
            <Component {...pageProps} />
            <Toaster position="top-right" reverseOrder={false}/>
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default wrapper.withRedux(App);