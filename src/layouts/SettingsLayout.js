import styled, { css } from 'styled-components';
import themesValues from '@/constants/themesValues';

const SettingsLayout = styled.div`
  padding: ${({theme}) => theme.spaces[5]}px;
  ${({theme}) => theme.currentTheme === themesValues.dark && css`
    background: ${props => props.theme.darkTheme.darkThemeGray};
  `}
`;

export default SettingsLayout;