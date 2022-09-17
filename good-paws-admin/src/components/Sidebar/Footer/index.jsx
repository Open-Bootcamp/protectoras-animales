import { HStack, Image, Text, VStack } from '@chakra-ui/react'
import { colors } from '../../../utils/colors'
import IconExit from '../icons/IconExit'

const Footer = () => {
  return (
    <HStack
      w={'100%'}
      justifyContent={'space-between'}
      pb={'1rem'}
      pt={'0.7rem'}
    >
      <Image src="./assets/images/Avatar.png" />

      <VStack alignItems={'start'}>
        <Text
          fontSize={14}
          color={colors.gray5}
          fontWeight={500}
          lineHeight={0}
        >
          Marta García
        </Text>
        <Text fontSize={14} color={colors.gray4} fontWeight={400}>
          hola@open-devs.com
        </Text>
      </VStack>

      <IconExit />
    </HStack>
  )
}

export default Footer
