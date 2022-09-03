import React from 'react';
import IamShelter from '../../components/Header/IamShelter';
import HappyFamilies from '../../components/HappyFamilies';
import ShelterMap from '../../components/ShelterMap';
import HomeNewPartner from '../../components/HomeNewPartner';
import styles from '../../styles/Home.module.css';
import { images } from '../index';

const ImShelter = () => {
  return (
    <div className={styles.container}>
        <IamShelter />
        <HomeNewPartner principal={'Da visibilidad a los animales'} secondary={'Somos un software de gestión gratuito para protectoras de animales.'}/>
        <ShelterMap />
        <HappyFamilies images={images} />
    </div>
  )
}

export default ImShelter;