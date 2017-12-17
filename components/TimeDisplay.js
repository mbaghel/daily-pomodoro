import React from 'react'
import { View } from 'react-native'

import { MonoText } from './StyledText'

export default TimeDisplay = () => (
  <View style={{ alignItems: "center" }}>
    <MonoText style={{ fontSize: 100 }}>25:00</MonoText>
  </View>
)