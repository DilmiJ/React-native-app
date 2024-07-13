import firebase from '../services/firebase';

export const fetchUserProfile = async (userId: string) => {
  try {
    const userRef = firebase.firestore().collection('users').doc(userId);
    const snapshot = await userRef.get();
    if (snapshot.exists) {
      return snapshot.data();
    } else {
      throw new Error('User profile not found');
    }
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};
