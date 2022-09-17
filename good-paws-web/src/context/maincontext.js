import { useState, useEffect, createContext } from 'react';
import getUserLocation from '../helpers/getUserLocation';

export const MainContext = createContext();

export default function MainProvider({ children }) {
    const [sliderValue, setSliderValue] = useState(0);
    const [userLocation, setUserLocation] = useState({});
    const initState = { name: "", centerId: "", raceId: "", adultSize: "", isShelter: false, isUrgent: false, radius: 0, isElder: false, hasEspecialCondition: false, canTravel: false };
    const [filters, setFilters] = useState(initState);

    const handleChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        setFilters({
            ...filters,
            radius: sliderValue
        });
    }, [sliderValue]);

    useEffect(() => {
        getUserLocation().then(lngLat => setUserLocation(lngLat));
    }, []);

    return ( 
        <MainContext.Provider value = {{ userLocation, filters, setFilters, handleChange, sliderValue, setSliderValue }}>
            {children}
        </MainContext.Provider>
    );
}