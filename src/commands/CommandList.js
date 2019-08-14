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
    Filter,
    TextInput,
    NullableBooleanInput,
    NumberInput,
    ReferenceInput,
    SelectInput,
} from 'react-admin';

const CommandFilter = props => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Customer" source="customer_id" reference="customers">
            <SelectInput optionText={choice => `${choice.first_name} ${choice.last_name}`} />
        </ReferenceInput>
        <NumberInput label="Min amount" source="total_gte" />
        <NullableBooleanInput label="Returned" source="returned" />
    </Filter>
);

export const CommandList = props => (
    <List title="Orders" filters={<CommandFilter />} {...props}>
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
