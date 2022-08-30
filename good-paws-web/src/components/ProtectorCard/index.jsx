import { Tag } from '../Tag';
import { Card, CardPhoto, CardTitle, CardSubTitle, CardLocation, CardContainer, CardBlock1, CardBlock2 } from './styles';

export const ProtectorCard = () => {
    return (
        <Card>
            <CardPhoto />
            <CardContainer>
                <CardBlock1>
                    <CardTitle>Amigos de los gatos</CardTitle>
                    <CardSubTitle>Amigos de los animales</CardSubTitle>
                </CardBlock1>
                <CardBlock2>
                    <Tag text="23 animales" color="primary" />
                    <CardLocation>
                        <img src="/map-pin.svg" alt="" />
                        <p>Valencia</p>
                    </CardLocation>
                </CardBlock2>
            </CardContainer>
        </Card>
    )
}
