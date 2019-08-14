import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    UrlField,
    ImageField,
    ReferenceField,
} from 'react-admin';

export const ProductList = props => (
    <List title="Posters" {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="category_id" reference="categories">
                <TextField source="id" />
            </ReferenceField>
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
