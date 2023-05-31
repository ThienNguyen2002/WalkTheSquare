import React, { useEffect, useState } from 'react';
import { View, Platform, KeyboardAvoidingView} from 'react-native';
import {  Button, Input, Text } from '@rneui/base';
import { StyleSheet } from 'react-native';
import displayAuthError from '../actions/AuthError';
import { useAuth } from '../hooks/useAuth'
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../../App';

const LoginScreen = () => {

  const navigation = useNavigation<RootStackNavigationProp>();

  const onSuccess = () => {
    navigation.navigate('Home');
  };




  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleLogin, handleSignUp, authError } = useAuth(onSuccess);

  useEffect(() => {
    if (authError) {
      console.error('Authentication error:', authError);
      displayAuthError(authError);
    }
  }, [authError]);


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
        <Button onPress={() => handleLogin(email, password)} title="Sign In" />
        <Text style={styles.orText}>or</Text>
        <Button onPress={() => handleSignUp(email, password)} title="Sign Up" />
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
