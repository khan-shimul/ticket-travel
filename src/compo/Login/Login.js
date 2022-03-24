import { Box, Button, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import loginImg from '../../images/lging img.png';
import logo from '../../images/logo.png';
import facebook from '../../images/facebook.svg';
import google from '../../images/google.svg';

const useStyles = makeStyles({
    inputLogin: {
        padding: '12px 15px',
        width: '50%',
        color: '#707070',
        fontSize: '15px',
        border: '2px solid #666666',
        borderRadius: '10px',
        marginTop: '20px',
    },
    btnLogin: {
        width: '57%',
        background: '#3E489A !important',
        padding: '10px !important',
    }
})

const Login = () => {
    const classes = useStyles();
    return (
        <Box component="section">
            <Grid container spacing={2}>
                <Grid sx={{ background: '#000' }} item xs={12} sm={12} md={8}>
                    <Box component="div" sx={{ pt: '79px', pb: '22px', pl: '150px', pr: '300px' }}>
                        <img style={{ height: '100%', width: '100%' }} src={loginImg} alt="Login" />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    {/* Login Form */}
                    <Box component="div" sx={{ background: '#fff', boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.5)', my: '50px', ml: '-200px', width: '550px', textAlign: 'center', borderRadius: '10px', py: '40px' }}>
                        <Box>
                            <Box>
                                <Box><img src={logo} alt="Logo" /></Box>
                                <Typography variant="h6" sx={{ fontSize: '25px', color: '#473558', mb: 2 }}>Explore The Best Tours... Hurry up!!</Typography>
                                <input className={classes.inputLogin} placeholder="Email Address" type="email" />
                                <input className={classes.inputLogin} placeholder="Email Address" type="password" />
                                <Typography sx={{ textAlign: 'right', mr: 15, color: '#FF0000', fontSize: '12px', my: 1 }}>Forgot Password?</Typography>
                                <Button
                                    variant="contained"
                                    className={classes.btnLogin}
                                >Log in</Button>
                            </Box>
                            {/* Or */}
                            <Box component="div" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '40px', mb: '30px' }}>
                                <Box sx={{ width: '120px', height: '1px', background: '#666666' }}></Box>
                                <Typography sx={{ px: '25px', fontWeight: 700, color: '#333333' }}>Or</Typography>
                                <Box sx={{ width: '120px', height: '1px', background: '#666666' }}></Box>
                            </Box>
                            {/* Social Button */}
                            <Box>
                                <img style={{ marginRight: '50px', height: '40px' }} src={facebook} alt="" />
                                <img style={{ height: '40px' }} src={google} alt="" />
                            </Box>
                            {/* Sec Footer Text */}
                            <Box>
                                <Typography sx={{ fontSize: '16px', color: '#707070', mt: '20px' }}>Don't have an account?  <Box component="span" sx={{ fontWeight: 700, color: '#00AEEF' }}>Sign Up</Box></Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Login;