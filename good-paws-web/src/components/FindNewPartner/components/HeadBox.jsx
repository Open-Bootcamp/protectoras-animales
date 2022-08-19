import React from "react";
import { Heading, Text, Stack, Tabs, TabList, Tab } from "@chakra-ui/react";

const HeadBox = () => {
  return (
    <Stack mb={5} minH={"auto"} direction={{ base: "column", md: "column" }}>
      <Heading maxW={"100%"} fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}>
        <Text color={"#000000"} as={"span"}>
          Encuentra a tu nuevo compañero
        </Text>
      </Heading>
      <Stack direction={{ base: "column", md: "row" }} spacing={4}>
        <Tabs variant="unstyled" colorScheme="#144353">
          <TabList>
            <Tab m={2} rounded={'md'} border='1px solid' _selected={{ color: '#ffffff', bg: '#144353' }}>Adopta un senior</Tab>
            <Tab m={2} rounded={'md'} border='1px solid' _selected={{ color: '#ffffff', bg: '#144353' }}>Casos especiales</Tab>
            <Tab m={2} rounded={'md'} border='1px solid' _selected={{ color: '#ffffff', bg: '#144353' }}>Casa de acogida</Tab>
          </TabList>
        </Tabs>
      </Stack>
    </Stack>
  );
};

export default HeadBox;