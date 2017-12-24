import React from 'react';
import { 
  ScrollView,
  StyleSheet,
 } from 'react-native';
import { connect } from 'react-redux';

import Option from '../components/Option';
import { changeSetting } from '../redux/settingsRedux';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 100,
  },
 });

const mapStateToProps = (state) => {
  return ({
    settings : state.settings,
  });
}

class SettingsView extends React.Component {

  onChangeSetting = (label, value) => {
    const item = {
      label,
      value,
    }
    const {dispatch} = this.props;
    dispatch(changeSetting(item));
  }

  render() {
    const { settings } = this.props;

    return (
      <ScrollView style={styles.container}>
        <Option
          maximumValue={45}
          minimumValue={15}
          step={5}
          value={settings.pomodoroLength}
          label={"pomodoroLength"}
          onChange={this.onChangeSetting}
        >
          Pomodoro length:
        </Option>
        <Option
          maximumValue={5}
          minimumValue={3}
          step={1}
          value={settings.shortBreak}
          label={"shortBreak"}
          onChange={this.onChangeSetting}
        >
          Short break length:
        </Option>
        <Option
          maximumValue={30}
          minimumValue={10}
          step={5}
          value={settings.longBreak}
          label={"longBreak"}
          onChange={this.onChangeSetting}
        >
          Long break length:
        </Option>
        <Option
          maximumValue={8}
          minimumValue={2}
          step={1}
          value={settings.numPomodoros}
          label={"numPomodoros"}
          onChange={this.onChangeSetting}
        >
          Pomodoros before long break:
        </Option>

      </ScrollView>
    );
  }
}

export default connect(mapStateToProps)(SettingsView);