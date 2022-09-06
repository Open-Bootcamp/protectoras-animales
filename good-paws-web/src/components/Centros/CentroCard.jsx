import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../../styles/Centros/CentroCard.module.css";

const CentroCard = ({ centro, isMap }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push({
      pathname: `/centros/${centro.id}`,
    });
  };

  return (
    <div
      className={`${styles.centroCard} ${isMap ? styles.centroCardMap : null}`}
      onClick={handleClick}
    >
      <div>
        <Image
          src={centro.picture.url}
          alt={`Image of ${centro.picture.name}`}
          width={isMap ? 70 : 96}
          height={isMap ? 70 : 96}
        />
      </div>

      <div className={styles.centroCardText}>
        <h2>{isMap ? centro.name : centro.name}</h2>
        <p>
          <Image
            src="/location.svg"
            alt="Location icon"
            width={13}
            height={16}
          />
          {centro.location}
        </p>
        <span>{centro.numAnimals} animales</span>
      </div>

      <div className={styles.centroCardStars}>
        <Image src="/star.svg" alt="Star icon" width={15} height={15} />
        <span>{centro.averageRate}/5</span>
      </div>
    </div>
  );
};

export default CentroCard;
