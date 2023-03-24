import React from 'react'
import { Avatar, Container, Box, Typography, TextField, MenuItem } from '@mui/material'
import Img from './Images/smile.png'
export default function Profile() {
  const data = [
    { id: 1, title: 'Username', lable: 'username' },
    { id: 1, title: 'Email', lable: 'email' },
    { id: 1, title: 'Password', lable: 'password' },
    { id: 1, title: 'Firstname', lable: 'firstname' },
    { id: 1, title: 'Lastname', lable: 'lastname' },
  ]
  const language = [
    {
      value: 'Lao',
      label: 'Lao'
    },
    {
      value: 'Thai',
      label: 'Thai'
    },
    {
      value: 'English',
      label: 'English'
    },
    {
      value: 'Chinese',
      label: 'Chinese'
    }
  ]

  return (
    <Container maxWidth='xl'>
      <Box display='flex'>
        <Box flex={1} paddingTop={3}>
          <Avatar sx={{ width: 250, height: 200, fontSize: 60, marginLeft: 3 }}>

            <img src={Img} alt="" />
          </Avatar>
        </Box>
        <Box flex={2} paddingTop={8} >
          <Typography variant='h4'>Sinnakhon KHAMSIPHANH</Typography>
          <Typography variant='body1'>sinnakhon@hotmail.com</Typography>
        </Box>
      </Box>

      <Box paddingTop={10}>
        <Typography variant='h4'>Account</Typography>

        {data.map(rows =>
          <Box display={'flex'} alignItems='center' p={2}>
            <Box flex={1}>
              <Typography variant='h6'>{rows.title}</Typography>
            </Box>
            <Box flex={2}>
            <TextField fullWidth  variant='outlined' label={rows.lable} value={''} />
            </Box>
          </Box>
        )}
        <Box display={'flex'} alignItems='center' p={2}>
          <Box flex={1}>
            <Typography variant='h6'>Language</Typography>
          </Box>

          <Box component="form" flex={2}
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-select-language"
              select
              label="Select"
              defaultValue="Lao"
              helperText="Please select your language"
            >
              {language.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}
