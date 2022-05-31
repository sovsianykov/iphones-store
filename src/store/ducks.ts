import { Data, initialData, InitialState } from "./models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPhones } from './thunk';
import { current } from '@reduxjs/toolkit';
import { Phone } from "../shared/components/PhoneCard/models";

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
    addToWishList: (state, action:PayloadAction<Phone>) => {
      const currentState = current(state);
      action.payload.wished = true;
      state.wishList = currentState.wishList.concat([action.payload]);
    },
    removeFromWishList: (state, action:PayloadAction<string>) => {
      const currentState = current(state);
      state.wishList = currentState.wishList.filter(phone => phone.phone_name !== action.payload);
    },
    filterPhones: (state,  action:PayloadAction<string>) => {
      state.searchQuery = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPhones.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPhones.fulfilled, (state, action:PayloadAction<Data>) => {
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
