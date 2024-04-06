import styled from 'styled-components/native';
import {APP_COLORS} from 'constants/common';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const ModalContainer = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
`;

export const ModalContent = styled.View`
  background-color: ${APP_COLORS.WHITE};
  border-radius: 10px;
  elevation: 5;
  padding: 20px;
`;

export const MessageText = styled.Text`
  color: ${APP_COLORS.BLACK};
  font-size: 14px;
  margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  background-color: ${APP_COLORS.COLOR_PRIMARY};
  border-radius: 5px;
  height: ${wp(10)}px;
  justify-content: center;
  align-self: center;
  width: ${wp(40)}px;
`;

export const CloseIconWrapper = styled.TouchableOpacity`
  justify-content: flex-end;
  align-items: flex-end;
  padding: 5px;
`;
