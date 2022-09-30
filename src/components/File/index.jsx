import { IconContainer, IconFile, MessageFile, SizeFile, TextFile, TitleFile } from "./styles";


export const File = () => {
  return (
    <MessageFile>
      <IconContainer>
        <IconFile src="./icon-file.svg" alt="" />
      </IconContainer>
      <TextFile>
        <TitleFile>contratopreadopcion.pdf</TitleFile>
        <SizeFile>1.2 MB</SizeFile>
      </TextFile>
    </MessageFile>
  )
}
