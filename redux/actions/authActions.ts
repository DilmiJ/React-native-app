import { Dispatch } from 'redux';
import { FirebaseAuthTypes } from '@react-native-firebase/auth'; // Import types from Firebase auth
import auth from '@react-native-firebase/auth'; // Import auth module from Firebase

import { fetchUserProfile } from '../actions/profileActions'; // Example profile action

export const signIn = (email: string, password: string) => async (dispatch: Dispatch) => {
  try {
    const userCredential: FirebaseAuthTypes.UserCredential = await auth().signInWithEmailAndPassword(email, password);
    const user = userCredential.user;
    dispatch(fetchUserProfile(user.uid)); // Example: fetch user profile after sign in
  } catch (error) {
    console.error('Sign in error:', error);
    // Handle error (e.g., show error message)
  }
};

export const signUp = (email: string, password: string) => async (dispatch: Dispatch) => {
  try {
    const userCredential: FirebaseAuthTypes.UserCredential = await auth().createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;
    dispatch(fetchUserProfile(user.uid)); // Example: fetch user profile after sign up
  } catch (error) {
    console.error('Sign up error:', error);
    // Handle error (e.g., show error message)
  }
};

export const signOut = () => async (dispatch: Dispatch) => {
  try {
    await auth().signOut();
    dispatch({ type: 'SIGN_OUT' }); // Example: clear user state on sign out
  } catch (error) {
    console.error('Sign out error:', error);
    // Handle error (e.g., show error message)
  }
};
