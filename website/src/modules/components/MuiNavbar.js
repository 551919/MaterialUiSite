import { AppBar, Toolbar, Typography } from "@mui/material"

export const MuiNavbar = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6' component='div'>
                    ORMI
                </Typography>
            </Toolbar>
        </AppBar>

    )
}