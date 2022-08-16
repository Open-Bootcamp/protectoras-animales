import React from 'react';
import dynamic from 'next/dynamic';
import {
	Button,
	Container,
	ContainerMap,
	WrapperContent,
	WrapperText,
} from './styles';
import Link from 'next/link';
import { Title, Subtitle } from '../ui';

const ShelterMapView = dynamic(() => import('../ShelterMapView'), {
	ssr: false,
});

const ShelterMap = () => {
	return (
		<Container>
			<ContainerMap>
				<ShelterMapView />
			</ContainerMap>
			<WrapperContent>
				<WrapperText>
					<Title
						mx='0px'
						weight='600'
						size='36px'
						style={{ 'margin-bottom': '18.13px' }}>
						Encuentra protectoras cercanas
					</Title>
					<Subtitle weight='400' size='21.33px' line-height='26px'>
						Busca la protectora más cercana a ti, conoce sus animales, envía un
						mensaje ¡y encuentra a tu nuevo compañero de vida!
					</Subtitle>
				</WrapperText>

				<Link href='/maps'>
					<Button>
						<a>Busca protectoras</a>
					</Button>
				</Link>
			</WrapperContent>
		</Container>
	);
};

export default ShelterMap;
