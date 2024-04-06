import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {Provider} from 'react-redux';
import reduxStore from '@store/store';
import {PLATFORM, STYLING_BEHAVIOR} from './src/constants/common';
import {AppConfigLoader} from './src/components';
export const store = reduxStore();

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <StatusBar />
      <Provider store={store}>
        <KeyboardAvoidingView
          behavior={
            Platform.OS === PLATFORM.IOS
              ? STYLING_BEHAVIOR.PADDING
              : STYLING_BEHAVIOR.HEIGHT
          }
          // eslint-disable-next-line react-native/no-inline-styles
          style={{flex: 1}}
          keyboardVerticalOffset={Platform.OS === PLATFORM.IOS ? 100 : 20}>
          <AppConfigLoader />
        </KeyboardAvoidingView>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
