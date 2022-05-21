import Logo from '../../../img/logo.svg'
import * as S from './styles';

export const Navbar = () => {
  return (
    <S.Container>
      <S.Logo src={Logo} alt="logo" />
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
    </S.Container>
  )
}