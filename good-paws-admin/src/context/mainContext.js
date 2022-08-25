import { useState, createContext } from 'react';

export const MainContext = createContext();

export default function MainProvider({ children }) {
    const [isLogged, setIsLogged] = useState(false);
    const [data, setData] = useState({});

    const handleLogin = (initialObject) => {
      const { email, password, rememberMe } = initialObject;

      (async () => {
        try {
            const rs = await fetch('http://localhost:4005/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, rememberMe })
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