// import { Header } from "../components/01-Header/Header.jsx.js";
import { About_us, Container } from "../components/About_us/About_us.jsx";
// import { ProtectorasCercanas } from "../components/protectoras_cercanas/ProtectorasCercanas.jsx";
// import { Button } from "../components/ui/Button.jsx.js";


export default function Home() {
  return (
    //TODO: este container deberia ser remplazado por el layout
    <Container> 
      {/* <Header /> */}
      {/* <Button /> */}
      {/* <Friend_Section/> */}
      <About_us />
      {/* <ProtectorasCercanas /> */}
    </Container>
  )
}
