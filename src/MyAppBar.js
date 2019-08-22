import React from 'react';
import { AppBar } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    title: {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
};

const MyAppBar = withStyles(styles)(({ classes, ...props }) => (
    <AppBar {...props}>
        <Typography variant="h6" color="inherit" className={classes.title} id="react-admin-title">
            ~Posters Galore~
        </Typography>
    </AppBar>
));

export default MyAppBar;
