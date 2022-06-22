import React, { useRef, useState, useEffect, useCallback } from 'react';

import ControlPanel from '@/components/ControlPanel';
import Display from '@/components/Display';
import History from '@/components/History';
import Keypad from '@/components/Keypad';
import { digits, operations } from '@/constants/btnsValues';
import storageKeys from '@/constants/storageKeys';
import { getResult, makeCommand } from '@/helpers/command';
import {
  checkDots,
  checkOperations,
} from '@/helpers/validations';


const Calculator = () => {
  const [culcValue, setCulcValue] = useState('');
  const [currentValue, setCurrentValue] = useState('');
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(true);

  const historyValue = useRef('');

  const execute = useCallback(
    command => command.execute(command.value, currentValue),
    [currentValue],
  );

  useEffect(() => {
    setHistory(
      JSON.parse(localStorage.getItem(storageKeys.history)) || [],
    );
    setShowHistory(
      localStorage.getItem(storageKeys.showHistory) === null
        ? true
        : JSON.parse(localStorage.getItem(storageKeys.showHistory)),
    );
  }, []);

  const handelClickButton = useCallback(event => {
    const value = event.target.textContent;
    if (currentValue && currentValue.includes('(')) {
      if (digits.includes(value)) {
        if (!checkDots(currentValue.split(' '), value))
          return;
        setCurrentValue(currentValue + value);
        historyValue.current += value;
      } else if (operations.includes(value)) {
        if (currentValue === '( ' && value !== '-') return;
        if (
          !checkOperations(
            operations,
            currentValue.split(' '),
          )
        )
          return;
        setCurrentValue(`${currentValue} ${value} `);
        historyValue.current += ` ${value} `;
      } else if (value === ')') {
        const last = currentValue[currentValue.length - 1];
        if (last === ' ' || last === '.') return;
        const exp = currentValue.slice(
          currentValue.lastIndexOf('('),
        );
        const res = getResult(exp.slice(1));
        const newValue = currentValue.slice(
          0,
          currentValue.lastIndexOf('('),
        ) + res;
        setCurrentValue(newValue.toString());
        if (culcValue) {
          historyValue.current += value;
        } else {
          const newHistory = [
            ...history,
            {
              value: `${historyValue.current})`,
              res,
              id: history.length,
            },
          ];
          setHistory(newHistory);
          localStorage.setItem(
            storageKeys.history,
            JSON.stringify(newHistory),
          );
          historyValue.current = res;
        }
      } else if (value === '(') {
        if (currentValue[currentValue.length - 1] === ' ') {
          setCurrentValue(`${currentValue} ${value} `);
          historyValue.current += value;
        }
      } else if (value === '+/-') {
        const last = currentValue[currentValue.length - 1];
        if (last === '.') return;
        if (digits.includes(last)) {
          const currentArr = currentValue.split(' ');
          const current = currentArr.pop();
          currentArr.push(
            current[0] === '-'
              ? current.slice(1)
              : `-${current}`,
          );
          setCurrentValue(currentArr.join(' '));
        }
      } else if (value === 'C') {
        setCurrentValue('');
        setCulcValue('');
        historyValue.current = '';
      } else if (value === 'CE') {
        const last = currentValue[currentValue.length - 1];
        if (last === ' ') {
          const newValue = currentValue.slice(
            0,
            currentValue.length - 3,
          );
          setCurrentValue(newValue);
          historyValue.current = culcValue + newValue;
        } else {
          const newValue = currentValue.slice(
            0,
            currentValue.length - 1,
          );
          setCurrentValue(newValue);
          historyValue.current = culcValue + newValue;
        }
      }
    } else if (value === '(') {
      if (
        operations.includes(currentValue)
        || currentValue === ''
      ) {
        setCurrentValue(`${value} `);
        historyValue.current += value;
      }
    } else if (digits.includes(value)) {
      if (value === '.' && currentValue.includes('.'))
        return;
      if (operations.includes(currentValue))
        setCurrentValue(value);
      else setCurrentValue(currentValue + value);
      historyValue.current += value;
    } else if (operations.includes(value)) {
      if (operations.includes(currentValue)) return;
      if (currentValue === '.') return;
      if (operations.some(o => culcValue.includes(o))) {
        const sign = culcValue[culcValue.length - 1];
        const num = culcValue.slice(
          0,
          culcValue.length - 1,
        );
        const res = execute(makeCommand(sign, num));
        setCurrentValue(value);
        setCulcValue(res + value);
      } else {
        setCurrentValue(value);
        setCulcValue(currentValue + value);
      }
      historyValue.current += ` ${value} `;
    } else if (value === '+/-') {
      if (currentValue === '.') return;
      if (!operations.some(o => currentValue === o)) {
        const newValue = currentValue[0] === '-'
          ? currentValue.slice(1)
          : `-${currentValue}`;
        setCurrentValue(newValue);
        historyValue.current = historyValue.current.split(' ');
        historyValue.current.pop();
        historyValue.current = `${historyValue.current.join(
          ' ',
        )} ${newValue}`;
      }
    } else if (value === '=') {
      if (operations.includes(currentValue)) return;
      if (currentValue === '.') return;
      const sign = culcValue[culcValue.length - 1];
      const num = culcValue.slice(0, culcValue.length - 1);
      let res = execute(makeCommand(sign, num));
      res = parseFloat(res.toFixed(3)).toString();
      setCurrentValue(res);
      setCulcValue('');
      const newHistory = [
        ...history,
        {
          value: historyValue.current,
          res,
          id: history.length,
        },
      ];
      setHistory(newHistory);
      localStorage.setItem(
        storageKeys.history,
        JSON.stringify(newHistory),
      );
      historyValue.current = res;
    } else if (value === 'C') {
      setCurrentValue('');
      setCulcValue('');
      historyValue.current = '';
    } else if (value === 'CE') {
      setCurrentValue('');
      const last = culcValue.split('').pop();
      historyValue.current = `${culcValue.slice(
        0,
        culcValue.length - 1,
      )} ${last} `;
    }
  }, [culcValue, currentValue, execute, history]);

  return (
    <React.Fragment>
      <Display
        output={culcValue}
        currentOutput={currentValue}
      />
      <Keypad handelClickButton={handelClickButton} />
      <ControlPanel
        showHistory={showHistory}
        setShowHistory={setShowHistory}
      />
      <History
        history={history}
        setCurrentValue={setCurrentValue}
        showHistory={showHistory}
        setShowHistory={setShowHistory}
      />
    </React.Fragment>
  );
};

export default Calculator;
