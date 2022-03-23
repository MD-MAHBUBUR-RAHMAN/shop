import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props)
    const{name,img,ratings,price,seller}=props.elements
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className="product-info">
           <p className='pName'>{name}</p>
            <p className='price'>Price : ${price}</p>
            <p className='seller'><small>Menufecturer : {seller}</small></p>
            <p className='rate'><small>Rating : {ratings} star</small></p>
           </div>
           <button onClick={()=>props.click(props.elements)} className='btn-cart'>
               <p className='btnP'>Add to Cart</p>
               <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
           </button>
        </div>
    );
};

export default Product;