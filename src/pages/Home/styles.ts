import styled from 'styled-components'

export const Container = styled.div`
  background: linear-gradient(180deg, ${({theme}) => theme.colors.third} 0%, ${({theme}) => theme.colors.primary} 100%);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  padding: 10rem 0 5rem 9rem;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;

  //desktop responsive
  @media screen and (max-width: 1050px) {
    padding: 0;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 1160px) {
    padding: 0 0 0 3rem;
  }

  @media screen and (max-width: 1350px) and (min-width: 1170px) {
    padding: 0 0 0 6rem;
  }

  @media screen and (min-width: 2000px) {
    padding: 10rem 0 5rem 12rem;
  }
`;

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10rem;

  //desktop responsive
  @media screen and (max-width: 1050px) {
    align-items: center;
    margin-top: 0;
    margin-right: 0;
  }

  @media screen and (max-width: 1350px) {
    margin-right: 5rem;
  }

  @media screen and (min-width: 1850px) {
    margin-right: 20rem;
  }

  @media screen and (min-width: 2560px) {
    margin-right: 30rem;
  }
`;

export const Title = styled.h1`
  font-size: ${({theme}) => theme.fonts.sizes.h1};
  font-weight: 400;
  font-family: ${({theme}) => theme.fonts.family.karla};
  line-height: 5rem;
  letter-spacing: 4px;
  color: ${({theme}) => theme.colors.dark};
  margin-bottom: 2.5rem;

  span {
    font-weight: 700;
  }

  //desktop responsive
  @media screen and (min-width: 1850px) {
    margin-bottom: 2.8rem;
  }

  @media screen and (min-width: 2000px) {
    margin-bottom: 3.5rem;
  }

  @media screen and (min-width: 2560px) {
    margin-bottom: 4rem;
  }
`;

export const Paragraph = styled.p`
  font-size: ${({theme}) => theme.fonts.sizes.p2};
  font-weight: 400;
  font-family: ${({theme}) => theme.fonts.family.karla};
  line-height: 37.41px;
  color: ${({theme}) => theme.colors.dark};
  margin-bottom: 2.5rem;

  //desktop responsive
  @media screen and (min-width: 1850px) {
    margin-bottom: 2.8rem;
  }

  @media screen and (min-width: 2000px) {
    margin-bottom: 3.5rem;
  }

  @media screen and (min-width: 2560px) {
    margin-bottom: 4rem;
  }
`;

export const Button = styled.button`
  font-size: ${({theme}) => theme.fonts.sizes.h4};
  font-weight: 700;
  font-family: ${({theme}) => theme.fonts.family.karla};
  line-height: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4.125rem;
  width: 14.45rem;
  padding: 17px;
  background-color: hsla(122, 54%, 64%, 1);
  box-shadow: 0px -9px 0px 0px hsla(0, 0%, 0%, 0.18) inset;
  border-radius: 11px;
  cursor: pointer;

  &:hover {
    filter: brightness(1.05);
  }

  &:active {
    filter: brightness(0.95);
  }
`;

export const PikachuImg = styled.img`
  width: 40rem;

  //desktop responsive
  @media screen and (max-width: 1050px) {
    display: none;
  }

  @media screen and (max-width: 1160px) {
    width: 35rem;
  }

  @media screen and (min-width: 1850px) {
    width: 120rem;
  }
`;

export const PikachuImgComplet = styled.img`
  display: none;
  width: 50rem;

  //tablet responsive
  @media screen and (max-width: 580px) {
    display: flex;
    width: 30rem;
  }

  @media screen and (max-width: 780px) and (min-width: 581px) {
    display: flex;
    width: 40rem;
  }

  //desktop responsive
  @media screen and (max-width: 1050px) {
    display: flex;
    position: relative;
    bottom: -3rem;
  }
`;