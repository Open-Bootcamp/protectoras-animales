import { Box, Divider, Stack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function FooterLinks() {
  return (
    <>
      <Box display={{ base: "none", md: "block" }}>
        <Stack spacing={16} direction="row">
          <Link href="/">
            <a>Overview</a>
          </Link>
          <Link href="/">
            <a>Overview</a>
          </Link>
          <Link href="/">
            <a>Overview</a>
          </Link>
          <Link href="/">
            <a>Overview</a>
          </Link>
          <Link href="/">
            <a>Overview</a>
          </Link>
          <Link href="/">
            <a>Overview</a>
          </Link>
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
            <Link href="/">
              <a>Overview</a>
            </Link>
            <Link href="/">
              <a>Overview</a>
            </Link>
            <Link href="/">
              <a>Overview</a>
            </Link>
          </Stack>
          <Stack spacing={4} direction="column">
            <Link href="/">
              <a>Overview</a>
            </Link>
            <Link href="/">
              <a>Overview</a>
            </Link>
            <Link href="/">
              <a>Overview</a>
            </Link>
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
