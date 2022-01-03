import React from 'react';
import { Alert } from 'react-native';

import { Button } from '../../components/Button';

import { useAuth } from '../../hooks/useAuth';

import { 
  Container, 
  SocialLoginContainer, 
  SignUpButton,
  SignUpButtonText,
} from './styles';

export default function SignIn() {
  const { signInWithGoogle } = useAuth();

  async function handleSignInWithGoogle() {
    try {
      await signInWithGoogle();
    } catch (error) {
      Alert.alert('Não foi possível conectar a conta Google');
    }
  }

  return (
    <Container>

      <SocialLoginContainer>
        <Button
          title="Entrar com Google"
          icon="social-google"
          onPress={handleSignInWithGoogle}
        />
        
        <SignUpButton>
          <SignUpButtonText>Não possui conta? Cadastre-se</SignUpButtonText>
        </SignUpButton>
      </SocialLoginContainer>

    </Container>
  );
}
