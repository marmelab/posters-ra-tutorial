import React from 'react';
import { Admin, Resource } from 'react-admin';
import './App.css';

import restProvider from './dataProvider/restProvider';

import { ProductList } from './products/products';
import { CategoryList } from './categories/categories';
import { CustomerList } from './customers/customers';
import { CommandList } from './commands/commands';
import { ReviewList } from './reviews/reviews';
import { InvoiceList } from './invoices/invoices';

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
