import { useState, useEffect, createContext } from 'react';
import { usePagination } from "react-use-pagination";

export const MainContext = createContext();

export default function MainProvider({ children }) {
    const [initRegs, setInitRegs] = useState(8);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { currentPage, totalPages, setNextPage, setPreviousPage, nextEnabled, previousEnabled, startIndex, endIndex } = usePagination({ totalItems: data.totalResults, initialPageSize: initRegs });
    const initState = { name: "" };
    const [filters, setFilters] = useState(initState);
  
    const handleChange = (e) => {
      setFilters({
        ...filters,
        [e.target.name]: e.target.value
      });
    };
    
    useEffect(() => {
        setIsLoading(true);
        (async () => {
              try {
                const rs = await fetch(`${process.env.NEXT_PUBLIC_HOST}${process.env.NEXT_PUBLIC_ALL_PETS_URL}${initRegs}${process.env.NEXT_PUBLIC_ALL_PETS_PAGE}${currentPage + 1 | 1}&name=${filters.name}`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                });
                const data = await rs.json();
                setData(data);
                setIsLoading(false);
              } catch (e) {
                console.log(e);
              }
          })();
      }, [currentPage, initRegs, filters]);

    return (
        <MainContext.Provider value={ { data, setData, currentPage, totalPages, setNextPage, setPreviousPage, nextEnabled, previousEnabled, startIndex, endIndex, setInitRegs, isLoading, setIsLoading, filters, setFilters, handleChange } }>
          {children}
        </MainContext.Provider>
    );
}