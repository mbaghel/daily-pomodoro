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
