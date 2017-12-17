import React from 'react'
import { 
  Button,
  View,
} from 'react-native'

const doNothing = () => {return null};

export default ButtonField = () => (
  <View>
    <Button
      onPress={doNothing}
      title='Start Pomodoro'
    />
  </View>
)