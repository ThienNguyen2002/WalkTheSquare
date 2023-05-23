import { useState, useCallback } from 'react';
import { auth } from '../../firebase';
import { FirebaseError } from 'firebase/app';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export const useAuth = (onSuccess: () => void) => {
  const [authError, setAuthError] = useState<FirebaseError | null>(null);

  const handleLogin = useCallback(async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Logged in successfully');
      onSuccess();
    } catch (error) {
      if (error instanceof FirebaseError) {
        setAuthError(error);
      } else {
        console.error('Unknown error:', error);
      }
    }
  }, [onSuccess]);
  
  const handleSignUp = useCallback(async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('Signed up successfully');
      onSuccess();
    } catch (error) {
      if (error instanceof FirebaseError) {
        setAuthError(error);
      } else {
        console.error('Unknown error:', error);
      }
    }
  }, [onSuccess]);
  
  

  return { handleLogin, handleSignUp, authError };
};
