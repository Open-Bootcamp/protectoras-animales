import { FileMessage } from "../FileMessage"
import { IncomingMessage } from "../IncomingMessage"
import { OutgoingMessage } from "../OutgoingMessage"
import { TypingMessage } from "../TypingMessage"
import { Container } from "./styles"


export const ChatSelected = () => {
  return (
    <Container>
      <OutgoingMessage />
      <IncomingMessage />
      <FileMessage />
      <TypingMessage />
    </Container>
  )
}
