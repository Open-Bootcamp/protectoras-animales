import { Hide, Box, Button, Checkbox, Flex, FormControl, FormLabel, HStack, Image, Input, Stack, useBreakpointValue } from "@chakra-ui/react";
import * as React from "react";
import { colors } from "../../utils/colors";
import { PasswordField } from "./PasswordField";

const HomeLogin = () => { 
  return (
    <Flex justifyContent={'center'} h={'100vh'} alignItems={'center'} w="100%">
      <Box w={['80%', '80%', '70%', '30%']} py={{ base: "0", sm: "8" }} px={{ base: "4", sm: "10" }} bg={useBreakpointValue({ base: "transparent", sm: "bg-surface" })} borderRadius={{ base: "none", sm: "xl" }}>
        <Stack spacing="6">
          <Image w={'15rem'} alt={'logo home'} src={'./logo.svg'} />
          <Stack spacing="5">
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input focusBorderColor={colors.primarylight} placeholder='hola@open-devs.com' id="email" type="email" />
            </FormControl>
            <PasswordField />
          </Stack>
          <HStack justify="space-between">
            <Checkbox colorScheme='teal' defaultChecked>Recordarme</Checkbox>
            <Button variant="link" color={colors.primarylight} size="sm">Olvidó su contraseña?</Button>
          </HStack>
          <Stack spacing="6">
            <Button color={colors.white} bg={colors.primary} variant="primary">Iniciar sesión</Button>
          </Stack>
          <Stack spacing="6">
            <Button variant="link" color={colors.primarylight}>Registrarse</Button>
          </Stack>
        </Stack>
      </Box>
      <Hide below='md'>
        <Image w={'50%'} alt={'illustration home'} src={'./illustration.svg'} />
      </Hide>
    </Flex>
  )
};

export default HomeLogin;