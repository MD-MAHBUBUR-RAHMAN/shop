import './Header.css'
import React from 'react';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='nav'>
            <img src={logo} alt="" />
            <div>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/orderReview">Order review</a>
                <a href="/manage-inventory">Manage Inventory</a>
            </div>
        </nav>
    );
};

export default Header;