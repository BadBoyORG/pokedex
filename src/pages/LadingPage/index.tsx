import { useQuery } from 'react-query';
import { client } from '../../services/client';
import { PokemonList } from '../../services/models/pokemon';
import { PokemonCard } from '../../components/PokemonCard';
import * as S from './styles'

export const LandingPage = () => {
  const { isLoading, data: pokemonList } = useQuery('pokemon', async () => await client.get<PokemonList>('pokemon').then((response) => response.data));

  if (isLoading) return <div>Carregando...</div>

  return (
    <S.Container>
      {pokemonList?.results.map((pokemon, index) => {
        return (
          <PokemonCard key={index} name={pokemon.name} />
        )
      })}
    </S.Container>
  )
};