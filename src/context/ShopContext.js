import React, { createContext, useState } from "react";
import allProducts from '../components/Assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {};
    for(let i=0; i<allProducts.length+1; i++){
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props)=>{

    const [cartItems, setCartItems] = useState(getDefaultCart);
    
    const addToCart = (itemID)=>{
        setCartItems((prev)=>({...prev,[itemID]:prev[itemID]+1}))
        console.log(cartItems)
    }
    
    const removeFromCart = (itemID)=>{
        setCartItems((prev)=>({...prev,[itemID]:prev[itemID]-1}))
    }

    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = allProducts.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () =>{
        let totalItems = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }
    
    const contextValue = {getTotalCartItems,getTotalCartAmount, allProducts, cartItems, addToCart, removeFromCart};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;