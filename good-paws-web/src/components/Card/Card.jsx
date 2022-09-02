import { Flex, Tag, Box, Image, useColorModeValue } from '@chakra-ui/react';
import NextLink from "next/link";

function Card({ id, name, sexId, extraDetails, adultSize, location }) {
  return (
    <Flex ml={2} p={1} w={60} h={350} alignItems="center" justifyContent="center">
      <NextLink href={`pet/${id}`} passHref>
        <Box cursor={'pointer'} bg={useColorModeValue('white', 'gray3')} borderWidth="1px" rounded="lg" shadow="lg">
          <Image w={'100%'} roundedTop={'md'} src={'./dog.svg'} alt={name} />
          <Flex h={'8rem'} justifyContent={'space-evenly'} direction={'column'} px="4">
            <Box fontSize="2xl" fontWeight="semibold" as="h4" lineHeight="tight">{name}</Box>
            <Flex alignItems={'center'} w={'full'} color={'primarylight'}>
              <Tag fontSize="1xl" color={sexId === 1 ? 'primary' : 'accent'} fontWeight={500} bg={sexId === 1 ? 'primarypastel' : 'accentpastel'} rounded={'full'} textAlign={'center'} marginRight={2}>{sexId === 1 ? 'Macho' : 'Hembra'}</Tag>
              <Tag fontSize="1xl" color={'gray5'} fontWeight={500} bg={'gray1'} rounded={'full'} textAlign={'center'} marginRight={2}>{adultSize}{adultSize > 1 ? ` años` : ` año`}</Tag>
            </Flex>
            <Flex letterSpacing={'0em'} lineHeight={'16px'} fontWeight={'400'} fontSize={'13px'} justifyContent={'space-between'}>
              <Box>{extraDetails}</Box>
              <Flex alignItems={'center'}>
                <Image marginRight={1} src={'./location.svg'} alt='location-icon' /> {location}
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </NextLink>
    </Flex>
  );
}

export default Card;