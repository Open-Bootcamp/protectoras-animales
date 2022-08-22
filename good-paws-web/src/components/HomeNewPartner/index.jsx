import React from 'react';
import usePagination from '../../hooks/usePagination.tsx';
import { products } from "../../Mocks/mocks";
import { Flex, Text, Heading } from '@chakra-ui/react';
import CardsContainer from '../CardsContainer/CardsContainer';
import ImgCarousel from './ImgCarousel';
import { colors } from '../ui/colors';

const HomeNewPartner = () => {
    const pagination = usePagination(products, 4);

    return (
        <Flex borderTop={`1px solid ${colors.gray2}`} alignItems={'center'} pt={12} pl={10} pr={10} direction={'column'}>
            <Heading mb={6} textAlign={'center'} maxW={'100%'} fontSize={{ base: '3xl', md: '4xl', lg: '4xl' }}>
                <Text color={colors.white} as={'span'}>Unimos protectoras y adoptantes</Text>
            </Heading>
            <Text w={'36%'} mb={10} textAlign={'center'} fontSize={{ base: 'md', lg: 'lg' }} color={colors.gray5}>
                ¿Eres más de gatos? ¿De perros? ¿De pájaros? ¡No importa! 
                Te ayudaremos a encontrar a tu nuevo mejor amigo.
            </Text>
            <Flex mb={10} w={'90%'} direction={'column'}>
                <ImgCarousel data={pagination.data} />
            </Flex>
        </Flex>
    )
}

export default HomeNewPartner;