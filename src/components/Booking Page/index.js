import Navbar from "../Navbar";
import { useState } from "react";
import { BiMinusCircle } from "react-icons/bi";
import { FiPlusCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import './index.css';

const BookingPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [count, setCount] = useState(0)
    const [adults, setAdults] = useState(0)
    const [children, setChildren] = useState(0)
    const [checkIn, setCheckIn] = useState('')
    const [checkOut, setCheckOut] = useState('')

    const navigate = useNavigate();

    const onClickBooking = () => {
        navigate('/order', {state:{ name, email,count,number,adults,children,checkIn,checkOut}});
        setName('');
        setEmail('');
        setCount(0);
        setAdults(0);
        setChildren(0);
        setNumber('');
    };


    const onClickDecrementButn = () => {
        if (count !== 0){
            setCount(count - 1)
        }
    }

    const onClickIncrementButn = () =>{
        setCount(count + 1)
    }

    return (
        <div>
            <Navbar />
            <div style={{ backgroundColor: '#faeeee', borderRadius: '6px' }} className="m-3">
                <div style={{ height: '300px' }}>
                    <div className="d-flex justify-content-between align-items-center p-4">
                        <input
                            type="text"
                            className="booking-input"
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter name"
                            value={name}
                            required
                        />
                        <input
                            type="text"
                            className="booking-input"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email"
                            value={email}
                            required
                        />
                    </div>
                    <div className="d-flex justify-content-between align-items-center p-4">
                        <input
                            type="text"
                            className="booking-input"
                            onChange={(e) => setNumber(e.target.value)}
                            placeholder="Enter number"
                            value={number}
                            required
                        />
                        <div style={{ width: '45vw' }} className="d-flex">
                            <input
                                type="number"
                                style={{ width: '21vw', marginRight: '41px' }}
                                className="booking-input"
                                placeholder="Enter no of adults"
                                required
                                onChange={(e) => setAdults(e.target.value)}
                                value={adults}
                            />
                            <input
                                type="text"
                                style={{ width: '21vw' }}
                                className="booking-input"
                                placeholder="Enter no of children"
                                required
                                value={children}
                                onChange={(e) => setChildren(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="room-details d-flex justify-content-around align-items-center">
                    <div>
                        <h1 className="date-header">CHECK-IN</h1>
                        <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)}/>
                    </div>
                    <div className="vertical-line"></div>
                    <div>
                        <h1 className="date-header">CHECK-OUT</h1>
                        <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)}/>
                    </div>
                    <div className="vertical-line"></div>
                    <div>
                        <h1 className="date-header">ROOMS</h1>
                        <div className="count" style={{lineHeight:'0px'}}>
                            <button className="butn" onClick={onClickDecrementButn} ><BiMinusCircle /></button>
                            <p className="pt-3">{count}</p>
                            <button className="butn" onClick={onClickIncrementButn} ><FiPlusCircle /> </button>
                        </div>
                    </div>
                    <div className="butn-container">
                        <button onClick={onClickBooking} className="btn btn-primary">
                            12,340 <FaArrowRightLong />
                        </button>
                        <p style={{ fontSize: '10px', fontWeight:'bold'}}>click to pay the token amount</p>
                    </div>
                </div>
            </div>
            <div className="footer d-flex justify-content-between align-items-center" style={{ padding: '50px', marginTop: '15vh' }}>
                <div>
                    <h1>Brisphere</h1>
                    <p>
                        Spituk, Ladakh,<br />
                        India, 194101<br />
                        +91 - 7764997033<br />
                        amit.jha6700@gmail.com<br />
                    </p>
                </div>
                <div style={{ width: '280px' }}>
                    <h2 style={{ fontSize: '30px' }}>Terms and Conditions | Privacy Policy | Refunds</h2>
                </div>
            </div>
        </div>
    );
};

export default BookingPage;
