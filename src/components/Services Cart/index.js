import './index.css'

const ServiceCart = () => {

    const itemlist = [{
        id: 1,
        img: "https://cdn.pixabay.com/photo/2016/03/30/13/24/wifi-1290667_640.png",
        name:'High Speed Internet',
        details: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas."
    },
    {
        id: 2,
        img: "https://www.raph.in/images/fastfood.svg",
        name:'Healthy Meals',
        details: "A healthy breakfast and pleasant dinner will be serviced at your space every single day for your entire duration of stay with option of paid order within BriSphere."
    },
    {
        id: 3,
        img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTpK2wuilN_h5pUh2mHEPXM5awBJVRPDE5fIiOg3m0Sxe0cKNZc",
        name:'Homely Stay',
        details: "Designed for working professionals with spacious interiors, comfortable beds and sleekly attached kitchen are some of the comforts providedin your space."
    },
    {
        id: 4,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjkb7Ts5HSaWh9KSAfZ7RCQKAHxvbW9ArBvoL2kvOlfEXTcPBq",
        name:'Transportation',
        details: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas."
    },
    {
        id: 5,
        img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSQCZvLSuRuNP1PGbS2L4hLBidNm-SUZuGxtad4HVluAE8ebdKK",
        name:'Food Delivery',
        details: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas."
    },
    {
        id: 6,
        img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSEjWQEQFMlW2S3wcRjQywkv_EMaPrvwjyETTFvWTL1RQUrnT-S",
        name:'Tourism',
        details: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas."
    },
    {
        id: 7,
        img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTR3xGNuR5NvsHwMushvQBmJRpyL8SVAm0fBF3PUhDNgqu1nbU5",
        name:'Job',
        details: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas."
    },
    {
        id: 8,
        img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTGqYXKlrTDuWU_hD4k-AsSXAlyugXShwrTCglfmHadMuW6Z1A7",
        name:'Rental Service',
        details: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas."
    },
    {
        id: 9,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzWTuRRWUqlBWPpI_gjy8jcRYKQcbqi5-pWei6f6usbLO0YvYy",
        name:'Online Shop',
        details: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas."
    }
    ]

    return (
        <div className="services-cart-container">
            <h1 className="text-center">Services</h1>
            <div className="mr-4">
                <ul className="unorder-list">
                    {itemlist.map((eachitem) => (
                        <li className="item-cart" key={eachitem.id}> 
                            <img className="img-ele mb-4" src={eachitem.img} alt={eachitem.id} />
                            <h2 className="header">{eachitem.name}</h2>
                            <p className="item-details">{eachitem.details}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}


export default ServiceCart


