import React from 'react'
import { View } from 'react-native'

import { MonoText } from './StyledText'
import { padNumber } from './helpers'

export default class TimeDisplay extends React.Component {

  render() {
    const { minutes, seconds } = this.props;

    return(  
      <View style={{ alignItems: "center" }}>
        <MonoText style={{ fontSize: 100 }}>{`${padNumber(minutes, 2)}:${padNumber(seconds, 2)}`}</MonoText>
      </View>
    );
  }
}