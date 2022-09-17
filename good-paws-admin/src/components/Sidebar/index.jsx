import { Divider, Image, VStack } from '@chakra-ui/react'
import { colors } from '../../utils/colors.js'
import Card from './Card/index'
import Footer from './Footer/index'
import IconAdoptions from './icons/IconAdoptions.jsx'
import IconDashboard from './icons/IconDashboard'
import IconListAnimals from './icons/IconListAnimals'
import IconReseñas from './icons/IconReseñas'
import IconSettings from './icons/IconSettings'
import IconSolicitudes from './icons/IconSolicitudes'
import NavItem from './NavItem'

const Sidebar = () => {
  return (
    <VStack
      w={279}
      h={'100vh'}
      borderRight={`1px solid ${colors.gray2}`}
      p={'0 1rem'}
    >
      <Image
        w={174.1}
        h={44.94}
        m={'2rem auto 1rem auto'}
        alt={'logo-goodpaws'}
        src={'./logo.svg'}
      />
      <VStack justifyContent={'space-between'} h={'100%'} mb={'1rem'}>
        <VStack alignItems={'start'} w={'100%'}>
          <NavItem text="Dashboard" icon={<IconDashboard />} />
          <NavItem text="Listado de Animales" icon={<IconListAnimals />} />
          <NavItem text="Adopciones" icon={<IconAdoptions />} />
          <NavItem text="Solicitudes" icon={<IconSolicitudes />} />
          <NavItem text="Reseñas" icon={<IconReseñas />} />
        </VStack>

        <VStack alignItems={'start'}>
          <NavItem text="Ajustes" icon={<IconSettings />} />

          <Card />

          <Divider
            orientation="horizontal"
            borderBottomWidth={1.5}
            borderColor={colors.gray6}
            h={2}
          />

          <Footer />
        </VStack>
      </VStack>
    </VStack>
  )
}

export default Sidebar
