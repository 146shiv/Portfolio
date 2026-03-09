import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProjectDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="relative z-10 pt-24 pb-20">
            {/* Hero / Header */}
            <section className="px-4 sm:px-6 lg:px-8 mb-16">
                <div className="max-w-6xl mx-auto">
                    <div className="relative rounded-3xl overflow-hidden aspect-video md:aspect-[21/9] bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-800 shadow-2xl animate-fade-in-up">
                        {/* Placeholder for Project Hero Image */}
                        <div className="absolute inset-0 flex items-center justify-center text-slate-700 bg-cover bg-center" style={{ backgroundImage: "url('/assets/project-bg.png')" }}>
                            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"></div>
                            <h1 className="relative z-10 text-4xl md:text-6xl font-extrabold text-white text-center px-4">
                                SaaS Analytics Dashboard
                            </h1>
                        </div>
                    </div>

                    <div className="mt-8 md:flex md:justify-between md:items-start gap-8 animate-fade-in-up">
                        <div className="md:w-2/3">
                            <h2 className="text-3xl font-bold text-white mb-4">Project Overview</h2>
                            <p className="text-lg text-slate-400 leading-relaxed">
                                A comprehensive analytics dashboard designed for SaaS businesses to track real-time metrics, user engagement, and revenue streams. This project focuses on high-performance data visualization and a seamless user experience.
                            </p>
                            <div className="mt-8 flex gap-4">
                                <a href="#" className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all shadow-lg shadow-indigo-500/25 flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                    Live Demo
                                </a>
                                <a href="#" className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold border border-slate-700 transition-all flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                    Source Code
                                </a>
                            </div>
                        </div>

                        {/* Tech Stack Sidebar */}
                        <div className="mt-8 md:mt-0 md:w-1/3 p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
                            <h3 className="text-lg font-semibold text-white mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {['React.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Recharts'].map(tech => (
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
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <h3 className="font-semibold text-white mb-2">Real-time Data</h3>
                        <p className="text-sm text-slate-400">Updates metrics instantly using WebSockets for live monitoring.</p>
                    </div>
                    <div className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:bg-slate-800/60 transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                        </div>
                        <h3 className="font-semibold text-white mb-2">Role-Based Access</h3>
                        <p className="text-sm text-slate-400">Granular permission controls for infinite team members.</p>
                    </div>
                    <div className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:bg-slate-800/60 transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                        </div>
                        <h3 className="font-semibold text-white mb-2">Advanced Reporting</h3>
                        <p className="text-sm text-slate-400">Exportable reports in PDF and CSV with custom date ranges.</p>
                    </div>
                </div>
            </section>

            {/* Gallery / Screenshots */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
                <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-indigo-500 pl-4">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="aspect-video bg-slate-800 rounded-lg border border-slate-700 hover:border-indigo-500/50 transition-colors cursor-pointer group relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-slate-600 font-medium group-hover:text-slate-400">Dashboard View</div>
                    </div>
                    <div className="aspect-video bg-slate-800 rounded-lg border border-slate-700 hover:border-indigo-500/50 transition-colors cursor-pointer group relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-slate-600 font-medium group-hover:text-slate-400">Settings Page</div>
                    </div>
                </div>
            </section>

            {/* Next Project Navigation */}
            <div className="max-w-4xl mx-auto mt-20 px-4 text-center">
                <Link to="/#projects" className="inline-flex items-center text-slate-400 hover:text-white transition-colors">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    Back to Featured Projects
                </Link>
            </div>
        </main>
    );
};

export default ProjectDetails;
