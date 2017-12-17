import React from 'react'
import { 
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native'

import Checkbox from './Checkbox'

export default class TaskList extends React.Component {

  render() {

    return(
      <View style={styles.row}>
          <Text>Placeholder</Text>
          <Text>3</Text>
          <Text>2</Text>
        <Checkbox/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
})