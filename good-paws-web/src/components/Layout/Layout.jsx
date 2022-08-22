import Head from "next/head";
import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Protectora de animales</title>
        <meta
          name="description"
          content="Adoptando un animal, le das una segunda vida a aquellos que no han tenido tanta suerte"
        />
        <link rel="icon" href="/accent.svg" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
