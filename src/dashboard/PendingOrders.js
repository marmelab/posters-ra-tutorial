import React from 'react';
import { ReferenceField } from 'react-admin';
import { format, parseISO } from 'date-fns';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const AvatarField = ({ record }) => <Avatar src={record.avatar} />;

const FullName = ({ record }) => <span>{`${record.first_name} ${record.last_name}`}</span>;

const ReferencedCustomer = ({ record, children }) => (
    <ReferenceField record={record} basePath="/commands" source="customer_id" reference="customers">
        {children}
    </ReferenceField>
);

const PendingOrders = ({ orders }) => {
    return (
        <Card>
            <CardHeader align="left" title="Pending Orders" />
            <List dense={true}>
                {orders.map(record => {
                    const { id, date, basket, total } = record;
                    return (
                        <ListItem key={id}>
                            <ListItemAvatar>
                                <ReferencedCustomer record={record}>
                                    <AvatarField />
                                </ReferencedCustomer>
                            </ListItemAvatar>
                            <ListItemText
                                primary={format(parseISO(date), 'dd/MM/yyyy, HH:mm:ss')}
                                secondary={
                                    <span>
                                        <ReferencedCustomer record={record}>
                                            <FullName />
                                        </ReferencedCustomer>
                                        , {basket.length} items
                                    </span>
                                }
                            />
                            <ListItemSecondaryAction>
                                <span
                                    style={{
                                        marginRight: '1em',
                                    }}
                                >
                                    ${total}
                                </span>
                            </ListItemSecondaryAction>
                        </ListItem>
                    );
                })}
            </List>
        </Card>
    );
};

export default PendingOrders;
