import Navbar from "../Navbar"
import { BiMinusCircle } from "react-icons/bi";
import { FiPlusCircle } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import './index.css'

const OrderPage = () =>{
    const location = useLocation()
    const { name, email,number,count,adults,children,checkIn,checkOut } = location.state || {};

    return(
        <div className="d-flex flex-column">
            <Navbar/>
            <div style={{height:'300px'}} className="m-3">
                <div className="order-cart d-flex justify-content-around align-items-top p-4">
                    <div className="order-user-details ">
                        <h1 style={{fontSize:'26px'}}>{name}</h1>
                        <div className="mt-3">
                            <p style={{lineHeight:'0px'}}>+91 - {number}</p>
                            <p style={{lineHeight:'0px'}}>{email}</p>
                            <p style={{lineHeight:'0px'}}><span>{adults}</span> Adult and <span>{children}</span> Childern</p>
                        </div>
                    </div>
                    <div className="vertical-line"></div>
                    <div className="order-container d-flex justify-content-around align-items-top">
                        <div>
                            <img style={{width:'140px',height:'140px', marginRight:'10px'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Icons8_flat_ok.svg/1024px-Icons8_flat_ok.svg.png?20160307113603' alt='success-img'/>
                        </div>
                        <div>
                            <h1 style={{fontSize:'25px',paddingTop:'12px'}}>Order Complete</h1>
                            <p>have questions?</p>
                            <p style={{lineHeight:'0px'}}>contact us</p>
                        </div>
                    </div>
                </div>
                <div className="room-details d-flex justify-content-around align-itmes-center">
                    <div>
                            <h1 className="date-header">CHECK-IN</h1>
                            <input  type='date' value={checkIn}/>
                        </div>
                        <div className="vertical-line"></div>
                        <div>
                            <h1 className="date-header">CHECK-OUT</h1>
                            <input  type='date' value={checkOut}/>
                        </div>
                        <div className="vertical-line"></div>
                        <div>
                            <h1 className="date-header">ROOMS</h1>
                            <div className="count">
                            <><BiMinusCircle /></>
                            <p className="pt-3">{count}</p>
                            <><FiPlusCircle /></>
                        </div>
                    </div>
                    <div className="butn-container">
                        <button className="btn btn-primary">12,430</button>
                        <p style={{fontSize:'10px'}}>click to pay the token amount</p>
                    </div>
                </div>
            </div>
            <div className="footer" style={{padding:'50px', marginTop:'180px'}}>
                <h1>Brisphere</h1>
                <p>Spituk, Ladakh,<br/>
                   India, 194101<br/>
                   +91 - 7764997033<br/>
                   amit.jha6700@gmail.com<br/>
                </p>
                <button className="btn btn-primary">LOCATION</button>
            </div>
        </div>
    )
} 

export default OrderPage



