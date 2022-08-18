import { Flex, Tag, Box, Image, useColorModeValue } from '@chakra-ui/react';

function Card({ imageSrc, imageAlt, name, category, description, location }) {
  return (
    <Flex cursor={'pointer'} p={1} w="full" alignItems="center" justifyContent="center">
      <Box bg={useColorModeValue('white', 'gray.800')} borderWidth="1px" rounded="lg" shadow="lg">
        <Image w={'100%'} roundedTop={'md'} objectFit="cover" src={imageSrc} alt={imageAlt} />
        <Flex h={'8rem'} justifyContent={'space-evenly'} direction={'column'} px="4">
          <Box fontSize="2xl" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>{name}</Box>
          <Flex alignItems={'center'} w={'full'} color="teal.600">
            <Tag fontSize="1xl" color={'#144353'} fontWeight={500} bg={'rgba(87, 136, 135, 0.15)'} rounded={'full'} textAlign={'center'} marginRight={2}>{category.sex}</Tag>
            <Tag fontSize="1xl" color={'#3C3F41'} fontWeight={500} bg={'rgba(243, 243, 243, 1)'} rounded={'full'} textAlign={'center'} marginRight={2}>{category.age} años</Tag>
          </Flex>
          <Flex letterSpacing={'0em'} lineHeight={'16px'} fontWeight={'400'} fontSize={'13px'} justifyContent={'space-between'}>
            <Box>{description}</Box>
            <Flex alignItems={'center'}>
              <Image marginRight={1} src={'./location.svg'} alt='location-icon' /> {location}
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Card;