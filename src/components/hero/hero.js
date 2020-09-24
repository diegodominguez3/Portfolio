import React from 'react'
import { withPrefix } from 'gatsby'
import siteConfig from '../../../data/siteConfig'
import styled from 'styled-components'

const HeroContainer = styled.div`
  position: relative;
  display: table;
  width: 100%;
  overflow: hidden;
`

const TitleContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 100%;
`

const HeroTitle = styled.h1`
  font-weight: 700;
  font-size: 2.4rem;
  margin: 10px 60px;
  color: #fff;
  text-shadow: 1px 1px 10px rgba(34, 34, 34, 0.8);
`
const HeroSubtitle = styled.h2`
  font-weight: 700; 
  font-size: 2rem;
  max-width: 40%;
  margin: 2rem auto; 
  color: #fff;
  text-shadow: 1px 1px 10px rgba(34, 34, 34, 0.8);
  @media (max-width: 768px) {
    max-width: 100%; 
  }
  @media (max-width: 1024px) {
    max-width: 60%; 
  }
`

const Hero = ({className, title, subtitle}) => (
  <HeroContainer className={className}>
    <TitleContainer>
      <HeroTitle>{title}</HeroTitle>
      <HeroSubtitle>{subtitle}</HeroSubtitle>
    </TitleContainer>
  </HeroContainer>
)

export default styled(Hero)`
  ${p => `background-image: url(${p.heroImg || withPrefix(siteConfig.siteCover)});`}
  height: 70vh;
  background-attachment: fixed;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
`
