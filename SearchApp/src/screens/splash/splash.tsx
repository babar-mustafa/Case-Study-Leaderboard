import React, {useEffect} from 'react';
import {ScreenWrapper} from './styled';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from 'constants/navigation-routes';
import {AppText} from 'components';
import {APP_COLORS} from 'constants/common';

export const Splash: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate(ROUTES.HOME);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ScreenWrapper>
      <AppText color={APP_COLORS.WHITE} size={30}>
        {'Case Study Leaderboard'}
      </AppText>
    </ScreenWrapper>
  );
};
