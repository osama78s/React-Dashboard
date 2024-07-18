import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, MenuItem, Snackbar, Stack, Typography, useTheme } from '@mui/material';
import { useForm } from "react-hook-form"

export default function Form() {

  let theme = useTheme();

  const currencies = [
    {
      value: 'Admin',
      label: 'Admin',
    },
    {
      value: 'Manager',
      label: 'Manager',
    },
    {
      value: 'User',
      label: 'User',
    }
  ];

  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const regNumber = /^([+]\d{2})?\d{11}$/

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const handleClick = (newState) => {
    setState({ ...state, ...newState, open: true });
  };

  const onSubmit = () => {
    handleClick({ vertical: 'bottom', horizontal: 'center' });
  } 

  return (
    <>
      <Typography sx={{ color: theme.palette.info.main, fontSize: 26, fontWeight: 'bold', textTransform: 'uppercase', mb: 0.5 }}>Create User</Typography>
      <Typography sx={{ fontSize: 13, mb: 3, letterSpacing: 1 }}>Create A New User Profile</Typography>
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}
        noValidate
        autoComplete="off"
      >
        <Stack sx={{ gap: 2 }} direction={'row'}>
          <TextField sx={{ flex: 1 }} label="First Name" variant="filled"
            helperText={Boolean(errors.firstName) ? "This Field Is Required & MaxLength 10" : ''}
            error={Boolean(errors.firstName)} {...register("firstName", { required: true, maxLength: 10 })} />
          <TextField sx={{ flex: 1 }} label="Last Name" variant="filled"
            helperText={Boolean(errors.lastName) ? "This Field Is Required & MaxLength 10" : ''}
            error={Boolean(errors.lastName)} {...register("lastName", { required: true, maxLength: 10 })} />
        </Stack>

        <TextField label="Email" variant="filled"
          helperText={Boolean(errors.email) ? 'Please Provide A Valid Email Address ' : null}
          error={Boolean(errors.email)} {...register("email", { required: true, pattern: regEmail })} />

        <TextField label="Contact Number" variant="filled"
          helperText={Boolean(errors.contactnumber) ? 'Please Provide A Valid Phone Number ' : null}
          error={Boolean(errors.contactnumber)} {...register("contactnumber", { required: true, pattern: regNumber })} />

        <TextField label="Address 1" variant="filled"/>
        <TextField label="Address 2" variant="filled"/>

        <TextField
          variant="filled"
          id="outlined-select-currency"
          select
          label="Role"
          defaultValue="User"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Box sx={{ textAlign: 'right' }}>
          <Button  type='submit' variant='contained' sx={{ textTransform: 'capitalize' }}>Create New User</Button>
        </Box>

      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Account Created Successfully"
        key={vertical + horizontal}
      />
      </Box>
    </>
  )
}
