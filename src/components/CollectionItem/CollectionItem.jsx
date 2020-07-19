import React from 'react';

import { connect } from 'react-redux';

import './collection-item.scss';

import CustomButton from '../CustomButton/CustomButton';
import { addItem } from '../../redux/cart/CartActions';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      { /* addItem(item) dispatches the item to the items array in the redux store
       Check the cart folder in redux for more details */ } 
      <CustomButton onClick={() => addItem(item)} inverted >Add to cart</CustomButton>
    </div>
  );
}


const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})


export default connect(null, mapDispatchToProps)(CollectionItem);
