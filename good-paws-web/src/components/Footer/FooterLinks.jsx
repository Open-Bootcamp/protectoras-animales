import { Box, Divider, Link, Stack } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

export default function FooterLinks() {
  return (
    <>
      <Box display={{ base: "none", md: "block" }}>
        <Stack spacing={16} direction="row">
          <NextLink href="/" passHref>
            <Link>Overview</Link>
          </NextLink>
          <NextLink href="/" passHref>
            <Link>Overview</Link>
          </NextLink>
          <NextLink href="/" passHref>
            <Link>Overview</Link>
          </NextLink>
          <NextLink href="/" passHref>
            <Link>Overview</Link>
          </NextLink>
          <NextLink href="/" passHref>
            <Link>Overview</Link>
          </NextLink>
          <NextLink href="/" passHref>
            <Link>Overview</Link>
          </NextLink>
        </Stack>
        <Divider
          orientation="horizontal"
          mt={{ base: 8, md: 16 }}
          mb={{ base: 5, md: 10 }}
        />
      </Box>

      <Box display={{ base: "block", md: "none" }} mt={10} mb={10}>
        <Stack spacing={16} direction="row">
          <Stack spacing={4} direction="column">
            <NextLink href="/" passHref>
              <Link>Overview</Link>
            </NextLink>
            <NextLink href="/" passHref>
              <Link>Overview</Link>
            </NextLink>
            <NextLink href="/" passHref>
              <Link>Overview</Link>
            </NextLink>
          </Stack>
          <Stack spacing={4} direction="column">
            <NextLink href="/" passHref>
              <Link>Overview</Link>
            </NextLink>
            <NextLink href="/" passHref>
              <Link>Overview</Link>
            </NextLink>
            <NextLink href="/" passHref>
              <Link>Overview</Link>
            </NextLink>
          </Stack>
        </Stack>
      </Box>
      <Divider
        display={{ base: "block", md: "none" }}
        orientation="horizontal"
        mt={{ base: 8, md: 16 }}
        mb={{ base: 5, md: 10 }}
      />
    </>
  );
}
