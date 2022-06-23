import PropTypes from 'prop-types';
import React from 'react';

import dataCyValues from '@/constants/dataCyValues';
import storageKeys from '@/constants/storageKeys';

import { StyledHistoryButton } from './components';


const HistoryButton = ({ setShowHistory, showHistory }) => {
  const showHistoryHandler = show => () => {
    setShowHistory(!show);
    localStorage.setItem(storageKeys.showHistory, JSON.stringify(!show));
  };

  return (
    <StyledHistoryButton>
      <button
        data-cy={dataCyValues.showHistory}
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
