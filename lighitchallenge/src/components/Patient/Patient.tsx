import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import {Patient} from '../../interfaces/Patient';
import styles from './styles';

interface PatientProps {
  patient: Patient;
  onPatientPress: (patient: Patient) => void;
}

const PatientComponent: React.FC<PatientProps> = ({
  patient,
  onPatientPress,
}) => {
  return (
    <TouchableOpacity
      onPress={() => onPatientPress(patient)}
      style={styles.container}>
      <Image source={{uri: patient.avatar}} style={styles.avatar} />
      <Text style={styles.name}>{patient.name}</Text>
    </TouchableOpacity>
  );
};

export default PatientComponent;
