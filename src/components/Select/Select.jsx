import React, {
  useContext,
  useEffect,
  useState,
} from 'react';
import { ThemeContext } from 'styled-components';

import dataCyValues from '@/constants/dataCyValues';
import storageKeys from '@/constants/storageKeys';
import themesValues from '@/constants/themesValues';

import StyledSelect from './components';

const DEFAULT_THEME = localStorage.getItem(storageKeys.theme) || themesValues.light;


const Select = () => {
  const [option, setOption] = useState(DEFAULT_THEME);

  const { toggleTheme, currentTheme } = useContext(ThemeContext);

  useEffect(() => {
    setOption(currentTheme);
  }, [currentTheme]);

  const chengeSelect = event => {
    setOption(event.target.value);
    toggleTheme(event.target.value);
  };

  return (
    <StyledSelect>
      <select
        value={option}
        onChange={chengeSelect}
        data-cy={dataCyValues.selectTheme}>
        {Object.values(themesValues).map(value => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
    </StyledSelect>
  );
};

export default Select;
