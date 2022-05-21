import styled from 'styled-components'

export const Container = styled.div`
  background: linear-gradient(180deg, ${({theme}) => theme.colors.third} 0%, ${({theme}) => theme.colors.primary} 100%);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: ${({theme}) => theme.fonts.sizes.h1};
  font-weight: 400;
  font-family: ${({theme}) => theme.fonts.family.karla};
  line-height: 5.27rem;
  letter-spacing: 4px;
  color: ${({theme}) => theme.colors.dark};

  span {
    font-weight: 700;
  }
`;

export const Paragraph = styled.p`
  font-size: ${({theme}) => theme.fonts.sizes.h3};
  font-weight: 400;
  font-family: ${({theme}) => theme.fonts.family.karla};
  line-height: 37.41px;
  color: ${({theme}) => theme.colors.dark};
`;

export const Button = styled.button`
  font-size: ${({theme}) => theme.fonts.sizes.h4};
  font-weight: 700;
  font-family: ${({theme}) => theme.fonts.family.karla};
  line-height: 23px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 4.125rem;
  width: 14.45rem;
  padding: 17px;
  background-color: hsla(122, 54%, 64%, 1);
  box-shadow: 0px -9px 0px 0px hsla(0, 0%, 0%, 0.18) inset;
  border-radius: 11px;
`;