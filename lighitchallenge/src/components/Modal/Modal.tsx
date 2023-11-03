import React from 'react';
import {
  View,
  Modal as RNModal,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import styles from './styles';

interface Props {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({isVisible, onClose, children}) => {
  return (
    <RNModal visible={isVisible} transparent onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.content}>{children}</View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </RNModal>
  );
};

export default Modal;
