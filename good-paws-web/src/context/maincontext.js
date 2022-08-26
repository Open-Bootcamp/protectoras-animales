import { useState, useEffect, createContext } from 'react';

export const MainContext = createContext();

export default function MainProvider({ children }) {
    const [data, setData] = useState([]);

    useEffect(() => {
      (async () => {
            try {
                const rs = await fetch(process.env.REACT_APP_LOGIN_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: email, password: password })
                });
                const data = await rs.json();
                data.token ? setIsLogged(data) : setIsLogged({});
            } catch (e) {
                setIsLogged({});
            }
        })();
    }, []);
    
    return (
        <MainContext.Provider value={ { data } }>
          {children}
        </MainContext.Provider>
    );
}