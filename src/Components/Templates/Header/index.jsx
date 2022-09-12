import React from 'react';
import logo from '../../../Assets/images/logo.svg'
import { Link } from 'react-router-dom'
import './styles.css'

const Header = () => {
    return (
        <header className='containerHeader'>
            <nav className='navbar'>
                <div className="navigation">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="links">
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/features'>Features</Link></li>
                            <li><Link to='/pricing'>Pricing</Link></li>
                            <li><Link to='/resources'>Resources</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="sign">
                    <div className="login">
                        <ul>
                            <li><Link to='/login'>Login</Link></li>
                        </ul>
                    </div>
                    <div className="signup">
                        <ul>
                            <li><Link to='/signup'>Signup</Link></li>
                        </ul>
                    </div>
                </div>

            </nav>
        </header>
    );
}
export default Header;