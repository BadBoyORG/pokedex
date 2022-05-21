import styled from "styled-components";
import { TypeNames } from "../../services/models/types";

export const Card = styled.article`
  width: 22rem;
  height: 8.55rem;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 3rem 3rem;
  padding: 0;
  overflow-y: hidden;
  overflow-x: visible;
  box-shadow: 5px 5px 6px hsla(0, 0%, 0%, 0.15);
`;

export const ImageCard = styled.div<{ type?: TypeNames }>`
  background: ${({ type, theme }) => {
    if (type === "grass") return theme.colors.green
    if (type === "fire") return theme.colors.orange
    if (type === "bug") return theme.colors.green
    if (type === "normal") return theme.colors.blue
    if (type === "dark") return theme.colors.grey
    if (type === "dragon") return theme.colors.orange
    if (type === "water") return theme.colors.lightBlue
    if (type === "ice") return theme.colors.lightBlue
    if (type === "electric") return theme.colors.yellow
    if (type === "rock") return theme.colors.grey
    if (type === "ground") return theme.colors.brown
    if (type === "ghost") return theme.colors.purple
    if (type === "psychic") return theme.colors.purple
    if (type === "fairy") return theme.colors.purple
    if (type === "poison") return theme.colors.purple
    if (type === "fighting") return theme.colors.orange
    if (type === "flying") return theme.colors.blue
    if (type === "steel") return theme.colors.grey
    if (type === "shadow") return theme.colors.blue 
    if (type === "unknown") return theme.colors.grey

    return theme.colors.grey
  }};
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 0 8px 8px 0;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  height: 115%;
  width: auto;
`;

export const InfoCard = styled.div`
  background-color: ${({theme}) => theme.colors.white};
  width: 7.48rem;
  height: 100%;
  border-radius: 8px 0 0 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px 25px;
  z-index: 1;
`;

export const Paragraph = styled.p`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.h5};
  font-family: ${({ theme }) => theme.fonts.family.karla};
  text-transform: capitalize;
  text-shadow: 2px 2px #2121211A;
`;

export const CardStatusRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0 .5rem 0;
  gap: .5rem;
`;

export const CardStatusColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .4rem;
`;

export const ParagraphStatus = styled.p`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes.h6};
  font-family: ${({ theme }) => theme.fonts.family.karla};
  color: #4B4B4B;
  text-transform: capitalize;
`;

export const NumberStatus = styled.div`
  border: 3.5px solid ${({ theme }) => theme.colors.dark};
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.family.karla};
  color: ${({ theme }) => theme.colors.dark};
`;

export const Types = styled.div<{ type?: TypeNames }>`
  background: ${({ type, theme }) => {
    if (type === "grass") return theme.colors.green
    if (type === "fire") return theme.colors.orange
    if (type === "bug") return theme.colors.green
    if (type === "normal") return theme.colors.blue
    if (type === "dark") return theme.colors.grey
    if (type === "dragon") return theme.colors.orange
    if (type === "water") return theme.colors.lightBlue
    if (type === "ice") return theme.colors.lightBlue
    if (type === "electric") return theme.colors.yellow
    if (type === "rock") return theme.colors.grey
    if (type === "ground") return theme.colors.brown
    if (type === "ghost") return theme.colors.purple
    if (type === "psychic") return theme.colors.purple
    if (type === "fairy") return theme.colors.purple
    if (type === "poison") return theme.colors.purple
    if (type === "fighting") return theme.colors.orange
    if (type === "flying") return theme.colors.blue
    if (type === "steel") return theme.colors.grey
    if (type === "shadow") return theme.colors.blue 
    if (type === "unknown") return theme.colors.grey

    return theme.colors.grey
  }};
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.family.sourceSansPro};
  font-size: ${({theme}) => theme.fonts.sizes.h6};
  text-transform: capitalize;
  height: 1.2rem;
  width: 3.75rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  border-radius: 15px;
  box-shadow: 0px -2px 0px 0px hsla(0, 0%, 0%, 0.18) inset;
`;
