import { Button, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Hide } from '@chakra-ui/react';

export default function Header() {
  return (
    <Stack mt={5} minH={'auto'} direction={{ base: 'column', md: 'row' }}>
      <Flex flex={1} p={['20px 0 0 0', 6]} align={['flex-start', 'center']} justify={['center', 'flex-end']}>
        <Stack spacing={[6, 10]} w={'full'} maxW={['100%', '90%']}>
          <Heading maxW={'100%'} fontSize={{ base: '3xl', md: '4xl', lg: '4xl' }}>
            <Text color={'#000000'} as={'span'}>Unimos protectoras y adoptantes</Text>
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'#3c3f41'}>
            Adoptando un animal, le das una segunda vida a aquellos que no 
            han tenido tanta suerte.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button w={['max-content', '65%']} rounded={'md'} bg={'#cd7474'} color={'white'} _hover={{ bg: '#578887', }}>Encuentra a tu mejor amigo</Button>
          </Stack>
        </Stack>
      </Flex>
      <Hide below='md'>
        <Image zIndex={-1} pos={'absolute'} w={{ md: '150px', lg: '220px' }} h={{ md: '150px', lg: '220px' }} top={{ md: '210px', lg: '225px'}} left={{ md: 'calc(70% - 300px)', lg: 'calc(70% - 520px)' }} alt={'Arrow'} objectFit={'contain'} src={'./arrow.svg'}/>
        <Flex flex={1}>
          <Image alt={'Login Image'} objectFit={'contain'} src={'./illustration.svg'}/>
        </Flex>
      </Hide>
    </Stack>
  );
}