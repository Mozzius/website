import type { AppProps } from "next/app";
import Head from "next/head";

import Nav from "../components/Nav";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className="page-content">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
