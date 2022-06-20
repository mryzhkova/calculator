import styled, { css } from 'styled-components';
import themesValues from '@constants/themesValues';


const StyledDisplay = styled.div`
  width: 100%;
  grid-area: display;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spaces[4]}px;
  & div.currentOutput {
    width: 85%;
    display: flex;
    justify-content: flex-end;
    padding: ${({ theme }) => theme.spaces[3]}px \ 
      ${({ theme }) => theme.spaces[4]}px;
    ${({theme}) => theme.currentTheme === themesValues.dark && css`
      color: ${props => props.theme.colors.white};
      border-bottom: 1px solid ${props => props.theme.darkTheme.yellow};
    `}
    ${({theme}) => theme.currentTheme === themesValues.light && css`
      border-bottom: 1px solid ${props => props.theme.lightTheme.gray};
    `}
    ${({theme}) => theme.currentTheme === themesValues.colored && css`
      border-bottom: 1px solid ${props => props.theme.lightTheme.gray};
    `}
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes[5]}px;
  }
  & div.output {
    width: 85%;
    margin-right: ${({ theme }) => theme.spaces[5]}px;
    display: flex;
    justify-content: flex-end;
    ${({theme}) => theme.currentTheme === themesValues.dark && css`
      color: ${props => props.theme.colors.white};
    `}
}
`;

export default StyledDisplay;