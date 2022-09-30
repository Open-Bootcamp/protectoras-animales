import { Button, Form, InputFile, InputMessage } from "./styles"

export const SendMessage = () => {
  return (
    <Form >
      <InputMessage type="text" placeholder="Escribe tu mensaje..." />
      <InputFile type="file" value="" />
      <Button></Button>
    </Form>
  )
}
