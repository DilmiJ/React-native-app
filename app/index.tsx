import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from'../redux/reducers/rootReducer'; // Adjust the path as per your project structure
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import ProfileScreen from '../Components/Profile';
import HomeScreen from '@/Components/HomeScreen';
import SignupScreen from '@/Components/Signup';
import Login from '@/Components/Login';

/*// Initialize Firebase (replace with your Firebase project credentials)
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  databaseURL: 'YOUR_DATABASE_URL',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}*/

// Create Redux store
const store = createStore(rootReducer, applyMiddleware(thunk));

// Navigation stack
const Stack = createStackNavigator();

const index = () => {
  useEffect(() => {
    // Listener to check if user is authenticated
    const unsubscribe = firebase.auth().onAuthStateChanged((user: { uid: any; }) => {
      if (user) {
        // User is signed in.
        console.log('User is signed in:', user.uid);
      } else {
        // No user is signed in.
        console.log('No user is signed in');
      }
    });

    // Clean up listener
    return unsubscribe;
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default index;
