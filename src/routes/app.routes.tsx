import React from 'react';
import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '@screens/Home';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes(){
  return(
    <Navigator screenOptions={{headerShown: false, tabBarStyle: {}}}>
      <Screen
        name="Spots"
        component={Home}
        options={{
          tabBarIcon: (({ size, color }) => (
            <Feather
              name="map-pin"
              size={size}
              color={color}
            />
          ))
        }}
      />

      <Screen
        name="News"
        component={Home}
        options={{
          tabBarIcon: (({ size, color }) => (
            <Feather
              name="layout"
              size={size}
              color={color}
            />
          ))
        }}
      />

      <Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: (({ size, color }) => (
            <Feather
              name="user"
              size={size}
              color={color}
            />
          ))
        }}
      />
    
    </Navigator>
  );
}