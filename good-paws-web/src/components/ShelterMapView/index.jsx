import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './ShelterMap.module.css';

const ShelterMapView = () => {
	return (
		<div>
			<MapContainer
				center={{ lat: '-37.81557', lng: '144.96796' }}
				zoom={13}
				className={styles.map}>
				<TileLayer
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				/>
			</MapContainer>
		</div>
	);
};

export default ShelterMapView;
