import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

import { ButtonContainer, ButtonText } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  icon: React.ComponentProps<typeof SimpleLineIcons>['name'];
}

export function Button({ title, icon, ...rest }: Props) {
  return (
    <ButtonContainer activeOpacity={.7} {...rest}>
      <SimpleLineIcons
        name={icon}
        size={34}
        color="#fff"
      />

      <ButtonText>
        {title}
      </ButtonText>
    </ButtonContainer>
  );
}