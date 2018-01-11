import React from 'react'
import { 
  View,
  StyleSheet,
} from 'react-native'

import TimerView from '../containers/TimerView'
import StatsField from '../components/StatsField'

export default class TimerScreen extends React.Component {
  static navigationOptions = {
    title: 'Timer',
  };

  render() {

    return (
      <View style={styles.container}>
        <TimerView/>
        <StatsField/>
      </View>  
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  }
});