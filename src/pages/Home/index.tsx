import * as S from './styles'

export const Home = () => {
  return (
    <S.Container>
      <S.ContainerColumn>
        <S.Title><span>Find</span> all your favorite <span>Pokemon</span></S.Title>
        <S.Paragraph>You can know the type of Pokemon, its strengths, disadvantages and abilities</S.Paragraph>
        <S.Button>See pokemons</S.Button>
      </S.ContainerColumn>
    </S.Container>
  )
}