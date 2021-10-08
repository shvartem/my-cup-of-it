import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProfile } from '../types';
import { IMyProfile, IMyProfileState } from '../../types/usersTypes';

const initialState: IMyProfileState = {
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
    userPhoto: '',
    createdAt: '',
    updatedAt: '',
    technologies: [],
    meets: [],
  },
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUserPending: (state, action: PayloadAction<IMyProfile>) => {
      state.isLoading = true;
    },
    loginUserFullfilled: (state, action: PayloadAction<IMyProfile>) => {
      state.profile = action.payload;
      state.error = null;
      state.isLoading = false;
    },
    loginUserRejected: (state, action: PayloadAction<string>) => {
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
    logoutUserRejected: (state, action: PayloadAction<string>) => {
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
