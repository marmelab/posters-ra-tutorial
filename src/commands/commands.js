import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    DateField,
    BooleanField,
    ReferenceField,
    ArrayField,
    SingleFieldList,
    ChipField,
} from 'react-admin';

export const CommandList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="reference" />
            <DateField source="date" />
            <ReferenceField source="customer_id" reference="customers">
                <TextField source="id" />
            </ReferenceField>
            <ArrayField source="basket">
                <SingleFieldList>
                    <ChipField source="product_id" />
                </SingleFieldList>
            </ArrayField>
            <NumberField source="total_ex_taxes" />
            <NumberField source="delivery_fees" />
            <NumberField source="tax_rate" />
            <NumberField source="taxes" />
            <NumberField source="total" />
            <TextField source="status" />
            <BooleanField source="returned" />
        </Datagrid>
    </List>
);
