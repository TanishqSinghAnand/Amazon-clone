import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <nav className="header">
            <Link to="/">
            <img 
                className="header_logo" 
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                alt="Amazon logo"
            />
            </Link>
            <div className="header_search">
                <input type="text" className="header_searchInput"/>
                <SearchIcon className="header_searchIcon"/>
            </div>

            <div className="header__nav">

                <Link to='/login' className="header_link">
                    <div className="header_optons">
                        <span className="header_optonsLineOne"> Hi Tanishq</span>
                        <span className="header_optonsLineTwo">Sign in</span>
                    </div>
                </Link>
                <Link to='/' className="header_link">
                    <div className="header_optons">
                        <span className="header_optonsLineOne">Returns</span>
                        <span className="header_optonsLineTwo">& Orders</span>
                    </div>
                </Link>
                <Link to='/' className="header_link">
                    <div className="header_optons">
                        <span className="header_optonsLineOne">Your</span>
                        <span className="header_optonsLineTwo">Prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header_link">
                    <div className="header_optioBasket">
                        <ShoppingBasketIcon/>
                        <span className="header_optonsLineTwo basket_count">0</span>
                    </div>
                </Link>

            </div>
        </nav>
    )
}

export default Header
