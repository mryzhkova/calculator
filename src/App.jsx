import React, { useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Calculator from '@/components/Calculator';
import CalculatorService from '@/components/Calculator/CalculatorService';
import Header from '@/components/Header';
import Settings from '@/components/Settings';
import SettingsClass from '@/components/Settings/SettingsClass';
import dataCyValues from '@/constants/dataCyValues';
import storageKeys from '@/constants/storageKeys';
import themesValues from '@/constants/themesValues';
import HomeLayout from '@/layouts/HomeLayout';
import MainLayout from '@/layouts/MainLayout';
import SettingsLayout from '@/layouts/SettingsLayout';
import theme from '@/themes/theme';

const DEFAULT_THEME = localStorage.getItem(storageKeys.theme) || themesValues.light;


const App = () => {
  const [currentTheme, setCurrentTheme] = useState(DEFAULT_THEME);

  const toggleTheme = value => {
    setCurrentTheme(value);
    localStorage.setItem(storageKeys.theme, value);
  };

  const appTheme = useMemo(
    () => ({ ...theme, currentTheme, toggleTheme }),
    [currentTheme],
  );

  return (
    <ThemeProvider theme={appTheme}>
      <MainLayout>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <HomeLayout data-cy={dataCyValues.home}>
                <Calculator />
              </HomeLayout>
            }
          />
          <Route
            path="/class"
            element={
              <HomeLayout>
                <CalculatorService />
              </HomeLayout>
            }
          />
          <Route
            path="/settings"
            element={
              <SettingsLayout data-cy={dataCyValues.settings}>
                <Settings />
              </SettingsLayout>
            }
          />
          <Route
            path="/settings-class"
            element={
              <SettingsLayout>
                <SettingsClass />
              </SettingsLayout>
            }
          />
        </Routes>
      </MainLayout>
    </ThemeProvider>
  );
};

export default App;
