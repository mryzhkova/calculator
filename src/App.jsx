import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import MainLayout from '@layouts/MainLayout';
import HomeLayout from '@layouts/HomeLayout';
import SettingsLayout from '@layouts/SettingsLayout';
import Header from '@components/Header';
import Settings from '@components/Settings';
import Calculator from '@components/Calculator';
import SettingsClass from '@components/Settings/SettingsClass';
import CalculatorClass from '@components/Calculator/CalculatorClass';
import themesValues from '@constants/themesValues';
import theme from '@themes/theme';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(
    themesValues.light,
  );

  useEffect(() => {
    setCurrentTheme(
      localStorage.getItem('theme') || themesValues.light,
    );
  }, []);

  const toggleTheme = value => {
    setCurrentTheme(value);
    localStorage.setItem('theme', value);
  };

  const appTheme = { ...theme, currentTheme, toggleTheme };

  return (
    <ThemeProvider theme={appTheme}>
      <MainLayout>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <HomeLayout data-cy="home">
                <Calculator />
              </HomeLayout>
            }
          />
          <Route
            path="/class"
            element={
              <HomeLayout>
                <CalculatorClass />
              </HomeLayout>
            }
          />
          <Route
            path="/settings"
            element={
              <SettingsLayout data-cy="setting">
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
