import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    // Perform signup logic here
    console.log('Sign up button pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My App</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm your password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      <View style={styles.requirements}>
        <View style={styles.requirement}>
          <Text style={styles.requirementText}>
            <Text style={styles.checkmark}>✓</Text> One lowercase character
          </Text>
        </View>
        <View style={styles.requirement}>
          <Text style={styles.requirementText}>
            <Text style={styles.checkmark}>✓</Text> One uppercase character
          </Text>
        </View>
        <View style={styles.requirement}>
          <Text style={styles.requirementText}>
            <Text style={styles.checkmark}>✓</Text> One number
          </Text>
        </View>
        <View style={styles.requirement}>
          <Text style={styles.requirementText}>
            <Text style={styles.checkmark}>✓</Text> 8 characters minimum
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>
          Have an account?
          <Text style={styles.signInText} onPress={() => console.log('Sign in pressed')}>
            Sign In
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    color: '#fff',
  },
  requirements: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  requirement: {
    marginBottom: 10,
    marginRight: 10,
  },
  requirementText: {
    fontSize: 14,
    color: '#fff',
  },
  checkmark: {
    fontSize: 16,
    color: '#4CAF50',
  },
  button: {
    backgroundColor: '#FFC107',
    padding: 15,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
  bottomTextContainer: {
    alignItems: 'center',
  },
  bottomText: {
    fontSize: 16,
    color: '#fff',
  },
  signInText: {
    color: '#FFC107',
  },
});

export default Signup;