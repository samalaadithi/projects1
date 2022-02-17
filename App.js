// In App.js in a new project

import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Explore from './Screens/Explore';

import Dashboard from './Screens/Dashboard';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Explore} />
    </HomeStack.Navigator>
  );
}
const DashboardStack = createNativeStackNavigator();
function DashboardStackScreen() {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen name="Dashboard" component={Dashboard} />
    </DashboardStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'black',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Dashboard"
          component={DashboardStackScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
