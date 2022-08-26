import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import theme from "../styles/ChakraTheme";
import "@fontsource/inter";
import MainProvider from "../context/maincontext";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <MainProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MainProvider>
    </ChakraProvider>
  );
}

export default MyApp;
