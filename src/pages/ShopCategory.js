import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../context/ShopContext';
import dropdown_icon from '../components/Assets/dropdown_icon.png';
import Items from '../components/Items/Items';

const ShopCategory = (props) => {
  
  const {allProducts} = useContext(ShopContext)

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {allProducts.map((item, i)=>{
          if(props.category===item.category){
            return <Items key={i} id={item.id} image = {item.image} name = {item.name} new_price = {item.new_price} old_price = {item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="loadmore">
        Explore more
      </div>
    </div>
  )
}

export default ShopCategory;
