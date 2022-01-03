import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center; 
  paddingHorizontal: 24px;
  paddingVertical: ${getBottomSpace() + 20}px; 
`;

export const LogoContainer = styled.View`
`

export const SocialLoginContainer = styled.View`
  flex-direction: column;
  width: 100%;
`

export const SignUpButton = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`
export const SignUpButtonText = styled.Text`
  color: #000;
  font-size: 18px;

`

