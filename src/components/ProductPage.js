import React, { useState, useContext } from 'react'
import "./ProductPageStyle.css"
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import Cart from './Cart'
import SmallProductCard from './SmallProductCard'
import ReactStars from 'react-stars'
import { GoDotFill } from "react-icons/go";
import { FaTruckFast } from "react-icons/fa6";
import { HiCash } from "react-icons/hi";
import { BiTransfer } from "react-icons/bi";
import { QuantityContext } from '../Context/QuantityContext'



export default function ProductPage({ product }) {
    const { quantity, setQuantity } = useContext(QuantityContext);
    const [activeImg, setActiveImg] = useState(img1);
    //const [cartOpen, setCartOpen] = useState(false);

    const handleAddToCart = () => {

        const storedCart = localStorage.getItem('cartItem');

        // console.log(storedCart,"data")
        if (storedCart) {
            var val = JSON.parse(storedCart);
            val.quantity = val.quantity + 1;
            localStorage.setItem('cartItem', JSON.stringify(val));
            return;
        }

        const cartItem = {
            name: product.name,
            price: product.price,
            image: activeImg,
            quantity: 1,
        };

        localStorage.setItem('cartItem', JSON.stringify(cartItem));
        // console.log(cartItem);
    };

    return (

        <div className="main-wrapper">

            <div className="product-div">
                <div className="product-name-mobile">{product.name}</div>
                <div className="tag-mobile">
                    <div className="tag-content" style={{ "backgroundColor": "#B8F7B5" }}>Long Lasting ⏳</div>
                    <div className="tag-content" style={{ "backgroundColor": "#FCF79B" }}>IFRA Compliant ✅</div>
                    <div className="tag-content" style={{ "backgroundColor": "#FFD8FB" }}>Stain Free 💯</div>
                    <div className="tag-content" style={{ "backgroundColor": "#DEC2FC" }}>Not animal tested 🐰</div>
                </div>
                <div className="star-mobile">
                    <div className="product-rating">
                        <ReactStars
                            count={5}
                            value={4.5}
                            onChange={() => { }}
                            size={20}
                            edit={false}
                            color2={'#f2b602'} />
                    </div>
                    <span className='stories'>62 Customer Stories</span>
                    <div className="dot">
                        <GoDotFill />
                    </div>
                    <span className='sold'>500+ Units Sold</span>
                    {/* <div className="dot">
                            <GoDotFill />
                        </div>
                        <span className='unit'>Last 41 Units Left</span> */}
                </div>
                <div className="product-div-left">
                    <div className="img-container">
                        <img src={activeImg} alt="watch" />
                    </div>
                    <div className="hover-container">
                        <div><img src={img1} alt='' onClick={() => setActiveImg(img1)} /></div>
                        <div><img src={img2} alt='' onClick={() => setActiveImg(img2)} /></div>
                        <div><img src={img3} alt='' onClick={() => setActiveImg(img3)} /></div>
                        <div><img src={img4} alt='' onClick={() => setActiveImg(img4)} /></div>
                    </div>
                </div>

                <span className='unit-mobile'>Last 41 Units Left</span>
                <div className="product-div-right">
                    <div className="product-name">{product.name}</div>
                    <div className="tag">
                        <div className="tag-content" style={{ "backgroundColor": "#B8F7B5" }}>Long Lasting ⏳</div>
                        <div className="tag-content" style={{ "backgroundColor": "#FCF79B" }}>IFRA Compliant ✅</div>
                        <div className="tag-content" style={{ "backgroundColor": "#FFD8FB" }}>Stain Free 💯</div>
                        <div className="tag-content" style={{ "backgroundColor": "#DEC2FC" }}>Not animal tested 🐰</div>
                    </div>
                    <div className="star">
                        <div className="product-rating">
                            <ReactStars
                                count={5}
                                value={4.5}
                                onChange={() => { }}
                                size={20}
                                edit={false}
                                color2={'#f2b602'} />
                        </div>
                        <span className='stories'>62 Customer Stories</span>
                        <div className="dot">
                            <GoDotFill />
                        </div>
                        <span className='sold'>500+ Units Sold</span>
                        <div className="dot">
                            <GoDotFill />
                        </div>
                        <span className='unit'>Last 41 Units Left</span>
                    </div>
                    <div className="price_main">
                        <span className="product-price">&#8377; {product.price}</span>
                        <span className='incl'>incl. of all taxes</span>
                    </div>

                    <div className="card">
                        <SmallProductCard />
                    </div>
                    <div className="delivery">
                        <span className='deliveryPart1'>For Fastest delivery, order within</span>
                        <span className='deliveryPart2'> 4 hrs 45 mins</span>
                    </div>
                    <div className="btn-groups">
                        <div onClick={handleAddToCart}>
                            <Cart temp={true} />
                        </div>
                    </div>
                    <div className="return">
                        <div className="easy">
                            <div className="logo-easy">
                                <BiTransfer />
                            </div>
                            <div className="easy-text">
                                <span>Easy</span>
                                <span>Returns</span>
                            </div>
                        </div>
                        <div className="easy">
                            <div className="logo-easy">
                                <HiCash />
                            </div>
                            <div className="easy-text">
                                <span>COD</span>
                                <span>Available</span>
                            </div>
                        </div>
                        <div className="easyLast">
                            <div className="logo-easy">
                                <FaTruckFast />
                            </div>
                            <div className="easy-text">
                                <span>Delivery in 3</span>
                                <span>Days</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="btn-groups-mobile" onClick={handleAddToCart}>
                <div className="delivery-mobile">
                    <span className='deliveryPart1-mobile'>For Fastest delivery, order within</span>
                    <span className='deliveryPart2-mobile'> 4 hrs 45 mins</span>
                </div>
                <div className="btn-mobile">
                    <Cart temp={true} />
                </div>
            </div>

        </div>



    )
}
