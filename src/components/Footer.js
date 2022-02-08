import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
    return <div className='footer-container'>
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Join our community
            </p>
            <div className="input-areas">
                <form>
                    <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                    <button className='new-btn'>Subscribe</button>
                </form>
            </div>
        </section>
        <div className="footer-Links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/sign-up'>More...</Link>
                    <Link to='/sign-up'>Terms of Service</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Contact Us</h2>
                    <Link to='/sign-up'>Support</Link>
                    <Link to='/sign-up'>Carrers</Link>
                    <Link to='/sign-up'>Sponsorships</Link>
                </div>
            </div>
        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to='/' className='social-logo'>
                        TRVL <i className='fas fa-location-arrow' />
                    </Link>
                </div>
                <small className="website-rights">
                    TRVL © 2022
                </small>
                <div className="social-icons">
                    <Link className='social-icon-link facebook'
                        to='/'
                        target='_blank'
                        aria-label='Facebook'>
                        <i className='fab fa-facebook-f' />
                    </Link>
                    <Link className='social-icon-link instagram'
                        to='/'
                        target='_blank'
                        aria-label='Instagram'>
                        <i className='fab fa-instagram' />
                    </Link>
                    <Link className='social-icon-link youtube'
                        to='/'
                        target='_blank'
                        aria-label='YouTube'>
                        <i className='fab fa-youtube' />
                    </Link>
                    <Link className='social-icon-link linkedin'
                        to='/'
                        target='_blank'
                        aria-label='LinkedIn'>
                        <i className='fab fa-linkedin' />
                    </Link>
                </div>
            </div>
        </section>
    </div >;
}

export default Footer;