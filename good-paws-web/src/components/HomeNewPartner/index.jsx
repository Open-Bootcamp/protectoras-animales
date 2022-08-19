import React from 'react';
import usePagination from '../../hooks/usePagination.tsx';
import { products } from "../../Mocks/mocks";
import { Flex, Text, Heading } from '@chakra-ui/react';
import CardsContainer from '../CardsContainer/CardsContainer';

const HomeNewPartner = () => {
    const pagination = usePagination(products, 4);

    return (
        <Flex borderTop={'1px solid #E1E2E3'} alignItems={'center'} pt={12} pl={10} pr={10} direction={'column'}>
            <Heading mb={6} textAlign={'center'} maxW={'100%'} fontSize={{ base: '3xl', md: '4xl', lg: '4xl' }}>
                <Text color={'#000000'} as={'span'}>Unimos protectoras y adoptantes</Text>
            </Heading>
            <Text w={'36%'} mb={10} textAlign={'center'} fontSize={{ base: 'md', lg: 'lg' }} color={'#3c3f41'}>
                ¿Eres más de gatos? ¿De perros? ¿De pájaros? ¡No importa! 
                Te ayudaremos a encontrar a tu nuevo mejor amigo.
            </Text>
            <Flex w={'90%'} direction={'column'}>
                <CardsContainer data={pagination.data} />
            </Flex>
        </Flex>
    )
}

export default HomeNewPartner;