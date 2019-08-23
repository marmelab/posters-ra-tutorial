import React from 'react';
import CardValue from './CardValue';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    main: {
        flex: '1',
        marginTop: 20,
    },
});

const NewOrders = ({ value }) => {
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <CardValue title="New Orders" value={value} />
        </div>
    );
};

export default NewOrders;
