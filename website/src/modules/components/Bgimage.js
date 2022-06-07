import * as React from "react";
import TextField from "@mui/material/TextField";
import { SxProps } from "@mui/material/styles";
import Paper from '@mui/material/Paper';

const styles = {
    paperContainer: {
        height: '500px',
        backgroundImage: 'url(https://i.ytimg.com/vi/xgAB5Q7jlvM/mqdefault.jpg)'
    }
};

export const BgImage = () => {
    return (
        <Paper style={styles.paperContainer}>
            Ratio
        </Paper>
    );
}