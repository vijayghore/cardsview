import React from 'react'
import ItemOlx from './ItemOlx'
import './Olx.css'

const Olx = () => {

    const olxRecentItemArr = [
        {
            image: "https://apollo-singapore.akamaized.net/v1/files/6d8d9eqhnvxv-IN/image;s=300x600;q=60",
            price: "24,500",
            title: "Old Dell Latitude 7250 i5 5th Gen",
            address: "",
            date: "APR 8"
        },
        {
            image: "https://apollo-singapore.akamaized.net/v1/files/a8y11bmuxs781-IN/image;s=300x600;q=60",
            price: "19,500",
            title: "HP 840 G1 Laptops Like New Condition",
            address: "",
            date: "TODAY"
        },
        {
            image: "https://apollo-singapore.akamaized.net/v1/files/ewoyaljnag812-IN/image;s=300x600;q=60",
            price: "25,500",
            title: "Old Dell Latitude 5450 Core i5 5th",
            address: "",
            date: "APR 23"
        },
        {
            image: "https://apollo-singapore.akamaized.net/v1/files/7devazb5xb5q2-IN/image;s=300x600;q=60",
            price: "13,500",
            title: "DELL e5420 Laptops Like New Conditions",
            address: "",
            date: "TODAY"
        },
    ]
    const olxRecommendItemArr = [
        {
            image: "https://apollo-singapore.akamaized.net/v1/files/cymrgwpk69tw2-IN/image;s=300x600;q=60",
            price: "4,50,000",
            title: "Maruti Suzuki Swift VXi + Manual",
            address: "KARVE NAGAR, PUNE",
            date: "APR 22"
        },
        {
            image: "https://apollo-singapore.akamaized.net/v1/files/d1jgs7ls7p0d-IN/image;s=300x600;q=60",
            price: "48,000",
            title: "Iphone 11 pro max  64 gb Brand-new",
            address: "SWARGATE, PUNE",
            date: "TODAY"
        },
        {
            image: "https://apollo-singapore.akamaized.net/v1/files/zch5d6hr8fmd1-IN/image;s=300x600;q=60",
            price: "13,500",
            title: "I Want Sell My Samsung M31 6GB",
            address: "WARJE, PUNE",
            date: "TODAY"
        },
        {
            image: "https://apollo-singapore.akamaized.net/v1/files/rpi3e3td8ezg3-IN/image;s=300x600;q=60",
            price: "10,977",
            title: "DELL e5420 Laptops New Conditions",
            address: "",
            date: "TODAY"
        },
        {
            image: "https://apollo-singapore.akamaized.net/v1/files/ewoyaljnag812-IN/image;s=300x600;q=60",
            price: "25,500",
            title: "iPhone 7 128GB Open Box With 3 Months Warranty & Also",
            address: "KARVE NAGAR, PUNE",
            date: "APR 16"
        },
        {
            image: "https://apollo-singapore.akamaized.net/v1/files/7devazb5xb5q2-IN/image;s=300x600;q=60",
            price: "13,500",
            title: "DELL e5420 Laptops New Conditions",
            address: "",
            date: "TODAY"
        },
        {
            image: "https://apollo-singapore.akamaized.net/v1/files/ewoyaljnag812-IN/image;s=300x600;q=60",
            price: "25,500",
            title: "Old Dell Latitude 5450  Core i5 5th",
            address: "",
            date: "APR 23"
        }
    ]
    return (
        <>
            <div className="last-search">
                <div className="last-search-top">
                    <h3>Based on your last search</h3>
                    <span>View more</span>
                </div>
                <div className="last-search-bottom">

                    {olxRecentItemArr.map((item) => (
                        <ItemOlx
                            image={item.image}
                            price={item.price}
                            title={item.title.substring(0, 32)}
                            address={item.address}
                            date={item.date}
                            key={item.address}
                        />
                    ))
                    }
                </div>
            </div>

            <div className="section">
                <div className="heading">
                    <span>Your recommendations</span>
                </div>
                <div className="recommendations">
                    {olxRecommendItemArr.map((item) => (
                        <ItemOlx
                            image={item.image}
                            price={item.price}
                            title={item.title.substring(0, 32)}
                            address={item.address}
                            date={item.date}
                            key={item.address}
                        />
                    ))
                    }
                </div>
            </div>

        </>
    )
}

export default Olx
