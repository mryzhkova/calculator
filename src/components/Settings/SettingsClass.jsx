import React from 'react';

import SelectClass from '@/components/Select/SelectClass';
import storageKeys from '@/constants/storageKeys';

import StyledSettings, { ResetButton } from './components';


class SettingsClass extends React.Component {

  static clearHistory = () => {
    localStorage.removeItem(storageKeys.history);
  };

  render() {
    return (
      <StyledSettings>
        <div className="title">Settings</div>
        <div className="settings">
          <div className="switch">Switch Theme</div>
          <SelectClass />
          <ResetButton onClick={SettingsClass.clearHistory}>Clear All History</ResetButton>
        </div>
      </StyledSettings>
    );
  }
};

export default SettingsClass;
