import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default TableHeads = () => (
  <View>
    <Text>Today's Tasks</Text>
    <Text>Estimate</Text>
    <Text>Assigned</Text>
    <Text>Done</Text>
    <View style={styles.line}/>
  </View>
)

const styles = StyleSheet.create({
  line: {
    height: 1,
    backgroundColor: 'blue',
  },
})