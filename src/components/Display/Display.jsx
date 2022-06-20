import React from 'react';
import PropTypes from 'prop-types';
import StyledDisplay from './components';

const Display = ({ output, currentOutput }) => (
  <StyledDisplay>
    <div data-cy="output" className="output">
      {output}
    </div>
    <div data-cy="currentOutput" className="currentOutput">
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
