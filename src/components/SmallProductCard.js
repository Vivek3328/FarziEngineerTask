import React from 'react'
import img1 from "../assets/img1.png"
import "./SmallProductCardStyle.css"

export default function SmallProductCard() {
  return (
    <div className='main-small'>
      <div className='first_row'>
        <div >
          <img src={img1} alt="" className="image-first-row" />
        </div>
        <div className='save' > Save &#8377;1</div>
      </div>
      <div className="content-gift">
        <h1 className='gift'>Gift Set</h1>
        <h1 className='pack'>Pack of 4</h1>
        <h1 className='price-content'>&#8377;649</h1>
        <p className='taxes'>incl. of all taxes</p>
        <h1 className='mrp'>MRP: <span className='rupee'> &#8377;650</span> </h1>
      </div>
    </div>
  )
}

