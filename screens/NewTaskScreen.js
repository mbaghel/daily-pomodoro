import React from 'react';
import { 
  TextInput,
  View,
  Text,
  Slider,
  Button,
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
      <View>
        <TextInput placeholder="Describe your task"/>
        <Text>How many pomodoro's will it take?</Text>
        <Slider 
          maximumValue={8}
          minimumValue={1}
          step={1}
          value={4}
        />
        <Button 
          onPress={this.doNothing}
          title="Cancel"
        />
        <Button
          onPress={this.doNothing}
          title="Submit"
        />
      </View>
    )
  }
}