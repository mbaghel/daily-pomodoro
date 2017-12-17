import React from 'react'
import { 
  Button,
  View,
  StyleSheet,
} from 'react-native'

const doNothing = () => {return null};

export default ButtonField = () => (
  <View style={styles.field}>
    <Button 
      onPress={doNothing}
      title='Start Pomodoro'
    />
  </View>
)

const styles = StyleSheet.create({
  field: {
    padding: 20,
  },
});