import React, { useEffect, useContext, useState } from 'react';
import { Hide, Text, CheckboxGroup, Checkbox, IconButton, Box, CloseButton, Flex, Image, useColorModeValue, Drawer, DrawerContent, FormControl, useDisclosure, FormLabel, InputGroup, InputLeftElement, Input, filter } from '@chakra-ui/react';
import { BsPerson } from 'react-icons/bs';
import { SearchIcon } from '@chakra-ui/icons';
import { Select } from "chakra-react-select";
import SliderInp from './Slider';
import { MainContext } from '../../../context/maincontext';

const groupedOptions = [
    {
      label: "",
      options: [
        { value: "blue", label: "Blue", color: "#0052CC" },
        { value: "purple", label: "Purple", color: "#5243AA" },
        { value: "red", label: "Red", color: "#FF5630" },
        { value: "orange", label: "Orange", color: "#FF8B00" },
        { value: "yellow", label: "Yellow", color: "#FFC400" },
        { value: "green", label: "Green", color: "#36B37E" }
      ]
    }
  ];

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
  const { filters, handleChange } = useContext(MainContext);

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
                    <Input type="text" onChange={handleChange} value={filters.name} name="name" placeholder="Texto de búsqueda @hola" />
                </InputGroup>
            </FormControl>
            <FormControl>
                <FormLabel>Buscar por protectora</FormLabel>
                <InputGroup>
                    <InputLeftElement children={<BsPerson />} />
                    <Input type="text" name="shelter" placeholder="Escribe para buscar" />
                </InputGroup>
            </FormControl>
            <FormControl w={'100%'} >
                <FormLabel>Radio de búsqueda</FormLabel>
                <SliderInp />
            </FormControl>
            <FormControl>
                <FormLabel>Especie</FormLabel>
                <Select useBasicStyles name="species" options={groupedOptions} placeholder="Escribe para buscar" closeMenuOnSelect={true}/>
            </FormControl>
            <FormControl>
                <FormLabel>Edad</FormLabel>
                <Select useBasicStyles name="ages" options={groupedOptions} selectedOptionStyle="check" placeholder="Selecciona una opción" closeMenuOnSelect={true}/>
            </FormControl>
            <FormControl display={'flex'} flexDirection={'column'}>
                <CheckboxGroup variantColor={'primarylight'}>
                    <Checkbox mt={3} value="shelter">Casa de acogida</Checkbox>
                    <Checkbox mt={3} value="urgent">Caso urgente</Checkbox>
                </CheckboxGroup>
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