import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png';
import icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';

const Navbar=()=> {

const [menu, setMenu] = useState("shop")
const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
        <div className="navbar_logo">
            <img src={logo} alt="logo" />
            <p>SANJAYSHOPS</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}> <Link style={{textDecoration: "none", color:"#626262"}} to='/'>Shop</Link> {menu==="shop"? <hr />: <></> }</li>
            <li onClick={()=>{setMenu("mens")}}> <Link style={{textDecoration: "none", color:"#626262"}}to='/mens'>Men</Link> {menu==="mens"? <hr />: <></> }</li>
            <li onClick={()=>{setMenu("womens")}}> <Link style={{textDecoration: "none", color:"#626262"}}to='/womens'>Women</Link>  {menu==="womens"? <hr />: <></> }</li>
            <li onClick={()=>{setMenu("kids")}}> <Link style={{textDecoration: "none", color:"#626262"}}to='kids'>Kids</Link>  {menu==="kids"? <hr />: <></> }</li>
        </ul>
        <div className="nav-login-cart">
            <Link style={{textDecoration: "none" , color:"#626262"}}to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={icon} alt="Cart_Icon" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar
