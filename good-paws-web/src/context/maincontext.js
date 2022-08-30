import {
    useState,
    useEffect,
    createContext
} from 'react';
import {
    usePagination
} from "react-use-pagination";

export const MainContext = createContext();

export default function MainProvider({
    children
}) {
    const [initRegs, setInitRegs] = useState(8);
    const [data, setData] = useState([]);
    const [centers, setCenters] = useState([]);
    const [races, setRaces] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { currentPage, totalPages, setNextPage, setPreviousPage, nextEnabled, previousEnabled, startIndex, endIndex } = usePagination({ totalItems: data.totalResults, initialPageSize: initRegs });
    const initState = { name: "", centerId: "", raceId: "", adultSize: "" };
    const [filters, setFilters] = useState(initState);

    const handleChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        });
    };

    console.log(filters);

    useEffect(() => {
        setIsLoading(true);
        (async () => {
            try {
                const rs = await fetch(`${process.env.NEXT_PUBLIC_HOST}${process.env.NEXT_PUBLIC_ALL_PETS_URL}${initRegs}${process.env.NEXT_PUBLIC_ALL_PETS_PAGE}${currentPage <= 0 ? 1 : currentPage + 1}${filters.name && `&name=${filters.name}`}${filters.centerId && `&centerId=${filters.centerId}`}${filters.raceId && `&raceId=${filters.raceId}`}${filters.adultSize && `&adultSize=${filters.adultSize}`}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await rs.json();
                setData(data);
                setIsLoading(false);
            } catch (e) {
                console.log(e);
            }
        })();
    }, [currentPage, initRegs, filters]);

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
        <MainContext.Provider value = {{ data, setData, currentPage, totalPages, setNextPage, setPreviousPage, nextEnabled, previousEnabled, startIndex, endIndex, setInitRegs, isLoading, setIsLoading, filters, setFilters, handleChange, centers, races }}>
            {children}
        </MainContext.Provider>
    );
}