import React from 'react'
import Room from './Room'

const OyoRooms = () => {

    let hrStyle = {
        width: "70vw",
        alignSelf: "center",
        margin: "30px 0px",
        color: "#222222"
    }

    let propsArr = [
        {
            image: "https://images.oyoroomscdn.com/uploads/hotel_image/175257/medium/b73e5c17572f83e5.jpg",
            name: "Townhouse 943 Hotel Gargi Delux",
            address: "India 411030, Pune",
            distance: 2,
            stars: 4.7,
            ratingCount: 175,
            amenities: ["Wifi", "Reception", "Doctor On Call", "+ 18 more"],
            offerPrice: 3015,
            originalPrice: 5742,
            rebate: 47,
        },
        {
            image: "https://images.oyoroomscdn.com/uploads/hotel_image/18677/medium/7b2e2ee95b7533bf.jpg",
            name: "Collection O 75883 Hotel Galaxy",
            address: "Near Phoenix Mall, Tata Garden",
            distance: 9.6,
            stars: 4.4,
            ratingCount: 1137,
            amenities: ["Parking", "Reception", "Free Wifi", "+ 14 more"],
            offerPrice: 1004,
            originalPrice: 1912,
            rebate: 47,
        },
        {
            image: "https://images.oyoroomscdn.com/uploads/hotel_image/109283/medium/5c4d96918b29edcb.jpg",
            name: "Oyo 47208 Homes Pristine Hospitality",
            address: "Survey No 4, Near Sanjay Park, Kharadi, Pune",
            distance: 8.9,
            stars: 3.9,
            ratingCount: 550,
            amenities: ["Parking", "Free Wifi", "Power Backup", "+ 8 more"],
            offerPrice: 1216,
            originalPrice: 2315,
            rebate: 47,
        },
        {
            image: "https://images.oyoroomscdn.com/uploads/hotel_image/105879/medium/9fdf0eca2511f2b8.jpg",
            name: "Oyo Townhouse 063 M G Road",
            address: "Near SGS Mall, Gawaliwada, Pune",
            distance: 2.3,
            stars: 4.3,
            ratingCount: 1253,
            amenities: ["Parking", "Free Wifi", "Reception", "+ 18 more"],
            offerPrice: 2463,
            originalPrice: 4691,
            rebate: 47,
        },
    ]
    return (
        <div className='my-3' style={{ display: "flex", flexDirection: "column" }}>

            {propsArr.map((room) => (
                    <>
                        <Room
                            image = {room.image}
                            name = {room.name}
                            address = {room.address}
                            distance = {room.distance}
                            stars = {room.stars}
                            ratingCount = {room.ratingCount}
                            amenities = {room.amenities}
                            offerPrice = {room.offerPrice}
                            originalPrice = {room.originalPrice}
                            rebate = {room.rebate}
                            key = {room.name}
                        />
                        <hr style={hrStyle} />
                    </>
            ))
            }

        </div>
    )
}

export default OyoRooms
