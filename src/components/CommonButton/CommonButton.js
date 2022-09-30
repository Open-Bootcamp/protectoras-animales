import { Button, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

export default function CommonButton({ text, mt, mb, width, href, onClick }) {
  return (
    <Button
      bg="primary"
      _hover={{ bg: "primary" }}
      _active={{ bg: "primary" }}
      color="white"
      mt={mt}
      mb={mb}
      size="lg"
      width={width}
      onClick={onClick}
    >
      <NextLink href={href} passHref>
        <Link
          _hover={{ bg: "primary", textDecoration: "none" }}
          fontSize="md"
          fontWeight="500"
        >
          {text}
        </Link>
      </NextLink>
    </Button>
  );
}
