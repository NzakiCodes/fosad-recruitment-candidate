import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";

import { AuthProviderContainer, useAuth } from "../context/authContext";
import { ToastContextProvider } from "../context/toastContext";
import GuardRoutes from "./api/GuardRoutes";
import { useRouter } from "next/router";
import Initializer from "../components/initializer";

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
