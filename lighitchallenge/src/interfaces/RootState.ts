import {Patient} from './Patient';

export interface RootState {
  patients: {
    data: Patient[];
    loading: boolean;
  };
}
