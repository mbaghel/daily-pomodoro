// Handles navigation to settings screen
// and displays SettingsView container.
import React from 'react';

import SettingsView from '../containers/SettingsView';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {

    return (
      <SettingsView/>       
	);
  }
}
