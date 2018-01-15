// TODO: source https://github.com/expo/pomodoroexp
// Connected container - needs settings and pomodoroCount from Redux
import React from 'react';
import { 
  View,
  StyleSheet,
  Button
} from 'react-native';
import { connect } from 'react-redux';

import TimeDisplay from '../components/TimeDisplay'
import ButtonField from '../components/ButtonField'

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
    return null;
  }

  // TODO
  pauseTimer() {
    return null;
  }

  // TODO
  stopTimer() {
    return null;
  }

  // TODO
  readyBreak() {
    return null;
  }

  // TODO
  readyTimer() {
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
    
    // Set state to activeWork or activeBreak and fire callbacks 
    this.setState(
      (prevState) => {
        if (prevState.countdownState === 'idle') {
	  console.log({endTime, currentTime, prevState});
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

  render() {
    return (
      <View style={styles.top}>
        {this.renderTimeRemaining()}
        <Button
          onPress={() => {
            this.startTimer()
          }}
          title='Start Pomodoro'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  top: {
    flex: 1,
    justifyContent: "center"
  }
});

export default connect(mapStateToProps)(TimerView);
