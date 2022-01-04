import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '@screens/Signin';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes(){
  return(
    <Navigator defaultScreenOptions={{
      headerShown: false,
    }}>
      <Screen
        name="SignIn"
        component={SignIn}
      />
    </Navigator>
  )
}
