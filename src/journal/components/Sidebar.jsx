import { TurnedInNot } from '@mui/icons-material';
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';


export const Sidebar = ({drawerWidth = 240}) => {
    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant="permanent" // Temporary...
                open
                sx={{
                    display: 'block',
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } // Computed property - Additional properties added to the Material UI Drawer.
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Pepito
                    </Typography>
                </Toolbar>

                <Divider />

                <List>
                    {
                        ['January', 'February', 'March', 'April'].map( month => (
                            <ListItem key={month} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>

                                    <Grid container direction="column" alignItems="start" justifyContent="center">
                                        <ListItemText primary={month} />
                                        <ListItemText secondary='Lorem ipsum dolor sit amet.'/>
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}