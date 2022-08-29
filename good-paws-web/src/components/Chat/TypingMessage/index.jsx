import { Author, Avatar, AvatarImg, Message, MessageGrid, MessageGridItem, MessageInfo, Typing, TypingItem } from "./styles"

export const TypingMessage = () => {
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
                    </MessageInfo>
                    <Typing>
                        <TypingItem animationLength="1s" />
                        <TypingItem animationLength="1.01s" />
                        <TypingItem animationLength="1.02s" />
                    </Typing>
                </MessageGridItem>
            </Message>
        </MessageGrid>
    )
}
