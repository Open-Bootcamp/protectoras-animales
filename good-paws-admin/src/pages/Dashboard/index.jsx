import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  Input,
  Link,
  Text,
} from '@chakra-ui/react'
import HeroWidget from '../../components/HeroWidget'
import Sidebar from '../../components/Sidebar'
import { colors } from '../../utils/colors'

const Dashboard = () => {
  return (
    <Flex>
      <Sidebar />
      <div
        style={{
          margin: '1rem 2rem',
          display: 'grid',
          gridTemplateRows: '1fr 5fr 7fr',
        }}
      >
        <Heading>Bienvenid@ Nombre de Usuario 👋</Heading>
        <Flex gap={'14px'}>
          <HeroWidget
            title="¿Quieres añadir un nuevo centro?"
            description="Puedes añadir un centro por cada ciudad en la que trabajes. Así los adptantes podrán conocer
            la ubicación y los datos de contancto con más facilidad."
            contentBtn="Button CTA"
            bgColorBtn={colors.accent}
            colorBtn={'white'}
          />
          <HeroWidget
            title="¿Añadimos el primer animal?"
            description="¡Parece que todavia no has dado de alta el primer animal!."
            contentBtn="Button CTA"
            bgColorBtn={colors.primary}
            colorBtn={'white'}
          />
          <HeroWidget
            title="¡Todavía no has recibido ninguna solicitud!"
            description="Cuando tengas mensajes pendientes, te avisaremos por aquí."
            contentBtn="Button CTA"
            bgColorBtn={colors.gray3}
            colorBtn={colors.black}
          />
        </Flex>

        <Grid
          borderRadius={'8px'}
          boxShadow={'0px 1px 4px rgba(0,0,0,0.15)'}
          gridTemplateRows={'11% 0% 15% 8% 54% 0% 13%'}
          mt={'-63px'}
        >
          <Flex
            justifyContent={'space-between'}
            p={'1rem 1rem'}
            alignItems={'center'}
          >
            <Text fontWeight={'500'} fontSize={'18px'}>
              Animales en adopción
            </Text>
            <Flex gap={'1rem'} alignItems={'center'}>
              <Link>Button CTA</Link>
              <Button
                bgColor={colors.primary}
                color={'#fff'}
                fontSize={'14px'}
                fontWeight={'500'}
              >
                <Box mr={'5px'}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 1V15M1 8H15"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Box>
                Añadir animal
              </Button>
            </Flex>
          </Flex>
          <Divider />
          <Flex justifyContent={'space-between'} p={'1rem'}>
            <Flex>
              <Button
                fontWeight={'400'}
                border={`1px solid ${colors.gray2}`}
                borderLeftRadius={'8px'}
                bg={'white'}
                fontSize={'14px'}
                color={colors.black}
                _selected={{
                  bg: colors.gray3,
                }}
              >
                Sin Adoptar
              </Button>
              <Button
                fontWeight={'400'}
                border={`1px solid ${colors.gray2}`}
                borderRightRadius={'8px'}
                fontSize={'14px'}
                color={colors.black}
                _selected={{
                  bg: colors.gray3,
                }}
                bg={'white'}
              >
                Preadopción
              </Button>
              <Button
                fontWeight={'400'}
                border={`1px solid ${colors.gray2}`}
                borderRightRadius={'8px'}
                fontSize={'14px'}
                color={colors.black}
                _selected={{
                  bg: colors.gray3,
                }}
                bg={'white'}
              >
                Adoptados
              </Button>
            </Flex>
            {/* <Box>
              <Tabs>
                <TabList>
                  <Tab
                    border={`1px solid ${colors.gray2}`}
                    borderLeftRadius={'8px'}
                    fontSize={'14px'}
                    color={colors.black}
                    _selected={{
                      bg: colors.gray3,
                    }}
                  >
                    Sin adoptar
                  </Tab>
                  <Tab
                    border={`1px solid ${colors.gray2}`}
                    fontSize={'14px'}
                    color={colors.black}
                    _selected={{
                      bg: colors.gray3,
                    }}
                  >
                    Preadopción
                  </Tab>
                  <Tab
                    border={`1px solid ${colors.gray2}`}
                    borderRightRadius={'8px'}
                    fontSize={'14px'}
                    color={colors.black}
                    _selected={{
                      bg: colors.gray3,
                    }}
                  >
                    Adoptados
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <SinAdoptar />
                  </TabPanel>
                  <TabPanel>
                    <p>two!</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box> */}

            <Flex gap={'1rem'}>
              <Input placeholder="Buscar por nombre..." />
              <Button
                bgColor={colors.white}
                color={colors.black}
                fontSize={'14px'}
                fontWeight={'500'}
                border={'1px solid black'}
              >
                Filtros
              </Button>
            </Flex>
          </Flex>
          <Divider />
          <Box>Box</Box>
          {/* FOOTER */}
          <Divider />
          <Flex
            p={'0 1rem'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Text>Pagina 1 de 1</Text>
            <Box>
              <Button
                fontSize={'14px'}
                fontWeight={'500'}
                bg={colors.white}
                border={`1px solid ${colors.gray2}`}
                mr={'1rem'}
              >
                Anterior
              </Button>
              <Button
                fontSize={'14px'}
                fontWeight={'500'}
                bg={colors.white}
                border={`1px solid ${colors.gray2}`}
              >
                Siguiente
              </Button>
            </Box>
          </Flex>
        </Grid>
      </div>
    </Flex>
  )
}

export default Dashboard
