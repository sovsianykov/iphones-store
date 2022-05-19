import { createSelector } from '@reduxjs/toolkit';
import { Phone } from '../shared/components/PhoneCard/models';

export const filteredPhonesSelector = createSelector(
  [(state) => state.phones],
  ({ data, loading, searchQuery,wishList }) => {
    let filteredPhones: Phone[] = [];
    if (!loading) {
      filteredPhones = data.phones.filter((phone: Phone) =>
        phone.phone_name.toLowerCase().includes(searchQuery)
      );
    }

    return {
      filteredPhones,
        wishList
    };
  }
);
