import React from 'react';
import PropTypes from 'prop-types';
import { StyledHistoryButton } from './components';

const HistoryButton = ({ setShowHistory, showHistory }) => {
  const showHistoryHandler = show => () => {
    setShowHistory(!show);
    localStorage.setItem('showHistory', JSON.stringify(!show));
  };

  return (
    <StyledHistoryButton>
      <button
        data-cy="showHistory"
        type="button"
        onClick={showHistoryHandler(showHistory)}>
        Show History
      </button>
    </StyledHistoryButton>
  );
};

HistoryButton.defaultProps = {
  showHistory: true,
  setShowHistory: () => {},
};

HistoryButton.propTypes = {
  setShowHistory: PropTypes.func,
  showHistory: PropTypes.bool,
};

export default HistoryButton;
