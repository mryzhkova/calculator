import React from 'react';
import PropTypes from 'prop-types';
import StyledControlPanel from './components';

const ControlPanel = ({ showHistory, setShowHistory }) => {
  const showHistoryHandler = show => () => {
    setShowHistory(!show);
    localStorage.setItem('showHistory', JSON.stringify(!show));
  };

  return (
    <StyledControlPanel>
      {showHistory && (
        <button
          data-cy="hideHistory"
          type="button"
          onClick={showHistoryHandler(showHistory)}>
          <i className="fas fa-times" />
        </button>
      )}
    </StyledControlPanel>
  );
};

ControlPanel.defaultProps = {
  showHistory: true,
  setShowHistory: () => {},
};

ControlPanel.propTypes = {
  setShowHistory: PropTypes.func,
  showHistory: PropTypes.bool,
};

export default ControlPanel;
