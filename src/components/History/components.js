import styled, { css } from 'styled-components';
import themesValues from '@constants/themesValues';


const StyledHistory = styled.div`
  grid-area: history;
  ${({ theme }) =>
    theme.currentTheme === themesValues.dark
    && css`
      border-left: 1px solid
        ${props => props.theme.darkTheme.yellow};
      color: ${props => props.theme.colors.white};
    `}
  ${({ theme }) =>
    theme.currentTheme === themesValues.light
    && css`
      border-left: 1px solid
        ${props => props.theme.lightTheme.gray};
    `}
  ${({ theme }) =>
    theme.currentTheme === themesValues.colored
    && css`
      border-left: 1px solid
        ${props => props.theme.coloredTheme.gray};
    `}
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  & .title {
    text-align: center;
  }
  & .history {
    overflow-y: scroll;
    margin: ${({ theme }) => theme.spaces[4]}px;
    margin-right: ${({ theme }) => theme.spaces[3]}px;
    height: 90%;
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.lightTheme.gray};
      border-radius: 6px;
    }
    ${({ theme }) => theme.below.xs`
        height: 30%
    `}
  }
  & .history button {
    display: block;
    margin: ${({ theme }) => theme.spaces[4]}px \ 
      ${({ theme }) => theme.spaces[0]}px;
    background: none;
    border: none;
    font-size: ${({ theme }) => theme.fontSizes[3]}px;
    cursor: pointer;
    color: inherit;
  }
  & .history button:first-child {
    margin-top: ${({ theme }) => theme.spaces[0]}px;
  }
  & .history button:last-child {
    margin-bottom: ${({ theme }) => theme.spaces[0]}px;
  }
`;

export default StyledHistory;

export const StyledHistoryButton = styled.div`
  grid-area: history;
  text-align: right;
  padding-right: ${({ theme }) => theme.spaces[5]}px;
  & button {
    width: 100px;
    height: 35px;
    cursor: pointer;
    border-radius: 5px;
    ${({ theme }) =>
      theme.currentTheme === themesValues.light
      && css`
        border: 1px solid
          ${props => props.theme.lightTheme.lightGray};
        &:hover {
          background-color: ${props =>
            props.theme.lightTheme.hoverWhiteDark};
        }
      `}
    ${({ theme }) =>
      theme.currentTheme === themesValues.dark
      && css`
        border: 1px solid
          ${props => props.theme.darkTheme.yellow};
        background-color: ${props =>
          props.theme.darkTheme.darkThemeGray};
        color: ${props => props.theme.colors.white};
        &:hover {
          background-color: ${props =>
            props.theme.darkTheme.hoverGray};
        }
      `}
    ${({ theme }) =>
      theme.currentTheme === themesValues.colored
      && css`
        border: 1px solid
          ${props => props.theme.coloredTheme.lightGray};
        background-color: ${props =>
          props.theme.coloredTheme.blue};
        color: ${props => props.theme.colors.white};
        &:hover {
          background-color: ${props =>
            props.theme.coloredTheme.hoverBlue};
        }
      `}
  }
`;