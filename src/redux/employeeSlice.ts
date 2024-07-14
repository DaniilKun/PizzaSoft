import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Employee } from './types';

export interface EmployeeState {
  employees: Employee[];
}

const initialState: EmployeeState = {
  employees: [],
};

const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setEmployees: (state, action: PayloadAction<Employee[]>) => {
      state.employees = action.payload;
      localStorage.setItem('employees', JSON.stringify(state.employees));
    },
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.employees = [...state.employees, action.payload];
      localStorage.setItem('employees', JSON.stringify(state.employees));
    },
    updateEmployee: (state, action: PayloadAction<Employee>) => {
      const index = state.employees.findIndex(emp => emp.id === action.payload.id);
      if (index !== -1) {
        state.employees[index] = action.payload;
        localStorage.setItem('employees', JSON.stringify(state.employees));
      }
    },
  },
});

export const { setEmployees, addEmployee, updateEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;