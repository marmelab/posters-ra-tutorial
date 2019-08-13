import React from 'react';

export const AddressField = ({ record }) => (
    <div>{`${record.address}, ${record.city} ${record.zipcode}`}</div>
);
