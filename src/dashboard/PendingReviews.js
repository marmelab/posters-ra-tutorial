import React, { useState, useEffect } from 'react';
import { useDataProvider, GET_LIST, GET_MANY } from 'react-admin';

const PendingReviews = () => {
    const dataProvider = useDataProvider();
    const [loading, setLoading] = useState(true);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        (async function() {
            // useEffect doesn't accept async functions
            const { data: pendingReviews } = await dataProvider(GET_LIST, 'reviews', {
                pagination: { page: 1, perPage: 10 },
                filter: { status: 'pending' },
                sort: { field: 'date', order: 'DESC' },
            });
            const customerIds = pendingReviews.map(review => review.customer_id);
            const uniqueCustomerIds = [...new Set(customerIds)];
            const { data: customers } = await dataProvider(GET_MANY, 'customers', {
                ids: uniqueCustomerIds,
            });
            const customersById = customers.reduce((acc, customer) => {
                acc[customer.id] = customer;
                return acc;
            }, {});
            const pendingReviewsWithCustomers = pendingReviews.map(review => ({
                ...review,
                customer: customersById[review.customer_id],
            }));
            setReviews(pendingReviewsWithCustomers);
            setLoading(false);
        })();
    }, [dataProvider]);

    if (loading) {
        return <p>Loading</p>;
    }
    console.log('reviews', reviews);
    return (
        <div>
            Pending Reviews: {reviews.length}
            <br />
            {reviews.map(review => (
                <div key={review.id}>
                    {review.customer.first_name} {review.customer.last_name}: {review.rating}*<br />
                    {review.comment.substring(0, 20)}...
                </div>
            ))}
        </div>
    );
};

export default PendingReviews;
