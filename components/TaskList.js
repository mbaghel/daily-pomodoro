import React from 'react'
import { 
  View,
  TouchableOpacity,
  Text,
} from 'react-native'

import Checkbox from './Checkbox'

export default class TaskList extends React.Component {

  render() {

    return(
      <View>
        <TouchableOpacity onPress={this._onPress}>
          <Text>Placeholder</Text>
          <Text>3</Text>
          <Text>2</Text>
        </TouchableOpacity>
        <Checkbox/>
      </View>
    )
  }
}