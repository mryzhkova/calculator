import PropTypes from 'prop-types';
import React from 'react';

import btnsValues from '@/constants/btnsValues';

import Button from './Button';
import { StyledKeypad } from './components';


const Keypad = ({ handelClickButton }) => (
  <StyledKeypad>
    {btnsValues.map(btn => (
      <Button
        handelClickButton={handelClickButton}
        value={btn}
        key={btn}
        dataCy={btn}
      />
    ))}
  </StyledKeypad>
);

Keypad.defaultProps = {
  handelClickButton: () => {},
};

Keypad.propTypes = {
  handelClickButton: PropTypes.func,
};

export default Keypad;
