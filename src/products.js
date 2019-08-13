import React from 'react';
import { List, Datagrid, TextField, NumberField, UrlField, ImageField } from 'react-admin';

export const ProductList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="reference" />
            <NumberField source="width" />
            <NumberField source="height" />
            <NumberField source="price" />
            <UrlField source="thumbnail" />
            <ImageField source="image" title="reference" />
            <TextField source="description" />
            <NumberField source="stock" />
        </Datagrid>
    </List>
);
