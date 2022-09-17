import React, { useState, useContext } from "react";
import { Heading, Text, Stack, Tabs, TabList, Tab } from "@chakra-ui/react";
import { MainContext } from '../../../context/maincontext';

const HeadBox = () => {
  const { filters, handleChange } = useContext(MainContext);
  const [isElder, setIsElder] = useState(false);
  const [canTravel, setCanTravel] = useState(false);
  const [hasEspecialCondition, setHasEspecialCondition] = useState(false);
  
  const handleIsElder = (e) => {
    setIsElder(!isElder);
    e.target.value = !isElder;
    e.target.name = e.target.name;
    handleChange(e);
  }

  const handleHasEspecialCondition = (e) => {
    e.preventDefault();
    setHasEspecialCondition(!hasEspecialCondition);
    e.target.value = !hasEspecialCondition;
    e.target.name = e.target.name;
    handleChange(e);
  }

  const handleCanTravel = (e) => {
    e.preventDefault();
    setCanTravel(!canTravel);
    e.target.value = !canTravel;
    e.target.name = e.target.name;
    handleChange(e);
  }

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
            <Tab name={'isElder'} value={Boolean(filters.isElder)} onClick={handleIsElder} m={2} rounded={'md'} border='1px solid' bg={Boolean(isElder) === false ? 'none' : 'primary'} color={Boolean(isElder) === false ? 'black' : 'white'}>Adopta un senior</Tab>
            <Tab name={'hasEspecialCondition'} value={Boolean(filters.hasEspecialCondition)} onClick={handleHasEspecialCondition} m={2} rounded={'md'} border='1px solid' bg={Boolean(hasEspecialCondition) === false ? 'none' : 'primary'} color={Boolean(hasEspecialCondition) === false ? 'black' : 'white'}>Condición especial</Tab>
            <Tab name={'canTravel'} m={2} value={Boolean(filters.canTravel)} onClick={handleCanTravel} rounded={'md'} border='1px solid' bg={Boolean(canTravel) === false ? 'none' : 'primary'} color={Boolean(canTravel) === false ? 'black' : 'white'}>Puede ir de viaje</Tab>
          </TabList>
        </Tabs>
      </Stack>
    </Stack>
  );
};

export default HeadBox;