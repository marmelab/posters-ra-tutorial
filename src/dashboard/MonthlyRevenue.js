import React from 'react';
import CardValue from './CardValue';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    main: {
        flex: '1',
        marginTop: 20,
    },
});

const MonthlyRevenue = ({ value }) => {
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <CardValue title="Monthly Revenue" value={'$'.concat(value)} />
        </div>
    );
};

export default MonthlyRevenue;
