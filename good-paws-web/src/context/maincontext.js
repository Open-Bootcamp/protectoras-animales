import { useState, useEffect, createContext } from 'react';
import { usePagination } from "react-use-pagination";

export const MainContext = createContext();

export default function MainProvider({ children }) {
    const [initRegs, setInitRegs] = useState(8);
    const [data, setData] = useState([]);
    const { currentPage, totalPages, setNextPage, setPreviousPage, nextEnabled, previousEnabled, startIndex, endIndex } = usePagination({ totalItems: data.totalResults, initialPageSize: initRegs });
    
    useEffect(() => {
        (async () => {
              try {
                  const rs = await fetch(`${process.env.NEXT_PUBLIC_HOST}${process.env.NEXT_PUBLIC_ALL_PETS_URL}${initRegs}${process.env.NEXT_PUBLIC_ALL_PETS_PAGE}${currentPage + 1}`, {
                      method: 'GET',
                      headers: { 'Content-Type': 'application/json' }
                  });
                  const data = await rs.json();
                  setData(data);
              } catch (e) {
                  console.log(e);
              }
          })();
      }, [currentPage, initRegs]);

    return (
        <MainContext.Provider value={ { data, currentPage, totalPages, setNextPage, setPreviousPage, nextEnabled, previousEnabled, startIndex, endIndex, setInitRegs } }>
          {children}
        </MainContext.Provider>
    );
}