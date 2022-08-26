import { Flex, Tag, Box, Image, useColorModeValue } from '@chakra-ui/react';
import { colors } from '../ui/colors';

function Card({ name, sexId, extraDetails, adultSize, location }) {
  return (
    <Flex p={1} h={'auto'} w="full" alignItems="center" justifyContent="center">
      <Box cursor={'pointer'}  bg={useColorModeValue(colors.white, colors.gray3)} borderWidth="1px" rounded="lg" shadow="lg">
        <Image w={'100%'} roundedTop={'md'} src={'./dog.svg'} alt={name} />
        <Flex h={'8rem'} justifyContent={'space-evenly'} direction={'column'} px="4">
          <Box fontSize="2xl" fontWeight="semibold" as="h4" lineHeight="tight">{name}</Box>
          <Flex alignItems={'center'} w={'full'} color={colors.primarylight}>
            <Tag fontSize="1xl" color={sexId === 1 ? colors.primary : colors.accent} fontWeight={500} bg={sexId === 1 ? colors.primarypastel : colors.accentpastel} rounded={'full'} textAlign={'center'} marginRight={2}>{sexId}</Tag>
            <Tag fontSize="1xl" color={colors.gray5} fontWeight={500} bg={colors.gray1} rounded={'full'} textAlign={'center'} marginRight={2}>{adultSize} años</Tag>
          </Flex>
          <Flex letterSpacing={'0em'} lineHeight={'16px'} fontWeight={'400'} fontSize={'13px'} justifyContent={'space-between'}>
            <Box>{extraDetails}</Box>
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