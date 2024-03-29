import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../store/store';

export const phoneDetailSelector = createSelector(
  [(state: RootState) => state.phoneDetail.data,
      (state: RootState) => state.phoneDetail],
  ({
    brand,
    dimension,
    os,
    thumbnail,
    phone_name,
    phone_images,
    release_date,
    specifications,
    storage,
  },loading) => {
    return {
        brand,
        dimension,
        os,
        thumbnail,
        phone_name,
        phone_images,
        release_date,
        specifications,
        storage,
        loading
    };
  }
);
