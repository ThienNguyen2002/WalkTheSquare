import React, { useState } from 'react';
import { View, Platform, KeyboardAvoidingView } from 'react-native';
import { Button, Input, Text } from '@rneui/base';
import { StyleSheet } from 'react-native';

const LoginScreen = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in with credentials:', login, password);
  };

  const handleSignUp = () => {
    console.log('Signing up with credentials:', login, password);
    // Implement your sign-up logic here
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Sign In</Text>
        <Input
          placeholder="Login"
          value={login}
          onChangeText={(text) => setLogin(text)}
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
