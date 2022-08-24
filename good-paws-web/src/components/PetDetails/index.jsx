import useScreenSize from '../../hooks/useScreenSize';
import { PetButtons } from '../PetButtons';
import { PetInfoSheet } from '../PetInfoSheet';
import { PetPictures } from '../PetPictures';
import { Tag } from '../Tag';
import {
  Container,
  ContainerTags,
  NamePet,
  DescriptionPet,
  TextDescription,
  Observations,
  MedicalData,
  TextUl,
  TextLi,
} from './styles';

export const PetDetails = ({ data }) => {
  const { width } = useScreenSize();

  const { name, extraDetails, observations, medicalData } = data;

  return (
    <Container>
      <div>
        <NamePet>{name}</NamePet>
      </div>
      <ContainerTags>
        <Tag text="En adopción" color='primary' />
        <Tag text="Acepta casa de acogida" color='rose' />
        <Tag text="Necesidades especiales" color='orange' />
      </ContainerTags>
      {width <= 785 && <PetPictures data={data} />}
      {width <= 785 && <PetButtons />}
      {width <= 785 && <PetInfoSheet data={data} />}
      <DescriptionPet>
        <TextDescription>
          {extraDetails}
        </TextDescription>

      </DescriptionPet>
      <Observations>
        <TextDescription>
          <b>Observaciones:</b>
        </TextDescription>

        {
          observations.map((observation, index) => (<TextDescription key={index}>
            {observation}
          </TextDescription>))
        }


      </Observations>
      <MedicalData>
        <TextDescription>
          {' '}
          <b> Datos Médicos: </b>{' '}
        </TextDescription>

        <TextUl>
          <TextLi>
            <b>Castrado:</b> {medicalData.castrated ? 'Sí' : 'No'}
          </TextLi>
          <TextLi>
            <b>Microchip:</b> {medicalData.microchip ? 'Sí' : 'No'}
          </TextLi>
          <TextLi>
            <b>Enfermedades conocidas:</b> {medicalData.knownDiseases.length === 0 ? 'No' : medicalData.knownDiseases.map((disease) => (` ${disease}`))}
          </TextLi>
        </TextUl>
      </MedicalData>
    </Container>
  );
}
