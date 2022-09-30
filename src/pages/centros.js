import { useContext } from "react";
import Searcher from "../components/Centros/Searcher";
import CentrosList from "../components/Centros/CentrosList";
import styles from "../styles/Centros/Centros.module.css";
import dynamic from "next/dynamic";
import { CenterContext } from "../context/CenterContext";

function Centros() {
  const { data, userLocation, handleChange, filters } =
    useContext(CenterContext);

  const CentrosMap = dynamic(() => import("../components/Centros/CentrosMap"), {
    ssr: false,
  });

  return (
    <div className={styles.container}>
      <h1>Encuentra protectoras cercanas a ti</h1>
      <div className={styles.row}>
        <Searcher filters={filters} handleChange={handleChange} />
        <CentrosList centros={data} />
      </div>
      <div className={styles.row}>
        <CentrosMap centros={data} userLocation={userLocation} />
      </div>
    </div>
  );
}

export default Centros;
