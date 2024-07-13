import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { signOut } from '../redux/actions/authActions';
import { fetchUserProfileAction } from '../redux/actions/profileActions';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const userProfile = useSelector((state: RootState) => state.profile.userProfile);

  useEffect(() => {
    if (user.uid) {
      dispatch(fetchUserProfileAction(user.uid)); // Fetch user profile when user is available
    }
  }, [dispatch, user]);

  const handleSignOut = () => {
    dispatch(signOut()); // Dispatch signOut action from authActions
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.userInfo}>Name: {userProfile.name}</Text>
      <Text style={styles.userInfo}>Email: {user.email}</Text>
      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Text style={styles.signOutButtonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  userInfo: {
    fontSize: 18,
    marginBottom: 10,
  },
  signOutButton: {
    marginTop: 20,
    backgroundColor: '#FF5733',
    padding: 10,
    borderRadius: 5,
  },
  signOutButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Profile;
