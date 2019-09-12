import React from 'react';
import { ReferenceField } from 'react-admin';
import CardValue from './CardValue';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import Icon from '@material-ui/icons/Stars';

const style = { opacity: 0.87, width: 20, height: 20 };

const StarRatingField = ({ rating }) => (
    <span>
        {Array(rating)
            .fill(true)
            .map((_, i) => (
                <Icon key={i} style={style} />
            ))}
    </span>
);

const ReferencedCustomerProvider = ({ record, children }) => {
    const Proxy = props => children(props);
    return (
        <ReferenceField
            record={record}
            basePath="/commands"
            source="customer_id"
            reference="customers"
        >
            <Proxy />
        </ReferenceField>
    );
};

const PendingReviews = ({ reviews }) => {
    return (
        <Card>
            <CardValue title="Pending Reviews" value={reviews.length} />
            <Divider />
            <List dense={true}>
                {reviews.map(record => {
                    const { id, rating, comment } = record;
                    return (
                        <ReferencedCustomerProvider key={id} record={record}>
                            {({ record }) => (
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar src={record.avatar} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={<StarRatingField rating={rating} />}
                                        secondary={comment.substring(0, 40)}
                                    />
                                </ListItem>
                            )}
                        </ReferencedCustomerProvider>
                    );
                })}
            </List>
        </Card>
    );
};

export default PendingReviews;
