import React, { useCallback } from 'react';
import { Box, Button } from '@mui/material';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const HistoryButton = () => {
  let navigate = useNavigate();
  const onClickHandler = useCallback((delta: number) => {
    navigate(delta);
  }, [navigate]);

  return (
    <Box justifySelf='center'>
      <Button variant="contained" onClick={() => onClickHandler(-1)}>
        <ArrowLeft />
      </Button>
      <Button variant="contained" onClick={() => onClickHandler(+1)}>
        <ArrowRight />
      </Button>
    </Box>
  );
};

export default HistoryButton;
