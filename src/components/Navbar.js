import React, { useContext } from 'react'
import "./NavbarStyle.css"
import Cart from './Cart'
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/logo.png"
import { FaTruckFast, FaRegCircleUser } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { QuantityContext } from '../Context/QuantityContext';

export default function Navbar() {
  const { quantity } = useContext(QuantityContext);

  return (
    <div className='navbar'>
      <div className='top-navbar'>
        <div className="left">
          <div className="hamburger">
            <RxHamburgerMenu />
          </div>
          <div >
            <img src={logo} alt="" className="logo" />
          </div>
          <div className="input">
            <span className='input-icon'><IoIosSearch /></span>
            <input type="text" name="" id="" placeholder='Search for BestSellers' />
          </div>
        </div>
        <div className="right">
          <div className="truck">
            <FaTruckFast />
          </div>
          <div className="cart">

            {quantity > 0 && (
              <span className="cart-badge">{quantity}</span>
            )}
            <Cart temp={false} style={{ "height": "5px" }} />
          </div>
          <div className="user">
            <FaRegCircleUser />
          </div>
          <div className="shop">
            <button className='shop-all'>SHOP ALL</button>
          </div>
        </div>
      </div>
      <div className="bottom-navbar">
        <div className="input-bottom">
          <span className='input-bottom-icon'><IoIosSearch /></span>
          <input type="text" name="" id="" placeholder='Search for BestSellers' />

        </div>
      </div>

    </div>
  )
}
