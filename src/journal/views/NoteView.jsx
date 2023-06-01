import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';

import { ImageGallery } from '../components';


export const NoteView = () => {
    return (
        <Grid container direction="row" alignItems="center" justifyContent="space-between" sx={{mb: 1}}>
            <Grid item>
                <Typography fontSize={39} fontWeight="light">June 1, 2023</Typography>
            </Grid>
            <Grid item>
                <Button color="primary" sx={{padding: 1.5}}>
                    <SaveOutlined sx={{fontSize: 30, mr: .5}} />
                    Save
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type="text"
                    variant='filled'
                    fullWidth
                    // placeholder="Add a title"
                    label="Title"
                    sx={{border: 'none', mb: 1}}
                />

                <TextField
                    type="text"
                    variant='filled'
                    fullWidth
                    multiline
                    // placeholder="What's on your mind?"
                    label="Journal Entry"
                    minRows={5}
                />
            </Grid>

            <ImageGallery />
        </Grid>
    )
}