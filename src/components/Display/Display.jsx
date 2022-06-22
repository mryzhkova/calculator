import PropTypes from 'prop-types';
import React from 'react';

import dataCyValues from '@/constants/dataCyValues';

import StyledDisplay from './components';


const Display = ({ output, currentOutput }) => (
  <StyledDisplay>
    <div data-cy={dataCyValues.output} className="output">
      {output}
    </div>
    <div data-cy={dataCyValues.currentOutput} className="currentOutput">
      {currentOutput || 0}
    </div>
  </StyledDisplay>
);

Display.defaultProps = {
  output: '',
};

Display.propTypes = {
  output: PropTypes.string,
};

export default Display;
