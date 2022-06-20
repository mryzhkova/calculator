import React from 'react';
import PropTypes from 'prop-types';
import StyledControlPanel from './components';

class ControlPanelClass extends React.Component {

  showHistoryHandler = show => () => {
    const { setShowHistory } = this.props;
    setShowHistory(!show);
    localStorage.setItem('showHistory', JSON.stringify(!show));
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
