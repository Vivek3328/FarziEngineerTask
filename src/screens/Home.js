import React from 'react'
import Navbar from '../components/Navbar'
import ProductPage from '../components/ProductPage'
import img1 from "../assets/img1.png";

export default function Home() {

  const product = {
    name: "Plix Aura Collection Luxury Perfume Gift Set (4 X 20 ml) | Unisex",
    price: 600,
    img: { img1 },
  }

  return (
    <>
      <Navbar />
      <ProductPage product={product} />
    </>
  )
}
