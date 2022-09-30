import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import { AboutUs } from "../components/AboutUs/AboutUs.jsx";
import HappyFamilies from "../components/HappyFamilies";
import ShelterMap from "../components/ShelterMap";
import HomeNewPartner from "../components/HomeNewPartner";
import Shelter from "../components/Shelters";

export const images = [
  {
    id: "a8s123123a",
    url: "img-1.jpeg",
    title: "sara & poppy",
    description:
      "“Encontré a Poppy gracias a la protectora Animales Felices, y ya no puedo imaginarme mi vida sin él” ",
  },
  {
    id: "8132n1le1",
    url: "img-2.jpeg",
    title: "sara & poppy",
    description:
      "“Encontré a Poppy gracias a la protectora Animales Felices, y ya no puedo imaginarme mi vida sin él” ",
  },
  {
    id: "laic9qoma2",
    url: "img-3.jpeg",
    title: "",
    description: "",
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Shelter />
      <HomeNewPartner
        principal={"Tu nuevo compañero de vida"}
        secondary={
          "¿Eres más de gatos? ¿De perros? ¿De pájaros? ¡No importa! Te ayudaremos a encontrar a tu nuevo mejor amigo."
        }
      />
      <AboutUs />
      <ShelterMap />
      <HappyFamilies images={images} />
    </div>
  );
}
