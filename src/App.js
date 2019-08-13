import React from 'react';
import { Admin, Resource } from 'react-admin';
import './App.css';

import restProvider from './dataProvider/restProvider';

import { ProductList } from './products/ProductList';
import { CategoryList } from './categories/CategoryList';
import { CustomerList } from './customers/CustomerList';
import { CommandList } from './commands/CommandList';
import { ReviewList } from './reviews/ReviewList';
import { InvoiceList } from './invoices/InvoiceList';

const App = () => (
    <div className="App">
        <Admin title="adminTitle" dataProvider={restProvider}>
            <Resource name={'products'} list={ProductList} />
            <Resource name={'categories'} list={CategoryList} />
            <Resource name={'customers'} list={CustomerList} />
            <Resource name={'commands'} list={CommandList} />
            <Resource name={'invoices'} list={InvoiceList} />
            <Resource name={'reviews'} list={ReviewList} />
        </Admin>
    </div>
);

export default App;
