import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.scss';
import {HOME_PAGE} from "../utils/consts";


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
                                <Link className="footer_container--list-item-link" to={HOME_PAGE}>Home</Link>
                            </li>
                            <li className="footer_container--list-item">
                                <Link className="footer_container--list-item-link" to={HOME_PAGE}>Service</Link>
                            </li>
                            <li className="footer_container--list-item">
                                <Link className="footer_container--list-item-link" to={HOME_PAGE}>Appointment</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer_container--col">
                        <h4 className="footer_container--header">Social</h4>
                        <div className="footer_container--icons">
                            <Link className="footer_container--icons-link" to={HOME_PAGE}>
                                <img src="git.png" className="footer_container--icons-link_img"/>
                            </Link>

                            <Link to={HOME_PAGE}>
                                <img src="linkedin.png" className="footer_container--icons-link_img"/>
                            </Link>

                            <Link to={HOME_PAGE}>
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