import React from 'react';
import { useQuery, GET_LIST } from 'react-admin';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import { addDays, endOfMonth, startOfMonth } from 'date-fns';

import WelcomeFrame from './WelcomeFrame';
import PendingOrders from './PendingOrders';
import PendingReviews from './PendingReviews';
import NewCustomers from './NewCustomers';
import NewOrders from './NewOrders';
import MonthlyRevenue from './MonthlyRevenue';

const styles = {
    flexRow: css`
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    `,
    flexColumn: css`
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    `,

    leftItem: css`
        flex: 1 0 0;
        margin-right: 1em;
    `,
    rightItem: css`
        flex: 1 0 0;
        margin-left: 1em;
    `,
    singleItem: css`
        flex: 1 0 0;
        margin-top: 2em;
        margin-bottom: 2em;
    `,
};

const today = Date.now();
const Dashboard = () => {
    const { data: lastMonthOrders } = useQuery({
        type: GET_LIST,
        resource: 'commands',
        payload: {
            pagination: { page: 1, perPage: 10 },
            sort: { field: 'price', order: 'ASC' },
            filter: {
                status: 'delivered',
                date_gte: startOfMonth(today),
                date_lte: endOfMonth(today),
            },
        },
    });
    const { total: nbPendingOrders, data: pendingOrders } = useQuery({
        type: GET_LIST,
        resource: 'commands',
        payload: {
            pagination: { page: 1, perPage: 10 },
            sort: { field: 'price', order: 'ASC' },
            filter: { status: 'ordered' },
        },
    });

    const { data: newCustomers } = useQuery({
        type: GET_LIST,
        resource: 'customers',
        payload: {
            pagination: { page: 1, perPage: 7 },
            sort: { field: 'date', order: 'ASC' },
            filter: { has_ordered: true, last_seen_gte: addDays(today, -3) },
        },
    });

    const { data: pendingReviews } = useQuery({
        type: GET_LIST,
        resource: 'reviews',
        payload: {
            pagination: { page: 1, perPage: 10 },
            sort: { field: 'date', order: 'DESC' },
            filter: { status: 'pending' },
        },
    });

    const totalAmount =
        lastMonthOrders && lastMonthOrders.reduce((acc, order) => acc + order.total, 0);

    return (
        <div css={styles.flexRow}>
            <div css={styles.leftItem}>
                <div css={styles.flexColumn}>
                    <div css={styles.flexRow}>
                        <div css={styles.leftItem}>
                            <MonthlyRevenue value={totalAmount ? totalAmount.toFixed(0) : '-'} />
                        </div>
                        <div css={styles.rightItem}>
                            <NewOrders value={nbPendingOrders ? nbPendingOrders : '-'} />
                        </div>
                    </div>
                    <div css={styles.singleItem}>
                        <WelcomeFrame />
                    </div>
                    <div css={styles.singleItem}>
                        <PendingOrders orders={pendingOrders ? pendingOrders : []} />
                    </div>
                </div>
            </div>
            <div css={styles.rightItem}>
                <div css={styles.flexRow}>
                    <div css={styles.leftItem}>
                        <PendingReviews reviews={pendingReviews ? pendingReviews : []} />
                    </div>
                    <div css={styles.rightItem}>
                        <NewCustomers customers={newCustomers ? newCustomers : []} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
