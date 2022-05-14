import { combineReducers, configureStore } from '@reduxjs/toolkit';
import phonesReducer from './ducks'
import phoneDetailSlice from '../pages/Detail/store/ducks'
const rootReducer = combineReducers({
   phones: phonesReducer,
    phoneDetail: phoneDetailSlice
})

export const setupStore = () => {
  return configureStore({
    reducer : rootReducer
  })
}
export const store =setupStore()
export type RootState = ReturnType<typeof  rootReducer>
export type AppStore = ReturnType<typeof  setupStore >
export type AppDispatch = AppStore['dispatch']