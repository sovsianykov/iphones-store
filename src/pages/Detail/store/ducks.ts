import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPhoneDetail } from './thunks';
import { PhoneDetailData, PhoneDetailState } from '../models';
import { initialData } from '../models';

const initialState: PhoneDetailState = {
  status: false,
  data: initialData,
  loading: false,
  error: '',
};

const phoneDetailSlice = createSlice({
  name: 'phoneDetail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPhoneDetail.pending, (state) => {
      state.loading = false;
    });
    builder.addCase(
      fetchPhoneDetail.fulfilled,
      (state, action: PayloadAction<PhoneDetailData>) => {
        state.status = true;
        state.loading = true;
        state.data = action.payload;
      }
    );
    builder.addCase(fetchPhoneDetail.rejected, (state) => {
      state.loading = false;
      state.error = 'something vent wrong';
    });
  },
});

export default phoneDetailSlice.reducer;
