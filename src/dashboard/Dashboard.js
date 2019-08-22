import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import WelcomeFrame from './WelcomeFrame';
import PendingOrders from './PendingOrders';
import PendingReviews from './PendingReviews';
import NewCustomers from './NewCustomers';
import NewOrders from './NewOrders';
import MonthlyRevenue from './MonthlyRevenue';

const row = css`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    border: solid;
`;

const Dashboard = () => (
    <Card>
        <CardContent>
            <div css={row}>
                <div
                    css={css`
                        display: flex;
                        flex-direction: column;
                        border: solid;
                        align-items: center;
                        flex: 1 0 0;
                    `}
                >
                    <div
                        css={css`
                            display: flex;
                            flex-direction: row;
                            justify-content: space-evenly;
                            border: solid;
                            width: 100%;
                        `}
                    >
                        <MonthlyRevenue />
                        <NewOrders />
                    </div>
                    <WelcomeFrame />
                    <PendingOrders />
                </div>

                <div
                    css={css`
                        display: flex;
                        flex-direction: row;
                        flex: 1 0 0;
                    `}
                >
                    <div
                        css={css`
                            flex: 1 0 0;
                        `}
                    >
                        <PendingReviews />
                    </div>

                    <div
                        css={css`
                            flex: 1 0 0;
                        `}
                    >
                        <NewCustomers />
                    </div>
                </div>
            </div>
        </CardContent>
    </Card>
);

export default Dashboard;
