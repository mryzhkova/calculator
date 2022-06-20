import React from 'react';
import Select from '@components/Select';
import StyledSettings, { ResetButton } from './components';

const Settings = () => {
  const clearHistory = () => {
    localStorage.removeItem('history');
  };

  return (
    <StyledSettings>
      <div className="title">Settings</div>
      <div className="settings">
        <div className="switch">Switch Theme</div>
        <Select />
        <ResetButton
          data-cy="clearHistory"
          onClick={clearHistory}>
          Clear All History
        </ResetButton>
      </div>
    </StyledSettings>
  );
};

export default Settings;
