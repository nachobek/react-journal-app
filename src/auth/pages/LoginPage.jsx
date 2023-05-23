import { Link as ReactRouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';

import { AuthLayout } from '../layout/AuthLayout';


export const LoginPage = () => {
    return (
        <AuthLayout title="Login">
            <form>
                <Grid container>
                    <Grid item xs={12} sx={{mb: 1.5}}>
                        <TextField
                            label="Email"
                            type="email"
                            placeholder="email@domain.com"
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Password"
                            type="password"
                            placeholder="********"
                            fullWidth
                        />
                    </Grid>

                    <Grid container mt={0} spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Button variant="contained" fullWidth>
                                Login
                            </Button>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Button variant="contained" fullWidth>
                                <Google />
                                <Typography variant="button" ml={1}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="end" mt={1.5}>
                        <Link component={ReactRouterLink} color="inherit" to="/auth/register">
                            Create Account
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}