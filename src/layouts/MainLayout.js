import styled, { css } from 'styled-components';
import themesValues from '@/constants/themesValues';

const MainLayout = styled.div`
  width: 100%;
  height: 100%;
  ${({theme}) => theme.currentTheme === themesValues.dark && css`
    background: ${props => props.theme.darkTheme.darkThemeGray};
  `}
`;

export default MainLayout;