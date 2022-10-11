import React from 'react';
import { Button, Heading, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { colors } from '../../utils/colors';

const Notfound = () => {
  return (
    <Flex h={'100vh'} direction={'column'} justifyContent={'center'} alignItems={'center'}>
      <Text lineHeight={'24px'} size={'16px'} fontWeight={600} color={colors.primarylight}>{'404'} error</Text>
      <Heading mb={3} textAlign={'center'} maxW={'100%'} fontSize={{ base: '3xl', md: '4xl', lg: '6xl' }}>
          <Text>{'¡Página no encontrada!'}</Text>
      </Heading>
      <Text size={'20px'} p={6} fontWeight={400} lineHeight={'30px'} mb={6} color={colors.error}>{'Lo siento, no hemos encontrado lo que estabas buscando.'}</Text>
      <Link to="/">
          <Button color={colors.white} _active={{ bg: colors.primarypastel }} _hover={{ bg: colors.primarylight }} bg={colors.primary}>Volver al inicio</Button>
      </Link>
    </Flex>
  )
}

export default Notfound;