import { createSelector } from '@reduxjs/toolkit';
import { Phone } from '../shared/components/PhoneCard/models';
import { v4 as uuidv4 } from 'uuid'

export const filteredPhonesSelector = createSelector(
  [(state) => state.phones],
  ({ data, loading, searchQuery,wishList }) => {
    let filteredPhones: Phone[] = [];
    let extendedPhones: Phone[] = [];
    if (!loading) {
       extendedPhones =  data.phones.map((phone:Phone) =>({
           brand: 'apple',
           phone_name: phone.phone_name,
           slug: phone.slug,
           image: phone.image,
           detail: phone.detail,
           id : uuidv4(),
           wished: !!wishList.find((p: Phone) => p.phone_name === phone.phone_name)
       }))


      filteredPhones = extendedPhones.filter((phone: Phone) =>
        phone.phone_name.toLowerCase().includes(searchQuery)
      );
    }

    return {
      filteredPhones,
        wishList
    };
  }
);
