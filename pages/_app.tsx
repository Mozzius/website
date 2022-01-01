import type { AppProps } from "next/app";
import Head from "next/head";

import Nav from "../components/Nav";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="My personal site, a showcase of sorts"
        />
      </Head>
      <Nav />
      <div className="page-content">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
