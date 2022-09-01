import React from "react";
import { Heading, Text, Stack, Tabs, TabList, Tab } from "@chakra-ui/react";

const HeadBox = () => {
  return (
    <Stack mb={5} minH={"auto"} direction={{ base: "column", md: "column" }}>
      <Heading maxW={"100%"} fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}>
        <Text color={'black'} as={"span"}>
          Encuentra a tu nuevo compañero
        </Text>
      </Heading>
      <Stack direction={{ base: "column", md: "row" }} spacing={4}>
        <Tabs variant="unstyled" colorScheme={'primary'}>
          <TabList>
            <Tab m={2} rounded={'md'} border='1px solid' _selected={{ color: 'white', bg: 'primary' }}>Adopta un senior</Tab>
            <Tab m={2} rounded={'md'} border='1px solid' _selected={{ color: 'white', bg: 'primary' }}>Condición especial</Tab>
            <Tab m={2} rounded={'md'} border='1px solid' _selected={{ color: 'white', bg: 'primary' }}>Puede ir de viaje</Tab>
          </TabList>
        </Tabs>
      </Stack>
    </Stack>
  );
};

export default HeadBox;