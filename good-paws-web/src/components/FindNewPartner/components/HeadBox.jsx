import React from "react";
import { Heading, Text, Stack, Tabs, TabList, Tab } from "@chakra-ui/react";
import { colors } from "../../ui/colors";

const HeadBox = () => {
  return (
    <Stack mb={5} minH={"auto"} direction={{ base: "column", md: "column" }}>
      <Heading maxW={"100%"} fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}>
        <Text color={colors.black} as={"span"}>
          Encuentra a tu nuevo compañero
        </Text>
      </Heading>
      <Stack direction={{ base: "column", md: "row" }} spacing={4}>
        <Tabs variant="unstyled" colorScheme={colors.primary}>
          <TabList>
            <Tab m={2} rounded={'md'} border='1px solid' _selected={{ color: colors.white, bg: colors.primary }}>Adopta un senior</Tab>
            <Tab m={2} rounded={'md'} border='1px solid' _selected={{ color: colors.white, bg: colors.primary }}>Casos especiales</Tab>
            <Tab m={2} rounded={'md'} border='1px solid' _selected={{ color: colors.white, bg: colors.primary }}>Casa de acogida</Tab>
          </TabList>
        </Tabs>
      </Stack>
    </Stack>
  );
};

export default HeadBox;