import ErrorTeamRocket from '../../img/errorTeamRocket.png';
import * as S from './styles';

export const Error404 = () => {
  return (
    <S.Container>
      <S.ErrorTeamRocket src={ErrorTeamRocket} alt="Error 404" />

      <S.Title><span>The rocket team</span> has won this time.</S.Title>

      <S.Button href="/">Return</S.Button>
    </S.Container>
  )
}