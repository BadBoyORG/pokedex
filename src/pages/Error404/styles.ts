import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({theme}) => theme.colors.danger};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 5rem 0 0 0;
`;

export const ErrorTeamRocket = styled.img`
  width: 50rem;
  margin: 0;
`;

export const Title = styled.h1`
  color: ${({theme}) => theme.colors.dark};
  font-size: ${({theme}) => theme.fonts.sizes.p3};
  font-weight: 700;
  font-family: ${({theme}) => theme.fonts.family.karla};

  span {
    color: ${({theme}) => theme.colors.white};
  }
`;

export const Button = styled.a`
  text-decoration: none;
  font-size: ${({theme}) => theme.fonts.sizes.h5};
  font-weight: 700;
  font-family: ${({theme}) => theme.fonts.family.karla};
  line-height: 23px;
  color: ${({theme}) => theme.colors.dark};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 3.125rem;
  width: 14.45rem;
  padding: 10px;
  background-color: ${({theme}) => theme.colors.third};
  box-shadow: 0px -9px 0px 0px hsla(0, 0%, 0%, 0.18) inset;
  border-radius: 11px;
  cursor: pointer;
  transition: 0.2s ease;
  margin-top: 3.8rem;

  &:hover {
    filter: brightness(1.05);
    color: ${({theme}) => theme.colors.white};
  }

  &:active {
    filter: brightness(0.95);
    color: ${({theme}) => theme.colors.grey};
  }
`;