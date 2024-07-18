import React from 'react'
import { Row1 } from './Row1'
import { Row2 } from './Row2'
import { Row3 } from './Row3'
import { Button, Box,  Stack, Typography, useTheme } from '@mui/material';
import { DownloadOutlined } from '@mui/icons-material';

export default function Dashboard() {
  let theme = useTheme();

  return (
    <div>
      <Typography sx={{ color: theme.palette.info.main, fontSize: 26, fontWeight: 'bold', textTransform: 'uppercase', mb: 0.5 }}>Dashboard</Typography>
      <Typography sx={{ fontSize: 13, letterSpacing: 1 }}>Welcome To Your Dashboard</Typography>
      <Box sx={{textAlign: 'right' }}>
        
      <Button sx={{ textTransform: 'capitalize' }} variant='contained'>
        <DownloadOutlined/>
        Download Reports
        </Button>
      </Box>
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  )
}
