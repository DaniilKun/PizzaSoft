import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
  name: string;
  birthday: string;
  role: string;
  isArchive: boolean;
}

const initialState: SearchState = {
  name: '',
  birthday: '',
  role: '',
  isArchive: false,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setBirthday: (state, action: PayloadAction<string>) => {
      state.birthday = action.payload;
    },
    setRole: (state, action: PayloadAction<string>) => {
      state.role = action.payload;
    },
    setIsArchive: (state, action: PayloadAction<boolean>) => {
      state.isArchive = action.payload;
    },
  },
});

export const { setName, setBirthday, setRole, setIsArchive } = searchSlice.actions;
export default searchSlice.reducer;