import { useState } from "react";
import styles from "../../styles/Centros/CentrosSearcher.module.css";
import Image from "next/image";

const Searcher = ({ filters, handleChange }) => {
  const [filtersPopup, setFiltersPopup] = useState(false);

  const handleFilters = (e) => {
    handleChange(e);
  };

  return (
    <div className={styles.searcher}>
      <div className={styles.searcherInput}>
        <input
          placeholder="Escribe para buscar"
          name="centerName"
          type="text"
          value={filters.centerName}
          onChange={(e) => handleFilters(e)}
        />
      </div>
      <div className={styles.searcherButton}>
        <button
          onClick={() => setFiltersPopup(!filtersPopup)}
          style={
            filtersPopup
              ? {
                  boxShadow:
                    "0px 0px 0px 4px rgba(68, 160, 155, 0.2), 0px 1px 2px rgba(16, 24, 40, 0.05)",
                }
              : { boxShadow: "unset" }
          }
        >
          <span>Filtros</span>
        </button>
        <div style={filtersPopup ? { display: "block" } : { display: "none" }}>
          <h3>Filtros de búsqueda</h3>
          <label>Radio de búsqueda</label>
          <input
            name="radius"
            type="range"
            min="1"
            max="300"
            value={filters.range}
            onChange={(e) => handleFilters(e)}
          />
          <output>{filters.radius}KM</output>
          <div className={styles.closeButton}>
            <Image
              src="/Xicon.svg"
              alt="Centro image"
              width={12}
              height={12}
              onClick={() => setFiltersPopup(!filtersPopup)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searcher;
