// TODO: pomodoroCount to Redux, add sound + notification, buttons |source https://github.com/expo/pomodoroexp
// Connected container - needs settings and pomodoroCount from Redux
import React from 'react';
import { 
  View,
  StyleSheet,
  Button,
  Text
} from 'react-native';
import { connect } from 'react-redux';

import TimeDisplay from '../components/TimeDisplay'
import ButtonField from '../components/ButtonField'
import { DefaultText } from '../components/StyledText';

const mapStateToProps = (state) => {
  return ({
    settings : state.settings,
  });
}

class TimerView extends React.Component {
  state = {
    countdownState: 'idle',
    lastTick: null,
    endTime: null,
    // TODO: store and get pomodoroCount from Redux
    pomodoroCount: 0
  };

  // Temp method to update pomodoroCount
  pomodoroDidComplete() {
    this.setState(prevState => {
      return {pomodoroCount: prevState.pomodoroCount + 1};
    });
  }

  // Method to render Time Display in different states
  renderTimeRemaining() {
    const { settings } = this.props;
    const { countdownState, lastTick, endTime } = this.state;
    let minutesRemaining;
    let secondsRemaining;

    if (endTime && lastTick) {
      minutesRemaining = Math.floor((endTime - lastTick) / 1000 / 60);
      secondsRemaining = Math.round(
        (endTime - lastTick) / 1000 - minutesRemaining * 60
      );
    } else if (countdownState === 'idle' && !endTime && !lastTick) {
      minutesRemaining = Math.floor(settings.pomodoroLength);
      secondsRemaining = Math.round(
        (settings.pomodoroLength - minutesRemaining) * 60
      );
    } else if (countdownState === 'breakIdle' && !endTime && !lastTick) {
      minutesRemaining = Math.floor(settings.shortBreak);
      secondsRemaining = Math.round(
        (settings.shortBreak - minutesRemaining) * 60
      );
    } else if (countdownState === 'longIdle' && !endTime && !lastTick) {
      minutesRemaining = Math.floor(settings.longBreak);
      secondsRemaining = Math.round(
        (settings.longBreak - minutesRemaining) * 60
      );
    } else {
      console.log({error: true, endTime, lastTick});
    }

    return (
      <TimeDisplay 
        minutes={minutesRemaining} 
        seconds={secondsRemaining}
      />
    );
  }

  // TODO: Render different buttons depending on state
  renderButtons() {
    const { countdownState } = this.state;

    if (countdownState === 'idle' || countdownState === 'breakIdle' || countdownState === 'longIdle') {
      return (
        <View style={styles.buttons}>
          <Button
            onPress={() => {
              this.startTimer()
            }}
            title='Start'
          />
        </View>
      );
    } else {
      return (
        <View style={styles.buttons}>
          <Button
            onPress={() => {
              this.restartTimer()
            }}
            title='Reset'
          />
          <Button
            onPress={() => {
              this.skipTimer()
            }}
            title='End'
          />
        </View>
      );
    }
  }

  // Pause timer !Not Working! -- Timer needs to update countdownState on resume or session end
  /*
  pauseTimer() {
    this.setState({countdownState: 'paused'}, () => {
      clearInterval(this.timer);
      this.timer = null;

    });
  }
  */

  // TODO
  restartTimer() {
    if (this.state.countdownState === 'active') {
      this.readyTimer();
    } else {
      this.readyBreak();
    }
  }

  //TODO
  skipTimer() {
    if (this.state.countdownState === 'active') {
      this.pomodoroDidComplete();
      this.readyBreak();
    } else {
      this.readyTimer();
    }
  }

  // Reset timer after work session
  readyBreak() {
    const { settings } = this.props;
    clearInterval(this.timer);

    this.setState(prevState => {
      const breakCheck = prevState.pomodoroCount % settings.numPomodoros;
      if (breakCheck === 0) {
        return {countdownState: 'longIdle', lastTick: null, endTime: null};
      } else {
        return {countdownState: 'breakIdle', lastTick: null, endTime: null};
      }
    });
  }

  // Reset timer after break
  readyTimer() {
    clearInterval(this.timer);

    this.setState({countdownState: 'idle', lastTick: null, endTime: null});
    return null;
  }

  // Start timer (must work for all 3 idle states)
  startTimer() {
    const { settings } = this.props;
    clearInterval(this.timer);

    let currentTime = new Date().getTime();
    let endTime;

    // Set endTime for return from pause and for idle states (breakPause state?)
    if (
      this.state.countdownState === 'paused' &&
      this.state.lastTick &&
      this.state.endTime
    ) {
      let timeIdle = currentTime - this.state.lastTick;
      endTime = this.state.endTime + timeIdle;
    } else if ( this.state.countdownState === 'idle') {
      endTime = currentTime + settings.pomodoroLength * 60 * 1000;
    } else if ( this.state.countdownState === 'breakIdle') {
      endTime = currentTime + settings.shortBreak * 60 * 1000;
    } else {
      endTime = currentTime + settings.longBreak * 60 * 1000;
    }
    
    // Set state to active or breakActive and fire callbacks 
    this.setState(
      (prevState) => {
        if (prevState.countdownState === 'idle') {
          return {countdownState: 'active', endTime, lastTick: currentTime};
        } else {
          return {countdownState: 'breakActive', endTime, lastTick: currentTime};
        }  
      },
      async () => {
        // TODO: Schedule notifications or play sound when timer goes

        // Start ticker
        // work session
        if (this.state.countdownState === 'active') {
          this.timer = setInterval(
            () => {
              let lastTick = new Date().getTime();
              if (lastTick > endTime) {
                this.pomodoroDidComplete();
                this.readyBreak();
              } else {
                this.setState({ lastTick });
              }
            }, 1000
          ); 
        // break
        } else {
          this.timer = setInterval(
            () => {
              let lastTick = new Date().getTime();
              if (lastTick > endTime) {
                this.readyTimer();
              } else {
                this.setState({ lastTick });
              }
            }, 1000
          );
        }
      }
    );
  }

  // Render heading dependent on countdownState
  renderHead() {
    const { countdownState, pomodoroCount } = this.state;

    if (pomodoroCount === 0 && countdownState === 'idle') {
      return (
        <DefaultText>Ready to get started?</DefaultText>
      );
    } else if (countdownState === 'active') {
      return (
        <DefaultText>Pomodoro active</DefaultText>
      );
    /*
    } else if (countdownState === 'paused') {
      return (
        <DefaultText>Paused</DefaultText>
      );
    */
    } else if (countdownState === 'breakIdle') {
      return (
        <DefaultText>Pomodoro done! Time to take a break</DefaultText>
      );
    } else if (countdownState === 'breakActive') {
      return (
        <DefaultText>Enjoy your break</DefaultText>
      );
    } else if (countdownState === 'idle') {
      return (
        <DefaultText>Break's over. Start another pomodoro</DefaultText>
      );
    } else {
      return (
        <DefaultText>Pomodoro done! Time for a long break</DefaultText>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          {this.renderHead()}
          {this.renderTimeRemaining()}
          {this.renderButtons()}
        </View>
        <View style={styles.bottom}>
          <Text style={styles.stats}>Active Task: Complete Mockup</Text>
          <Text style={styles.stats}>Pomodoros Finished Today: {this.state.pomodoroCount}</Text>
          <Text style={styles.stats}>Tasks Completed Today: 1</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  top: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  bottom: {
    flex: 1,
    justifyContent: "center",
  },
  stats: {
    fontSize: 18,
    marginBottom: 10,
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    alignSelf: "stretch"
  }
});

export default connect(mapStateToProps)(TimerView);
