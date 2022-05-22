import PikachuComplet from '../../img/bannerComplete.png'
import Pikachu from '../../img/banner.png';
import * as S from './styles';

export const Home = () => {
  return (
    <S.Container>
      <S.PikachuImgComplet src={PikachuComplet} alt="Pikachu" />
      <S.ContainerColumn>
        <S.Title><span>Find</span> all your favorite <span>Pokemon</span></S.Title>
        <S.Paragraph>You can know the type of Pokemon, its strengths, disadvantages and abilities</S.Paragraph>
        <S.Button>See pokemons</S.Button>
      </S.ContainerColumn>
      <S.PikachuImg src={Pikachu} alt="Pikachu" />
    </S.Container>
  )
}