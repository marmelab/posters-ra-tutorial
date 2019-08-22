import React from 'react';
import { useQuery, GET_LIST } from 'react-admin';

import { startOfMonth, endOfMonth } from 'date-fns';

const today = Date.now();
const MonthlyRevenue = () => {
    const { loading, error, data } = useQuery({
        type: GET_LIST,
        resource: 'commands',
        payload: {
            pagination: { page: 1, perPage: 10 },
            sort: { field: 'price', order: 'ASC' },
            filter: {
                status: 'delivered',
                date_gte: startOfMonth(today),
                date_lte: endOfMonth(today),
            },
        },
    });
    if (loading) {
        return <p>Loading</p>;
    }
    if (error) {
        return <p>ERROR</p>;
    }
    const totalAmount = data.reduce((acc, order) => acc + order.total, 0);
    return (
        <div>
            <p>{`MonthlyRevenue: $${totalAmount.toFixed(2)}`}</p>
        </div>
    );
};

export default MonthlyRevenue;
