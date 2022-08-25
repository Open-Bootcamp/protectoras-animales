import React from "react"
import styles from '../../styles/Centros/CentrosList.module.css'
import CentroCard from "./CentroCard"

const CentrosList = ({centros}) => {
    return (
        <div className={styles.centrosList}>
            { centros.length != 0
                ? Object.keys(centros).map((key) => 
                    (<CentroCard key={key} centro={centros[key]} isMap={false} />)
                )
                : <div>No se han encontrado centros con estos requisitos</div>
            }
        </div>
    )
}

export default CentrosList