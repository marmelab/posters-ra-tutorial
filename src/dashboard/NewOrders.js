import React from 'react';
import { useQuery, GET_LIST } from 'react-admin';

const NewOrders = () => {
    const { loading, error, total } = useQuery({
        type: GET_LIST,
        resource: 'commands',
        payload: {
            pagination: { page: 1, perPage: 10 },
            sort: { field: 'price', order: 'ASC' },
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
        <div>
            <p>New Orders: {total}</p>
        </div>
    );
};

export default NewOrders;
