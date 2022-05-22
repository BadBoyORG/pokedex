import { useState } from 'react';
import Logo from '../../../img/logo.svg'
import { FiMenu, FiX } from 'react-icons/fi';
import * as S from './styles';


export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <S.Container>
      <S.Logo src={Logo} alt="Pokémon" />
      <S.LinksUl>
        <S.LinkLi href="/home">
          Home  
        </S.LinkLi>
        <S.LinkLi href="/pokedex">
          Pokédex  
        </S.LinkLi> 
        <S.LinkLi href="/error">
          Legendaries
        </S.LinkLi>  
        <S.LinkLi href="/error">
          Documentation
        </S.LinkLi>    
      </S.LinksUl>
      <S.ContainerSmallScreen>
        <S.IconMenu><FiMenu onClick={() => setToggleMenu(true)} /></S.IconMenu>
        
        {toggleMenu && (
          <S.OverlaySmallScreen>
            <S.IconClose><FiX onClick={() => setToggleMenu(false)} /></S.IconClose>
            <S.LogoSmallScreen src={Logo} alt="Pokémon" />
            <S.LinksUlSmallScreen>
              <S.LinkLiSmallScreen href="/home">
                Home
              </S.LinkLiSmallScreen>
              <S.LinkLiSmallScreen href="/pokedex">
                Pokédex
              </S.LinkLiSmallScreen>
              <S.LinkLiSmallScreen href="/error">
                Legendaries
              </S.LinkLiSmallScreen>
              <S.LinkLiSmallScreen href="/error">
               Documentation
              </S.LinkLiSmallScreen>
            </S.LinksUlSmallScreen>
          </S.OverlaySmallScreen>
        )}
      </S.ContainerSmallScreen>
    </S.Container>
  )
}