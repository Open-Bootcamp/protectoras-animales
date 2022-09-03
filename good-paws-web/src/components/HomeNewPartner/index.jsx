import React, { useContext } from "react";
import { MainContext } from "../../context/maincontext";
import { Flex, Text, Heading } from '@chakra-ui/react';
import ImgCarousel from './ImgCarousel';

const HomeNewPartner = ({ principal, secondary }) => {
    const { data, setInitRegs } = useContext(MainContext);
    setInitRegs(4);

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