import React from 'react';
import './navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';


const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='navbar-wrapper'>
            <div className='navbar-left'>
                <span className='navbar-language'>EN</span>
                <div className='search-container'>
                    <input className='navbar-input'></input>
                    <SearchIcon style={{color:"gray", fontSize:16}} />
                </div>
            </div>
            <div className='navbar-center'>
                <h1 className='logo'>CLOTHING STORE</h1>
            </div>
            <div className='navbar-right'>
                <div className='menu-item'>REGISTER</div>
                <div className='menu-item'>SIGN IN</div>
                <div className='menu-item'>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined color="action" />
                    </Badge>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar