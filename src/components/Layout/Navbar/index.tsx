import * as S from './styles';

export const Navbar = () => {
  return (
    <S.Container>
      <img alt="logo" />
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