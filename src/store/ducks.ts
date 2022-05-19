import { initialData, InitialState } from './models';
import { createSlice } from '@reduxjs/toolkit';
import { fetchPhones } from './thunk';
import { current } from '@reduxjs/toolkit';

const initialState: InitialState = {
  status: false,
  data: initialData,
  wishList: [],
  searchQuery:'',
  loading: false,
  error: '',
};

const phonesSlice = createSlice({
  name: 'phones',
  initialState,
  reducers: {
    addToWishList: (state, { payload }) => {
      const currentState = current(state);
      state.wishList = currentState.wishList.concat([payload]);
    },
    removeFromWishList: (state, { payload }) => {
      const currentState = current(state);
      state.wishList = currentState.wishList.filter(phone => phone.phone_name !== payload);
    },
    filterPhones: (state, { payload }) => {
      state.searchQuery = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPhones.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPhones.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchPhones.rejected, (state) => {
      state.loading = false;
      state.error = 'something vent wrong';
    });
  },
});
export const { addToWishList,removeFromWishList, filterPhones } = phonesSlice.actions;
export default phonesSlice.reducer;
