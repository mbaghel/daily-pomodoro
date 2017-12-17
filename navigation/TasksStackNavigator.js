import React from 'react';
import { StackNavigator } from 'react-navigation';

import TasksScreen from '../screens/TasksScreen'
import NewTaskScreen from '../screens/NewTaskScreen'

export default StackNavigator(
  {
    Tasks: {
      screen: TasksScreen,
    },
    NewTask: {
      screen: NewTaskScreen,
    },
  }
);