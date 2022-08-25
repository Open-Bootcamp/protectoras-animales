import { Box, Divider, Link, Stack, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

export default function FooterLinks() {
  return (
    <>
      <Box display={{ base: "none", lg: "block" }}>
        <Stack spacing={16} direction="row">
          <NextLink href="/" passHref>
            <Link>
              <Text color="gray4" fontWeight="500">
                Overview
              </Text>
            </Link>
          </NextLink>
          <NextLink href="/" passHref>
            <Text color="gray4" fontWeight="500">
              Overview
            </Text>
          </NextLink>
          <NextLink href="/" passHref>
            <Text color="gray4" fontWeight="500">
              Overview
            </Text>
          </NextLink>
          <NextLink href="/" passHref>
            <Text color="gray4" fontWeight="500">
              Overview
            </Text>
          </NextLink>
          <NextLink href="/" passHref>
            <Text color="gray4" fontWeight="500">
              Overview
            </Text>
          </NextLink>
          <NextLink href="/" passHref>
            <Text color="gray4" fontWeight="500">
              Overview
            </Text>
          </NextLink>
        </Stack>
        <Divider
          orientation="horizontal"
          mt={{ base: 8, lg: 12 }}
          mb={{ base: 5, lg: 8 }}
        />
      </Box>

      <Box display={{ base: "block", lg: "none" }} mt={10} mb={10}>
        <Stack spacing={16} direction="row">
          <Stack spacing={4} direction="column">
            <NextLink href="/" passHref>
              <Text color="gray4" fontWeight="500">
                Overview
              </Text>
            </NextLink>
            <NextLink href="/" passHref>
              <Text color="gray4" fontWeight="500">
                Overview
              </Text>
            </NextLink>
            <NextLink href="/" passHref>
              <Text color="gray4" fontWeight="500">
                Overview
              </Text>
            </NextLink>
          </Stack>
          <Stack spacing={4} direction="column">
            <NextLink href="/" passHref>
              <Text color="gray4" fontWeight="500">
                Overview
              </Text>
            </NextLink>
            <NextLink href="/" passHref>
              <Text color="gray4" fontWeight="500">
                Overview
              </Text>
            </NextLink>
            <NextLink href="/" passHref>
              <Text color="gray4" fontWeight="500">
                Overview
              </Text>
            </NextLink>
          </Stack>
        </Stack>
      </Box>
      <Divider
        display={{ base: "block", lg: "none" }}
        orientation="horizontal"
        mt={{ base: 8, lg: 16 }}
        mb={{ base: 5, lg: 10 }}
      />
    </>
  );
}
