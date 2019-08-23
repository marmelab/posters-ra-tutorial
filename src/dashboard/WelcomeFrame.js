import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/Code';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    media: {
        height: '18em',
    },
});

const mediaUrl = `https://marmelab.com/posters/beard-${parseInt(Math.random() * 10, 10) + 1}.jpeg`;

const WelcomeFrame = () => {
    const classes = useStyles();

    return (
        <Card>
            <CardMedia image={mediaUrl} className={classes.media} />

            <CardContent align="left">
                <Typography variant="h5" component="h2">
                    Welcome to react-admin demo
                </Typography>
                <Typography component="p">
                    This is the admin of an imaginary poster shop. Fell free to explore and modify
                    the data - it's local to your computer, and will reset each time you reload.
                </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'flex-end' }}>
                <Button href="https://marmelab.com/react-admin">
                    <HomeIcon style={{ paddingRight: '0.5em' }} />
                    react-admin site
                </Button>
                <Button href="https://github.com/marmelab/react-admin/tree/master/examples/demo">
                    <CodeIcon style={{ paddingRight: '0.5em' }} />
                    Source for this demo
                </Button>
            </CardActions>
        </Card>
    );
};

export default WelcomeFrame;
