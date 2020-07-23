import React from 'react';
import { connect } from 'react-redux';
import CollectionPreview from '../CollectionPreview/CollectionPreview';

import './collections-overview.scss';

import { selectCollectionsForPreview } from '../../redux/shop/ShopSelectors';


// const CollectionsOverview = ({ collections }) =>{ 
//   console.log(collections);
//   return(
//   <div className='collections-overview'>
//     {collections.map(({ id, ...otherCollectionProps }) => (
//       <CollectionPreview key={id} {...otherCollectionProps} />
//     ))}
//   </div>
// )};

const CollectionsOverview = ({ collections }) => {
  console.log(collections)
  return (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);}


const mapStateToProps = state => ({
    collections: selectCollectionsForPreview(state)
});


export default connect(mapStateToProps, null)(CollectionsOverview);