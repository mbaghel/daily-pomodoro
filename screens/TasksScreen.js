import React from 'react'
import {
  View,
  Text,
  Button,
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
      <View>
        <TableHeads/>
        <TaskList/>
        <Button 
          onPress={() => navigation.navigate('NewTask')}
          title="Add new task"
        />
      </View>
    )
  }
}