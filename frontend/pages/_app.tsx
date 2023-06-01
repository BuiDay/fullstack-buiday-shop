import Layout from "@/components/Layout/Layout";
import "@/styles/globals.scss";
import "@/styles/404.scss";
import "bootstrap/dist/css/bootstrap.css"; // Add this line
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { wrapper } from "../redux/store";
// import reduxStore from "../redux/store";
// import { persistStore } from "redux-persist";
// import { PersistGate } from "redux-persist/integration/react";


// let persistor = persistStore(reduxStore);

function App({ Component, pageProps }: AppProps) {
  // if (typeof window === "undefined") {
  //       return (
  //     <Provider store={reduxStore}>
  //       <Component {...pageProps} />
  //     </Provider>
  //   );
  // }

  return (
    // <Provider store={reduxStore} >
    //   <PersistGate loading={null} persistor={persistor}>
    //     <Layout>
    //       <Component {...pageProps} />
    //     </Layout>
    //     </PersistGate>
    // </Provider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(App);