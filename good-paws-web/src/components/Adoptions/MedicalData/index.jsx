import { PetInfoSheet } from "../../PetInfoSheet";
import { MedicalHistory } from "../MedicalHistory";
import { NameDate } from "../NameDate";
import { ProtectorInfo } from "../ProtectorInfo";
import { Grid, GridItem1, GridItem2 } from "./styles";


export const MedicalData = ({onOpen}) => {

    const data = ['Caramelo', 0, 0, 0];

  return (
    <Grid>
         <GridItem1>
            <NameDate/>
            <PetInfoSheet sizeName="1.12rem" data={data}/>
            <ProtectorInfo />
         </GridItem1>
         <GridItem2>
            <MedicalHistory/> 
         </GridItem2>    
    </Grid>
  )
}
