import React from 'react';
import { withTheme } from 'styled-components';

import themesValues from '@/constants/themesValues';

import StyledSelect from './components';


class SelectClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: themesValues.light,
    };
  }

  componentDidMount() {
    const { theme } = this.props;
      this.setState({ option: theme.currentTheme });
  }

  componentDidUpdate(prevProps) {
    const { theme } = this.props;
    if(prevProps.theme.currentTheme !== theme.currentTheme) {
      this.setState({ option: theme.currentTheme });
    }
  }

  chengeSelect = event => {
    const { theme } = this.props;
    this.setState({ option: event.target.value });
    theme.toggleTheme(event.target.value);
  };

  render() {
    const { option } = this.state;
    return (
      <StyledSelect>
        <select value={option} onChange={this.chengeSelect}>
          {Object.values(themesValues).map(value => (
            <option value={value} key={value}>{value}</option>
          ))}
        </select>
      </StyledSelect>
    );
  }
};

export default withTheme(SelectClass);
