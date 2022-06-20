import styled, { css } from 'styled-components';
import themesValues from '@constants/themesValues';

const HomeLayout = styled.div`
  display: grid;
  grid-template-rows: 0.1fr 0.5fr 0.4fr;
  grid-template-columns: 3fr 1fr;
  grid-template-areas: 
    'display controlPanel'
    'display history'
    'keypad history';
  ${({theme}) => theme.currentTheme === themesValues.dark && css`
    background: ${props => props.theme.darkTheme.darkThemeGray};
  `}
  ${({ theme }) => theme.below.xs`
    grid-template-rows: 0.5fr 0.4fr 0.1fr;
    grid-template-columns: 1fr;
    grid-template-areas: 
    'display'
    'keypad'
    'controlPanel'
    'history';
  `}
`;

export default HomeLayout;