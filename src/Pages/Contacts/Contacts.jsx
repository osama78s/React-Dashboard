import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Typography, useTheme } from '@mui/material';

const rows = [
  { id: 1, RegisterId: '9254377', Name: 'Snow', Email: 'JonSnow561@gmail.com', age: 14, Phone: '(235)205511515', Add: '05088', City: 'Italia', ZipCode: '94959' },
  { id: 2, RegisterId: '0935054', Name: 'Lannister', Email: 'CerseiMakail216@gmail.com', age: 31, Phone: '(350)97519427', Add: '05021', City: 'Germainy', ZipCode: '16164' },
  { id: 3, RegisterId: '1202098', Name: 'Lannister', Email: 'JaimeLancer961@gmail.com', age: 31, Phone: '(615)64591372', Add: '05082', City: 'Franca', ZipCode: '79615' },
  { id: 4, RegisterId: '7908345', Name: 'Stark', Email: 'AryaSyse564@gmail.com', age: 11, Phone: '(842)35264159', Add: '05088', City: 'Sweed', ZipCode: '49615' },
  { id: 5, RegisterId: '1016355', Name: 'Targaryen', Email: 'DaenerysFire513@gmail.com', age: 30, Phone: '(955)89215348', Add: '05094' , City: 'Spania', ZipCode: '31648'},
  { id: 6, RegisterId: '9005345', Name: 'Melisandre', Email: 'Melisandre-james@gmail.com', age: 150, Phone: '(658)89965316', Add: '05048', City: 'Portugal', ZipCode: '97512' },
  { id: 7, RegisterId: '4006139', Name: 'Clifford', Email: 'FerraraSart312@gmail.com', age: 44, Phone: '(251)42529883', Add: '05049', City: 'Palstin', ZipCode: '46825' },
  { id: 8, RegisterId: '8153162', Name: 'Frances', Email: 'Rossini_deneries50@gmail.com', age: 36, Phone: '(378)19723648', Add: '05060', City: 'Argantina', ZipCode: '03468' },
  { id: 9, RegisterId: '7753298', Name: 'Germani', Email: 'SarosyAboo@gmail.com', age: 40, Phone: '(615)49157391', Add: '05031', City: 'Chely', ZipCode: '49015' },
  { id: 10, RegisterId: '7426023', Name: 'Mohamed', Email: 'MohamedElsays@gmail.com', age: 46, Phone: '(615)73932009', Add: '05018', City: 'Egpt', ZipCode: '16025' },
  { id: 11, RegisterId: '7061356', Name: 'Sandra', Email: 'AhmedKhalf@gmail.com', age: 30, Phone: '(615)09083712', Add: '05043', City: 'Kfs', ZipCode: '09305' },
  { id: 12, RegisterId: '8040165', Name: 'Himas', Email: 'RedaMohamed@gmail.com', age: 24, Phone: '(615)70098305', Add: '05064' , City: 'Barazil', ZipCode: '30469'}
];

export default function Contacts() {

  const theme = useTheme();

  const columns = [
    { field: 'id', headerName: 'ID', width: 50, align: 'center', headerAlign: 'center' },
    { field: 'RegisterId', headerName: 'Register ID', width: 160, align: 'center', headerAlign: 'center', flex: 1 },
    { field: 'Name', headerName: 'Name', width: 120, editable: true, align: 'center', headerAlign: 'center', flex: 1 },
    { field: 'Email', headerName: 'Email', width: 150, editable: true, align: 'center', headerAlign: 'center', flex: 1 },
    { field: 'age', headerName: 'Age', type: 'number', width: 110, editable: true, align: 'center', headerAlign: 'center', flex: 1 },
    { field: 'Phone', headerName: 'Phone', width: 160, align: 'center', headerAlign: 'center', flex: 1 },
    { field: 'Add', headerName: 'Add', width: 160, align: 'center', headerAlign: 'center', flex: 1 },
    { field: 'City', headerName: 'City', width: 160, align: 'center', headerAlign: 'center', flex: 1 },
    { field: 'ZipCode', headerName: 'Zip Code', width: 160, align: 'center', headerAlign: 'center', flex: 1 },
  ];

  return (
    <>
    <Typography sx={{ color: theme.palette.info.main, fontSize: 26, fontWeight: 'bold', textTransform: 'uppercase', mb: 0.5 }}>Contacts</Typography>
    <Typography sx={{ fontSize: 13, mb: 5, letterSpacing: 1 }}>List Of Future Of Contact Reference</Typography>
    <Box sx={{ height: 590, width: '98%', mx: 'auto' }}>
      <DataGrid
      slots={{ toolbar: GridToolbar }}
        rows={rows}
        columns={columns}
      />
    </Box>
    </>
  );
}
