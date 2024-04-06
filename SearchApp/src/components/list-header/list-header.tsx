import React, {FC} from 'react';
import {ViewWrapper} from './styled';
import {APP_COLORS} from 'constants/common';
import {AppText} from 'components/text';

export const ListHeader: FC = ({}) => {
  return (
    <ViewWrapper>
      <AppText color={APP_COLORS.WHITE} size={16}>
        {'Name'}
      </AppText>
      <AppText color={APP_COLORS.WHITE} size={16}>
        {'Rank'}
      </AppText>
      <AppText color={APP_COLORS.WHITE} size={16}>
        {'Number of Bananas'}
      </AppText>
    </ViewWrapper>
  );
};
