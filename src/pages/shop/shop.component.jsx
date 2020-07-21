import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

/* Shop page that routes the match path to either the CollectionOverview (via Header component or going to /shop path) 
   Or the dynamic collectionId page when selecting a menu-item component from the directory component within the homepage.

*/

const ShopPage = ({ match }) => (
    <div className="shop-page"> 
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
);

export default ShopPage;
