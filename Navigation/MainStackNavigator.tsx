import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Components/Login';
import SignupScreen from '../Components/Signup';
import HomeScreen from '../Components/HomeScreen';
import ProfileScreen from '../Components/Profile';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
