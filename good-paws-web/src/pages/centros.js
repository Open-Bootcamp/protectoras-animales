import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Searcher from '../components/Centros/Searcher'
import CentrosList from '../components/Centros/CentrosList'
import styles from '../styles/Centros/Centros.module.css'
import dynamic from 'next/dynamic'

export const getServerSideProps = async () => {
    // TODO: Aplicar llamadas a la API
    // Test data. Borrar cuando se implementen las llamadas a la Api
    const data = [{
        "location": "Valencia",
        "coordinates": "40.4165, -3.70256",
        "centroName": "Amigos de los gatos",
        "protectoraName": "Amigos de los animales",
        "picture": "/shelterCardImage.png",
        "numAnimals": 23,
        "status": 4
    },
    {
        "location": "Valencia",
        "coordinates": "43.4165, -3.70256",
        "centroName": "Amigos de los gatos",
        "protectoraName": "Amigos de los animales",
        "picture": "/shelterCardImage.png",
        "numAnimals": 23,
        "status": 4
    },
    {
        "location": "Valencia",
        "coordinates": "38.4165, -2.70256",
        "centroName": "Amigos de los gatos",
        "protectoraName": "Amigos de los animales",
        "picture": "/shelterCardImage.png",
        "numAnimals": 23,
        "status": 4
    },
    {
        "location": "Valencia",
        "coordinates": "38.4165, -3.70256",
        "centroName": "Amigos de los gatos",
        "protectoraName": "Amigos de los animales",
        "picture": "/shelterCardImage.png",
        "numAnimals": 23,
        "status": 4
    },
    {
        "location": "Valencia",
        "coordinates": "37.4165, -3.70256",
        "centroName": "Amigos de los gatos",
        "protectoraName": "Amigos de los animales",
        "picture": "/shelterCardImage.png",
        "numAnimals": 23,
        "status": 4
    }]

    return { props: { data } }
}

function Centros({data}) {

    const router = useRouter()
    const [dataSaved, setDataSaved] = useState(data)

    const CentrosMap = dynamic(() => import('../components/Centros/CentrosMap'), { ssr: false })

    useEffect(() => {
        // TODO: Aplicar llamadas a la API con filtros y guardarlo con setDataSaved
        // Data test mientras se aplica la llamada a la API con filtros
        if(router.query.centroName == 'Amigos de los gatos'){
            data = [{
                "location": "Valencia",
                "coordinates": "40.4165, -3.70256",
                "centroName": "Amigos de los gatos",
                "protectoraName": "Amigos de los animales",
                "picture": "/shelterCardImage.png",
                "numAnimals": 23,
                "status": 4
            }]
            
        }else{
            data = [{
                "location": "Valencia",
                "coordinates": "40.4165, -3.70256",
                "centroName": "Amigos de los gatos",
                "protectoraName": "Amigos de los animales",
                "picture": "/shelterCardImage.png",
                "numAnimals": 23,
                "status": 4
            },
            {
                "location": "Valencia",
                "coordinates": "43.4165, -3.70256",
                "centroName": "Amigos de los gatos",
                "protectoraName": "Amigos de los animales",
                "picture": "/shelterCardImage.png",
                "numAnimals": 23,
                "status": 4
            },
            {
                "location": "Valencia",
                "coordinates": "38.4165, -2.70256",
                "centroName": "Amigos de los gatos",
                "protectoraName": "Amigos de los animales",
                "picture": "/shelterCardImage.png",
                "numAnimals": 23,
                "status": 4
            },
            {
                "location": "Valencia",
                "coordinates": "38.4165, -3.70256",
                "centroName": "Amigos de los gatos",
                "protectoraName": "Amigos de los animales",
                "picture": "/shelterCardImage.png",
                "numAnimals": 23,
                "status": 4
            },
            {
                "location": "Valencia",
                "coordinates": "37.4165, -3.70256",
                "centroName": "Amigos de los gatos",
                "protectoraName": "Amigos de los animales",
                "picture": "/shelterCardImage.png",
                "numAnimals": 23,
                "status": 4
            }]
        }
        setDataSaved(data)
    }, [router.query])

    return (
      <div className={styles.container}>
        <h1>Encuentra protectoras cercanas a ti</h1>
        <div className={styles.row}>
            <Searcher />
            <CentrosList centros={dataSaved}/>
        </div>
        <div className={styles.row}>
            <CentrosMap centros={dataSaved}/>
        </div>
      </div>
    )
}

export default Centros