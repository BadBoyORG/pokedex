import { useQuery } from 'react-query';
import { client } from '../../services/client';
import * as S from './styles'

export const LandingPage = () => {
  const { isLoading, data } = useQuery('charizard', async () => await client.get('pokemon/charizard'));

  if (isLoading) return <div>Carregando...</div>

  return (
    <S.Container>
      <img src={data?.data.sprites.front_default} />
    </S.Container>
  )
};