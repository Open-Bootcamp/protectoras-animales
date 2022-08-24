import useScreenSize from '../../hooks/useScreenSize';
import { PetButtons } from '../PetButtons';
import { ProtectorCard } from '../ProtectorCard';
import {  Container, ProtectorDescription, ProtectorInfo, ProtectorName } from './styles';

export const ProtectorWidget = () => {

  const { width } = useScreenSize();

  return (
    <Container>
        
        <ProtectorCard />
        {width >= 785 && <PetButtons />}
        <ProtectorInfo>
            <ProtectorName>Amigos de los gatos</ProtectorName>
            <ProtectorDescription>Somos una asociación sin ánimo de lucro, compuesta por voluntarios y voluntarias que prestan su tiempo de forma desinterasada, con el único objetivo de hacer que las vidas de estos animales rescatados sean lo más agradables y saludables posibles, hasta que encuentren su hogar.</ProtectorDescription>
        </ProtectorInfo>
        {width <= 785 && <PetButtons />}

    </Container>
  )
}
