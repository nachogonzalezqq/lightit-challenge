import React from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import {Patient} from '../../interfaces/Patient';
import PatientComponent from '../Patient/Patient';
import styles from './styles';

interface PatientsListProps {
  patients: Patient[];
  loading: boolean;
  showPatientModal: (patient: Patient) => void;
}

const PatientsList: React.FC<PatientsListProps> = ({
  patients,
  loading,
  showPatientModal,
}) => {
  if (loading) {
    return (
      <ActivityIndicator size="large" color="#677DB7" style={styles.loader} />
    );
  }

  return (
    <FlatList
      data={patients}
      keyExtractor={item => item.id?.toString() || item.name}
      renderItem={({item}) => (
        <PatientComponent patient={item} onPatientPress={showPatientModal} />
      )}
      contentContainerStyle={styles.list}
      style={styles.container}
    />
  );
};

export default PatientsList;
