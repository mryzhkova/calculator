import PropTypes from 'prop-types';
import React from 'react';

import storageKeys from '@/constants/storageKeys';

import StyledControlPanel from './components';


class ControlPanelClass extends React.Component {

  showHistoryHandler = show => () => {
    const { setShowHistory } = this.props;
    setShowHistory(!show);
    localStorage.setItem(storageKeys.showHistory, JSON.stringify(!show));
  };

  render() {
    const { showHistory } = this.props;
    return (
      <StyledControlPanel>
        {showHistory && (
          <button
            type="button"
            onClick={this.showHistoryHandler(showHistory)}>
            <i className="fas fa-times" />
          </button>
        )}
      </StyledControlPanel>
    );
  }
};

ControlPanelClass.defaultProps = {
  showHistory: true,
  setShowHistory: () => {},
};

ControlPanelClass.propTypes = {
  setShowHistory: PropTypes.func,
  showHistory: PropTypes.bool,
};

export default ControlPanelClass;
