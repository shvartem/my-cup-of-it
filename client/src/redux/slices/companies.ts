import { createSlice } from '@reduxjs/toolkit';
import { IInitialCompaniesState } from '../../types/companiesTypes';

const initialState: IInitialCompaniesState = {
  data: [],
  isLoading: false,
  error: null,
};

const allCompaniesSlice = createSlice({
  name: 'allCompanies',
  initialState,
  reducers: {
    getAllCompaniesPending: (state) => {
      state.isLoading = true;
    },
    getAllCompaniesFulfilled: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    getAllCompaniesRejected: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { actions: allCompaniesActions } = allCompaniesSlice;
export default allCompaniesSlice.reducer;
