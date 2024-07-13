import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>

      <TextInput 
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName} 
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    color: '#fff',
  },
});

export default Profile;
