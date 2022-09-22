import { Box, HStack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { colors } from '../../../utils/colors';

const NavItem = ({ text, icon: Icon, pref }) => {
  return (
    <HStack w={'100%'} p={'0.5rem'} cursor="pointer" _hover={{ bg: colors.gray2, borderRadius: '7px', color: colors.primary, }}>
      <Box mr={'0.7rem'}>{Icon}</Box>
      <Link to={pref}>
        <Text fontWeight={'500'} fontFamily={'Inter'}>
          {text}
        </Text>
      </Link>
    </HStack>
  )
}

export default NavItem;
