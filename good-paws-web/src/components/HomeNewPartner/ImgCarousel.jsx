import React from 'react'
import Card from '../Card/Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from './breakpoints';

const ImgCarousel = ({ data }) => {
    return (
        <Carousel arrows={false} responsive={responsive}>
            {data.map((p) => (
                <Card key={p.id} {...p} />
            ))}
        </Carousel>
    )
}

export default ImgCarousel;