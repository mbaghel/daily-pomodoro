import React from 'react'
import { 
  View,
  Text,
  StyleSheet,
} from 'react-native'

export default StatsField = () => (
  <View style={styles.bottom}>
    <Text style={styles.stats}>Active Task: Complete Mockup</Text>
    <Text style={styles.stats}>Pomodoros Finished Today: 3</Text>
    <Text style={styles.stats}>Tasks Completed Today: 1</Text>
  </View>
)

const styles = StyleSheet.create({
  bottom: {
    flex: 1,
    justifyContent: "center",
  },
  stats: {
    fontSize: 18,
    marginBottom: 10,
  },
})