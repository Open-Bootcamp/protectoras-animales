import { Button, Flex, Grid, Text } from '@chakra-ui/react'

const SinAdoptar = () => {
  return (
    <Grid>
      <Grid>
        <Text>No hemos encontrado animales</Text>
        <Text>
          ¡Modifica la búsqueda o añade animales para poder verlos aquí!
        </Text>
        <Flex>
          <Button>Button CTA</Button>
          <Button>Button CTA</Button>
        </Flex>
      </Grid>
    </Grid>
  )
}

export default SinAdoptar
