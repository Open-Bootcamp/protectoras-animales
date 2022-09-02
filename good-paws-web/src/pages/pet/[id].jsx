import { BackArrow } from '../../components/BackArrow';
import { PetDetails } from '../../components/PetDetails';
import { PetInfoSheet } from '../../components/PetInfoSheet';
import { PetPictures } from '../../components/PetPictures';
import { ProtectorWidget } from '../../components/ProtectorWidget';
import { SimilarPets } from '../../components/SimilarPets';
import useScreenSize from '../../hooks/useScreenSize';

import { Grid, GridItem1, GridItem2, GridItem3 } from './styles';

const PetOverview = ({ data }) => {

  const { width } = useScreenSize();

  return (
    <Grid>
      <GridItem1>
        {width >= 785 && <BackArrow text="Volver al listado" link="/petlist" />}
        {width >= 785 && <PetPictures data={data} />}
      </GridItem1>
      <GridItem2>
        <PetDetails data={data} />
      </GridItem2>
      <GridItem3>
        {width >= 785 && <PetInfoSheet data={data} />}
        <ProtectorWidget />
        <SimilarPets />
      </GridItem3>
    </Grid>
  );
}

export const getServerSideProps = async (context) => {

  const res = await fetch(`https://63058cf4697408f7edc71966.mockapi.io/pets/${context.query.id}`);
  const data = await res.json();

  return {
    props: {
      data

    }
  }
}

export default PetOverview;
