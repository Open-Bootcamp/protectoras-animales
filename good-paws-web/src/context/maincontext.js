import { useState, useEffect, createContext } from 'react';
import { usePagination } from "react-use-pagination";

export const MainContext = createContext();

export default function MainProvider({ children }) {
    const [data, setData] = useState([]);
    const [initialRegs, setInitialRegs] = useState(8);
    const { currentPage, totalPages, setNextPage, setPreviousPage, nextEnabled, previousEnabled, startIndex, endIndex } = usePagination({ totalItems: data.length, initialPageSize: initialRegs });

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
        <MainContext.Provider value={ { data, currentPage, totalPages, setNextPage, setPreviousPage, nextEnabled, previousEnabled, startIndex, endIndex, initialRegs, setInitialRegs } }>
          {children}
        </MainContext.Provider>
    );
}