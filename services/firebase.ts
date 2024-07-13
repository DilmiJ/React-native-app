import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';
import 'firebase/analytics'; // Import Firebase Analytics if needed

const firebaseConfig = {
  // Your Firebase config here
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export default firebase;
