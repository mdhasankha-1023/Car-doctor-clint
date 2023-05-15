import React from 'react';
import logo from '../../../assets/icons/logo.svg'
import { Link } from 'react-router-dom';
import { FaBeer, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-[#1E1E1E]  text-white w-full max-w-full">
            <div>
                <img src={logo} alt="" />
                <p>Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial .</p>
                <div className="flex gap-4 mt-4">
                    <a><FaFacebook size='2em'></FaFacebook></a>
                    <a><FaTwitter size='2em'></FaTwitter></a>
                    <a><FaInstagram size='2em'></FaInstagram></a>
                    <a><FaLinkedin size='2em'></FaLinkedin></a>
                </div>
            </div>
            <div>
                <span className="footer-title">About</span>
                <Link className="link link-hover" to='/'>Home</Link>
                <Link className="link link-hover" to='/services'>Services</Link>
                <Link className="link link-hover" to='/contact'>Contact</Link>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link className="link link-hover" to='/contact'>Why car doctor</Link>
                <Link className="link link-hover" to='/about'>About</Link>
            </div>
            <div>
                <span className="footer-title">Support</span>
                <a className="link link-hover">Support Center</a>
                <a className="link link-hover">Feedback</a>
                <a className="link link-hover">Accesbility</a>
            </div>
        </footer>
    );
};

export default Footer;