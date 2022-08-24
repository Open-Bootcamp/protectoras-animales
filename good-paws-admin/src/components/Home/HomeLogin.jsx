import React, { useContext } from 'react';
import { colors } from '../../utils/colors';
import { MainContext } from '../../context/mainContext';
import FormLogin from './FormLogin';
import { Button, Flex } from "@chakra-ui/react";


const HomeLogin = () => {
  const { isLogged, setIsLogged } = useContext(MainContext);
  
  const handleLogout = (e) => {
    e.preventDefault();
    setIsLogged(false);
  }

  return (
    !isLogged ? <FormLogin /> : 
    <Flex>
      <Button onClick={handleLogout} type='cancel' color={colors.white} bg={colors.primary} variant="primary">Cerrar sesión</Button>
    </Flex>
  )
};

export default HomeLogin;