import React from "react";
import { Grid, Flex } from "@chakra-ui/react";
import Card from "../Card/Card";


const CardsContainer = ({ data }) => {
  return (
    <Flex mb={10} alignItems={'center'} justifyContent={'center'} h={'full'}>
      <Grid h={'full'} w="full" gridGap="1" gridTemplateColumns="repeat( auto-fit, minmax(245px, 1fr) )">
        {data.map((p) => (
          <Card key={p.id} {...p} />
        ))}
      </Grid>
    </Flex>
  );
};

export default CardsContainer;