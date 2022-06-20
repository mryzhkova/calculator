import React from 'react';
import { StyledButton } from './components';

const Button = ({ value, clickHandler, dataCy }) => (
  <StyledButton data-cy={dataCy} onClick={clickHandler}>
    {value}
  </StyledButton>
);

export default Button;
