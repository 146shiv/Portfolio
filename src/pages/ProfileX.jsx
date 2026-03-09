import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProfileX = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="relative z-10 pt-24 pb-20">
            {/* Hero / Header */}
            <section className="px-4 sm:px-6 lg:px-8 mb-16">
                <div className="max-w-6xl mx-auto">
                    <div className="relative rounded-3xl overflow-hidden aspect-video md:aspect-[21/9] bg-gradient-to-br from-indigo-900 to-slate-900 border border-slate-800 shadow-2xl animate-fade-in-up">
                        <div className="absolute inset-0 flex items-center justify-center flex-col p-6 text-center">
                            <h1 className="relative z-10 text-4xl md:text-6xl font-extrabold text-white mb-4">
                                ProfileX
                            </h1>
                            <p className="relative z-10 text-indigo-200 text-lg md:text-xl max-w-2xl bg-slate-900/50 backdrop-blur-sm p-4 rounded-xl border border-indigo-500/30">
                                Smart Business Card Management with QR Integration
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 md:flex md:justify-between md:items-start gap-8 animate-fade-in-up">
                        <div className="md:w-2/3">
                            <h2 className="text-3xl font-bold text-white mb-4">Project Overview</h2>
                            <p className="text-lg text-slate-400 leading-relaxed">
                                ProfileX is a dynamic platform designed for professionals and businesses to create multiple digital business cards tailored to different audiences. A core feature is the automated QR code generation, allowing instant sharing of contact details and tech stacks with a simple scan.
                            </p>
                            <div className="mt-8 flex gap-4">
                                <a href="https://profile-x-frontend.vercel.app" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all shadow-lg shadow-indigo-500/25 flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                    Live Demo
                                </a>
                            </div>
                        </div>

                        {/* Tech Stack Sidebar */}
                        <div className="mt-8 md:mt-0 md:w-1/3 p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
                            <h3 className="text-lg font-semibold text-white mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'JWT', 'MongoDB'].map(tech => (
                                    <span key={tech} className="px-3 py-1 bg-slate-700/50 rounded-md text-sm text-indigo-300 border border-slate-600">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 animate-fade-in-up">
                <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-indigo-500 pl-4">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:bg-slate-800/60 transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                        </div>
                        <h3 className="font-semibold text-white mb-2">Multi-Card System</h3>
                        <p className="text-sm text-slate-400">Create and manage different cards relationships for various business verticals.</p>
                    </div>
                    <div className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:bg-slate-800/60 transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path></svg>
                        </div>
                        <h3 className="font-semibold text-white mb-2">QR Code Integration</h3>
                        <p className="text-sm text-slate-400">Instant QR generation for each card to share details seamlessly.</p>
                    </div>
                    <div className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:bg-slate-800/60 transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                        </div>
                        <h3 className="font-semibold text-white mb-2">Secure Auth</h3>
                        <p className="text-sm text-slate-400">Robust authentication using JWT to protect user data and card information.</p>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <div className="max-w-4xl mx-auto mt-20 px-4 text-center">
                <Link to="/#projects" className="inline-flex items-center text-slate-400 hover:text-white transition-colors">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    Back to Featured Projects
                </Link>
            </div>
        </main>
    );
};

export default ProfileX;
