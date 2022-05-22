import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5.8rem;
  z-index: 10;
  background-color: ${({theme}) => theme.colors.third};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 8.75rem;
  box-shadow: 0px 4px 16px 0px hsla(214, 97%, 13%, 0.2);

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 1.25rem 2.375rem;
  }
`;

export const LinksUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3.45rem;
`;

export const LinkLi = styled.a`
  text-decoration: none;
  font-size: ${({theme}) => theme.fonts.sizes.h4};
  font-weight: 700;
  font-family: ${({theme}) => theme.fonts.family.karla};
  color: ${({theme}) => theme.colors.dark};

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 10rem;
`;

export const ContainerSmallScreen = styled.div`
  display: none;

  @media screen and (max-width: 767px) {
    display: flex;
  }
`;

export const IconMenu = styled.i`
  color: ${({theme}) => theme.colors.dark};
  font-size: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const OverlaySmallScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 65vh;
  background: linear-gradient(180deg, ${({theme}) => theme.colors.third} 0%, ${({theme}) => theme.colors.primary} 100%);
  transition: .5s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 50;
  border-radius: 24px;
`;

export const IconClose = styled.i`
  font-size: 4rem;
  color: ${({theme}) => theme.colors.dark};
  cursor: pointer;
  position: absolute;
  top: 2rem;
  right: 2rem;
`;

export const LinksUlSmallScreen = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const LinkLiSmallScreen = styled.a`
  text-decoration: none;
  text-align: center;
  font-size: ${({theme}) => theme.fonts.sizes.h3};
  font-weight: 700;
  font-family: ${({theme}) => theme.fonts.family.karla};
  color: ${({theme}) => theme.colors.dark};
  transition: 0.3s;

  &:hover {
    color: ${({theme}) => theme.colors.white};
    text-shadow: 2px 2px ${({theme}) => theme.colors.dark};
  }
`;

export const LogoSmallScreen = styled.img`
  width: 15rem;
  margin-bottom: 3rem;
`;