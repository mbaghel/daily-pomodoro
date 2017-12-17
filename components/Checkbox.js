import React from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native'

export default class Checkbox extends React.Component {
  
  _onPress() {
    return null;
  };

  render() {
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={styles.box}>
          <View style={styles.inner}/>
        </View>
      </TouchableOpacity>
    );
  };

}

styles = StyleSheet.create({
  box: {
    height: 30,
    width: 30,
    borderWidth: 1,
  },
  inner: {
    flex: 1,
    margin: 2,
    backgroundColor: 'black',
  }
})