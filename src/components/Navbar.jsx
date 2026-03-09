import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isHome = location.pathname === '/';

    const scrollToSection = (id) => {
        if (!isHome) return;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <nav className="fixed w-full z-50 transition-all duration-300 glass border-b border-slate-700/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">
                            JD
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {isHome ? (
                                <>
                                    <button onClick={() => scrollToSection('home')} className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Home</button>
                                    <button onClick={() => scrollToSection('expertise')} className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Expertise</button>
                                    <button onClick={() => scrollToSection('contact')} className="px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium transition-all duration-200 shadow-lg shadow-indigo-500/30">Connect</button>
                                </>
                            ) : (
                                <Link to="/" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Back to Home</Link>
                            )}
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(true)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
                        >
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${isOpen ? 'translate-x-0' : 'translate-x-full'} fixed top-0 left-0 w-full h-screen bg-slate-900/95 backdrop-blur-xl transition-transform duration-300 ease-in-out z-40 md:hidden`}>
                <div className="p-4 flex justify-end">
                    <button onClick={() => setIsOpen(false)} className="p-2 text-slate-400 hover:text-white">
                        <svg className="h-8 w-8" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-4 text-center mt-10">
                    {isHome ? (
                        <>
                            <button onClick={() => scrollToSection('home')} className="block w-full px-3 py-4 rounded-md text-xl font-medium text-slate-300 hover:text-white hover:bg-slate-800">Home</button>
                            <button onClick={() => scrollToSection('expertise')} className="block w-full px-3 py-4 rounded-md text-xl font-medium text-slate-300 hover:text-white hover:bg-slate-800">Expertise</button>
                            <button onClick={() => scrollToSection('contact')} className="block w-full px-3 py-4 rounded-md text-xl font-medium text-indigo-400 hover:text-white hover:bg-slate-800">Contact</button>
                        </>
                    ) : (
                        <Link to="/" onClick={() => setIsOpen(false)} className="block w-full px-3 py-4 rounded-md text-xl font-medium text-slate-300 hover:text-white hover:bg-slate-800">Back to Home</Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
