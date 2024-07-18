import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Typography, useTheme } from '@mui/material';
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from '@mui/icons-material';


const rows = [
  { id: 1, Name: 'Snow', Email: 'JonSnow561@gmail.com', age: 14, Phone: '(235)205511515', access: 'Admin' },
  { id: 2, Name: 'Lannister', Email: 'CerseiMakail216@gmail.com', age: 31, Phone: '(350)97519427', access: 'User' },
  { id: 3, Name: 'Lannister', Email: 'JaimeLancer961@gmail.com', age: 31, Phone: '(615)64591372', access: 'Manager' },
  { id: 4, Name: 'Stark', Email: 'AryaSyse564@gmail.com', age: 11, Phone: '(842)35264159', access: 'Admin' },
  { id: 5, Name: 'Targaryen', Email: 'DaenerysFire513@gmail.com', age: 30, Phone: '(955)89215348', access: 'Admin' },
  { id: 6, Name: 'Melisandre', Email: 'Melisandre-james@gmail.com', age: 150, Phone: '(658)89965316', access: 'User' },
  { id: 7, Name: 'Clifford', Email: 'FerraraSart312@gmail.com', age: 44, Phone: '(251)42529883', access: 'Manager' },
  { id: 8, Name: 'Frances', Email: 'Rossini_deneries50@gmail.com', age: 36, Phone: '(378)19723648', access: 'User' },
  { id: 9, Name: 'Germani', Email: 'SarosyAboo@gmail.com', age: 40, Phone: '(615)48620940', access: 'Admin' }
];

export default function Team() {
  const theme = useTheme();

  const columns = [
    {
      field: 'id', headerName: 'ID', width: 50,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'Name',
      headerName: 'Name',
      width: 120,
      editable: true,
      align: 'center',
      headerAlign: 'center',
      flex: 1
    },
    {
      field: 'Email',
      headerName: 'Email',
      width: 150,
      editable: true,
      align: 'center',
      headerAlign: 'center',
      flex: 1
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
      align: 'center',
      headerAlign: 'center',
      flex: 1
    },
    {
      field: 'Phone',
      headerName: 'Phone',
      width: 160,
      align: 'center',
      headerAlign: 'center',
      flex: 1
    },
    {
      field: 'Access',
      headerName: 'Access',
      width: 160,
      align: 'center',
      headerAlign: 'center',
      renderCell: ({ row: { access } }) => (
        <Box
          sx={{
            backgroundColor:
              access === 'Admin' ?
                theme.palette.primary.dark
                : access === 'Manager' ?
                  theme.palette.secondary.dark
                  : '#3da58a',
            p: '5px',
            mt: 1,
            width: '99px',
            mx: 'auto',
            borderRadius: '3px',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}
        >
          {access === 'Admin' && (<AdminPanelSettingsOutlined sx={{ color: 'white' }} />)}
          {access === 'Manager' && (<SecurityOutlined sx={{ color: 'white' }} />)}
          {access === 'User' && (<LockOpenOutlined sx={{ color: 'white' }} />)}
          <Typography sx={{ fontSize: 13, color: 'white' }}>{access}</Typography>
        </Box>
      ),
    },
  ];

  return (
    <>
      <Typography sx={{ color: theme.palette.info.main, fontSize: 26, fontWeight: 'bold', textTransform: 'uppercase', mb: 0.5 }}>Team</Typography>
      <Typography sx={{ fontSize: 13, mb: 5, letterSpacing: 1 }}>Managing The Team Members</Typography>
      <Box sx={{ height: 590, width: '98%', mx: 'auto' }}>
        <DataGrid
          rows={rows}
          columns={columns}
        />
      </Box>
    </>
  );
}
