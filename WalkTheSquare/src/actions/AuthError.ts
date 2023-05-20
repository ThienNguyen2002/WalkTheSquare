import { Alert } from 'react-native';

const displayAuthError = (error: FirebaseError) => {
  switch (error.code) {
    case 'auth/invalid-email':
      Alert.alert('Error', 'Invalid email address');
      break;
    case 'auth/user-disabled':
      Alert.alert('Error', 'User account has been disabled');
      break;
    case 'auth/user-not-found':
      Alert.alert('Error', 'User not found');
      break;
    case 'auth/wrong-password':
      Alert.alert('Error', 'Incorrect password');
      break;
    case 'auth/email-already-in-use':
      Alert.alert('Error', 'Email address is already in use');
      break;
    case 'auth/operation-not-allowed':
      Alert.alert('Error', 'Operation not allowed');
      break;
    case 'auth/weak-password':
      Alert.alert('Error', 'Password is too weak. Min characters is 6');
      break;
    default:
      Alert.alert('Error', 'Error: ' + error.message);
  }
};

export default displayAuthError;