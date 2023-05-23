import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme"


export const App = () => {
    return (
        // This AppTheme could have been added directly in the main too. But it's here to avoid the main from becoming too big.
        <AppTheme>
            <AppRouter />
        </AppTheme>
    )
}