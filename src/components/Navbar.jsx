
//import '../css/Navbar.css';




import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import user from '../images/user.png';

import favorite from '../images/favorite.png';

import carticon from '../images/carticon.png';

import logo from '../images/logo1.avif';
//import logowhite from '../images/logo-white.avif'
import '../css/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar =()=>{
    return(
        <>
             {/* navbar */}
             <div className='navbar'> 
                <div className='nav-logo'>
                    <img src={logo} alt="" height={"45px"} style={{color:"white"}} />
                </div>
                <div className='nav-list'>
                    <ul style={{color:"white"}}>
                        <li><Link to="/home" id='' style={{textDecoration:"none" ,color:"black"}}>Home</Link></li>
                        <li><Link to={"/shop"}  style={{textDecoration:"none" ,color:"black"}}>Shop</Link></li>
                        <li><Link to={"/product"}  style={{textDecoration:"none" ,color:"black"}}>Product</Link></li>
                        <li><Link to={"/about"}  style={{textDecoration:"none" ,color:"black"}}>About us</Link></li>
                    </ul>
                </div>
                <div className='nav-icon'>
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{fontSize:"26px",color:"black"}}/>
                <img src={user} alt="" height={"30px"} style={{color:"white"}} />
                <img src={favorite} alt="" height={"30px"}/>
                <img src={carticon} alt="" height={"30px"}/>
            </div>
            </div> 
           
        </>
    )
}

export default Navbar;