import { createSlice } from '@reduxjs/toolkit';
import { IInitialAllUsersState } from '../allUsersTypes';

const initialState: IInitialAllUsersState = {
  data: [],
  isLoading: false,
  error: null,
};

const allUsersSlice = createSlice({
  name: 'allUsers',
  initialState,
  reducers: {
    getAllUsersPending: (state) => {
      state.isLoading = true;
    },
    getAllUsersFulfilled: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    getAllUsersRejected: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { actions: allUserActions } = allUsersSlice;
export default allUsersSlice.reducer;
