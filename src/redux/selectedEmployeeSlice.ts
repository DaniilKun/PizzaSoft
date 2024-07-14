import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Employee } from './types';

export interface SelectedEmployeeState {
  selectedEmployee: Employee | null;
}

const initialState: SelectedEmployeeState = {
  selectedEmployee: null,
};

const selectedEmployeeSlice = createSlice({
  name: 'selectedEmployee',
  initialState,
  reducers: {
    selectEmployee: (state, action: PayloadAction<Employee>) => {
      state.selectedEmployee = action.payload;
    },
    clearSelectedEmployee: (state) => {
      state.selectedEmployee = null;
    },
  },
});

export const { selectEmployee, clearSelectedEmployee } = selectedEmployeeSlice.actions;
export default selectedEmployeeSlice.reducer;