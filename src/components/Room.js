import React from 'react'
import './Room.css'

const Room = (props) => {

    let {image, name, address, distance, stars, ratingCount, amenities, offerPrice, originalPrice, rebate} = props
    return (
        <div className="room-card">
            <div className="card-image">
                <img src={image} alt="name" />
            </div>
            <div className="card-body">
                <div className="row-1">
                    <div className="title">{name}</div>
                    <div className="address">{address} <i className="bi bi-geo-alt-fill text-danger"></i> {distance} km</div>

                    <div className="popularity">
                        <span className="stars">{stars}  ✭ </span>
                        <span className="ratings">({ratingCount} Ratings)</span>
                        <span className="review"> • {(stars > 4.5 ? "Excellent" : (stars>4.0 ? "Very Good" : (stars > 3.5 ? "Good" : "Poor")))}</span>
                    </div>
                    <div className="amenities">
                        <span className="amenity bi bi-check-circle">{amenities[0]} </span>
                        <span className="amenity bi bi-check-circle">{amenities[1]}</span>
                        <span className="amenity bi bi-check-circle"> {amenities[2]}</span>
                        <span className="amenity"> {amenities[3]}</span>
                    </div>
                </div>
                <div className="row-2">
                    <div className="price">
                        <div className="offer">
                            <span className="offer-price">₹{offerPrice}</span>
                            <span className="original-price">₹{originalPrice}</span>
                            <span className="rebate">{rebate}% off</span>
                        </div>
                        <div className="prpn">per room per night</div>
                    </div>
                    <div className="booking">
                        <button className='booking-details'>View Details</button>
                        <button className='booking-book'>Book Now</button>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Room
