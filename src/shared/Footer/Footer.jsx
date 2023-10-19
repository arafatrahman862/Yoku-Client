import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-8 bg-orange-200  ">
                <div className='  w-full'>
                    <img className=' p-6 w-36' src="https://img.freepik.com/free-vector/spa-business-logo-lotus-icon-design_53876-115927.jpg?w=740&t=st=1686591695~exp=1686592295~hmac=2081bdcf9602bd32535ceb7cad732b2e3f25561be6ede887f9f2afcd88fd644c" alt="" />
                   
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>

            </footer>
            <footer className="footer footer-center p-4  ">
                <div>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;