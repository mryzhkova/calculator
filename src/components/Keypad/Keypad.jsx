import React from 'react';
import PropTypes from 'prop-types';
import btnsValues from '@constants/btnsValues';
import Button from './Button';
import { StyledKeypad } from './components';

const Keypad = ({ clickHandler }) => (
  <StyledKeypad>
    {btnsValues.map(btn => (
      <Button
        clickHandler={clickHandler}
        value={btn}
        key={btn}
        dataCy={btn}
      />
    ))}
  </StyledKeypad>
);

Keypad.defaultProps = {
  clickHandler: () => {},
};

Keypad.propTypes = {
  clickHandler: PropTypes.func,
};

export default Keypad;
