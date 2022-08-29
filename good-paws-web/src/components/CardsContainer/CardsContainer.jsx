import React, { useContext } from "react";
import NextLink from 'next/link';
import { Button, Grid, Flex, Heading } from "@chakra-ui/react";
import Card from "../Card/Card";
import MoonLoader from 'react-spinners/MoonLoader';
import { MainContext } from "../../context/maincontext";


const CardsContainer = () => {
  const { data, isLoading } = useContext(MainContext);
  
  return (
    <Flex mb={10} alignItems={'center'} justifyContent={'center'} h={'full'}>
      { isLoading ? <MoonLoader size={100} color="#578887" /> :
        data.length === 0 && isLoading ? 
        <Flex direction={'column'} alignItems={'center'}>
          <Heading mb={5}>No existe data para mostrar</Heading>
          <NextLink href="/">
              <Button color={'white'} _active={{ bg: 'primarypastel' }} _hover={{ bg: 'primarylight' }} bg={'primary'}>Volver al inicio</Button>
          </NextLink>
        </Flex> :
          <Grid h={'full'} w="full" gridGap="1" gridTemplateColumns="repeat( auto-fit, minmax(245px, 1fr) )">
            {data.results.map((p) => ( <Card key={p.id} {...p} /> ))}
          </Grid>
      }
    </Flex>
  );
};

export default CardsContainer;