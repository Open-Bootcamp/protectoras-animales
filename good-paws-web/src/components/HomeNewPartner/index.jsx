import React, { useEffect } from "react";
import { Flex, Text, Heading } from '@chakra-ui/react';
import ImgCarousel from './ImgCarousel';
import { useDispatch, useSelector } from "react-redux";
import { getAnimals } from '../../store/animalsSlice';

const HomeNewPartner = ({ principal, secondary }) => {
    const dispatch = useDispatch();
    const initState = { name: "", centerId: "", raceId: "", adultSize: "", isShelter: false, isUrgent: false, radius: 0, isElder: false, hasEspecialCondition: false, canTravel: false };

    useEffect(() => {
      dispatch(getAnimals({ filters: initState, initRegs: 4, currentPage: 1, userLocation: [] }));
    }, []);
  
    const data = useSelector((state) => state.animals.animals);

    return (
        data.results && <Flex alignItems={'center'} p={12} pl={10} pr={10} direction={'column'}>
            <Heading mb={6} textAlign={'center'} maxW={'100%'} fontSize={{ base: '3xl', md: '4xl', lg: '4xl' }}>
                <Text color={'black'} as={'span'}>{principal}</Text>
            </Heading>
            <Text w={'45%'} mb={10} textAlign={'center'} fontSize={{ base: 'md', lg: 'lg' }} color={'gray5'}>
                {secondary}
            </Text>
            <Flex mb={10} w={'90%'} direction={'column'}>
                <ImgCarousel data={data.results} />
            </Flex>
        </Flex>
    )
}

export default HomeNewPartner;