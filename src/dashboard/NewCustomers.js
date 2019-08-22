import React from 'react';
import { useQuery, GET_LIST } from 'react-admin';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import { addDays } from 'date-fns';

const today = Date.now();
const NewCustomers = () => {
    const { loading, error, data } = useQuery({
        type: GET_LIST,
        resource: 'customers',
        payload: {
            pagination: { page: 1, perPage: 7 },
            sort: { field: 'date', order: 'ASC' },
            filter: { has_ordered: true, last_seen_gte: addDays(today, -3) },
        },
    });
    if (loading) {
        return <p>Loading</p>;
    }
    if (error) {
        return <p>ERROR</p>;
    }

    console.log('customers', data);
    return (
        <div
            css={css`
                margin-top: 30px;
            `}
        >
            New Customers: {data.length}
            <div>
                {data.map(({ id, first_name, last_name }) => (
                    <div key={id}>
                        {first_name} {last_name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewCustomers;
