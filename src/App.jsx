import React, { useState } from 'react'
import { Box, Card, Container, TextField, Button } from '@mui/material/'
import { useNavigate } from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import ImF from './Images/facebook.png'
import ImG from './Images/ig.png'
import ImC from './Images/3600912.png'
import axios from 'axios'

export default function App() {
    const navigation = useNavigate()

    const [email, setemail] =useState("")
    const [password, setpassword] = useState("")

    const handleLogin = () => {
        axios ({
            url:'http://localhost:3000/Login',
            method:'post',
            data:{
                email: email,
                password: password
            }
        }).then(res => {
            switch (res.data.status) {
                case 200:
                    alert(res.data.msg)  
                    navigation('/profile')             
                    break;
                case 404:
                    alert(res.data.msg)               
                    break;          
                default:
                    alert('Login failed')
                    break;
            }
        })
    }


    return (
        <Box sx={{ 
            background: '#2980b9',
            background: 'linear-gradient(to right, #2980b9, #6dd5fa, #ffffff)',
            background: 'linear-gradient(to right, #2980b9, #6dd5fa, #ffffff)',
            height: '100%'
        }}>
            <Container  sx={{ paddingTop: 10, marginLeft: 85 }}>
                <Card sx={{ height: 650, width: 450 }}>
                    <Box sx={{
                        background: ' #C9D6FF',
                        background: 'linear-gradient(to right, #E2E2E2, #C9D6FF)',
                        background: 'linear-gradient(to right, #E2E2E2, #C9D6FF)',
                        height: "100%"
                    }}>
                        <Box sx={{ paddingLeft: 22, paddingTop: 1 }}>
                            <h1>Login</h1>
                        </Box>
                        <Box
                            sx={{
                                width: 350,
                                maxWidth: '100%',
                                paddingLeft: 5,
                                paddingTop: 5
                            }}>
                            <TextField fullWidth label="Email" id="fullWidth" variant="standard"
                            onChange={(e) => setemail(e.target.value)} />
                            <br /> <br /> <br /> <br />
                            <TextField fullWidth label="Password" id="fullWidth" variant="standard" type="password"
                            onChange={(e) => setpassword(e.target.value)}/>
                        </Box>

                        <Stack direction="row" spacing={2} paddingTop={6} paddingLeft={10} width={300}>
                            <Button variant="contained" endIcon={<SendIcon />} fullWidth onClick={handleLogin}
                                sx={{
                                    background: '#ff4b1f',
                                    background: 'linear-gradient(to right, #1fddff, #ff4b1f)',
                                    background: 'linear-gradient(to right, #1fddff, #ff4b1f)',
                                    height: "100%"
                                }}>
                                LOGIN
                            </Button>
                        </Stack>

                        <Stack direction="row" spacing={2} paddingTop={4} paddingLeft={19}>
                            <Avatar alt="Remy Sharp" src={ImF} />
                            <Avatar alt="Travis Howard" src={ImG} />
                            <Avatar alt="Cindy Baker" src={ImC} />
                        </Stack>
                        <Box sx={{ paddingTop: 15, fontSize: 12, paddingLeft: 22 }}>
                            <p>Or Sign Up Using</p>
                            <h1>SIGN UP</h1>
                        </Box>
                    </Box>
                </Card>
            </Container>
        </Box>
    )
}
