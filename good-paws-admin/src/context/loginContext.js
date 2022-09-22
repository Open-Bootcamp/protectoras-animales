import { createContext, useState } from 'react';

export const LoginContext = createContext();

export default function LoginProvider({ children }) {  
  const [token, setToken] = useState(null);

  const getToken = () => {
    const tokenString = sessionStorage.getItem('sessionData');
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const saveToken = userToken => {
    sessionStorage.setItem('sessionData', JSON.stringify(userToken));
    setToken(userToken);
  };

  const removeToken = () => {
    sessionStorage.removeItem('sessionData');
    setToken(null);
  };

  return (
      <LoginContext.Provider value={ { getToken, token, setToken, saveToken, removeToken } }>
        {children}
      </LoginContext.Provider>
  );
}