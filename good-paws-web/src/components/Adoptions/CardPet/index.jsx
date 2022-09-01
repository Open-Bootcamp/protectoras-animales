import {
  AdoptionDate,
  Avatar,
  AvatarImg,
  Card,
  CardInfo,
  NamePet
} from './styles';


export const CardPet = () => {
  return (
    <Card>
      <Avatar>
        <AvatarImg src="./avatar-pet.jpeg" />
      </Avatar>
      <CardInfo>
        <NamePet>Caramelo</NamePet>
        <AdoptionDate>Adoptado el 19/08/22</AdoptionDate>
      </CardInfo>
    </Card>
  )
}
