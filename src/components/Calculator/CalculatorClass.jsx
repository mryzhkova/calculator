import React from 'react';

import withCalc from '@/components/Calculator/withCalc';
import ControlPanelClass from '@/components/ControlPanel/ControlPanelClass';
import Display from '@/components/Display';
import HistoryClass from '@/components/History/HistoryClass';
import Keypad from '@/components/Keypad';

const Calc = props => {
  const {
    culcValue,
    currentValue,
    showHistory,
    history,
    handelClickButton,
    setShowHistory,
    setCurrentValue,
  } = props;

  return (
    <React.Fragment>
      <Display
        output={culcValue}
        currentOutput={currentValue}
      />
      <Keypad handelClickButton={handelClickButton} />
      <ControlPanelClass
        showHistory={showHistory}
        setShowHistory={setShowHistory}
      />
      <HistoryClass
        history={history}
        setCurrentValue={setCurrentValue}
        showHistory={showHistory}
        setShowHistory={setShowHistory}
      />
    </React.Fragment>
  );
};

export default withCalc(Calc);
