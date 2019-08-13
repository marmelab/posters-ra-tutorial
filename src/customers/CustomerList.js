import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    EmailField,
    DateField,
    BooleanField,
    ImageField,
} from 'react-admin';

export const CustomerList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="first_name" />
            <TextField source="last_name" />
            <EmailField source="email" />
            <TextField source="address" />
            <TextField source="zipcode" />
            <TextField source="city" />
            <ImageField source="avatar" />
            <DateField source="birthday" />
            <DateField source="first_seen" />
            <DateField source="last_seen" />
            <BooleanField source="has_ordered" />
            <DateField source="latest_purchase" />
            <BooleanField source="has_newsletter" />
            <TextField source="groups" />
            <NumberField source="nb_commands" />
            <NumberField source="total_spent" />
        </Datagrid>
    </List>
);
