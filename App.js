import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './screens/homescreen';
import ProjectTabScreen from './screens/projecttabscreen';


const RootNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  ProjectTab: { screen: ProjectTabScreen }
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
