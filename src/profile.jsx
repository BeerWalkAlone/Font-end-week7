import React, {useEffect, useState}from 'react'
import { Avatar, Container, Box, Typography, TextField, MenuItem } from '@mui/material'
import Img from './Images/smile.png'
import axios from 'axios'

export default function Profile() {
const [userInfo, setuserInfo] = useState([])
useEffect(() => {
  axios({
    url:'http://localhost:3000/user/5',
    method:'get'
    
  }).then(res => {
    
    setuserInfo(
     [
      { id: 1, title: 'Username', lable: 'username', value: res.data[0].username },
      { id: 1, title: 'Email', lable: 'email' , value: res.data[0].email},
      { id: 1, title: 'Password', lable: 'password' , value: res.data[0].password},
      { id: 1, title: 'Firstname', lable: 'firstname' , value: res.data[0].firstname},
      { id: 1, title: 'Lastname', lable: 'lastname', value: res.data[0].lastname},
    ])
  })
}, [])




 
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
    <Container maxWidth='lg'>
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

        {userInfo.map(rows =>
          <Box display={'flex'} alignItems='center' p={2}>
            <Box flex={1}>
              <Typography variant='h6' >{rows.title}</Typography>
            </Box>
            <Box flex={2}>
            <TextField fullWidth  variant='outlined' label={rows.lable} value={rows.value || ""} />
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
