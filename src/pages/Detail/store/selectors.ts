import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../store/store';
import { PhoneDetailData, Specification } from '../models';

export const phoneDetailSelector = createSelector(
  (state: RootState) => state.phoneDetail.data,
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
  }) => {
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
    };
  }
);
