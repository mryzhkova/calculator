import styled, { css } from 'styled-components';

import themesValues from '@/constants/themesValues';


export const StyledKeypad = styled.div`
  grid-area: keypad;
  display: grid;
  grid-template-columns: repeat(5, 60px);
  grid-template-rows: repeat(5, 60px);
  justify-content: center;
  align-content: center;
  grid-column-gap: ${({ theme }) => theme.spaces[5]}px;
  grid-row-gap: ${({ theme }) => theme.spaces[4]}px;
  ${({ theme }) => theme.below.small`
     grid-column-gap: ${props => props.theme.spaces[4]}px;
  `}
  ${({ theme }) => theme.below.xs`
     grid-column-gap: ${props => props.theme.spaces[3]}px;
  `}
`;

export const StyledButton = styled.button`
  width: 60px;
  height: 60px;
  border: 1px solid ${({ theme }) => theme.lightTheme.lightGray};
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
  font-weight: 400;
  cursor: pointer;
  ${({theme}) => theme.currentTheme === themesValues.colored && css`
    background: ${props => props.theme.coloredTheme.blue};
    color: ${props => props.theme.colors.white};
    border: none;
    font-weight: 300;
  `}
  ${({theme}) => theme.currentTheme === themesValues.dark && css`
    background: ${props => props.theme.darkTheme.darkThemeGray};
    color: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.darkTheme.yellow};
  `}
  &:hover {
    ${({theme}) => theme.currentTheme === themesValues.light && css`
      background: ${props => props.theme.lightTheme.hoverWhiteDark};
    `}
    ${({theme}) => theme.currentTheme === themesValues.colored && css`
      background: ${props => props.theme.coloredTheme.hoverBlue};
    `}
    ${({theme}) => theme.currentTheme === themesValues.dark && css`
      background: ${props => props.theme.darkTheme.hoverGray};
    `}
  }
`;