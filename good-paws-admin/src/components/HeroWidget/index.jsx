import { Box, Button, Text } from '@chakra-ui/react';

const HeroWidget = ({ title, description, contentBtn, bgColorBtn, colorBtn, }) => {
  return (
    <Box h={'210px'} padding={'12px'} borderRadius={'8px'} boxShadow={'0px 1px 4px rgba(0,0,0,0.15)'} flex={1} display={'grid'} alignContent={'space-between'}>
      <Box>
        <Text fontWeight={'500'} mb={'10px'}>
          {title}
        </Text>
        <Text fontSize={'14px'} lineHeight={'24px'}>
          {description}
        </Text>
      </Box>
      <Box display={'flex'} justifyContent={'end'}>
        <Button backgroundColor={bgColorBtn} color={colorBtn} fontSize={'14px'} fontWeight={'500'}>{contentBtn}</Button>
      </Box>
    </Box>
  )
}

export default HeroWidget;
