import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import theme from "../styles/ChakraTheme";
import "@fontsource/inter";
import MainProvider from "../context/maincontext";
import { wrapper } from "../store/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <MainProvider>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </MainProvider>
  );
}

export default wrapper.withRedux(MyApp);
