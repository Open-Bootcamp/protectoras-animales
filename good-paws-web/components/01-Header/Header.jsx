import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { Button, Subtitle, Title } from '../ui'
import { MenuButton } from '../ui/MenuButton'

const Navbar = styled.div`
  display: flex;

  @media(max-width: 600px){
    justify-content: space-between;
    align-items: center;
    background-repeat: no-repeat;
    background-position: center;
    height: 75px;
  }

  @media(min-width: 1000px){
    margin: 0px 80px ;
    max-width: 1280px;
  }
`
const Logo_Wrapper = styled.div`
  background-image: url(Logo.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  height: 75px;


  /* background-color: pink; */
  width: 174.1px;
  margin-right: 58px;


  @media(min-width: 600px){
  }
  
`
const Ilu_Wrapper = styled.div`
  background-image: url(Ilustracion.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 462px;
  width: 621px;


  @media(max-width: 1000px){
    display: none;

}
`

const Logos_Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow: scroll;

  margin-top: 32px;
  gap: 30px;

  @media(min-width: 600px){
    justify-content: center;
    gap: 60px;

  }
`
const NavButonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  /* background-color: pink; */
  align-items: center;

  @media(max-width: 1000px){
    display: none;
  
}
`

const CTA_Section = styled.div`
  display: flex;
  @media(min-width: 600px){
    margin:  0px 78px;
    display: flex;
    flex-direction: row;

  }
`

const TitleWrapper = styled.div`
  
  /* width: 746px; */

`


export const Header = () => {
  return (
    <div style={{ display: 'inline-block' }}>

      <Navbar>
        <Link href='/' passHref>
          <Logo_Wrapper />
        </Link>


        <NavButonsContainer>
          <div style={{ display: 'flex', gap: '34px', marginRight: '285px' }}>
            <Button color='white' fontColor='primary' width='auto'>
              Quiero adoptar
            </Button>

            <Button color='white' fontColor='primary' width='auto'>
              Protectoras
            </Button>

            <Button color='white' fontColor='primary'>
              Colaborar
            </Button>
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <Button color='white' fontColor='primary' width='auto'>
              Soy protectora
            </Button>

            <Button color='primary' fontColor='white' size='lg'>
              Iniciar sesion
            </Button>
          </div>
        </NavButonsContainer>

        <MenuButton />
      </Navbar>

      <CTA_Section>
        <TitleWrapper >
          <Title weight='600' mt='16' size='48px' aling='left' >
            Unimos protectoras y
            adoptantes
          </Title>
          <Subtitle weight='400' size='20px' mt='9px' height='30px'>
            Adoptando un animal,
            le das una segunda vida a aquellos
            que no han tenido tanta suerte.
          </Subtitle>
          <div>
            <Button color='accent' size='md' mt='16px' mb='34px'>
              Encuentra a tu mejor amigo
            </Button>
          </div>
        </TitleWrapper>

        <Ilu_Wrapper />


      </CTA_Section>


      <div style={{ padding: '38px 0px' }}>
        <Subtitle weight='500' size='16px' height='24px'>
          Ayudamos a las protectoras a crear
          finales felices.
        </Subtitle>

        <Logos_Wrapper>
          <img src="Shelter_logo.svg" alt="Shelter_logo" />
          <img src="Shelter_logo.svg" alt="Shelter_logo" />
          <img src="Shelter_logo.svg" alt="Shelter_logo" />
          <img src="Shelter_logo.svg" alt="Shelter_logo" />
          <img src="Shelter_logo.svg" alt="Shelter_logo" />
        </Logos_Wrapper>




      </div>


    </div>
  )
}
