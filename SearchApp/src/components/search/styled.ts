import styled from 'styled-components/native';
import {TouchableOpacity, TextInput} from 'react-native';
import {APP_COLORS} from 'constants/common';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const SearchBarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 0 10px;
`;

export const SearchInput = styled(TextInput)`
  flex: 1;
  padding-vertical: 10px;
  font-size: 14px;
`;

export const SearchButton = styled(TouchableOpacity)`
  background-color: ${APP_COLORS.COLOR_PRIMARY};
  border-radius: 8px;
  height: ${wp(9)}px;
  width: ${wp(18)}px;
  justify-content: center;
  align-items: center;
`;
