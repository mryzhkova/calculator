import React from 'react';

import { StyledButton } from './components';


const Button = ({ value, handelClickButton, dataCy }) => (
  <StyledButton data-cy={dataCy} onClick={handelClickButton}>
    {value}
  </StyledButton>
);

export default Button;
