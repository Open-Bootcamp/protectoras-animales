import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header/Header';
import { About_us, Container } from '../components/About_us/About_us.jsx';
import HappyFamilies from '../components/HappyFamilies';
import ShelterMap from '../components/ShelterMap';

const images = [
	{
		id: 'a8s123123a',
		url: 'img-1.jpeg',
		title: 'sara & poppy',
		description:
			'“Encontré a Poppy gracias a la protectora Animales Felices, y ya no puedo imaginarme mi vida sin él” ',
	},
	{
		id: '8132n1le1',
		url: 'img-2.jpeg',
		title: 'sara & poppy',
		description:
			'“Encontré a Poppy gracias a la protectora Animales Felices, y ya no puedo imaginarme mi vida sin él” ',
	},
	{
		id: 'laic9qoma2',
		url: 'img-3.jpeg',
		title: '',
		description: '',
	},
];

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Protectora de animales</title>
				<meta
					name='description'
					content='Adoptando un animal, le das una segunda vida a aquellos que no han tenido tanta suerte'
				/>
				<link rel='icon' href='/accent.svg' />
			</Head>

			<Header />
			<About_us />
			<ShelterMap />
			<HappyFamilies images={images} />

			<main className={styles.main}></main>
		</div>
	);
}
