import { AppBar, Icon, Toolbar, Typography, useStepperContext, Slide, useScrollTrigger, Stack, Button } from "@mui/material"
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';

export const MuiNavbar = () => {
    const trigger = useScrollTrigger();
    return (
        <Slide appear={false} direction='down' in={!trigger}>
            <AppBar color="primary">
                <Toolbar>
                    <CurrencyBitcoinIcon sx={{ display: { xs: 'none', md: 'flex', fontSize: 50 }, mr: 1 }} />
                    <Typography sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        fontSize: 50,
                    }}>
                        ORMI
                    </Typography>
                    <Stack direction='row' spacing={2}>
                        <Button color='inherit'>Sign In</Button>
                        <Button color='inherit'>Sign Up</Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Slide>
    )
}