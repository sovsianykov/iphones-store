import { initialData, InitialState } from './models';
import { createSlice } from '@reduxjs/toolkit';
import {fetchPhones} from "./thunk";

const initialState: InitialState = {
  status: false,
  data: initialData,
  filteredData: [],
  loading: false,
  error: '',
};

const phonesSlice = createSlice({
  name: 'phones',
  initialState,
  reducers: {},
  extraReducers: (builder) =>{
    builder.addCase(fetchPhones.pending,(state)=>{
      state.loading = true;

    })
    builder.addCase(fetchPhones.fulfilled,(state,action)=>{
      state.loading = false
      state.data = action.payload
    })
    builder.addCase(fetchPhones.rejected,(state)=>{
      state.loading = false
      state.error =  'something vent wrong'
    })
  }
});

export default phonesSlice.reducer