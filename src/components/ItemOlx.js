import React from 'react'
import './ItemOlx.css'

const ItemOlx = (props) => {

  let {image, price, title, place, date} = props
  return (
    <div className="item-card">
      <img src={image} alt="" />
      <div className="item-card-body">
        <div className="card-body-top">
          <span className="card-body-price">₹{price}</span>
          <span className="card-body-title">{title}... </span>
        </div>

        <div className="card-body-bottom">
          <span className="place">{place}</span>
          <span className="date">{date}</span>
        </div>
      </div>

    </div>
  )
}

export default ItemOlx
