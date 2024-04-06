import styled, {css} from 'styled-components/native';
import {APP_COLORS} from 'constants/common';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const ScreenWrapper = styled.View`
  background-color: ${APP_COLORS.WHITE};
  flex: 1;
`;

export const ContentWrapper = styled.View`
  flex: 1;
  background-color: ${APP_COLORS.COLOR_PRIMARY};
`;

export const SortIconWrapper = styled.TouchableOpacity<ISort>`
  border-radius: 5px;
  border-color: ${APP_COLORS.BLACK};
  ${({isSorted}) =>
    isSorted &&
    css`
      border-color: ${APP_COLORS.COLOR_PRIMARY};
    `}
  border-width: 1px;
  height: ${wp(10)}px;
  width: ${wp(15)}px;
  justify-content: center;
  align-items: center;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-right: 10px;
`;
