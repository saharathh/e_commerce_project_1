import { SHOP_DATA } from '../shop/shop.data.js'; 
import CollectionItem from '../../components/collection-item/collection-item.component';
import './shop.styles.scss';
import React from 'react';

const ShopPage = () => {
  const data = SHOP_DATA;
  
  return (
      <div className="shop-page">
        {data.map(({id, title, items, ...otherProps}) => (
          <div className="collection-preview">
            <h1 key={id} className="title">{title.toUpperCase()}</h1>
            <div className="preview">
            {
                items
                .filter((item, idx) => idx < 4)
                .map(({id, ...otherItemProps}) => (
                  <CollectionItem key={id} {...otherItemProps} />
                ))}
            </div>
          </div>
        ))}
      </div>
  )
}

export default ShopPage;