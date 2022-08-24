import { SimilarPetsCard } from '../SimilarPetsCard';
import { Cards, Container, Title } from './styles';


export const SimilarPets = () => {
  return (
    <Container>
      <Title>Similares a Pancho</Title>
      <Cards>
        <SimilarPetsCard />
        <SimilarPetsCard />
      </Cards>

    </Container>
  )
}
