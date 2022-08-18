import React from "react";
import { Text, Box, Flex } from "@chakra-ui/react";
import Logo from "../Logo/Logo";
import Link from "next/link";
import github from "../../../public/assets/images/github.svg";
import Image from "next/image";
import FooterLinks from "./FooterLinks";

export default function Footer() {
  return (
    <>
      <Box pl={{ base: 4, md: 20 }} pr={{ base: 4, md: 20 }}>
        <Logo />
        <Box
          as="p"
          width="320px"
          height="70px"
          mt={{ base: 2, md: 4 }}
          mb={{ base: 4, md: 8 }}
        >
          Adoptando un animal, le das una segunda vida a aquellos que no han
          tenido tanta suerte.
        </Box>

        <FooterLinks />

        <Box display={{ base: "none", md: "block" }}>
          <Flex align="center" justify="space-between" pb={10}>
            <Text color={"#98a2b3"}>© 2022 Open Devs.</Text>
            <Link href="/">
              <a>
                <Image src={github} alt="Github logo" width={24} height={24} />
              </a>
            </Link>
          </Flex>
        </Box>

        <Box display={{ base: "block", md: "none" }}>
          <Link href="/">
            <a>
              <Image src={github} alt="Github logo" width={24} height={24} />
            </a>
          </Link>
          <Text color={"#98a2b3"} pt={5} pb={20}>
            © 2022 Open Devs.
          </Text>
        </Box>
      </Box>
    </>
  );
}
