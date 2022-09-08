import React, { useContext, useEffect } from 'react';
import { Select } from '@chakra-ui/react';
import { MainContext } from '../../../context/maincontext';
import { useDispatch, useSelector } from "react-redux";
import { getRaces } from '../../../store/racesSlice';

const RacesCombo = () => {
    const { filters, handleChange } = useContext(MainContext);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRaces());
    }, []);
    const races = useSelector((state) => state.races.races);

    return (
    <Select focusBorderColor={'primarylight'} value={filters.raceId} onChange={handleChange} name="raceId" placeholder='Selecciona una opción'>
        {races.totalResults > 0 && races.results.map((race) => { 
            return (
                <option key={race.id} value={race.id}>{race.name}</option>
            );
        })}
    </Select>
    );
};

export default RacesCombo;