import styled, { css } from 'styled-components';

import themesValues from '@/constants/themesValues';


const StyledSelect = styled.div`
  position: relative;
  & select {
    z-index: 1;
    position: relative;
    appearance: none;
    display: block;
    width: 180px;
    height: 40px;
    background: none;
    border-radius: 3px;
    padding: ${({ theme }) => theme.spaces[2]}px;
    font-family: inherit;
    font-size: ${({ theme }) => theme.fontSizes[1]}px;
    ${({theme}) => theme.currentTheme === themesValues.dark && css`
      border: 1px solid ${props => props.theme.darkTheme.yellow};
      color: ${props => props.theme.colors.white};
      & option {
        background: ${props => props.theme.darkTheme.darkThemeGray};
      }
    `}
    ${({theme}) => theme.currentTheme === themesValues.colored && css`
      border: 1px solid ${props => props.theme.coloredTheme.blue};
      font-weight: 300;
    `}
  }
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px 5.5px 0 5.5px;
    ${({theme}) => theme.currentTheme === themesValues.light && css`
      border-color: ${props => props.theme.lightTheme.lightGray}
        transparent transparent transparent;
    `}
    ${({theme}) => theme.currentTheme === themesValues.dark && css`
      border-color: ${props => props.theme.darkTheme.darkGray}
        transparent transparent transparent;
    `}
    ${({theme}) => theme.currentTheme === themesValues.colored && css`
      border-color: ${props => props.theme.coloredTheme.hoverBlue}
        transparent transparent transparent;
    `}
    border-radius: 3px;
    position: absolute;
    top: 17px;
    left: 155px;
    z-index: 0;
  }
`;

export default StyledSelect;