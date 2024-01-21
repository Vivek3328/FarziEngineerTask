import React, { useEffect, useState, useContext } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
} from '@chakra-ui/react'
import { AiOutlineShoppingCart } from "react-icons/ai"
import "./CartStyle.css"
import ProductCart from './ProductCart'
import { QuantityContext } from '../Context/QuantityContext';
import { FcShipped } from "react-icons/fc";

export default function Cart({ temp }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [cartItems, setCartItems] = useState(null);

    const { quantity, setQuantity, open, setOpen } = useContext(QuantityContext);

    useEffect(() => {
        const storedCart = localStorage.getItem('cartItem');

        // console.log(storedCart, "data")
        if (storedCart) {
            // console.log(storedCart.quantity)
            // var data= JSON.parse(storedCart);
            setQuantity(JSON.parse(storedCart).quantity)
            setCartItems(JSON.parse(storedCart));
            setOpen(false);
        }
    }, [open]);



    return (
        <div className='main-cart'>

            <div ref={btnRef} onClick={onOpen}>
                {temp ? <button className="add-to-cart-button" onClick={() => setOpen(true)} >
                    Add to Cart
                </button> :
                    <button><AiOutlineShoppingCart /> </button>
                }

            </div>
            <Drawer onClose={onClose} isOpen={isOpen} size="md">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader className='shopping-cart'>Shopping Cart</DrawerHeader>
                    <DrawerBody>
                        <div className='main'>
                            <div>
                                {cartItems && <div className="product-details">
                                    <ProductCart cartItem={cartItems} setCartItem={setCartItems} />
                                </div>}

                                {cartItems ? <div className="payment">
                                    <h2>Payment Summary</h2>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>MRP</td>
                                                <td>{cartItems ? cartItems.price : "NA"}</td>
                                            </tr>
                                            <tr>
                                                <td>Grand Total</td>
                                                <td>{cartItems ? cartItems.price * cartItems.quantity : "0"}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                    : "Cart is Empty"}
                            </div>
                            {cartItems && <div className="btn-groups-mobile-cart">
                                <div className="delivery-mobile-cart">
                                    <div className="total-cart">
                                        <span className='total-first'>Total</span>
                                        <span className='total-second'>&#8377;{cartItems.price * quantity}</span>
                                    </div>
                                    <div className="shipping-cart">
                                        <FcShipped className='truck-cart' />
                                        <span>Free Shipping</span>
                                    </div>
                                </div>
                                <div className="btn-mobile-cart">
                                    <button className="add-to-cart-button-cart" onClick={() => alert("Paid")}>
                                        PROCEED TO PAY
                                    </button>
                                </div>
                            </div>}

                        </div>

                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </div>
    )
}
