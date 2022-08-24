import { useState, createContext } from 'react';

export const MainContext = createContext();

export default function MainProvider({ children }) {
    const [isLogged, setIsLogged] = useState(false);
    const [data, setData] = useState({});

    return (
        <MainContext.Provider value={ { isLogged, setIsLogged, data, setData } }>
          {children}
        </MainContext.Provider>
    );
}