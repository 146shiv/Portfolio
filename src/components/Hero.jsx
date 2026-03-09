import React from 'react';

import heroImage from '../assets/pic.jpg';
import { HERO_CONTENT } from '../constants';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-20">
            <div className="max-w-3xl w-full text-center space-y-8 animate-fade-in-up">
                {/* Profile Image */}
                <div className="relative mx-auto w-40 h-40 sm:w-48 sm:h-48 mb-6 group">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                    <img src={heroImage} alt="Profile" className="relative w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-2xl float-animation" />
                </div>

                {/* Intro Text */}
                <div className="space-y-4">
                    <div className="inline-block px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2">Available for hire</div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                        <span className="block text-slate-100">Backend Developer &</span>
                        <span className="block text-gradient mt-2">Problem Solver</span>
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-slate-400">
                        MERN Stack Specialist | Java DSA | Backend Enthusiast.
                        Building scalable, user-centric, and high-performance applications.
                    </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap justify-center gap-2 mt-6">
                    {['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS'].map((tech) => (
                        <span key={tech} className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-sm text-slate-300">{tech}</span>
                    ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                    <a href={HERO_CONTENT.resumePdfUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transform hover:-translate-y-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                        Download Resume
                    </a>
                    <a href={HERO_CONTENT.githubLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold flex items-center justify-center gap-2 border border-slate-700 transition-all duration-300 transform hover:-translate-y-1">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                        View Github
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
