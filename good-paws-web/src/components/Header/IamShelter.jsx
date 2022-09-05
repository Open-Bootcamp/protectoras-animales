import { Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import NextLink from "next/link";
import Shelter from '../Shelters'

export default function IamShelter() {
  return (
    <>
      <Stack p={5} direction={{ base: 'column', md: 'row' }}>
        <Flex w={'100%'} p={['20px 0 0 0', 6]} alignItems={['center']} justifyContent={'center'}>
          <Stack textAlign={'center'} spacing={[6, 10]} w={'full'} maxW={['100%', '90%']}>
            <Heading maxW={'100%'} fontSize={{ base: '3xl', md: '4xl', lg: '4xl' }}>
              <Text color={'black'} as={'span'}>Te ayudamos a gestionar tu protectora.</Text>
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray5'}>
                De forma ágil, sencilla y diseñada para ti. 100% gratuito.
            </Text>
            <Flex justifyContent={'center'} alignItems={'center'} direction={{ base: 'column', md: 'row' }} spacing={4}>
              <NextLink href='/shelters' passHref>
                <Button w={'max-content'} rounded={'md'} bg={'primary'} color={'white'} _hover={{ bg: 'primarylight', }}>Empieza ahora</Button>
              </NextLink>
            </Flex>
          </Stack>
        </Flex>
      </Stack>
      <Shelter content={'Ya confían en nosotros....'} />
    </>
  );
}