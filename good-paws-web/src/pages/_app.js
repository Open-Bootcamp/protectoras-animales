import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import theme from "../styles/ChakraTheme";
import "@fontsource/inter";
import MainProvider from "../context/maincontext";
import { wrapper } from "../store/store";
import CenterProvider from "../context/CenterContext";

function MyApp({ Component, pageProps }) {
  return (
    <MainProvider>
      <CenterProvider>
        <ChakraProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </CenterProvider>
    </MainProvider>
  );
}

export default wrapper.withRedux(MyApp);
