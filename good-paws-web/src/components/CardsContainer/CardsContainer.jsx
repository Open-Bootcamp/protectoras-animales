import React, { useContext } from "react";
import NextLink from 'next/link';
import { Button, Grid, Flex, Heading } from "@chakra-ui/react";
import Card from "../Card/Card";
import MoonLoader from 'react-spinners/MoonLoader';
import { MainContext } from "../../context/maincontext";

const NoData = () => {
  return (
    <Flex justifyContent={'center'} w={'100%'} direction={'column'} alignItems={'center'}>
      <Heading mb={5}>No existe data para mostrar</Heading>
      <NextLink href="/">
          <Button color={'white'} _active={{ bg: 'primarypastel' }} _hover={{ bg: 'primarylight' }} bg={'primary'}>Volver al inicio</Button>
      </NextLink>
    </Flex>
  );
}

const CardsContainer = () => {
  const { data, isLoading, setFilters } = useContext(MainContext);
  
  return (
    <Flex p={5} mb={10} alignItems={'center'} justifyContent={'center'} h={'full'}>
      { isLoading ? <MoonLoader size={100} color="#578887" /> :
        <Flex h={'full'} w={'100%'} flexWrap={'wrap'} flexDirection={'row'}>
          {data.totalResults > 0 ? data.results.map((p) => ( <Card key={p.id} {...p} /> )) : <NoData />}
        </Flex>
      }
    </Flex>
  );
};

export default CardsContainer;