import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Todo} from './ui/Screens/Todo';
import {Photo} from './ui/Screens/Photo';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarAllowFontScaling: true,
        tabBarLabelStyle: {
          fontSize: 20,
          marginBottom: 10,
        },
        tabBarIcon: () => {
          return;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Notes" component={Todo} />
      <Tab.Screen
        name="Photo"
        component={Photo}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
