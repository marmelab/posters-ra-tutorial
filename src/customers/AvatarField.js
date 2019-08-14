import React from 'react';
import Avatar from '@material-ui/core/Avatar';

export const AvatarField = ({ record }) => (
    <div>
        <Avatar src={record.avatar} />
        {`${record.first_name} ${record.last_name}`}
    </div>
);
