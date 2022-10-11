import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode, useState } from "react";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";

import { AuthProviderContainer } from "../context/authContext";
import { ToastContextProvider } from "../context/toastContext";

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
  const [queryClient] = useState(() => new QueryClient());

  return getLayout(
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <ToastContextProvider>
        <AuthProviderContainer>
          <Component {...pageProps} />
        </AuthProviderContainer>
      </ToastContextProvider>
    </QueryClientProvider>,
    title
  );
}

export default MyApp;
