import Navbar from "../Navbar"
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { BiMinusCircle } from "react-icons/bi";
import { FiPlusCircle } from "react-icons/fi";
import DiscoverCart from "../Discover Cart";
import ServiceCart from "../Services Cart";
import { useNavigate } from "react-router-dom";
import './index.css'

const Home = () => {
    const navigate = useNavigate()

    const onClickBooking = () => {
        navigate('/booking')
    }

    return(
        <div>
            <Navbar/>
            <div className="home-container">
                <div className="cart d-flex justify-content-between align-itmes-center">
                    <div className="cart-container p-5">
                        <h1>Work from <br/>
                            ladakh</h1>
                        <p>India’s first true digital tourism ecosystem</p>
                        <div className="icon-container">
                            <RiFacebookCircleFill className="facebook"/>
                            <RiInstagramFill className="insta"/>
                        </div>
                    </div>
                    <div className="img-container">
                        <img style={{height:'40vh', width:'100%'}} src="https://sunriseadventuretrek.com/admin/images/package/20230505120030image-Leh-Ladakh-city-at-night-cropped.jpg" alt="ladkh-img"/>
                    </div>
                </div>
                <div className="room-details d-flex justify-content-around align-itmes-center">
                    <div>
                        <h1 className="date-header">CHECK-IN</h1>
                        <input  type='date'/>
                    </div>
                    <div className="vertical-line"></div>
                    <div>
                        <h1 className="date-header">CHECK-OUT</h1>
                        <input  type='date'/>
                    </div>
                    <div className="vertical-line"></div>
                    <div>
                        <h1 className="date-header">ROOMS</h1>
                        <div className="count" style={{lineHeight:'0px'}}>
                            <><BiMinusCircle /></>
                            <p className="pt-3">0</p>
                            <><FiPlusCircle /></>
                        </div>
                    </div>
                    <div className="butn-container">
                        <button onClick={onClickBooking} className="btn btn-primary">BOOK</button>
                    </div>
                </div>
                <div className="discover-container">
                    <DiscoverCart/>
                </div>
                <div className="Services-container">
                    <ServiceCart/>
                </div>
                <div className="footer" style={{padding:'50px'}}>
                    <h1>Brisphere</h1>
                    <p>Spituk, Ladakh,<br/>
                        India, 194101<br/>
                        +91 - 7764997033<br/>
                        amit.jha6700@gmail.com<br/>
                    </p>
                </div>
            </div>
        </div>
    )
} 

export default Home