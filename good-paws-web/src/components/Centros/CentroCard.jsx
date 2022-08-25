import Image from "next/image"
import { useRouter } from 'next/router'
import styles from '../../styles/Centros/CentroCard.module.css'

const CentroCard = ({centro, isMap}) => {

    const router = useRouter()

    const handleClick = () => {
        if(isMap){
            router.push({
                pathname: `/centros/${centro.centroName}`
            })
        }else{
            router.push({
                pathname: '/centros',
                query: { ...router.query, centroName: centro.centroName }
            })
        }
    }

    return (
        <div className={`${styles.centroCard} ${isMap ? styles.centroCardMap : null}`} onClick={handleClick}>
            <div>
                <Image 
                    src={centro.picture}
                    alt="Centro image"
                    width={96}
                    height={96}
                />
            </div>

            <div className={styles.centroCardText}>
                <h2>{isMap ? centro.centroName : centro.protectoraName}</h2>
                <p>
                    {!isMap ? centro.centroName + ' - ': null}
                    {!isMap ? 
                        <Image 
                            src="/location.svg"
                            alt="Location icon"
                            width={13}
                            height={16}
                        />
                    : null}
                    {centro.location}
                </p>
                <span>{centro.numAnimals} animales</span>
            </div>

            <div className={styles.centroCardStars}>
                <Image 
                    src="/star.svg"
                    alt="Star icon"
                    width={15}
                    height={15}
                />
                <span>{centro.status}/5</span>
            </div>
        </div>
    )
}

export default CentroCard