import React from "react";
import { Grid } from "@chakra-ui/react";
import Card from "./Card";


const MainBox = ({ data }) => {
  return (
    <Grid h={'100vh'} p={4} w="full" gridGap="1" gridTemplateColumns="repeat( auto-fit, minmax(245px, 1fr) )">
      {data.map((p) => (
        <Card key={p.id} {...p} />
      ))}
    </Grid>
  );
};

export default MainBox;
