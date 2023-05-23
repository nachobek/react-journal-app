import { Link as ReactRouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';

import { AuthLayout } from '../layout/AuthLayout';


export const RegisterPage = () => {
    return (
        <AuthLayout title="Register">
            <form>
                <Grid container>
                    <Grid item xs={12} sx={{mb: 1.5}}>
                        <TextField
                            label="Full Name"
                            type="text"
                            placeholder="First Last"
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sx={{mb: 1.5}}>
                        <TextField
                            label="Email"
                            type="email"
                            placeholder="email@domain.com"
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sx={{mb: 1.5}}>
                        <TextField
                            label="Password"
                            type="password"
                            placeholder="********"
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Repeat Password"
                            type="password"
                            placeholder="********"
                            fullWidth
                        />
                    </Grid>

                    <Grid container mt={0} spacing={2} justifyContent="center">
                        <Grid item xs={12} sm={6}>
                            <Button variant="contained" fullWidth>
                                Create Account
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="end" mt={1.5}>
                        {/* <Typography mr={1}>Already a user?</Typography> */}
                        <Link component={ReactRouterLink} color="inherit" to="/auth/login">
                            Already a user? Login
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}