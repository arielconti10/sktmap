import React from 'react';

import { NativeBaseProvider } from 'native-base';
import { AuthProvider } from './src/hooks/useAuth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Routes } from './src/routes';

GoogleSignin.configure({
  webClientId: '1051242235544-bvujcje41lm7otctle332qjf6snluo2v.apps.googleusercontent.com',
});

export default function App() {
  return (
    <NativeBaseProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NativeBaseProvider>
  );
}
