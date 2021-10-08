import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICompaniesState, ICompany } from '../../types/companiesTypes';

const initialState: ICompaniesState = {
  data: [],
  isLoading: false,
  error: null,
};

const allCompaniesSlice = createSlice({
  name: 'allCompanies',
  initialState,
  reducers: {
    getAllCompaniesPending: (state:ICompaniesState) => {
      state.isLoading = true;
    },
    getAllCompaniesFulfilled: (state: ICompaniesState, action:PayloadAction<ICompany[]>) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    getAllCompaniesRejected: (state: ICompaniesState, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { actions: allCompaniesActions } = allCompaniesSlice;
export default allCompaniesSlice.reducer;
