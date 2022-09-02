import React, { useState, useContext } from "react";
import { Heading, Text, Stack, Tabs, TabList, Tab } from "@chakra-ui/react";
import { MainContext } from '../../../context/maincontext';

const HeadBox = () => {
  const [tabIndex, setTabIndex] = React.useState(-1);   // assumes at least one of the options is active
  const { filters, handleChange } = useContext(MainContext);

  const handleTabsChange = (index) => {
    setTabIndex(index);
  }

  console.log(filters.isElder);

  return (
    <Stack mb={5} minH={"auto"} direction={{ base: "column", md: "column" }}>
      <Heading maxW={"100%"} fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}>
        <Text color={'black'} as={"span"}>
          Encuentra a tu nuevo compañero
        </Text>
      </Heading>
      <Stack direction={{ base: "column", md: "row" }} spacing={4}>
        <Tabs index={tabIndex} onChange={handleTabsChange} variant="unstyled" colorScheme={'primary'}>
          <TabList>
            <Tab name={'isElder'} m={2} rounded={'md'} border='1px solid' _selected={{ color: 'white', bg: 'primary' }}>Adopta un senior</Tab>
            <Tab name={'hasEspecialCondition'} m={2} rounded={'md'} border='1px solid' _selected={{ color: 'white', bg: 'primary' }}>Condición especial</Tab>
            <Tab name={'canTravel'} m={2} rounded={'md'} border='1px solid' _selected={{ color: 'white', bg: 'primary' }}>Puede ir de viaje</Tab>
          </TabList>
        </Tabs>
      </Stack>
    </Stack>
  );
};

export default HeadBox;