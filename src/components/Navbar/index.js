import { useNavigate } from "react-router-dom";
import './index.css';

const Navbar = () =>{
    const navigate = useNavigate()
    const onClickButn = () => {
        navigate('/')
    }


    return (
        <div className="navbar-container d-flex justify-content-between align-items-center p-3">
            <div className="cmpy-name">
                <button className="butn" onClick={onClickButn} style={{fontSize:'25px', fontWeight:'bold'}}>Brisphere</button>
            </div>
            <div className="nav-items-container">
                <ul className="nav-items d-flex justify-content-between align-items-center"> 
                    <li>Discover</li>
                    <li>Services</li>
                    <li>About Us</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar