import React, {
  useContext,
  useEffect,
  useState,
} from 'react';
import { ThemeContext } from 'styled-components';
import themesValues from '@constants/themesValues';
import StyledSelect from './components';

const Select = () => {
  const [option, setOption] = useState(themesValues.light);

  const { toggleTheme, currentTheme } = useContext(ThemeContext);

  useEffect(() => {
    setOption(currentTheme);
  }, [currentTheme]);

  const chengeSelect = e => {
    setOption(e.target.value);
    toggleTheme(e.target.value);
  };

  return (
    <StyledSelect>
      <select
        value={option}
        onChange={chengeSelect}
        data-cy="select-theme">
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
