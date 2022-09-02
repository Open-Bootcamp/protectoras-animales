import { Tag } from '../../Tag';
import { Avatar, CardGrid, CardGridItem, ImgAvatar, Name } from './styles';

export const ChatCard = ({ setActivateView }) => {
    return (
        <CardGrid onClick={() => setActivateView(true)}>
            <CardGridItem>
                <Avatar>
                    <ImgAvatar src="./img-1.jpeg" alt="" />
                </Avatar>
            </CardGridItem>
            <CardGridItem>
                <Name>Amigos de los gatos</Name>
                <Tag text="Sin mensajes nuevos" color="gray-1" />
            </CardGridItem>
            <CardGridItem>
                <Tag text="Solicitud" color="orange" />
            </CardGridItem>

        </CardGrid>
    )
}
