import { useState, useEffect, createContext } from 'react';

export const MainContext = createContext();

export default function MainProvider({ children }) {
    const [data, setData] = useState([]);

    useEffect(() => {
      (async () => {
            try {
                const rs = await fetch(process.env.NEXT_PUBLIC_PETS_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' }
                });
                const data = await rs.json();
                setData(data);
            } catch (e) {
                console.log(e);
            }
        })();
    }, []);
    
    return (
        <MainContext.Provider value={ { data } }>
          {children}
        </MainContext.Provider>
    );
}