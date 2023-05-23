import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

// import { App } from '../App';
import { purpleTheme } from './'; // Importing from the index.js file.


export const AppTheme = ({children}) => {
    return (
        <ThemeProvider theme={ purpleTheme }>
            <CssBaseline />
            {/* The app will be a higher order component rather than the actual App and be received as a "child" */}
            {/* <App /> */}
            { children }
        </ThemeProvider>
    )
}