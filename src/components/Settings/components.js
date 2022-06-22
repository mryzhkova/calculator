import styled, { css } from 'styled-components';

import themesValues from '@/constants/themesValues';


const StyledSettings = styled.div`
  & .title {
    font-size: ${({ theme }) => theme.fontSizes[6]}px;
  }
  & .settings {
    margin: ${({ theme }) => theme.spaces[4]}px \ 
      ${({ theme }) => theme.spaces[3]}px;
    & .switch {
      font-size: ${({ theme }) => theme.fontSizes[0]}px;
    }
  }
  ${({theme}) => theme.currentTheme === themesValues.dark && css`
    color: ${props => props.theme.colors.white};
  `}
`;

export const ResetButton = styled.button`
  margin-top: ${({ theme }) => theme.spaces[3]}px;
  width: 180px;
  height: 40px;
  text-align: start;
  border-radius: 3px;
  cursor: pointer;
  padding: ${({ theme }) => theme.spaces[2]}px;
  ${({theme}) => theme.currentTheme === themesValues.light && css`
    background: ${props => props.theme.lightTheme.whiteDark};
    border: 1px solid ${props => props.theme.lightTheme.gray};
    &:hover {
      background: ${props => props.theme.lightTheme.hoverWhiteDark};
    }
  `}
  ${({theme}) => theme.currentTheme === themesValues.dark && css`
    background: ${props => props.theme.darkTheme.darkThemeGray};
    border: 1px solid ${props => props.theme.darkTheme.yellow};
    color: ${props => props.theme.colors.white};
    &:hover {
      background: ${props => props.theme.darkTheme.hoverGray};
    }
  `}
  ${({theme}) => theme.currentTheme === themesValues.colored && css`
    background: ${props => props.theme.coloredTheme.blue};
    border: none;
    color: ${props => props.theme.colors.white};
    font-weight: 300;
    &:hover {
      background: ${props => props.theme.coloredTheme.hoverBlue};
    }
  `}
`;

export default StyledSettings;