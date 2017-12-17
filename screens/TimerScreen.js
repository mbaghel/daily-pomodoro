import React from 'react'
import { 
  View,
  StyleSheet,
} from 'react-native'

import TimeDisplay from '../components/TimeDisplay'
import ButtonField from '../components/ButtonField'
import StatsField from '../components/StatsField'

export default class TimerScreen extends React.Component {
  static navigationOptions = {
    title: 'Timer',
  };

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <TimeDisplay/>
          <ButtonField/>
        </View>
        <StatsField/>
      </View>  
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  top: {
    flex: 1,
    justifyContent: "center"
  }
});