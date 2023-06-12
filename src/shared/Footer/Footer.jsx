import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-8 bg-orange-200  ">
                <div className=' bg-white w-full'>
                    <img className=' p-6 w-46' src="https://a6e8z9v6.stackpathcdn.com/yoku/demo1/wp-content/uploads/sites/2/2020/07/logox1.png" alt="" />
                   
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
            <footer className="footer footer-center p-4 bg-gray-300 ">
                <div>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;