import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

export default function PersonalDataComponent() {
  return (
    <>
      <Box mt={6} mb={2}>
        <Text color={"#101828"} fontWeight="500">
          Información personal
        </Text>
        <Text fontSize="sm" color={"#667085"} fontWeight="400">
          Actualiza tu información personal, como tu nombre, email...
        </Text>
      </Box>
      <Box mb={4}>
        <Button
          bgColor="transparent"
          color="primary"
          fontWeight="500"
          width="50%"
        >
          Cancelar
        </Button>
        <Button bgColor="primary" color="white" fontWeight="500" width="50%">
          Guardar
        </Button>
      </Box>
    </>
  );
}
