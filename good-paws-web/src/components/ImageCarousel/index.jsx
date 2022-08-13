import { Image, Title, Description, ImageContainer, InfoContainer, ImageInfo } from './styles';

export const ImageCarousel = ({imageIndex, index, url, title, description}) => {
  return (
    <ImageContainer  opacity={imageIndex === index + 1 ? 1 : 0 } >
        <Image src={url} alt={title} />
        <InfoContainer background={ (title === '' || description === '') ? false : true}>
            <ImageInfo>
                <Title>{(title === '' ) ? '' : title}</Title>
                <Description>{description === '' ? '' : description }</Description>
            </ImageInfo>
        </InfoContainer>
    </ImageContainer>
  );
}
