import { Paper, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import SinglePie from '../Pie/SingelPie'
import Bar from '../Bar/Bar'
import Geography from '../Geography/Geography'

export const Row3 = () => {
  const theme = useTheme()
  return (
    <Stack direction={'row'} gap={1} mt={3} flexWrap={'wrap'}>

    <Paper sx={{ width: '20%', flexGrow: 1 , minWidth: '400px' }}>
      <Typography
      color={theme.palette.secondary.main}
      sx={{ padding: '30px 30px 0 30px' }}
      variant='h6'
      fontWeight={'600'}
      >
        Campaign
      </Typography>

      <SinglePie IsDashboard={true}/>

      <Typography
      variant='h6'
      align='center'
      sx={{ mt: '15px' }}>
        $48,352 Revenue Generated
      </Typography>

      <Typography
      variant='body2'
      px={ 0.7 }
      pb={ 3 }
      align='center'>
        Includes Extra Misc Expenditures And Costs
      </Typography>
    </Paper>

    <Paper sx={{ width: '33%', flexGrow: 1 ,minWidth: '400px'}}>
      <Typography
      color={theme.palette.secondary.main}
      variant='h6'
      fontWeight={'600'}
      sx={{ padding: '30px 30px 0 30px' }}
      >
        Sales Quantity
      </Typography>
      <Bar IsDashboard={true}/>

    </Paper>

    <Paper sx={{ width: '33%', flexGrow: 1 ,minWidth: '400px' }}>
      <Geography IsDashboard={true}/>
    </Paper>

    </Stack>
  )
}
