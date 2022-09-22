import { Divider, Image, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { colors } from '../../utils/colors.js';
import Card from './Card/index';
import Footer from './Footer/index';
import IconAdoptions from './icons/IconAdoptions.jsx';
import IconDashboard from './icons/IconDashboard';
import IconListAnimals from './icons/IconListAnimals';
import IconReseñas from './icons/IconReseñas';
import IconSettings from './icons/IconSettings';
import IconSolicitudes from './icons/IconSolicitudes';
import NavItem from './NavItem';

const Sidebar = () => {
  return (
    <VStack w={279} h={'100vh'} borderRight={`1px solid ${colors.gray2}`} p={'0 1rem'}>
      <Link to={'/dashboard'}>
        <Image w={174.1} h={44.94} m={'2rem auto 1rem auto'} alt={'logo-goodpaws'} src={'./logo.svg'} />
      </Link>
      <VStack justifyContent={'space-between'} h={'100%'} mb={'1rem'}>
        <VStack alignItems={'start'} w={'100%'}>
          <NavItem text="Dashboard" icon={<IconDashboard />} pref={'/dashboard'} />
          <NavItem text="Listado de Animales" icon={<IconListAnimals />} pref={`/dashboard/petlist`} />
          <NavItem text="Adopciones" icon={<IconAdoptions />} pref={`/dashboard/adoptions`} />
          <NavItem text="Solicitudes" icon={<IconSolicitudes />} pref={`/dashboard/requests`} />
          <NavItem text="Reseñas" icon={<IconReseñas />} pref={`/dashboard/reviews`} />
        </VStack>
        <VStack alignItems={'start'}>
          <NavItem text="Ajustes" icon={<IconSettings />} pref={`/dashboard/settings`} />
          <Card />
          <Divider orientation="horizontal" borderBottomWidth={1.5} borderColor={colors.gray6} h={2} />
          <Footer />
        </VStack>
      </VStack>
    </VStack>
  );
}

export default Sidebar;
