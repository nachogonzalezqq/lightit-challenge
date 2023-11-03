import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#001514',
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#677DB7',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#001514',
    color: '#FFECD1',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#FFECD1',
  },
  errorText: {
    color: '#FF1B1C',
    marginBottom: 10,
    marginLeft: 5,
  },
  submitButton: {
    backgroundColor: '#677DB7',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    elevation: 2,
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  submitText: {
    color: '#FFECD1',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
