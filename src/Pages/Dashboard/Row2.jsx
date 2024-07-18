import { Box, IconButton, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material';
import Line from '../Line/Line';
import { DownloadOutlined } from '@mui/icons-material';

export const Row2 = () => {
  const theme = useTheme();

  return (
    <Stack direction={'row'} gap={1} flexWrap={'wrap'} mt={3}>

      <Paper sx={{ minWidth: 400, flexGrow: 1 }}>
        <Stack flexWrap={'wrap'} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Box>
            <Typography
              color={theme.palette.secondary.main}
              variant='h6'
              mb={1}
              mt={2}
              ml={4}
            >Revenue Generated</Typography>
            <Typography
              color={theme.palette.secondary.main}
              variant='body2'
              ml={4}
            >$59,342,35</Typography>
          </Box>
          <Box>
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>
        <Line isDashboard={true} />
      </Paper>

      <Box sx={{ minWidth: 280, flex: 1 }}>
        
        <Paper>
          <Typography
            color={theme.palette.secondary.main}
            fontWeight={'bold'}
            p={1.2}
            variant='h6'
          >Recent Transactions</Typography>
        </Paper>

        <Paper 
        sx={{
          mt: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
        >
          <Box p={ 1.2 }>
            <Typography variant='body1' fontWeight={'600'}>
              Mohamed Khalid
            </Typography>
            <Typography variant='body2'>
            Marketing
            </Typography>
          </Box>

            <Typography
            borderRadius={1.4}
            p={1}
            mr={1}

            bgcolor={theme.palette.error.main}
            color={theme.palette.getContrastText(theme.palette.error.main)}
            variant='body2'
            >
              User
            </Typography>
        </Paper>


        <Paper 
        sx={{
          mt: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
        >
          <Box p={ 1.2 }>
            <Typography variant='body1' fontWeight={'600'}>
              Ahmed Alaa
            </Typography>
            <Typography variant='body2'>
            Backend
            </Typography>
          </Box>

            <Typography
            borderRadius={1.4}
            p={1}
            mr={1}

            bgcolor={theme.palette.error.main}
            color={theme.palette.getContrastText(theme.palette.error.main)}
            variant='body2'
            >
              User
            </Typography>
        </Paper>        <Paper 
        sx={{
          mt: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
        >
          <Box p={ 1.2 }>
            <Typography variant='body1' fontWeight={'600'}>
              Moamen Mahrous
            </Typography>
            <Typography variant='body2'>
            Frontend
            </Typography>
          </Box>

            <Typography
            borderRadius={1.4}
            p={1}
            mr={1}

            bgcolor={theme.palette.error.main}
            color={theme.palette.getContrastText(theme.palette.error.main)}
            variant='body2'
            >
              User
            </Typography>
        </Paper>        <Paper 
        sx={{
          mt: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
        >
          <Box p={ 1.2 }>
            <Typography variant='body1' fontWeight={'600'}>
              Mohamed Osama
            </Typography>
            <Typography variant='body2'>
            Photograper
            </Typography>
          </Box>
            <Typography
            borderRadius={1.4}
            mr={1}
            p={1}
            bgcolor={theme.palette.error.main}
            color={theme.palette.getContrastText(theme.palette.error.main)}
            variant='body2'
            >
              User
            </Typography>
        </Paper>
        <Paper 
        sx={{
          mt: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
        >
          <Box p={ 1.2 }>
            <Typography variant='body1' fontWeight={'600'} width={130}>
              Alaa Khaled
            </Typography>
            <Typography variant='body2'>
            Designer
            </Typography>
          </Box>
            <Typography
            borderRadius={1.4}
            p={1}
            mr={1}
            bgcolor={theme.palette.error.main}
            color={theme.palette.getContrastText(theme.palette.error.main)}
            variant='body2'
            >
              User
            </Typography>
        </Paper>

      </Box>

    </Stack>
  )
}
