import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Splash, Home} from '../screens';
import {ROUTES} from '../constants/navigation-routes';

const {Screen, Navigator} = createNativeStackNavigator();

export const RootNavigation = ({}) => {
  return (
    <Navigator>
      <Screen
        name={ROUTES.SPLASH}
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name={ROUTES.HOME}
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};
