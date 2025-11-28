import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="mt-16">

            {/* TOP FOOTER */}
            <footer className="bg-gradient-to-br from-orange-200 to-orange-300 py-12 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-800">

                    {/* Logo + Description */}
                    <div>
                        <img
                            className="w-40 mb-4"
                            src="https://a6e8z9v6.stackpathcdn.com/yoku/demo1/wp-content/uploads/sites/2/2020/07/logox1.png"
                            alt="Yoku Logo"
                        />
                        <p className="text-sm leading-6">
                            Yoku Academy — Learn from expert instructors with
                            top-quality courses in creativity, development, and innovation.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-4 text-xl text-orange-700">
                            <FaFacebook className="hover:scale-125 transition duration-300 cursor-pointer" />
                            <FaInstagram className="hover:scale-125 transition duration-300 cursor-pointer" />
                            <FaTwitter className="hover:scale-125 transition duration-300 cursor-pointer" />
                            <FaLinkedin className="hover:scale-125 transition duration-300 cursor-pointer" />
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="footer-title text-lg font-bold text-orange-700 mb-3">Services</h3>
                        <ul className="space-y-2">
                            <li className="hover:text-orange-600 cursor-pointer">Branding</li>
                            <li className="hover:text-orange-600 cursor-pointer">Design</li>
                            <li className="hover:text-orange-600 cursor-pointer">Marketing</li>
                            <li className="hover:text-orange-600 cursor-pointer">Advertisement</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="footer-title text-lg font-bold text-orange-700 mb-3">Company</h3>
                        <ul className="space-y-2">
                            <li className="hover:text-orange-600 cursor-pointer">About us</li>
                            <li className="hover:text-orange-600 cursor-pointer">Contact</li>
                            <li className="hover:text-orange-600 cursor-pointer">Jobs</li>
                            <li className="hover:text-orange-600 cursor-pointer">Press kit</li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="footer-title text-lg font-bold text-orange-700 mb-3">Legal</h3>
                        <ul className="space-y-2">
                            <li className="hover:text-orange-600 cursor-pointer">Terms of use</li>
                            <li className="hover:text-orange-600 cursor-pointer">Privacy policy</li>
                            <li className="hover:text-orange-600 cursor-pointer">Cookie policy</li>
                        </ul>
                    </div>

                </div>
            </footer>

            {/* BOTTOM COPYRIGHT */}
            <footer className="footer footer-center p-4 bg-gray-300 text-gray-800">
                <p className="font-medium">
                    © {new Date().getFullYear()} <span className="font-bold text-orange-700">Yoku Academy</span> — All rights reserved.
                </p>
            </footer>

        </div>
    );
};

export default Footer;
