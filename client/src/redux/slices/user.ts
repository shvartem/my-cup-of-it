import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ILoginData, IMyProfile, IMyProfileState, IRegisterData,
} from '../../types/usersTypes';

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
    loginUserPending: (state: IMyProfileState, action) => {
      state.isLoading = true;
      state.error = null;
    },
    loginUserFullfilled: (state: IMyProfileState, action: PayloadAction<IMyProfile>) => {
      state.profile = action.payload;
      state.error = null;
      state.isLoading = false;
    },
    loginUserRejected: (state: IMyProfileState, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    logoutUserPending: (state: IMyProfileState) => {
      state.isLoading = true;
      state.error = null;
    },
    logoutUserFullfilled: (state: IMyProfileState) => {
      state.profile = initialState.profile;
      state.error = null;
      state.isLoading = false;
    },
    logoutUserRejected: (state: IMyProfileState, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    registerUserPending: (state: IMyProfileState, action) => {
      state.isLoading = true;
      state.error = null;
    },

    getInitialUserPending: (state: IMyProfileState) => {
      state.isLoading = true;
      state.error = null;
    },

    editUserPending: (state: IMyProfileState, action: PayloadAction<string>) => {
      state.isLoading = true;
      state.error = null;
    },
    editUserFullfilled: (state: IMyProfileState, action: PayloadAction<IMyProfile>) => {
      state.profile = action.payload;
      state.error = null;
      state.isLoading = false;
    },
    editUserRejected: (state: IMyProfileState, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },

  },
});

export default userSlice.reducer;
export const { actions: userActions } = userSlice;
