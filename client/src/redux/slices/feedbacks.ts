import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFeedback, IFeedbackState } from '../../types/feedbacksTypes';

const initialState: IFeedbackState = {
  data: [],
  isLoading: false,
  error: null,
};

const feedbacksSlice = createSlice({
  name: 'feedbacks',
  initialState,
  reducers: {
    getAllFeedbacksPending: (state: IFeedbackState) => {
      state.isLoading = true;
    },
    getAllFeedbacksFulfilled: (state:IFeedbackState, action:PayloadAction<IFeedback[]>) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    getAllFeedbacksRejected: (state: IFeedbackState, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { actions: feedbacksActions } = feedbacksSlice;
export default feedbacksSlice.reducer;
