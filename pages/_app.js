import '../styles/globals.scss'
import "../styles/basic-swiper.scss"
import "react-toastify/dist/ReactToastify.css";
import { Provider } from 'react-redux'
import store from "../store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import Head from 'next/head';
import { SessionProvider } from "next-auth/react"
import { ToastContainer } from "react-toastify";
let persistor = persistStore(store);
export default function App({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <>
            <Head>
                <title>Green Line Shop</title>
                <meta
                    name="description"
                    content="Green Line Shopping Service for all of your need"
                ></meta>
                <link rel="icon" href="/favison.ico"></link>
            </Head>
            <SessionProvider session={session}>
                <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Component {...pageProps} />
                    <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                    />
                </PersistGate>
                </Provider>
            </SessionProvider>
        </>
    )
}
