import { PetInfoSheet } from '../../PetInfoSheet';
import { MedicalHistory } from '../MedicalHistory';
import { NameDate } from '../NameDate';
import { ProtectorInfo } from '../ProtectorInfo';
import { Grid, GridItem1, GridItem2 } from './styles';


export const MedicalData = () => {

  const data = {
    "name": "Caramelo",
    "raceId": 1,
    "typeId": 1,
    "sexId": 1,
    "adultSize": "cahorro",
    "birthDate": "2020-06-23",
    "centerId": 1,
    "adopterId": 1,
    "friendly": false,
    "canTravel": true,
    "isElder": false,
    "hasEspecialCondition": false,
    "status": true,
    "id": "1",
    "medicalData": {
      "castrated": true,
      "microchip": true,
      "knownDiseases": [
        "displasia de cadera"
      ]
    }
  };



  return (
    <Grid>
      <GridItem1>
        <NameDate />
        <PetInfoSheet sizeName="1.12rem" data={data} />
        <ProtectorInfo />
      </GridItem1>
      <GridItem2>
        <MedicalHistory />
      </GridItem2>
    </Grid>
  )
}
