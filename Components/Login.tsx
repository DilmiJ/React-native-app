import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('example@app.com');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Add your sign in logic here
    console.log('You have successfully signed in!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My App</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <Text style={styles.forgotPassword}>Forgot Password? <Text style={styles.link}>Click Here</Text></Text>
      <Text style={styles.noAccount}>Don't have an account? <Text style={styles.link}>Sign Up</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  forgotPassword: {
    fontSize: 16,
    marginTop: 20,
  },
  noAccount: {
    fontSize: 16,
    marginTop: 10,
  },
  link: {
    textDecorationLine: 'underline',
    color: 'blue',
  },
});

export default Login;
