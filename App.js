import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import HomeScreen from './screens/homescreen';
import ProjectDetailScreen from './screens/projectdetailscreen';
import ProjectStudentScreen from './screens/projectstudents';

const TabNavigation = TabNavigator({
  ProjectDetail: { screen: ProjectDetailScreen },
  StudentScreen: { screen: ProjectStudentScreen }
});

const RootNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  ProjectTab: { screen: TabNavigation }
  }, { 
    initialRouteName: 'Home'
  });



export default class App extends Component {
  render() {
    return (
      <RootNavigator />
    );
  }
}
