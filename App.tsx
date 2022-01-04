import React from 'react';

import { NativeBaseProvider } from 'native-base';
import { AuthProvider } from './src/hooks/useAuth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Routes } from './src/routes';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

GoogleSignin.configure({
  webClientId: '1051242235544-bvujcje41lm7otctle332qjf6snluo2v.apps.googleusercontent.com',
});

export default function App() {
  return (
    <NativeBaseProvider>
      <BottomSheetModalProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </BottomSheetModalProvider>
    </NativeBaseProvider>
  );
}
