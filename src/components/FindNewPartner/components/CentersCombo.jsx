import React, { useContext, useEffect } from 'react';
import { Select } from '@chakra-ui/react';
import { MainContext } from '../../../context/maincontext';
import { useDispatch, useSelector } from "react-redux";
import { getCenters } from '../../../store/centersSlice';


const CentersCombo = () => {
    const { filters, handleChange } = useContext(MainContext);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCenters());
    }, []);

    const centers = useSelector((state) => state.centers.centers);

    return (
        <Select focusBorderColor={'primarylight'} value={filters.centerId} onChange={handleChange} name="centerId" placeholder='Selecciona una opción'>
            {centers.totalResults > 0 && centers.results.map((center) => { 
                return ( <option key={center.id} value={center.id}>{center.name}</option> );
            })}
        </Select>
    );
};

export default CentersCombo;