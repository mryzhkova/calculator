import PropTypes from 'prop-types';
import React from 'react';

import dataCyValues from '@/constants/dataCyValues';
import storageKeys from '@/constants/storageKeys';

import StyledControlPanel from './components';


const ControlPanel = ({ showHistory, setShowHistory }) => {
  const showHistoryHandler = show => () => {
    setShowHistory(!show);
    localStorage.setItem(storageKeys.showHistory, JSON.stringify(!show));
  };

  return (
    <StyledControlPanel>
      {showHistory && (
        <button
          data-cy={dataCyValues.hideHistory}
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
