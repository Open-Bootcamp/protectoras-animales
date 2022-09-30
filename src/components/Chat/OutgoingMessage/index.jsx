import { Author, Message, MessageGrid, MessageGridItem, MessageInfo, MessageText, Date } from "./styled"

export const OutgoingMessage = () => {
  return (
    <MessageGrid>
      <Message>
        <MessageGridItem>
          <MessageInfo>
            <Author>Marta Garcia</Author>
            <Date>Viernes 2:20pm</Date>
          </MessageInfo>
          <MessageText>¡Hola! Estaba interesado en adoptar a Pancho</MessageText>
        </MessageGridItem>
      </Message>
    </MessageGrid>
  )
}
