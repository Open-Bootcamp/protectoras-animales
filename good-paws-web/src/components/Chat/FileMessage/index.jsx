import { Author, Avatar, AvatarImg, Message, MessageFile, MessageGrid, MessageGridItem, MessageInfo, Date, IconFile, TextFile, TitleFile, SizeFile, IconContainer } from "./styles"



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
                    <MessageFile>
                        <IconContainer>
                            <IconFile src="./icon-file.svg" alt="" />
                        </IconContainer>
                        <TextFile>
                            <TitleFile>contratopreadopcion.pdf</TitleFile>
                            <SizeFile>1.2 MB</SizeFile>
                        </TextFile>
                    </MessageFile>
                </MessageGridItem>
            </Message>
        </MessageGrid>
    )
}
