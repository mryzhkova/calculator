import React from 'react';
import PropTypes from 'prop-types';
import StyledHistory from './components';
import HistoryButtonClass from './HistoryButtonClass';

class HistoryClass extends React.Component {

  valueHandler = h => () => {
    const { setCurrentValue } = this.props;
    setCurrentValue(h);
  };

  render() {
    const { showHistory, setShowHistory, history } = this.props;
    return showHistory ? (
      <StyledHistory>
        <div className="title">History</div>
        <div className="history">
          {history.map(h => (
            <button
              type="button"
              key={h.id}
              onClick={this.valueHandler(h.res)}>
              {h.value}
            </button>
          ))}
        </div>
      </StyledHistory>
    ) : <HistoryButtonClass showHistory={showHistory} setShowHistory={setShowHistory}/>;
  }
};

HistoryClass.defaultProps = {
  history: [],
  setCurrentValue: () => {},
  showHistory: true,
};

HistoryClass.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    res:  PropTypes.string,
  })),
  setCurrentValue: PropTypes.func,
  showHistory: PropTypes.bool,
};

export default HistoryClass;
