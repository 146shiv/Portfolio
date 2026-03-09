import React from 'react';

const Expertise = () => {
    return (
        <section id="expertise" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Core Expertise</h2>
                    <div className="mt-2 w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Tech Stack Card */}
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:p-8 hover:bg-slate-800/80 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white">Full Stack Development</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {['React.js', 'Nest.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL'].map(skill => (
                                <span key={skill} className="px-3 py-1 bg-slate-700/50 rounded-md text-sm text-slate-300 border border-slate-600">{skill}</span>
                            ))}
                        </div>
                    </div>

                    {/* DSA Card */}
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:p-8 hover:bg-slate-800/80 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white">Algorithmic Problem Solving</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-900/50 p-4 rounded-xl text-center">
                                <div className="text-2xl font-bold text-indigo-400">300+</div>
                                <div className="text-xs text-slate-500 uppercase tracking-wide mt-1">Geeks for Geeks</div>
                            </div>
                            <div className="bg-slate-900/50 p-4 rounded-xl text-center">
                                <div className="text-2xl font-bold text-blue-400">70+</div>
                                <div className="text-xs text-slate-500 uppercase tracking-wide mt-1">Leetcode</div>
                            </div>
                        </div>
                    </div>

                    {/* Product Design & Architecture */}
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:p-8 hover:bg-slate-800/80 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-amber-500/10 rounded-lg text-amber-400">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white">Product Design & Architecture</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {['System Design', 'Microservices', 'API Design', 'Database Design', 'Scalability', 'REST / GraphQL'].map(skill => (
                                <span key={skill} className="px-3 py-1 bg-slate-700/50 rounded-md text-sm text-slate-300 border border-slate-600">{skill}</span>
                            ))}
                        </div>
                    </div>

                    {/* Tools & Cloud */}
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:p-8 hover:bg-slate-800/80 transition-all duration-300 md:col-span-2 lg:col-span-3">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white">Tools & Cloud Infrastructure</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {['Git/GitHub', 'Vercel', 'AWS (EC2, S3)', 'Render'].map(tool => (
                                <span key={tool} className="px-3 py-1 bg-slate-700/50 rounded-md text-sm text-slate-300 border border-slate-600">{tool}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expertise;
