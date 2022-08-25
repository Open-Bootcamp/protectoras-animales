import { Flex } from "@chakra-ui/react";
import React from "react";

export default function NavbarContainer({ children, ...props }) {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      pl={{ base: 4, lg: 20 }}
      pr={{ lg: 20 }}
      mt={{ base: 4, lg: 6 }}
      mb={{ base: 4, lg: 10 }}
      {...props}
    >
      {children}
    </Flex>
  );
}
