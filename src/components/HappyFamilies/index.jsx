import { useState } from 'react';

import { ContainerHappyFamilies , Title, Carousel, Dots, DotsContainer, Dot } from './styles';
import { ImageCarousel } from '../ImageCarousel';
import { Arrow } from '../Arrow';



const HappyFamilies = ({images}) => {

    const [imageIndex, setImageIndex] = useState(1);

    const nextImage = () => {
       if(imageIndex !== images.length){
        setImageIndex(imageIndex + 1);
       }else if(imageIndex === images.length){
        setImageIndex(1);
       }
    }

    const prevImage = () => {
        if(imageIndex !== 1){
            setImageIndex(imageIndex - 1);
           }else if(imageIndex === 1){
            setImageIndex(images.length);
           }
    }

    const selectDot = (index) => {
        setImageIndex(index);
    }

    return (
        <ContainerHappyFamilies>
            <Title> Familias felices </Title>
            <Carousel>
                {
                    images.map(({id, url, title, description}, index)=> (    
                        <ImageCarousel 
                            key={id} 
                            imageIndex={imageIndex} 
                            index={index} 
                            url={url}  
                            title={title}
                            description={description}
                        />
                    ))
                }

                <Arrow action={nextImage} direction='right' />
                <Arrow action={prevImage} direction='left' />

                
                
                <Dots>
                    <DotsContainer>
                        {
                            images.map((dot ,index) => (
                                <Dot 
                                    key={index} 
                                    onClick={() => selectDot(index + 1)} 
                                    active={ imageIndex === index + 1 ? '#3C3F41' : '#C3C6C8'} 
                                />
                            ))
                        }        
                    </DotsContainer>
                </Dots>
                
            </Carousel>
        </ContainerHappyFamilies>
    );
}

export default HappyFamilies;