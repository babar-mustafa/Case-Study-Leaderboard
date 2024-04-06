import styled from 'styled-components/native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {APP_COLORS} from 'constants/common';

export const ViewWrapper = styled.View`
  margin-vertical: ${wp(1)}px;
  margin-horizontal: ${wp(2)}px;
  margin-top: ${wp(2)}px;
  height: ${wp(12)}px;
  flex-direction: row;
  background-color: ${APP_COLORS.COLOR_PRIMARY};
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: ${wp(3)}px;
  padding-vertical: 6px;
  shadow-color: ${APP_COLORS.BLACK};
  elevation: 5;
`;
