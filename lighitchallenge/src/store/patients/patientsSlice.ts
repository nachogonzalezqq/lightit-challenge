import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Patient} from '../../interfaces/Patient';
import {fetchPatients} from './patientsActions';

interface PatientsState {
  data: Patient[];
  loading: boolean;
  error: string | null;
}

const initialState: PatientsState = {
  data: [],
  loading: false,
  error: null,
};

const patientsSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {
    addPatient: (state, action: PayloadAction<Patient>) => {
      const maxId = state.data[state.data.length - 1].id;
      action.payload.id = (parseInt(maxId as string, 10) + 1).toString();
      state.data.push(action.payload);
    },
    editPatient: (state, action: PayloadAction<Patient>) => {
      const index = state.data.findIndex(
        patient => patient.id === action.payload.id,
      );
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPatients.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPatients.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPatients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred.';
      });
  },
});

export const {addPatient, editPatient} = patientsSlice.actions;

export default patientsSlice.reducer;
