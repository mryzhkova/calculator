import React from 'react';
import PropTypes from 'prop-types';
import StyledHistory from './components';
import HistoryButton from './HistoryButton';

const History = ({
  history,
  setCurrentValue,
  showHistory,
  setShowHistory,
}) => {
  const valueHandler = h => () => {
    setCurrentValue(h);
  };

  return showHistory ? (
    <StyledHistory data-cy="history">
      <div className="title">History</div>
      <div className="history">
        {history.map(h => (
          <button
            data-cy={`${h.id}h`}
            type="button"
            key={h.id}
            onClick={valueHandler(h.res)}>
            {h.value}
          </button>
        ))}
      </div>
    </StyledHistory>
  ) : (
    <HistoryButton
      showHistory={showHistory}
      setShowHistory={setShowHistory}
    />
  );
};

History.defaultProps = {
  history: [],
  setCurrentValue: () => {},
  showHistory: true,
};

History.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      res: PropTypes.string,
    }),
  ),
  setCurrentValue: PropTypes.func,
  showHistory: PropTypes.bool,
};

export default History;
