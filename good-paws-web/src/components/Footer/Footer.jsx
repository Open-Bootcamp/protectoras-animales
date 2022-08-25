import React from "react";
import { Text, Box, Flex } from "@chakra-ui/react";
import Logo from "../Logo/Logo";
import NextLink from "next/link";
import github from "../../../public/assets/images/github.svg";
import Image from "next/image";
import FooterLinks from "./FooterLinks";

export default function Footer() {
  return (
    <>
      <Box
        pl={{ base: 4, lg: 20 }}
        pr={{ base: 4, lg: 20 }}
        mt={{ base: 10, lg: 20 }}
        mb={{ base: 10 }}
      >
        <Logo />
        <Box
          width="320px"
          height="70px"
          mt={{ base: 2, lg: 4 }}
          mb={{ base: 4, lg: 8 }}
        >
          <Text color="gray5" fontWeight="400">
            Adoptando un animal, le das una segunda vida a aquellos que no han
            tenido tanta suerte.
          </Text>
        </Box>

        <FooterLinks />

        <Box display={{ base: "none", lg: "block" }}>
          <Flex align="center" justify="space-between">
            <Text color={"#98a2b3"} fontWeight="400">
              © 2022 Open Devs.
            </Text>
            <NextLink href="/" passHref>
              <Image src={github} alt="Github logo" width={24} height={24} />
            </NextLink>
          </Flex>
        </Box>

        <Box display={{ base: "block", lg: "none" }}>
          <NextLink href="/" passHref>
            <Image src={github} alt="Github logo" width={24} height={24} />
          </NextLink>
          <Text color={"#98a2b3"} fontWeight="400" pt={5} pb={4}>
            © 2022 Open Devs.
          </Text>
        </Box>
      </Box>
    </>
  );
}
