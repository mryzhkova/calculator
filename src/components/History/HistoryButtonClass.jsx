import React from 'react';
import PropTypes from 'prop-types';
import { StyledHistoryButton } from './components';

class HistoryButtonClass extends React.Component {

  showHistoryHandler = show => () => {
    const { setShowHistory } = this.props;
    setShowHistory(!show);
    localStorage.setItem('showHistory', JSON.stringify(!show));
  };

  render() {
    const { showHistory } = this.props;
    return (
      <StyledHistoryButton>
        <button
          type="button"
          onClick={this.showHistoryHandler(showHistory)}>
          Show History
        </button>
      </StyledHistoryButton>
    );
  }
};

HistoryButtonClass.defaultProps = {
  showHistory: true,
  setShowHistory: () => {},
};

HistoryButtonClass.propTypes = {
  setShowHistory: PropTypes.func,
  showHistory: PropTypes.bool,
};

export default HistoryButtonClass;
