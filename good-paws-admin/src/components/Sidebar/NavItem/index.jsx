import { Box, HStack, Text } from '@chakra-ui/react'
import { colors } from '../../../utils/colors'

const NavItem = ({ text, icon: Icon }) => {
  return (
    <HStack
      w={'100%'}
      p={'0.5rem'}
      cursor="pointer"
      _hover={{
        bg: colors.gray2,
        borderRadius: '7px',
        color: colors.primary,
      }}
    >
      <Box mr={'0.7rem'}>{Icon}</Box>
      <Text fontWeight={'500'} fontFamily={'Inter'}>
        {text}
      </Text>
    </HStack>
  )
}

export default NavItem
