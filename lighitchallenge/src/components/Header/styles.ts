import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    width: '100%',
    borderColor: '#677DB7',
    backgroundColor: '#677DB7',
  },
  navbarTitle: {
    fontSize: 20,
    color: '#FFECD1',
    fontWeight: 'bold',
  },
  addButton: {
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#FFECD1',
    fontWeight: 'bold',
  },
});

export default styles;
