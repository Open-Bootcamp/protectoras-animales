import React, { useEffect } from "react";
import styles from "../../styles/Centros/CentrosMap.module.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import CentroCard from "./CentroCard";

const CentrosMap = ({ centros, userLocation }) => {
  const mapOptions = {
    center: [userLocation[0], userLocation[1]],
    zoom: 6,
    markerIcon: new L.Icon({ iconUrl: "/marker.svg" }),
  };

  function CurrentLocation() {
    const map = useMap();
    useEffect(() => {
      map.locate().on("locationfound", (e) => {
        map.flyTo(
          {
            lat: centros[0].coordinates.split(",")[0],
            lng: centros[0].coordinates.split(",")[1],
          },
          7
        );
      });
    }, []);
  }

  return (
    <div className={styles.centrosMap}>
      <MapContainer center={mapOptions.center} zoom={mapOptions.zoom}>
        <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png" />
        {centros.length != 0 &&
          Object.keys(centros).map((key) => (
            <Marker
              key={key}
              position={[
                centros[key].coordinates.split(",")[0],
                centros[key].coordinates.split(",")[1],
              ]}
              icon={mapOptions.markerIcon}
            >
              <Popup minWidth={260}>
                <CentroCard centro={centros[key]} isMap={true} />
              </Popup>
            </Marker>
          ))}
        {centros.length == 1 && <CurrentLocation />}
      </MapContainer>
    </div>
  );
};

export default CentrosMap;
