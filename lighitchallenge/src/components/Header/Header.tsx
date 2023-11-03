import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

interface HeaderProps {
  onAddPress: () => void;
}

const Header: React.FC<HeaderProps> = ({onAddPress}) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.navbarTitle}>Patients</Text>
      <TouchableOpacity onPress={onAddPress} style={styles.addButton}>
        <Icon name="plus" size={24} color="#FFECD1" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
