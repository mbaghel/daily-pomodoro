import React from 'react'
import { 
  View,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native'

import { DefaultText } from '../components/StyledText'

export default class StatsScreen extends React.Component {
  static navigationOptions  = {
    title: "Statistics",
  };

  render() {
    
    const Table = () => (
      <View>
        <View style={styles.row}>
          <DefaultText>Pomodoros done</DefaultText>
          <DefaultText>8</DefaultText>
        </View>
        <View style={styles.row}>
          <DefaultText>Target Pomodoros</DefaultText>
          <DefaultText>8</DefaultText>
        </View>
        <View style={styles.row}>
          <DefaultText>Tasks Complete</DefaultText>
          <DefaultText>3</DefaultText>
        </View>
      </View>
    )

    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headtext}>
            Total
          </Text>
        </View>
        <Table/>
        <View style={styles.header}>
          <Text style={styles.headtext}>
            Average
          </Text>
        </View>
        <Table/>
        <View style={styles.header}>
          <Text style={styles.headtext}>
            Today
          </Text>
        </View>
        <Table/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  header: {
    borderBottomWidth: 3,
    borderBottomColor: "darkslategrey",
    marginBottom: 10,
    marginTop: 10,
  },
  headtext: {
    fontSize: 24,
  }, 
  row: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});