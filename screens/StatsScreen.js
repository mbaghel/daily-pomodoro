import React from 'react'
import { 
  View,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native'

export default class StatsScreen extends React.Component {
  static navigationOptions  = {
    title: "Statistics",
  };

  render() {
    
    const Table = () => (
      <View>
        <Text>Pomodoros done</Text>
        <Text>Target pomodoros</Text>
        <Text>Tasks completed</Text>
      </View>
    )

    return (
      <View>
        <Text style={styles.header}>
          Total
        </Text>
        <Table/>
        <Text style={styles.header}>
          Average
        </Text>
        <Table/>
        <Text style={styles.header}>
          Today
        </Text>
        <Table/>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  header: {
    fontSize: 24,
  }, 
});