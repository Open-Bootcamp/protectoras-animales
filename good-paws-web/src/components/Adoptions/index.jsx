import { PetInfoSheet } from "../PetInfoSheet"
import { ProtectorCard } from "../ProtectorCard";
import { CardPet } from "./CardPet"
import { MedicalHistory } from "./MedicalHistory";
import { NameDate } from "./NameDate";
import { ProtectorInfo } from "./ProtectorInfo";
import { GridContainer, GridItem1, GridItem2, GridItem3 } from "./styles"

export const Adoptions = () => {

    const data = ['Caramelo', 0, 0, 0];

  return (
    <GridContainer>
        <GridItem1>
            <CardPet />

        </GridItem1>
        <GridItem2>
            <NameDate />
            <PetInfoSheet sizeName="1.12rem" data={data}/>
            <ProtectorInfo />
        </GridItem2>
        <GridItem3>
          <MedicalHistory />
          
        </GridItem3>
    </GridContainer>
  )
}
