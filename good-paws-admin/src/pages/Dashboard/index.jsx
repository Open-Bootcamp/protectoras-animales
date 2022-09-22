import { Image, Tabs, Tab, TabList, Box, Button, Divider, Flex, Grid, Heading, Input, Link, Text, SimpleGrid } from '@chakra-ui/react';
import { useContext } from 'react';
import HeroWidget from '../../components/HeroWidget';
import { LoginContext } from '../../context/loginContext';
import { colors } from '../../utils/colors';

  const NoData = () => {
    return (
      <Flex p={25} justifyContent={'center'} w={'100%'} direction={'column'} alignItems={'center'}>
        <Image w={12} alt={'No results'} objectFit={'contain'} src={'./ft_icon.svg'}/>
        <Heading fontSize={20} m={2}>No hemos encontrado animales</Heading>
        <Text mb={5} fontSize={{ base: 'sm', lg: 'md' }} color={'gray5'}>
            ¡Modifica la búsqueda para poder verlos aquí!
        </Text>
        <Flex w={'35%'} justifyContent={'space-between'} alignItems={'center'}>
          <Button w={'47%'} fontSize={12} variant={'outline'} color={colors.gray4} _active={{ bg: colors.primarypastel }} _hover={{ bg: colors.primarylight, color: colors.white }} bg={'none'}>Volver al inicio</Button>
          <Button w={'47%'} fontSize={12} color={'#ffffff'} _active={{ bg: colors.primarypastel }} _hover={{ bg: colors.primarylight }} bg={colors.primary}>Añadir animal</Button>
        </Flex>
      </Flex>
    );
  }

  const Dashboard = () => {
    const { token } = useContext(LoginContext);
    
    return (
      <div style={{ margin: '1rem 2rem', display: 'grid', gridTemplateRows: '1fr 5fr 7fr', }}>
        <Heading>{`Bienvenid@ ${token.user.username.charAt(0).toUpperCase() + token.user.username.slice(1)} 👋`}</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={'14px'}>
          <HeroWidget
            title="¿Quieres añadir un nuevo centro?"
            description="Puedes añadir un centro por cada ciudad en la que trabajes. Así los adptantes podrán conocer
            la ubicación y los datos de contancto con más facilidad."
            contentBtn="Añadir centro" bgColorBtn={colors.accent} colorBtn={'white'} />
          <HeroWidget
            title="¿Añadimos el primer animal?"
            description="¡Parece que todavia no has dado de alta el primer animal!."
            contentBtn="Añadir animal" bgColorBtn={colors.primary} colorBtn={'white'} />
          <HeroWidget
            title="¡Todavía no has recibido ninguna solicitud!"
            description="Cuando tengas mensajes pendientes, te avisaremos por aquí."
            contentBtn="Solicitudes" bgColorBtn={colors.gray3} colorBtn={colors.black} />
        </SimpleGrid>
        <Grid borderRadius={'8px'} boxShadow={'0px 1px 4px rgba(0,0,0,0.15)'} gridTemplateRows={'11% 0% 15% 8% 54% 0% 13%'} mt={'-63px'}>
          <Flex justifyContent={'space-between'} p={'1rem 1rem'} alignItems={'center'}>
            <Text fontWeight={'500'} fontSize={'18px'}>Animales en adopción</Text>
            <Flex gap={'1rem'} alignItems={'center'}>
              <Link>Button CTA</Link>
              <Button bgColor={colors.primary} color={'#fff'} fontSize={'14px'} fontWeight={'500'}>
                <Box mr={'5px'}>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1V15M1 8H15" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Box>Añadir animal</Button>
            </Flex>
          </Flex>
          <Divider />
          <Flex justifyContent={'space-between'} p={'1rem'}>
            <Flex>
              <Tabs variant='unstyled'>
                <TabList>
                  <Tab border={`1px solid ${colors.gray3}`} borderRight='none' bg='none' roundedLeft={'md'} _selected={{ color: colors.black, bg: colors.gray2 }}>Sin adoptar</Tab>
                  <Tab border={`1px solid ${colors.gray3}`} bg='none' _selected={{ color: colors.black, bg: colors.gray2 }}>Preadopción</Tab>
                  <Tab border={`1px solid ${colors.gray3}`} borderLeft='none' bg='none' roundedRight={'md'} _selected={{ color: colors.black, bg: colors.gray2 }}>Adoptados</Tab>
                </TabList>
              </Tabs>
            </Flex>
            <Flex gap={'1rem'}>
              <Input placeholder="Buscar por nombre..." />
              <Button bgColor={colors.white} color={colors.black} fontSize={'14px'} fontWeight={'500'} border={'1px solid black'}>
                Filtros
              </Button>
            </Flex>
          </Flex>
          <Divider />
          <Box>
            <NoData />
          </Box>
          {/* FOOTER */}
          <Divider />
          <Flex p={'0 1rem'} justifyContent={'space-between'} alignItems={'center'}>
            <Text>Pagina 1 de 1</Text>
            <Box>
              <Button fontSize={'14px'} fontWeight={'500'} bg={colors.white} border={`1px solid ${colors.gray2}`} mr={'1rem'}>
                Anterior
              </Button>
              <Button fontSize={'14px'} fontWeight={'500'} bg={colors.white} border={`1px solid ${colors.gray2}`}>
                Siguiente
              </Button>
            </Box>
          </Flex>
        </Grid>
      </div>
    )
  }

export default Dashboard;
