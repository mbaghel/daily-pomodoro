import React from 'react';
import { 
  Slider,
  Text,
  View,
 } from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {

    return (
      <View>
        <View>
          <Text>Pomodoro length: 25 minutes</Text>
          <Slider 
            maximumValue={45}
            minimumValue={15}
            step={5}
            value={25}
          />
        </View>
        <View>
          <Text>Short break length: 5 minutes</Text>
          <Slider 
            maximumValue={5}
            minimumValue={3}
            step={1}
            value={5}
          />
        </View>
        <View>
          <Text>Long break length: 15 minutes</Text>
          <Slider 
            maximumValue={30}
            minimumValue={10}
            step={5}
            value={15}
          />
        </View>        
        <View>
          <Text>Pomodoros before long break: 4</Text>
          <Slider 
            maximumValue={8}
            minimumValue={2}
            step={1}
            value={4}
          />
        </View> 
      </View>       
	);
  }
}
