import React from 'react';
import useSession from '../../hooks/useSession';
import LoginForm from './LoginForm';

const HomeLogin = () => {
  const { token, setToken } = useSession();

  if(!token) {
    return <LoginForm setToken={setToken} />
  }
};

export default HomeLogin;