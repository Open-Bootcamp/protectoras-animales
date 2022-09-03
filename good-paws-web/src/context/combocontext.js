import { useState, useEffect, createContext } from 'react';

export const ComboContext = createContext();

export default function ComboProvider({ children }) {
    const [centers, setCenters] = useState([]);
    const [races, setRaces] = useState([]);

    //Centers combobox
    useEffect(() => {
        (async () => {
            try {
                const rs = await fetch(`${process.env.NEXT_PUBLIC_HOST}centers`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await rs.json();
                setCenters(data.results);
            } catch (e) {
                console.log(e);
            }
        })();
    }, []);

    //Centers combobox
    useEffect(() => {
        (async () => {
            try {
                const rs = await fetch(`${process.env.NEXT_PUBLIC_HOST}races`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await rs.json();
                setRaces(data.results);
            } catch (e) {
                console.log(e);
            }
        })();
    }, []);

    return ( 
        <ComboContext.Provider value = {{ centers, races }}>
            {children}
        </ComboContext.Provider>
    );
}