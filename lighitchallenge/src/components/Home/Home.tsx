import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import {Patient} from '../../interfaces/Patient';
import {RootState} from '../../interfaces/RootState';
import {fetchPatients} from '../../store/patients/patientsActions';
import {addPatient, editPatient} from '../../store/patients/patientsSlice';
import Header from '../Header/Header';
import Modal from '../Modal/Modal';
import PatientForm from '../PatientForm/PatientForm';
import PatientsList from '../PatientsList/PatientsList';
import styles from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(fetchPatients());
  }, [dispatch]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<Patient | undefined>(
    undefined,
  );

  const {data: patients, loading: patientsLoading} = useSelector(
    (state: RootState) => state.patients,
  );

  const openPatientModal = (patient: Patient | undefined) => {
    setSelectedPatient(patient);
    setModalVisible(true);
  };

  const handleFormSubmit = (data: Patient) => {
    setModalVisible(false);
    try {
      if (data.id) {
        dispatch(editPatient(data));
        Toast.show({
          type: 'success',
          position: 'bottom',
          text1: 'Success!',
          text2: 'Patient edited successfully.',
        });
      } else {
        dispatch(addPatient(data));
        Toast.show({
          type: 'success',
          position: 'bottom',
          text1: 'Success!',
          text2: 'Patient added successfully.',
        });
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Error!',
        text2: 'An unexpected error occurred.',
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header onAddPress={() => openPatientModal(undefined)} />
      <PatientsList
        loading={patientsLoading}
        patients={patients}
        showPatientModal={(patient: Patient) => openPatientModal(patient)}
      />
      <Modal isVisible={modalVisible} onClose={() => setModalVisible(false)}>
        <PatientForm
          patient={selectedPatient}
          onSubmit={data => handleFormSubmit(data)}
        />
      </Modal>
    </View>
  );
};

export default Home;
