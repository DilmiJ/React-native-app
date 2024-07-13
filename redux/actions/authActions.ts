import { Dispatch } from 'redux';
import firebase from '../../services/firebase';

export const signIn = (email: string, password: string) => async (dispatch: Dispatch) => {
  try {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
    const user = userCredential.user;
    dispatch({ type: 'SIGN_IN', payload: user });
  } catch (error) {
    console.error('Sign in error:', error);
    throw error;
  }
};

export const signUp = (email: string, password: string) => async (dispatch: Dispatch) => {
  try {
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;
    dispatch({ type: 'SIGN_UP', payload: user });
  } catch (error) {
    console.error('Sign up error:', error);
    throw error;
  }
};

export const signOut = () => async (dispatch: Dispatch) => {
  try {
    await firebase.auth().signOut();
    dispatch({ type: 'SIGN_OUT' });
  } catch (error) {
    console.error('Sign out error:', error);
    throw error;
  }
};
