import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default TableHeads = () => (
  <View style={styles.tableHead}>
    <Text>Today's Tasks</Text>
    <Text>Estimate</Text>
    <Text>Assigned</Text>
    <Text>Done?</Text>
  </View>
)

const styles = StyleSheet.create({
  tableHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 3,
    borderBottomColor: 'darkslategrey',
  },
})