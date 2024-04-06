import React, {useCallback} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {getActiveRouteName} from './utils';
import {RootNavigation} from './root';

enableScreens();

export const Routes: React.FC = React.memo(() => {
  const onNavigationStateChangeHandler = useCallback(
    async (currentState: allAnyTypes) => {
      const currentRouteName = getActiveRouteName(currentState);
      if (currentRouteName) {
        console.log('currentRouteName', currentRouteName);
      }
    },
    [],
  );

  return (
    <NavigationContainer onStateChange={onNavigationStateChangeHandler}>
      <RootNavigation />
    </NavigationContainer>
  );
});
