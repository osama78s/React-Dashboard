import React from 'react'
import { Box, Typography, useTheme } from '@mui/material';
import { ResponsivePie } from '@nivo/pie'
import SinglePie from './SingelPie'

export default function Pie() {
  const theme = useTheme()

  return (
    <>
      <Typography sx={{ color: theme.palette.info.main, fontSize: 26, fontWeight: 'bold', textTransform: 'uppercase', mb: 0.5 }}>Pie Chart</Typography>
      <Typography sx={{ fontSize: 13, letterSpacing: 1 }}>Simple Pie Chart</Typography>
      <SinglePie/>
    </>
  )
}
