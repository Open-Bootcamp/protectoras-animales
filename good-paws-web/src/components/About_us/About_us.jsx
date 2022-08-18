import React from 'react';
import styled from 'styled-components';
import { FeatureIcon, Subtitle, Title } from '../ui';

export const Container = styled.div`
  text-align: center;
  background-color: #F9FAFB;
  padding: 15px;
  margin-top: 30px;

  @media (max-width: 600px){
    padding: 0;
    height: auto;
    margin: 0px 12px;
    text-align: center;
};
`
export const Wrapper = styled.div`
  display: inline-flex;
  padding: 0px 100px;

@media (max-width: 600px){
  padding: 0px;
  flex-direction: column;
  align-items: center;
};

`
const SubtitleWraper = styled.div`
  @media(min-width: 600px){
    padding: 10px 25%;
  }
`;

const Features = styled.div`
  margin: 0 40px 20px 0;
  text-align: center;
  padding: 0px 13px;
  border: 1px dashsed;
`;

export const About_us = () => {

  return (
    <Container>
      <Title size='35px' mx='0px' weight='700'>¿Qué sómos?</Title>
      <SubtitleWraper>
        <Subtitle weight='500' size='20px' height='30px'>
          Somos un proyecto Open Source,
          destinado a ayudar a las protectoras para
          que puedan realizar su trabajo más cómodamente.
        </Subtitle>
      </SubtitleWraper>
        <Wrapper>
          <Features>
            <FeatureIcon icon='users' />
            <Title align='center' weight='500' size='20px'>Open Source</Title>
            <Subtitle weigth='400' size='16px' height='24px' align='center'>
              Somos un proyecto desarrollado por OpenDevs,
              sin ánimo de lucro y 100% gratuito.
            </Subtitle>
          </Features>

          <Features>
            <FeatureIcon icon='heart' />
            <Title align='left' weight='500' size='20px'>Visibilidad</Title>
            <Subtitle weigth='400' size='16px' height='24px'>
              Ayudamos a que todos los animales encuentren
              un hogar donde ser felices.
            </Subtitle>
          </Features>

          <Features>
            <FeatureIcon icon='trending-up' />
            <Title align='left' weight='500' size='20px'>Especializado</Title>
            <Subtitle weigth='400' size='16px' height='24px'>
              Le damos a las protectoras las herramientas que
              necesitan para llevar a cabo su labor.
            </Subtitle>
          </Features>
        </Wrapper>
    </Container>
  )
}
