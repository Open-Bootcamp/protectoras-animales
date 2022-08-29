import { Author, Avatar, AvatarImg, Message, MessageGridItem, MessageInfo, MessageText, Date, MessageGrid } from './syles';

export const IncomingMessage = () => {
    return (
        <MessageGrid>
            <Message>
                <MessageGridItem>
                    <Avatar>
                        <AvatarImg src="./img-1.jpeg" alt="" />
                    </Avatar>
                </MessageGridItem>
                <MessageGridItem>
                    <MessageInfo>
                        <Author>Marta Garcia</Author>
                        <Date>Viernes 2:20pm</Date>
                    </MessageInfo>
                    <MessageText>¡Hola! Eso es genial. Te explicamos un poco como trabajamos con las adopciones.</MessageText>
                </MessageGridItem>
            </Message>
        </MessageGrid>
    )
}
