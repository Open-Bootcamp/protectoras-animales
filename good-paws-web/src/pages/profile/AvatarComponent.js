import { Avatar, Box, Text } from "@chakra-ui/react";
import React from "react";

export default function AvatarComponent({ formik }) {
  return (
    <>
      <Box>
        <Text fontSize="sm" color={"#344054"} fontWeight="500">
          Foto de perfil
        </Text>
        <Text fontSize="sm" color={"#667085"} fontWeight="400">
          Esta fotografía se mostrará en tu perfil
        </Text>
      </Box>
      <Box align="center" mt={10} mb={10}>
        <Avatar name={formik.values.fullName} src="" size="lg" align="center" />
      </Box>
    </>
  );
}
