import React from 'react';
import { Admin, Resource } from 'react-admin';
import { ProductList } from './products';
import './App.css';

import restProvider from './dataProvider/restProvider';

function App() {
    return (
        <div className="App">
            <Admin title="adminTitle" dataProvider={restProvider}>
                <Resource name={'products'} list={ProductList} />
            </Admin>
        </div>
    );
}

export default App;
