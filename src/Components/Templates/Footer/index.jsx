import React from 'react';
import logo from '../../../Assets/images/logo.svg'
import facebook from '../../../Assets/images/icon-facebook.svg'
import twitter from '../../../Assets/images/icon-twitter.svg'
import pinterest from '../../../Assets/images/icon-pinterest.svg'
import instagram from '../../../Assets/images/icon-instagram.svg'

import './styles.css'

const Footer = () => {
    return (
        <div className='containerFooter'>
            <div className="footerlogo">
                <img src={logo} alt="" />
            </div>
            <div className="footerContent">
                <div className="footerNavigaion">
                    <div className="features">
                        <p>Features</p>
                        <nav>
                            <ul>
                                <li>Link Shortening</li>
                                <li>Branded Links</li>
                                <li>Analytics</li>
                            </ul>
                        </nav>

                    </div>
                    <div className="resources">
                        <p>Resources</p>
                        <nav>
                            <ul>
                                <li>Blog</li>
                                <li>Developers</li>
                                <li>Support</li>
                            </ul>
                        </nav>

                    </div>
                    <div className="company">
                        <p>Company</p>
                        <nav>
                            <ul>
                                <li>About</li>
                                <li>Our team</li>
                                <li>Careers</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="socialMedia">
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={pinterest} alt="" />
                    <img src={instagram} alt="" />
                </div>
            </div>

        </div>
    );
}

export default Footer;