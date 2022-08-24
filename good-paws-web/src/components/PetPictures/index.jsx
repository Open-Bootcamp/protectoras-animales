import React, { useRef, useState } from 'react';
import {
  Container,
  PetPictureView,
  Picture,
  SliderPicturePets,
  PetPictureItem,
} from './styles';

export const PetPictures = ({ data }) => {

  const pictures = data.picture;


  const [image, setImage] = useState(pictures[0]);

  const image1 = useRef('');
  const image2 = useRef('');
  const image3 = useRef('');
  const image4 = useRef('');
  const image5 = useRef('');

  const referes = [
    image1,
    image2,
    image3,
    image4,
    image5
  ]
  const changeImage = (index) => {

    const image = referes[index].current.attributes[0].nodeValue;
    setImage(image);
  }

  return (
    <Container>
      <Picture>
        <PetPictureView src={`${image}`} />
      </Picture>
      <SliderPicturePets>
        {
          pictures.map((url, index) => {
            return (
              <PetPictureItem ref={referes[index]} onClick={() => changeImage(index)} src={url} alt="" key={index} />
            )
          })
        }

      </SliderPicturePets>
    </Container>
  );
};
