import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.scss';


const Footer = () => {
    return(
        <div className="footer">
            <div className="footer_container">
                <div className="footer_container--row">
                    <div className="footer_container--col">
                        <h4 className="footer_container--header">About Us</h4>
                        <p className="footer_container--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero error dicta nulla tempora, asperiores fugiat, omnis voluptatibus, exercitationem assumenda fugit ab id beatae esse! Voluptatem quo iusto consequuntur nihil amet!</p>
                    </div>

                    <div className="footer_container--col">
                        <h4 className="footer_container--header">Quick Links</h4>
                        <ul className="footer_container--list">
                            <li className="footer_container--list-item">
                                <Link className="footer_container--list-item-link" to="/">Home</Link>
                            </li>
                            <li className="footer_container--list-item">
                                <Link className="footer_container--list-item-link" to="/">Service</Link>
                            </li>
                            <li className="footer_container--list-item">
                                <Link className="footer_container--list-item-link" to="/">Appointment</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer_container--col">
                        <h4 className="footer_container--header">Social</h4>
                        <div className="footer_container--icons">
                            <Link className="footer_container--icons-link" to="/">
                                <img src="git.png" className="footer_container--icons-link_img"/>
                            </Link>

                            <Link to="/">
                                <img src="linkedin.png" className="footer_container--icons-link_img"/>
                            </Link>

                            <Link to="/">
                                <img src="google.png" className="footer_container--icons-link_img"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;