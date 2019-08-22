import React from 'react';
import { useQuery, GET_LIST } from 'react-admin';
import { format, parseISO } from 'date-fns';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const PendingOrders = () => {
    const { loading, error, data } = useQuery({
        type: GET_LIST,
        resource: 'commands',
        payload: {
            pagination: { page: 1, perPage: 10 },
            sort: { field: 'date', order: 'ASC' },
            filter: { status: 'ordered' },
        },
    });
    if (loading) {
        return <p>Loading</p>;
    }
    if (error) {
        return <p>ERROR</p>;
    }

    return (
        <div
            css={css`
                margin-top: 30px;
            `}
        >
            Pending Orders
            <ul>
                {data.map(({ id, customer_id, date, total }) => (
                    <li key={id}>{`Customer: ${customer_id} - ${format(
                        parseISO(date),
                        'dd/MM/yyyy, HH:mm:ss',
                    )} - $${total}`}</li>
                ))}
            </ul>
        </div>
    );
};

export default PendingOrders;
