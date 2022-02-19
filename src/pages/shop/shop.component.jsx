import { SHOP_DATA } from '../shop/shop.data.js'; 
import React from 'react';
import CollectionPreview from '../collection-preview/collection-preview.component';

const ShopPage = () => {
  const data = SHOP_DATA;
  console.log(data.map(x => x.id));
  
  // returns a new object with the values at each key mapped using mapFn(value)

  return (
        <div className="shop-page">
          Hello World
        </div>
  )
}

export default ShopPage;

// class ShopPage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       collections: SHOP_DATA
//     };
//   }

//   render() {
//     const {collections} = this.state;
//     return (<div className="shop-page">
//       {
//         collections.map(({id, ...otherCollectionProps}) => (
//           <CollectionPreview key={id} {...otherCollectionProps}/>
//         ))}
//     </div>

//     )
//   }
// }

// export default ShopPage;

// const ShopPage = () => {
//   function objectMap(object, mapFn) {
//     return Object.keys(object).reduce(function(result, key) {
//       result[key] = mapFn(object[key])
//       return result
//     }, {})
//   }

//   let dataObject = objectMap(SHOP_DATA, function(value) {
//     return value;
//   })
//   console.log(dataObject);
//   console.log(typeof(dataObject));

//   return (
//         <div className="shop-page">
//           Hello World
//         </div>
//   )
// }

// export default ShopPage;