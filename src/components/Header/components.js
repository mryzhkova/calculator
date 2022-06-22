import styled, { css } from 'styled-components';

import themesValues from '@/constants/themesValues';


const StyledHeader = styled.header`
  ${({theme}) => theme.currentTheme === themesValues.light && css`
    background: ${props => props.theme.lightTheme.gray};
  `}
  ${({theme}) => theme.currentTheme === themesValues.dark && css`
    background: ${props => props.theme.darkTheme.darkGray};
  `}
  ${({theme}) => theme.currentTheme === themesValues.colored && css`
    background: ${props => props.theme.coloredTheme.orange};
  `}
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({theme}) => theme.spaces[3]}px \ 
    ${({theme}) => theme.spaces[4]}px;
  color: ${({theme}) => theme.colors.white};
  & a {
    color: ${({theme}) => theme.colors.white};
    margin-left: ${({theme}) => theme.spaces[3]}px;
    text-decoration: none;
  }
  & a.active {
    border-bottom: 1px solid #fff;
  }
`;

export default StyledHeader;