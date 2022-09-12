import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export type PageWithlayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement, title?: string) => ReactNode;
  title?: string;
};

type AppPropsWithLayout = AppProps & {
  Component: PageWithlayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const title = Component.title ?? undefined;

  return getLayout(<Component {...pageProps} />, title);
}

export default MyApp;
