import { MedicalEntry } from "../MedicalEntry"
import { Button, Container, MedicalHeader, MedicalInfo, Text, Title } from "./styles"

export const MedicalHistory = () => {
  return (
    <Container>
        <MedicalInfo>
            <MedicalHeader>
                <Title>Historial médico y citas veterinarias</Title>
                <Button>Nueva entrada</Button>
            </MedicalHeader>
            <Text>Aquí podrás visualizar las intervenciones médicas que le han sido realizadas a tu mascota, así como añadir aquellas que consideres importantes para la protectora</Text>
        </MedicalInfo>

        <div>
            <MedicalEntry />
        </div>
    </Container>
  )
}
