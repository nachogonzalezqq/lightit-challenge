import {configureStore} from '@reduxjs/toolkit';
import patientsReducer from './patients/patientsSlice';

export const store = configureStore({
  reducer: {
    patients: patientsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
