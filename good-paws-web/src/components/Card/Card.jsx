import { Flex, Tag, Box, Image, useColorModeValue } from '@chakra-ui/react';
import { colors } from '../ui/colors';

function Card({ imageSrc, imageAlt, name, category, description, location }) {
  return (
    <Flex p={1} h={'auto'} w="full" alignItems="center" justifyContent="center">
      <Box cursor={'pointer'}  bg={useColorModeValue(colors.white, colors.gray3)} borderWidth="1px" rounded="lg" shadow="lg">
        <Image w={'100%'} roundedTop={'md'} src={imageSrc} alt={imageAlt} />
        <Flex h={'8rem'} justifyContent={'space-evenly'} direction={'column'} px="4">
          <Box fontSize="2xl" fontWeight="semibold" as="h4" lineHeight="tight">{name}</Box>
          <Flex alignItems={'center'} w={'full'} color={colors.primarylight}>
            <Tag fontSize="1xl" color={category.gender === 'Macho' ? colors.primary : colors.accent} fontWeight={500} bg={category.gender === 'Macho' ? colors.primarypastel : colors.accentpastel} rounded={'full'} textAlign={'center'} marginRight={2}>{category.gender}</Tag>
            <Tag fontSize="1xl" color={colors.gray5} fontWeight={500} bg={colors.gray1} rounded={'full'} textAlign={'center'} marginRight={2}>{category.age} años</Tag>
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