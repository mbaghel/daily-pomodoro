import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import TasksStackNavigator from './TasksStackNavigator';
import TimerScreen from '../screens/TimerScreen';
import SettingsScreen from '../screens/SettingsScreen';
import StatsScreen from '../screens/StatsScreen';


export default TabNavigator(
  {
    Tasks: {
      screen: TasksStackNavigator,
      navigationOptions: {
        header: null,
      },
    },
    Timer: {
      screen: TimerScreen,
    },
    Statistics: {
      screen: StatsScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Tasks':
            iconName =
              Platform.OS === 'ios'
                ? `ios-list-box${focused ? '' : '-outline'}`
                : 'md-list-box';
            break;
          case 'Timer':
            iconName = Platform.OS === 'ios' ? `ios-timer${focused ? '' : '-outline'}` : 'md-timer';
            break;
          case 'Statistics':
            iconName = Platform.OS === 'ios' ? `ios-stats${focused ? '' : '-outline'}` : 'md-stats';
            break;
          case 'Settings':
            iconName =
              Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
