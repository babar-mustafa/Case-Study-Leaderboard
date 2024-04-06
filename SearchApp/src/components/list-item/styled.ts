import styled, {css} from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {APP_COLORS} from 'constants/common';

export const Container = styled.View`
  margin-vertical: ${hp(1)}px;
  margin-horizontal: ${wp(2)}px;
  height: ${wp(15)}px;
  flex-direction: row;
  background-color: ${APP_COLORS.WHITE};
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: ${wp(3)}px;
  padding-vertical: 6px;
  shadow-color: ${APP_COLORS.BLACK};
  elevation: 5;
`;

export const AppText = styled.Text<IListItem>`
  font-size: ${hp(1.8)}px;
  color: ${APP_COLORS.BLACK};
  ${({isSearchedUser}) =>
    isSearchedUser &&
    css`
      color: ${APP_COLORS.RED};
    `}
  margin-horizontal: ${wp(1)}px;
  width: ${wp(22.5)}px;
`;
