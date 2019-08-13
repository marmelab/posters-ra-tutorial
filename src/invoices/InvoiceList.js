import React from 'react';
import { List, Datagrid, TextField, NumberField, DateField, ReferenceField } from 'react-admin';

export const InvoiceList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <DateField source="date" />
            <ReferenceField source="command_id" reference="commands">
                <TextField source="id" />
            </ReferenceField>
            <ReferenceField source="customer_id" reference="customers">
                <TextField source="id" />
            </ReferenceField>
            <NumberField source="total_ex_taxes" />
            <NumberField source="delivery_fees" />
            <NumberField source="tax_rate" />
            <NumberField source="taxes" />
            <NumberField source="total" />
        </Datagrid>
    </List>
);
