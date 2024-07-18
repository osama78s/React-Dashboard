import { Paper, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import { Card } from './Card'
import { Email, PointOfSale, PersonAdd, Traffic } from '@mui/icons-material'
export const Row1 = () => {
  const theme = useTheme();
  return (
    <Stack direction={'row'} gap={3} flexWrap={'wrap'} justifyContent={{ xs: 'center', md: 'space-between' }} sx={{ mt: 2 }}>

      <Card icon={<Email sx={{ fontSize: '23px', color: theme.palette.secondary.main }}/>} title={'12.361'} subtitle={'Emails Sent'} increase={'+14%'} scheme={'nivo'}/>
      <Card icon={<PointOfSale sx={{ fontSize: '23px', color: theme.palette.secondary.main }}/>} title={'431.255'} subtitle={'Sales Obtained'} increase={'+21%'} scheme={'category10'}/>
      <Card icon={<PersonAdd sx={{ fontSize: '23px', color: theme.palette.secondary.main }}/>} title={'32,441'} subtitle={'New Clients'} increase={'+5%'} scheme={'accent'}/>
      <Card icon={<Traffic sx={{ fontSize: '23px', color: theme.palette.secondary.main }}/>} title={'1,325,134'} subtitle={'Traffic Recevied'} increase={'+21%'} scheme={'dark2'}/>
    </Stack>
  )
}
