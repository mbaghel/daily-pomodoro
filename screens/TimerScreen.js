import React from 'react'
import { View } from 'react-native'

import TimeDisplay from '../components/TimeDisplay'
import ButtonField from '../components/ButtonField'
import StatsField from '../components/StatsField'

export default class TimerScreen extends React.Component {
  static navigationOptions = {
    title: 'Timer',
  };

  render() {

    return (
      <View>
        <View>
          <TimeDisplay/>
          <ButtonField/>
        </View>
        <StatsField/>
      </View>  
    )
  }
}