import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/themes/config";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { AuthProvider } from "../src/context/Auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../src/services/firebase/init";

// import {} from "firebase/app";

const queryClient = new QueryClient();

const app = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
