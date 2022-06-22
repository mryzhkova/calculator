import React from 'react';

import { digits, operations } from '@/constants/btnsValues';
import storageKeys from '@/constants/storageKeys';
import { getResult, makeCommand } from '@/helpers/command';
import {
  checkDots,
  checkOperations,
} from '@/helpers/validations';

const withCalc = Calc =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        culcValue: '',
        currentValue: '',
        history: [],
        showHistory: true,
      };
      this.historyValue = '';
    }

    componentDidMount() {
      this.setState({
        history:
          JSON.parse(localStorage.getItem(storageKeys.history)) || [],
      });
      this.setState({
        showHistory:
          localStorage.getItem(storageKeys.showHistory) === null
            ? true
            : JSON.parse(localStorage.getItem(storageKeys.showHistory)),
      });
    }
  
    execute = command => {
      const { currentValue } = this.state;
      return command.execute(command.value, currentValue);
    };
  
    handelClickButton = event => {
      const value = event.target.textContent;
      const { currentValue, culcValue } = this.state;
      if (currentValue && currentValue.includes('(')) {
        if (digits.includes(value)) {
          if (!checkDots(currentValue.split(' '), value))
            return;
          this.setState(state => ({
            currentValue: state.currentValue + value,
          }));
          this.historyValue += value;
        } else if (operations.includes(value)) {
          if (currentValue === '( ' && value !== '-') return;
          if (
            !checkOperations(
              operations,
              currentValue.split(' '),
            )
          )
            return;
          this.setState(state => ({
            currentValue: `${state.currentValue} ${value} `,
          }));
          this.historyValue += ` ${value} `;
        } else if (value === ')') {
          const last = currentValue[currentValue.length - 1];
          if (last === ' ' || last === '.')
            return;
          const exp = currentValue.slice(
            currentValue.lastIndexOf('('),
          );
          const res = getResult(exp.slice(1));
          const newValue = currentValue.slice(
              0,
              currentValue.lastIndexOf('('),
            ) + res;
          this.setState({
            currentValue: newValue.toString(),
          });
          if(culcValue){
            this.historyValue += value;
          }
          else {
            const { history } = this.state;
            const newHistory = [
              ...history,
              { value: `${this.historyValue})`, res, id: history.length },
            ];
            this.setState({ history: newHistory });
            localStorage.setItem(
              storageKeys.history,
              JSON.stringify(newHistory),
            );
            this.historyValue = res;
          }
        } else if (value === '(') {
          if (currentValue[currentValue.length - 1] === ' ') {
            this.setState(state => ({
              currentValue: `${state.currentValue} ${value} `,
            }));
            this.historyValue += value;
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
            this.setState({
              currentValue: currentArr.join(' '),
            });
          }
        } else if (value === 'C') {
          this.setState({ currentValue: '' });
          this.setState({ culcValue: '' });
          this.historyValue = '';
        } else if (value === 'CE') {
          const last = currentValue[currentValue.length - 1];
          if (last === ' ') {
            const newValue = currentValue.slice(
              0,
              currentValue.length - 3,
            );
            this.setState({ currentValue: newValue });
            this.historyValue = culcValue + newValue;
          } else {
            const newValue = currentValue.slice(
              0,
              currentValue.length - 1,
            );
            this.setState({ currentValue: newValue });
            this.historyValue = culcValue + newValue;
          }
        }
      } else if (value === '(') {
        if (
          operations.includes(currentValue)
          || currentValue === ''
        ) {
          this.setState({ currentValue: `${value} ` });
          this.historyValue += value;
        }
      } else if (digits.includes(value)) {
        if (value === '.' && currentValue.includes('.'))
          return;
        if (operations.includes(currentValue))
          this.setState({ currentValue: value });
        else
          this.setState(state => ({
            currentValue: state.currentValue + value,
          }));
        this.historyValue += value;
      } else if (operations.includes(value)) {
        if (operations.includes(currentValue)) return;
        if (currentValue === '.') return;
        if (operations.some(o => culcValue.includes(o))) {
          const sign = culcValue[culcValue.length - 1];
          const num = culcValue.slice(
            0,
            culcValue.length - 1,
          );
          const res = this.execute(makeCommand(sign, num));
          this.setState({ currentValue: value });
          this.setState({ culcValue: res + value });
        } else {
          this.setState(state => ({
            culcValue: state.currentValue + value,
          }));
          this.setState({ currentValue: value });
        }
        this.historyValue += ` ${value} `;
      } else if (value === '+/-') {
        if (currentValue === '.') return;
        if (!operations.some(o => currentValue === o))
          this.setState(state => ({
            currentValue:
              state.currentValue[0] === '-'
                ? state.currentValue.slice(1)
                : `-${state.currentValue}`,
          }));
      } else if (value === '=') {
        if (operations.includes(currentValue)) return;
        if (currentValue === '.') return;
        const sign = culcValue[culcValue.length - 1];
        const num = culcValue.slice(0, culcValue.length - 1);
        let res = this.execute(makeCommand(sign, num));
        res = parseFloat(res.toFixed(3)).toString();
        this.setState({ currentValue: res });
        this.setState({ culcValue: '' });
        const { history } = this.state;
        const newHistory = [
          ...history,
          { value: this.historyValue, res, id: history.length },
        ];
        this.setState({ history: newHistory });
        localStorage.setItem(
          storageKeys.history,
          JSON.stringify(newHistory),
        );
        this.historyValue = res;
      } else if (value === 'C') {
        this.setState({ currentValue: '' });
        this.setState({ culcValue: '' });
        this.historyValue = '';
      } else if (value === 'CE') {
        this.setState({ currentValue: '' });
        const last = culcValue.split('').pop();
        this.historyValue = `${culcValue.slice(0, culcValue.length - 1)} ${last} `;
      }
    };
  
    setShowHistory = value => {
      this.setState({ showHistory: value });
    };
  
    setCurrentValue = value => {
      this.setState({ currentValue: value });
    };

    render() {
      return (
        <Calc
         handelClickButton = {this.handelClickButton}
         setShowHistory = {this.setShowHistory}
         setCurrentValue = {this.setCurrentValue}
         {...this.state}
         {...this.props}/>
      );
    }
  };

export default withCalc;
