
import { CardPet } from './CardPet';
import { MedicalData } from './MedicalData';

import { GridContainer, GridItem1, GridItem2 } from './styles';

export const Adoptions = () => {

  return (
    <GridContainer>
      <GridItem1>
        <CardPet />
      </GridItem1>
      <GridItem2>
        <MedicalData />
      </GridItem2>
    </GridContainer>
  )
}
