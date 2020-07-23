import React from 'react';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/Collection';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';

// I have access to the match object because inisde of App.js, the ShopPage is 
// nested in the Route Component and Route automatically passes the map object
// as props to the ShopPage component. The path property on match is '/shop' because
// in App.js the ShopPage component is rendered on the path of '/shop', so CollectionsOverview
// will start rendering from '/shop' instead of '/'

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
