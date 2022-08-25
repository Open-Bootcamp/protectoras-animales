import React from 'react'
import styled from 'styled-components'
import { FeatureIcon, Subtitle, Title } from '../ui'

export const Container = styled.div`
  margin: 0px 12px;
  background-color: #f9fafb;
  text-align: center;
  padding: 6rem 0;

  @media (prefers-color-scheme: dark) {
    color: black;
  }

  @media (max-width: 600px) {
    padding: 0px;
    height: auto;
    margin: 0px 12px;
    text-align: center;
    padding: 1rem;
  } ;
`
export const Wrapper = styled.div`
  display: inline-flex;
  padding: 0px 100px;

  /* max-width: 1280px; */

  @media (max-width: 600px) {
    padding: 0px;
    /* background-color: pink; */
    flex-direction: column;
    align-items: center;
  } ;
`
const SubtitleWraper = styled.div`
  @media (min-width: 600px) {
    padding: 10px 25%;
  }
`
const Features = styled.div`
  margin-top: 40px;
  text-align: center;
  padding: 0px 13px;
`

export const About_us = () => {
  return (
    <Container>
      <Title mx="0px" mb="1.5rem" weight="600" size="36px">
        ¿Qué sómos?
      </Title>
      <SubtitleWraper>
        <Subtitle weight="500" size="20px" height="30px">
          Somos un proyecto Open Source, destinado a ayudar a las protectoras para que puedan
          realizar su trabajo más cómodamente.
        </Subtitle>
      </SubtitleWraper>
      <div style={{ display: 'flex' }}>
        <Wrapper>
          <Features>
            <FeatureIcon icon="users" />
            <Title align="center" weight="500" size="20px">
              Open Source
            </Title>
            <Subtitle weigth="400" size="16px" height="24px" align="center">
              Somos un proyecto desarrollado por OpenDevs, sin ánimo de lucro y 100% gratuito.
            </Subtitle>
          </Features>

          <Features>
            <FeatureIcon icon="heart" />
            <Title align="left" weight="500" size="20px">
              Visibilidad
            </Title>
            <Subtitle weigth="400" size="16px" height="24px">
              Ayudamos a que todos los animales encuentren un hogar donde ser felices.
            </Subtitle>
          </Features>

          <Features>
            <FeatureIcon icon="trending-up" />
            <Title align="left" weight="500" size="20px">
              Especializado
            </Title>
            <Subtitle weigth="400" size="16px" height="24px">
              Le damos a las protectoras las herramientas que necesitan para llevar a cabo su labor.
            </Subtitle>
          </Features>
        </Wrapper>
      </div>
    </Container>
  )
}
