import NextApp from "next/app";
import Link from "next/link";
import * as React from "react";
// ______________________________________________________
//
export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Component {...pageProps} />
        <p>
          <Link href="/">
            <a>back to top</a>
          </Link>
        </p>
      </>
    );
  }
}
