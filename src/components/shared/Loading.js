import * as React from 'react';
import Box from '@mui/material/Box';
import RotateLeftRoundedIcon from '@mui/icons-material/RotateLeftRounded';
export default function Loading() {
  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap', marginLeft: 'auto',
    marginRight: 'auto', width: '8em' }}>
      <RotateLeftRoundedIcon variant="solid" />Loading...
    </Box>
  );
}