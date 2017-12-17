import React from 'react';
import { 
  TextInput,
  View,
  Text,
  Slider,
  Button,
  StyleSheet,
} from 'react-native'

export default class NewTaskScreen extends React.Component {
  static navigationOptions = {
    title: 'Add New Task',
    headerTitleStyle: {
      fontWeight: 'normal',
    },
  };

  doNothing() {
    return null
  };

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.top}>
          <TextInput
            style={styles.input}
            placeholder="Describe your task"
          />
          <Text style={{ fontSize: 16 }}>How many pomodoro's will it take?</Text>
          <Slider 
            maximumValue={8}
            minimumValue={1}
            step={1}
            value={4}
          />
        </View>
        <View style={styles.bottom}>
          <Button
            style={{ margin: 10 }}
            onPress={this.doNothing}
            title="Cancel"
          />
          <Button
            onPress={this.doNothing}
            title="Submit"
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  top: {
    marginBottom: 20,
  },
  bottom: {
    paddingLeft: 20,
    paddingRight: 20,
    height: 75,
    justifyContent: "space-between",
  },
  input: {
    fontSize: 16,
    padding: 10,
    marginBottom: 10,
  },
})