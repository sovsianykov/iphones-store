import React, { useCallback } from 'react';
import { Box, Pagination } from '@mui/material';
import { fetchPhones } from '../../store/thunk';
import { useAppDispatch } from '../../hooks/redux';

const Paginator = () => {
  const dispatch = useAppDispatch();
  const onPageChange = useCallback((e, value) => {
    dispatch(fetchPhones(value));
  }, []);
  return (
    <Box sx={{ background: '#e0dddd', padding: 0.5, borderRadius: '5px' }}>
      <Pagination count={3} onChange={onPageChange}  variant='text'  color={'secondary'} />
    </Box>
  );
};

export default Paginator;
