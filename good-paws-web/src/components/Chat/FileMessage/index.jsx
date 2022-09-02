import { File } from "../../File"
import { Author, Avatar, AvatarImg, Message, MessageFile, MessageGrid, MessageGridItem, MessageInfo, Date } from "./styles"



export const FileMessage = () => {
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
                    <File />
                </MessageGridItem>
            </Message>
        </MessageGrid>
    )
}
