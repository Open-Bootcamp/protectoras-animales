import React, { useState, useContext } from "react";
import { Heading, Text, Stack, Tabs, TabList, Tab } from "@chakra-ui/react";
import { MainContext } from '../../../context/maincontext';

const HeadBox = () => {
  const [tabIndex, setTabIndex] = React.useState(-1);   // assumes at least one of the options is active
  const { filters, handleChange } = useContext(MainContext);
  const [isElder, setIsElder] = useState(false);
  const [canTravel, setCanTravel] = useState(false);
  const [hasEspecialCondition, setHasEspecialCondition] = useState(false);
  
  const handleIsElder = (e) => {
    setIsElder(!isElder);
    e.target.value = isElder;
    e.target.name = e.target.name;
    handleChange(e);
  }

  const handleHasEspecialCondition = (e) => {
    setHasEspecialCondition(!hasEspecialCondition);
    e.target.value = hasEspecialCondition;
    e.target.name = e.target.name;
    handleChange(e);
  }

  const handleCanTravel = (e) => {
    setCanTravel(!canTravel);
    e.target.value = canTravel;
    e.target.name = e.target.name;
    handleChange(e);
  }

  const handleTabsChange = (index) => {
    setTabIndex(index);
  }


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
            <Tab name={'isElder'} value={filters.isElder} onClick={handleIsElder} m={2} rounded={'md'} border='1px solid' bg={isElder ? 'none' : 'primary'} color={isElder ? 'black' : 'white'}>Adopta un senior</Tab>
            <Tab name={'hasEspecialCondition'} value={filters.hasEspecialCondition} onClick={handleHasEspecialCondition} m={2} rounded={'md'} border='1px solid' bg={hasEspecialCondition ? 'none' : 'primary'} color={hasEspecialCondition ? 'black' : 'white'}>Condición especial</Tab>
            <Tab name={'canTravel'} m={2} value={filters.canTravel} onClick={handleCanTravel} rounded={'md'} border='1px solid' bg={canTravel ? 'none' : 'primary'} color={canTravel ? 'black' : 'white'}>Puede ir de viaje</Tab>
          </TabList>
        </Tabs>
      </Stack>
    </Stack>
  );
};

export default HeadBox;