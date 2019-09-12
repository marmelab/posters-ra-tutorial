import React from 'react';
import { Admin, Resource } from 'react-admin';

import './App.css';

import restProvider from './dataProvider/restProvider';

import Dashboard from './dashboard/Dashboard';
import MyLayout from './MyLayout';

import products from './products';
import reviews from './reviews';
import invoices from './invoices';
import categories from './categories';
import commands from './commands';
import customers from './customers';

const App = () => (
    <div className="App">
        <Admin
            title="Posters Galore"
            layout={MyLayout}
            dashboard={Dashboard}
            dataProvider={restProvider}
        >
            <Resource options={{ label: 'Orders' }} name={'commands'} {...commands} />
            <Resource name={'invoices'} {...invoices} />
            <Resource options={{ label: 'Posters' }} name={'products'} {...products} />
            <Resource name={'categories'} {...categories} />
            <Resource name={'customers'} {...customers} />
            <Resource name={'reviews'} {...reviews} />
        </Admin>
    </div>
);

export default App;
