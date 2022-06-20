import styled, { css } from 'styled-components';
import themesValues from '@constants/themesValues';


const StyledControlPanel = styled.div`
  grid-area: controlPanel;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  & button {
    border: none;
    background: none;
  }
  & button i {
    margin-right: ${({ theme }) => theme.spaces[4]}px;
    cursor: pointer;
    color: ${({ theme }) => theme.lightTheme.gray};
    ${({theme}) => theme.currentTheme === themesValues.dark && css`
      color: ${props => props.theme.colors.white};
    `}
  }
`;

export default StyledControlPanel;