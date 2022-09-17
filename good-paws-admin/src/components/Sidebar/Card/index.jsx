import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Grid,
  Text,
} from '@chakra-ui/react'
import { colors } from '../../../utils/colors'

const Card = () => {
  return (
    <Grid w={247} h={240} borderRadius={8} bgColor={colors.primarylight}>
      <Box m={'0.7rem'} textAlign="start">
        <CircularProgress
          value={80}
          color={colors.gray1}
          size="58px"
          trackColor={colors.primary}
        >
          <CircularProgressLabel>80%</CircularProgressLabel>
        </CircularProgress>
      </Box>
      <Box>
        <Text
          fontSize={14}
          fontWeight="500"
          color="white"
          ml={'0.7rem'}
          mb={'0.2rem'}
          textAlign="start"
        >
          ¡Completa tu perfil!
        </Text>
        <Text
          fontSize={14}
          fontWeight="300"
          color="white"
          lineHeight={'20px'}
          textAlign="start"
          ml={'0.7rem'}
        >
          Cuantos más datos completes, más confianza darás a los adoptantes.
        </Text>
      </Box>

      <Text
        textAlign={'end'}
        mr={'0.7rem'}
        fontSize={14}
        fontWeight="500"
        color={'#fff'}
      >
        Ir al perfil
      </Text>
    </Grid>
  )
}

export default Card
