import React, {useEffect, useState} from "react"
import styles from '../../styles/Centros/CentrosMap.module.css'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import CentroCard from "./CentroCard"

const CentrosMap = ({centros}) => {

    const mapOptions = {
        // Centro marcado en Madrid, con un zoom que abarque toda España
        'center': centros.length == 1
            ? [centros[0].coordinates.split(", ")[0], centros[0].coordinates.split(", ")[1]]
            : [40.4165, -3.70256],
        'zoom': centros.length == 1
            ? 14
            : 6,
        'markerIcon': new L.Icon({ iconUrl: '/marker.svg'})
    }

    function CurrentLocation() {
        const map = useMap()
        useEffect(() => {
            map.locate().on("locationfound", (e) => {
                map.flyTo(e.latlng, 8)
            })
        }, [])
    }

    return (
        <div className={styles.centrosMap}>
            <MapContainer center={mapOptions.center} zoom={mapOptions.zoom}>
				<TileLayer
					url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
				/>
                { centros.length != 0
                    ? Object.keys(centros).map((key) => 
                    <Marker
                        key={key}
                        position={[
                            centros[key].coordinates.split(", ")[0], 
                            centros[key].coordinates.split(", ")[1]
                        ]}
                        icon={mapOptions.markerIcon}
                    >
                        <Popup minWidth={260}>
                            <CentroCard centro={centros[key]} isMap={true} />
                        </Popup>
                    </Marker>
                    )
                    : null
                }
                {centros.length != 1 ? <CurrentLocation /> : null}
			</MapContainer>
        </div>
    )
}

export default CentrosMap