import React, { useContext } from 'react';
import { Box, HStack, Image, Text } from '@chakra-ui/react';
import { colors } from '../../../utils/colors';
import IconExit from '../icons/IconExit';
import { IconButton } from '@chakra-ui/react';
import { LoginContext } from '../../../context/loginContext';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const { token, removeToken } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleLogout = e => {
    const timestamp = Date.now();
    e.preventDefault();
    if (timestamp > new Date(token.expires_at).setHours(0, 0, 0, 0)) {
      removeToken();
    } else {
      (async () => {
        try {
            const rs = await fetch(`${process.env.REACT_APP_HOST_URL}/logout`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json',
                         'Authorization': `bearer ${token.token}`
              }
            });
            if (rs.status === 200 || (timestamp > new Date(token.expires_at).setHours(0, 0, 0, 0))) {
              removeToken();
            }
        } catch (e) {
            console.log('error', e);
        }
      })();
    }
  };

  if (token === null) {
    navigate('/');
    return;
  }

  return (
    <HStack w={'100%'} pb={'1rem'} pt={'0.7rem'}>
      <Image src="./assets/images/Avatar.png" />
      <Box w={'70%'} h={'full'} alignItems={'start'}>
        <Text fontSize={13} color={colors.gray5} fontWeight={500}>{token.user.fullname}</Text>
        <Text fontSize={13} color={colors.gray4} fontWeight={400}>{token.user.email}</Text>
      </Box>
      <IconButton variant={'unstyled'} onClick={handleLogout} aria-label='Logout icon' icon={<IconExit />} />
    </HStack>
  )
}

export default Footer
