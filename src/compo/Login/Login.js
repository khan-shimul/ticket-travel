import { Box, Button, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import loginImg from '../../images/lging img.png';
import logo from '../../images/logo.png';
import facebook from '../../images/facebook.svg';
import google from '../../images/google.svg';

// custom Styles
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
            {/* container */}
            <Grid container spacing={2}>
                <Grid sx={{ background: 'radial-gradient(99.87% 413.14% at 0% 4.98%, #443453 0%, #232323 28.23%, #252425 100%)' }} item xs={12} sm={12} md={8}>
                    <Box component="div" sx={{ pt: '79px', pb: { xs: '200px', md: '22px' }, pl: { md: '150px' }, pr: { md: '300px' } }}>
                        <img style={{ height: '100%', width: '100%' }} src={loginImg} alt="Login" />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    {/* Login Form */}
                    <Box component="div" sx={{ background: '#fff', boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.5)', my: { xs: '-150px', md: '50px' }, ml: { xs: '1px', md: '-200px' }, width: { md: '550px' }, textAlign: 'center', borderRadius: '10px', py: '40px' }}>
                        <Box>
                            <Box>
                                <Box><img src={logo} alt="Logo" /></Box>
                                <Typography variant="h6" sx={{ fontSize: '25px', color: '#473558', mb: 2 }}>Explore The Best Tours... Hurry up!!</Typography>
                                <input className={classes.inputLogin} placeholder="Email Address" type="email" />
                                <input className={classes.inputLogin} placeholder="Email Address" type="password" />
                                <Typography sx={{ textAlign: 'right', mr: { xs: 11, sm: 18, md: 15 }, color: '#FF0000', fontSize: '12px', mt: 1, mb: 2, cursor: 'pointer' }}>Forgot Password?</Typography>
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
                                <img style={{ marginRight: '50px', height: '40px', cursor: 'pointer' }} src={facebook} alt="" />
                                <img style={{ height: '40px', cursor: 'pointer' }} src={google} alt="" />
                            </Box>
                            {/* Sec Footer Text */}
                            <Box>
                                <Typography sx={{ fontSize: '16px', color: '#707070', mt: '20px' }}>Don't have an account?  <Box component="span" sx={{ fontWeight: 700, color: '#00AEEF', cursor: 'pointer' }}>Sign Up</Box></Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Login;