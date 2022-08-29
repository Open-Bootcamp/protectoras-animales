import React from 'react';
import { Button } from './styles';

export const BackButton = ({ setActivateView }) => {
    return (
        <Button
            onClick={() => setActivateView(false)}
        >
            <img src="./icon-back-left.svg" alt="" /> Volver
        </Button>
    )
}
