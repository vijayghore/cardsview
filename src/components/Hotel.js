import React from 'react'
import './Hotel.css'

const Hotel = (props) => {

    return (
        <div className='col-lg-3' style={{width:"320px"}}>
            <div className="hotel-card">
                <img src={props.pic} className="hotel-img" alt="hotel" />
                <div className="name-price">
                    <span className="hotel-name">{props.name}</span>
                    <span className='hotel-price text-dark'>₹{props.price} night</span>
                </div>
                <div className="dist-date">
                    <span className="hotel-dist text-muted">{props.distance} kilometers away</span>
                    <span className="hotel-date text-muted">{props.date}</span>
                </div>
            </div>
        </div>
    )
}

export default Hotel
