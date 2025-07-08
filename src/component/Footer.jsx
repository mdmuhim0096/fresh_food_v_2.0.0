import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200 pt-16 pb-8" id="footer">
            <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Brand / About */}
                <div className="text-center my-5">
                    <h2 className="text-2xl font-bold text-white mb-4">🍴 Foodie's Hub</h2>
                    <p className="text-sm text-gray-400">
                        Serving you delicious experiences every day. Visit us or order online and enjoy.
                    </p>
                </div>

                {/* Quick Links */}
                <div >
                    <h3 className=" font-semibold mb-3 text-center text-xl">Quick Links</h3>
                    <ul className="space-y-2 flex flex-col items-center">
                        <li><a href="#menu" className="hover:text-red-400">Menu</a></li>
                        <li><a href="#reservation" className="hover:text-red-400">Reservations</a></li>
                        <li><a href="#order-online" className="hover:text-red-400">Order Online</a></li>
                        <li><a href="#" className="hover:text-red-400">Contact</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="flex flex-col items-center">
                    <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
                    <p className="text-sm mb-4 text-gray-400">
                        Get our weekly specials and news straight to your inbox.
                    </p>
                    <form className="flex items-center">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="px-3 py-2 rounded-l bg-gray-800 text-white focus:outline-none text-sm"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-red-500 rounded-r text-white hover:bg-red-600 text-sm"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Social Media */}
                <div className="flex flex-col items-center">
                    <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                    <div className="flex items-center gap-4 text-xl text-white">
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="#fff">
                                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326V22.67c0 .733.593 1.325 1.325 1.325H12.82V14.7h-3.1v-3.6h3.1V8.1c0-3.07 1.873-4.744 4.6-4.744 1.31 0 2.437.098 2.767.142v3.205l-1.9.001c-1.49 0-1.78.708-1.78 1.747v2.29h3.56l-.465 3.6h-3.095V24h6.075c.73 0 1.325-.592 1.325-1.325V1.326C24 .593 23.405 0 22.675 0z" />
                            </svg>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="#ffff"
                                viewBox="0 0 24 24"
                            >
                                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm4.5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm4.75-.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>

                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="#ffffff"
                                viewBox="0 0 24 24"
                            >
                                <path d="M21.8 8.001s-.2-1.5-.8-2.2c-.7-.8-1.5-.8-1.9-.9C16.8 4.6 12 4.6 12 4.6h-.1s-4.8 0-7.1.3c-.4.1-1.2.1-1.9.9-.6.7-.8 2.2-.8 2.2S2 9.7 2 11.3v1.4c0 1.6.2 3.3.2 3.3s.2 1.5.8 2.2c.7.8 1.6.8 2 1 1.5.1 6.9.3 6.9.3s4.8 0 7.1-.3c.4-.1 1.2-.1 1.9-.9.6-.7.8-2.2.8-2.2s.2-1.7.2-3.3v-1.4c0-1.6-.2-3.3-.2-3.3zM9.8 14.8V9.2l5.3 2.8-5.3 2.8z" />
                            </svg>

                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-500 mt-12 text-sm">
                © {new Date().getFullYear()} Foodie's Hub. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
