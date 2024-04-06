import React, {FC} from 'react';
import {Modal} from 'react-native';
import {
  ModalContainer,
  ModalContent,
  MessageText,
  Button,
  CloseIconWrapper,
} from './styled';
import {AppText} from 'components/text';
import {APP_COLORS} from 'constants/common';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export const AppModal: FC<ModalProps> = ({visible, message, onClose}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}>
      <ModalContainer>
        <ModalContent>
          <CloseIconWrapper onPress={onClose}>
            <EvilIcons name={'close'} size={24} color={APP_COLORS.BLACK} />
          </CloseIconWrapper>
          <MessageText>{message}</MessageText>
          <Button onPress={onClose}>
            <AppText color={APP_COLORS.WHITE} size={16}>
              {'Close'}
            </AppText>
          </Button>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
};
