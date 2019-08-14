import React from 'react';
import { Admin, Resource } from 'react-admin';

import UserIcon from '@material-ui/icons/Group';
import CommandIcon from '@material-ui/icons/AttachMoney';
import InvoiceIcon from '@material-ui/icons/LibraryBooks';
import ProductIcon from '@material-ui/icons/Collections';
import CategoryIcon from '@material-ui/icons/Bookmark';
import ReviewIcon from '@material-ui/icons/Comment';

import './App.css';

import restProvider from './dataProvider/restProvider';

import { Dashboard } from './Dashboard';
import { ProductList } from './products/ProductList';
import { CategoryList } from './categories/CategoryList';
import { CustomerList } from './customers/CustomerList';
import { CommandList } from './commands/CommandList';
import { ReviewList } from './reviews/ReviewList';
import { InvoiceList } from './invoices/InvoiceList';

const App = () => (
    <div className="App">
        <Admin title="adminTitle" dashboard={Dashboard} dataProvider={restProvider}>
            <Resource
                options={{ label: 'Orders' }}
                name={'commands'}
                list={CommandList}
                icon={CommandIcon}
            />
            <Resource name={'invoices'} list={InvoiceList} icon={InvoiceIcon} />
            <Resource
                options={{ label: 'Posters' }}
                name={'products'}
                list={ProductList}
                icon={ProductIcon}
            />
            <Resource name={'categories'} list={CategoryList} icon={CategoryIcon} />
            <Resource name={'customers'} list={CustomerList} icon={UserIcon} />
            <Resource name={'reviews'} list={ReviewList} icon={ReviewIcon} />
        </Admin>
    </div>
);

export default App;
