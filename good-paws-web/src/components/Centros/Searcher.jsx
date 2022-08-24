import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Centros/CentrosSearcher.module.css'
import Image from 'next/image'

const Searcher = () => {

    const router = useRouter()
    const [filters, setFilters] = useState(false)
    const [name, setName] = useState(router.query.centroName || '')
    const [range, setRange] = useState(router.query.range || 10)

    const handleName = (e) => {
        setName(e)
        router.push({
            pathname: '/centros',
            query: { ...router.query, centroName: e }
        })
    }

    const handleRange = (e) => {
        setRange(e)
        router.push({
            pathname: '/centros',
            query: { ...router.query, range: e }
        })
    }

    return (
        <div className={styles.searcher}>
            <div className={styles.searcherInput}>
                <input 
                    placeholder="Escribe para buscar"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => handleName(e.target.value)}
                />
            </div>
            <div className={styles.searcherButton}>
                <button
                    onClick={() => setFilters(!filters)}
                    style={filters 
                    ? {boxShadow: '0px 0px 0px 4px rgba(68, 160, 155, 0.2), 0px 1px 2px rgba(16, 24, 40, 0.05)'} 
                    : {boxShadow: 'unset'}}
                ><span>Filtros</span></button>
                <div style={filters ? {display: 'block'} : {display: 'none'}}>
                    <h3>Filtros de búsqueda</h3>
                    <label>Radio de búsqueda</label>
                    <input name="range" type="range" min="1" max="300" value={range || 10}
                        onChange={(e) => handleRange(e.target.value)}
                    />
                    <output>{range}KM</output>
                    <div className={styles.closeButton}>
                        <Image 
                            src="/Xicon.svg"
                            alt="Centro image"
                            width={12}
                            height={12}
                            onClick={() => setFilters(!filters)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Searcher