import React from 'react';
import { render } from '@testing-library/react';
import MainProvider from '../../context/mainContext';
import { ChakraProvider } from '@chakra-ui/react';
import HomeLogin from './HomeLogin';

describe('render content', () => {
    it('', () => {    
        render(
            <ChakraProvider>
                <HomeLogin />
            </ChakraProvider>
        );
    });
});