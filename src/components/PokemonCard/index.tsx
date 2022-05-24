import { useQuery } from 'react-query';
import { client } from '../../services/client';
import { Pokemon } from '../../services/models/pokemon';
import * as S from './styles'

type PokemonCardProps = {
  name: string;
};

export const PokemonCard: React.FC<PokemonCardProps> = ({ name }) => {
  const { isLoading, data: pokemon } = useQuery(`pokemon-${name}`, async () => await client.get<Pokemon>(`pokemon/${name}`).then((res) => res.data ) );

  if (isLoading) return <div>Carregando...</div>
  
  return (
    <S.Card >
      <S.InfoCard>
        <S.Paragraph>{pokemon?.name}</S.Paragraph>
        <S.CardStatusRow>
          <S.CardStatusColumn>
            <S.NumberStatus>{pokemon?.stats[1].base_stat}</S.NumberStatus>
            <S.ParagraphStatus>{pokemon?.stats[1].stat.name}</S.ParagraphStatus>
          </S.CardStatusColumn>
          <S.CardStatusColumn>
            <S.NumberStatus>{pokemon?.stats[2].base_stat}</S.NumberStatus>
            <S.ParagraphStatus>{pokemon?.stats[2].stat.name}</S.ParagraphStatus>
          </S.CardStatusColumn>         
        </S.CardStatusRow>
        <S.CardTypes>
          {
           pokemon?.types.map(type => (
             <S.Types type={type.type.name}>{type.type.name}</S.Types>
           ))
          }
        </S.CardTypes>
      </S.InfoCard>
      <S.ImageCard type={pokemon?.types[0].type.name}>
        <S.Image src={pokemon?.sprites.other['official-artwork'].front_default} />
      </S.ImageCard>
    </S.Card>
  )
}