import React from 'react'
import './header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className="header">
            <img className="header__logo" src="https://www.denverpost.com/wp-content/uploads/2016/05/amazon-brand-logo.jpg?w=1024&h=686" alt="amazon" />
            <div className="header__search">
                <input type="text" className="header__searchInput" />
               <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span 
                    className="header__optionLineOne">
                    Hello Guest</span>
                    <span className="header__optionLineTwo">
                    Sign In</span>
                </div>
                <div className="header__option">
                    <span 
                    className="header__optionLineOne">
                    Returns</span>
                    <span className="header__optionLineTwo">
                    Orders</span>
                </div>
                <div className="header__option">
                    <span 
                    className="header__optionLineOne">
                    your</span>
                    <span className="header__optionLineTwo">
                    prime</span>
                </div>
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__optionBasketCount">0</span>
                </div>
            </div>
        </div>
    )
}

export default Header
