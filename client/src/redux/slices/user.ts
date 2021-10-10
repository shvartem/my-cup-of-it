import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ILoginData, IMyProfile, IMyProfileState, IRegisterData, IEditProfileRolePayload, IEditProfileStatusPayload,
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

    editUserProfilePending: (state: IMyProfileState, action: PayloadAction<string>) => {
      state.isLoading = true;
      state.error = null;
    },
    editUserProfileFullfilled: (state: IMyProfileState, action: PayloadAction<IMyProfile>) => {
      state.profile = action.payload;
      state.error = null;
      state.isLoading = false;
    },
    editUserProfileRejected: (state: IMyProfileState, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    toggleUserRolePending: (state: IMyProfileState, action: PayloadAction<IEditProfileRolePayload>) => {
      state.isLoading = true;
      state.error = null;
    },
    toggleUserRoleFullfilled: (state: IMyProfileState) => {
      state.profile.isMentor = !state.profile.isMentor;
      state.error = null;
      state.isLoading = false;
    },
    toggleUserRoleRejected: (state: IMyProfileState, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    toggleUserStatusPending: (state: IMyProfileState, action: PayloadAction<IEditProfileStatusPayload>) => {
      state.isLoading = true;
      state.error = null;
    },
    toggleUserStatusFullfilled: (state: IMyProfileState) => {
      state.profile.isActive = !state.profile.isActive;
      state.error = null;
      state.isLoading = false;
    },
    toggleUserStatusRejected: (state: IMyProfileState, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default userSlice.reducer;
export const { actions: userActions } = userSlice;
