import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import theme from "../styles/ChakraTheme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
