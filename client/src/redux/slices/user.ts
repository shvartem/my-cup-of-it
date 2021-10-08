import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ErrorType, IErrorAction, IProfile } from '../types';

interface IUserSliceState {
  profile: IProfile;
  isLoading: boolean;
  error: string | null
}

const initialState: IUserSliceState = {
  profile: {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    description: '',
    isMentor: false,
    isActive: false,
    careerStart: '',
    company: '',
    meets: [],
    createdAt: '',
    updatedAt: '',
  },
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUserPending: (state, action) => {
      state.isLoading = true;
    },
    loginUserFullfilled: (state, action: PayloadAction<IProfile>) => {
      state.profile = action.payload;
      state.error = null;
      state.isLoading = false;
    },
    loginUserRejected: (state, action: PayloadAction<ErrorType>) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    logoutUserPending: (state) => {
      state.isLoading = true;
    },
    logoutUserFullfilled: (state) => {
      state.profile = initialState.profile;
      state.error = null;
      state.isLoading = false;
    },
    logoutUserRejected: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    registerUserPending: (state, action) => {
      state.isLoading = true;
    },

    getInitialUserPending: (state) => {
      state.isLoading = true;
    },

  },
});

export default userSlice.reducer;
export const { actions: userActions } = userSlice;
