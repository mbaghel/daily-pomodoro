import React from 'react'
import {
  View,
  ScrollView,
  Button,
  StyleSheet,
} from 'react-native'

import TableHeads from '../components/TableHeads'
import TaskList from '../components/TaskList'

export default class TasksScreen extends React.Component {
  static navigationOptions = {
    title: 'Tasks',
    headerTitleStyle: {
      fontWeight: 'normal',
    },
  };

  render() {
    const {navigation} = this.props
    return (
      <View style={styles.container}>
        <ScrollView style={styles.table}>
          <TableHeads/>
          <TaskList/>
          </ScrollView>
        <View>
          <Button 
            onPress={() => navigation.navigate('NewTask')}
            title="Add new task"
          />
          <Button
            onPress={() => {return null}}
            title="Review and end day"
            color="darkred"
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between"
  },
  table: {
    padding: 10,
    flex: 1,
  },
});