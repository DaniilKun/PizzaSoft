import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './employeeSlice';
import searchReducer from './searchSlice';
import selectedEmployeeReducer from './selectedEmployeeSlice';

export const store = configureStore({
  reducer: {
    employees: employeeReducer,
    search: searchReducer,
    selectedEmployee: selectedEmployeeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;