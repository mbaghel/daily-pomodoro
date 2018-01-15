import React from 'react'
import { 
  Button,
  View,
  StyleSheet,
} from 'react-native'

export default class ButtonField extends React.Component {

  onStartPress() {
    const { onStart } = this.props
    onStart();
  }

  render() {
    return (
      <View style={styles.field}>
      <Button 
        onPress={this.onStartPress}
        title='Start Pomodoro'
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  field: {
    padding: 20,
  },
});