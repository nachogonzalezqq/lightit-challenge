import {createAsyncThunk} from '@reduxjs/toolkit';
import api from '../../api/api';
import {Patient} from '../../interfaces/Patient';

export const fetchPatients = createAsyncThunk(
  'patients/fetchPatients',
  async () => {
    const response = await api.get('/users');
    return response.data as Patient[];
  },
);
