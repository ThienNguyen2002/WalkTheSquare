import React, { useState } from 'react';
import { View, Platform, KeyboardAvoidingView, Alert } from 'react-native';
import { Button, Input, Text } from '@rneui/base';
import { StyleSheet } from 'react-native';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import displayAuthError from '../actions/AuthError';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Logged in successfully');
    } catch (error) {
      console.error('Error logging in:', error);
    if (error instanceof Error) {
      console.error('Error logging in:', error);
      displayAuthError(error as FirebaseError);
    } else {
      console.error('Unknown error:', error);
      Alert.alert('Error', 'Unknown error occurred');
    }
    }
   
  };

  const handleSignUp = async () => {
    
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('Signed up successfully');
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error signing up:', error);
        displayAuthError(error as FirebaseError);
      } else {
        console.error('Unknown error:', error);
        Alert.alert('Error', 'Unknown error occurred');
      }

    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Sign In or Sign Up</Text>
        <Input
          placeholder="Login (Email)"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          style={styles.input}
        />
        <Button onPress={handleLogin} title="Log In" />
        <Text style={styles.orText}>or</Text>
        <Button onPress={handleSignUp} title="Sign Up" />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 10,
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default LoginScreen;
