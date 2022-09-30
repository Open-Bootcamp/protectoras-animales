import { Box, Button, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

export default function PersonalDataComponent() {
  return (
    <>
      <Box mt={6} mb={2}>
        <Text color={"#101828"} fontWeight="500">
          Información personal
        </Text>
        <Text fontSize="sm" color={"#667085"} fontWeight="400">
          Actualiza tu información personal, como tu nombre, email...
        </Text>
      </Box>
      <Box mb={4}>
        <Button
          bgColor="transparent"
          _hover={{ bg: "transparent" }}
          _active={{ bg: "white" }}
          color="primary"
          fontWeight="500"
          width="50%"
        >
          <NextLink href="/" passHref>
            <Link>Cancelar</Link>
          </NextLink>
        </Button>
        <Button
          type="sumbit"
          bgColor="primary"
          _hover={{ bg: "primary" }}
          _active={{ bg: "primary" }}
          color="white"
          fontWeight="500"
          width="50%"
        >
          <NextLink href="/" passHref>
            <Link _hover={{ textDecoration: "none" }}>Guardar</Link>
          </NextLink>
        </Button>
      </Box>
    </>
  );
}
