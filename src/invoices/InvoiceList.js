import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    DateField,
    ReferenceField,
    Filter,
    DateInput,
} from 'react-admin';
import { AddressField } from '../customers/AddressField';
import { AvatarField } from '../customers/AvatarField';

const InvoiceFilter = props => (
    <Filter {...props}>
        <DateInput label="Passed Since" source="date_gte" alwaysOn />
        <DateInput label="Passed Before" source="date_lte" alwaysOn />
    </Filter>
);

export const InvoiceList = props => (
    <List filters={<InvoiceFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <DateField label="Invoice date" source="date" />
            <ReferenceField source="customer_id" reference="customers">
                <AvatarField source="id" />
            </ReferenceField>
            <ReferenceField
                label="Address"
                source="customer_id"
                reference="customers"
                linkType={false}
            >
                <AddressField source="id" />
            </ReferenceField>
            <ReferenceField label="Order" source="command_id" reference="commands">
                <TextField source="reference" />
            </ReferenceField>
            <NumberField source="total_ex_taxes" />
            <NumberField source="delivery_fees" />
            <NumberField source="taxes" />
            <NumberField source="total" />
        </Datagrid>
    </List>
);
