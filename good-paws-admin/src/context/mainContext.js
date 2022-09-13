import { useState, createContext } from 'react';

export const MainContext = createContext();

export default function MainProvider({ children }) {
    const [isLogged, setIsLogged] = useState(false);
    const [data, setData] = useState({});

    const handleLogin = (initialObject) => {
      const { email, password } = initialObject;

      (async () => {
        try {
            const rs = await fetch(`${process.env.REACT_APP_HOST_URL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await rs.json();
            if (rs.status === 200) setIsLogged(true);
            setData(data);
        } catch (e) {
            console.log('error', e);
        }
      })();
    };

    return (
        <MainContext.Provider value={ { handleLogin, isLogged, setIsLogged, data, setData } }>
          {children}
        </MainContext.Provider>
    );
}