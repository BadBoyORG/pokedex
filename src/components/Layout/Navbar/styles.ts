import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5.8rem;
  z-index: 1000;
  background-color: ${({theme}) => theme.colors.third};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 8.75rem;
  box-shadow: 0px 4px 16px 0px hsla(214, 97%, 13%, 0.2);
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
`;

export const Logo = styled.img`
  width: 10rem;
`;