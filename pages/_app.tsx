import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode, useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import toast, { Toaster } from 'react-hot-toast';

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
      <Toaster/>
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
