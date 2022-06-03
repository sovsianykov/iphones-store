import { useAppDispatch } from './reduxHoocks';
import { useEffect } from 'react';
import { fetchPhones } from '../store/thunk';

type CallbackType = typeof fetchPhones;

export const useFetch = (page: string, callback: CallbackType) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(callback(page));
  }, [dispatch, page, callback]);
};

