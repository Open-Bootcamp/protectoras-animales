import { Header } from "../components/01-Header/Header.jsx";
import { About_us, Container } from "../components/03-About_us/About_us.jsx";
import { ProtectorasCercanas } from "../components/protectoras_cercanas/ProtectorasCercanas.jsx";
import { Button } from "../components/ui/Button.jsx";


export default function Home() {
  return (
    <Container>
      <Header />
      {/* <Button /> */}
      {/* <Friend_Section/> */}
      <About_us />
      <ProtectorasCercanas />
    </Container>
  )
}
