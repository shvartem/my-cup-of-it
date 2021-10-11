import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITechnologiesState, ITechnology } from '../../types/technologiesTypes';

const initialState: ITechnologiesState = {
  data: [],
  isLoading: false,
  error: null,
};

const technologiesSlice = createSlice({
  name: 'technologies',
  initialState,
  reducers: {
    getAllTechnologiesPending: (state: ITechnologiesState) => {
      state.isLoading = true;
      state.error = null;
    },
    getAllTechnologiesFulFilled: (state: ITechnologiesState, action: PayloadAction<ITechnology[]>) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    getAllTechnologiesRejected: (state: ITechnologiesState, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { actions: allTechnologiesActions } = technologiesSlice;
export default technologiesSlice.reducer;
