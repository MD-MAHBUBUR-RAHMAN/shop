import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    // set state for product:==
    const[product,setProduct]= useState([]);
    // set state for summery:==  
    const [cart , setCart] =useState([])
    // set use effect:==
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    //// sharing handler:=====
    const handleAddToCaart = (e)=>{
        // console.log(e)
        const newCart =[...cart, e]
        setCart(newCart)
    }
    return (
        <div className='shop'>
            <div className="product-container">
                {
                    product.map(e=><Product elements={e} 
                    click={handleAddToCaart}    
                    key ={e.id}></Product> )
                    
                }
                
            </div>
            <div className="cart-container">
                <Cart cart ={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;