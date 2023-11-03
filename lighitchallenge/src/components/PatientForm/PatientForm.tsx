import React from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Patient} from '../../interfaces/Patient';
import styles from './styles';

interface Props {
  patient?: Patient;
  onSubmit: (data: Patient) => void;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  avatar: Yup.string().required('Required').url('Must be a valid URL'),
  description: Yup.string().required('Required'),
  website: Yup.string().required('Required').url('Must be a valid URL'),
});

const PatientForm: React.FC<Props> = ({patient, onSubmit}) => {
  return (
    <Formik
      initialValues={{
        name: patient?.name || '',
        avatar: patient?.avatar || '',
        description: patient?.description || '',
        website: patient?.website || '',
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        onSubmit({
          ...values,
          createdAt: patient?.createdAt || new Date().toISOString(),
          id: patient?.id,
        });
      }}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <View style={styles.container}>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
            placeholder="Name"
          />
          {errors.name && touched.name ? (
            <Text style={styles.errorText}>{errors.name}</Text>
          ) : null}

          <Text style={styles.label}>Avatar URL:</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('avatar')}
            onBlur={handleBlur('avatar')}
            value={values.avatar}
            placeholder="Avatar URL"
          />
          {errors.avatar && touched.avatar ? (
            <Text style={styles.errorText}>{errors.avatar}</Text>
          ) : null}

          <Text style={styles.label}>Description:</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('description')}
            onBlur={handleBlur('description')}
            value={values.description}
            placeholder="Description"
          />
          {errors.description && touched.description ? (
            <Text style={styles.errorText}>{errors.description}</Text>
          ) : null}

          <Text style={styles.label}>Website:</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('website')}
            onBlur={handleBlur('website')}
            value={values.website}
            placeholder="Website"
          />
          {errors.website && touched.website ? (
            <Text style={styles.errorText}>{errors.website}</Text>
          ) : null}

          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmit as any}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default PatientForm;
