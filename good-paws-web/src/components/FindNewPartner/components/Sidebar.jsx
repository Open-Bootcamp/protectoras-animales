import React, { useContext } from 'react';
import { Select, Hide, Text, CheckboxGroup, Checkbox, IconButton, Box, CloseButton, Flex, Image, useColorModeValue, Drawer, DrawerContent, FormControl, useDisclosure, FormLabel, InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import SliderInp from './Slider';
import { MainContext } from '../../../context/maincontext';
import { useState } from 'react';

export default function Sidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box mr={3} w={{ sm: '100%', md: '50%', lg: '25%' }} h={{ sm: '9vh', md: '100vh', lg: "100vh"}}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer autoFocus={false} isOpen={isOpen} placement="right" onClose={onClose} returnFocusOnClose={false} onOverlayClick={onClose} size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="6">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  const { filters, handleChange, centers, races, userLocation } = useContext(MainContext);
  const [isShelter, setIsShelter] = useState(true);
  const [isUrgent, setIsUrgent] = useState(true);

  const handleCheckShelter = (e) => {
    setIsShelter(!isShelter);
    e.target.value = isShelter;
    e.target.name = e.target.name;
    handleChange(e);
  }

  const handleCheckUrgent = (e) => {
    setIsUrgent(!isUrgent);
    e.target.value = isUrgent;
    e.target.name = e.target.name;
    handleChange(e);
  }

  return (
    <Box mt={{ md: 0, lg: 6}} p={{ sm: 10, lg: 0}} w={'100%'} h="full" {...rest}>
        <Hide above='md'>
            <Flex h="20" alignItems="left" justifyContent="space-between">
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
        </Hide>
        <Text fontSize={20}>Filtros de búsqueda</Text>
        <Flex h={'70vh'} direction={'column'} justifyContent={'space-evenly'}>
            <FormControl>
                <FormLabel>Buscar por nombre</FormLabel>
                <InputGroup>
                    <InputLeftElement children={<SearchIcon />} />
                    <Input focusBorderColor={'primarylight'} type="text" onChange={handleChange} value={filters.name} name="name" placeholder="Texto de búsqueda @hola" />
                </InputGroup>
            </FormControl>
            <FormControl>
                <FormLabel>Buscar por protectora</FormLabel>
                <InputGroup>
                    <Select focusBorderColor={'primarylight'} value={filters.centerId} onChange={handleChange} name="centerId" placeholder='Selecciona una opción'>
                      {centers.length > 0 && centers.map((center) => { 
                        return (
                          <option key={center.id} value={center.id}>{center.name}</option>
                        );
                      })}
                    </Select>
                </InputGroup>
            </FormControl>
            <FormControl w={'100%'} >
                <FormLabel>Radio de búsqueda</FormLabel>
                <SliderInp />
            </FormControl>
            <FormControl>
                <FormLabel>Especie</FormLabel>
                <Select focusBorderColor={'primarylight'} value={filters.raceId} onChange={handleChange} name="raceId" placeholder='Selecciona una opción'>
                  {races.length > 0 && races.map((race) => { 
                    return (
                      <option key={race.id} value={race.id}>{race.name}</option>
                    );
                  })}
                </Select>
            </FormControl>
            <FormControl>
                <FormLabel>Edad</FormLabel>
                <Select focusBorderColor={'primarylight'} value={filters.adultSize} onChange={handleChange} name="adultSize" placeholder='Selecciona una opción'>
                  <option value="1">0 a 1 año</option>
                  <option value="2">1 a 2 años</option>
                  <option value="3">2 a 3 años</option>
                  <option value="4">3 años o más</option>
                </Select>
            </FormControl>
            <FormControl display={'flex'} flexDirection={'column'}>
              <Checkbox colorScheme='teal' value={filters.isShelter} onChange={handleCheckShelter} mt={3} name="isShelter">Casa de acogida</Checkbox>
              <Checkbox colorScheme='teal' value={filters.isUrgent} onChange={handleCheckUrgent} mt={3} name="isUrgent">Caso urgente</Checkbox>
            </FormControl>
        </Flex>
    </Box>
  );
};

const MenuIcon = () => <Image width={'25px'} src="./button_icon.svg" alt="button icon" />;

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex ml={{ base: 0, md: 60 }} px={{ base: 4, md: 24 }} height="20" alignItems="center" bg={useColorModeValue('white', 'gray.900')} justifyContent="flex-end" {...rest}>
      <IconButton colorScheme={'gray3'} w={'17%'} h={'3rem'} variant="outline" onClick={onOpen} aria-label="open menu" icon={<MenuIcon />} />
    </Flex>
  );
};