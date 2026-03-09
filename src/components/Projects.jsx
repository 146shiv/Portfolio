import React, { useState, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

const SWIPE_THRESHOLD = 50;

const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const touchStartX = useRef(null);

    const goTo = useCallback((index) => {
        setActiveIndex((Math.max(0, Math.min(index, PROJECTS.length - 1))));
    }, []);

    const goNext = useCallback(() => {
        setActiveIndex((i) => (i + 1) % PROJECTS.length);
    }, []);

    const goPrev = useCallback(() => {
        setActiveIndex((i) => (i - 1 + PROJECTS.length) % PROJECTS.length);
    }, []);

    const handleTouchStart = useCallback((e) => {
        touchStartX.current = e.touches[0].clientX;
    }, []);

    const handleTouchEnd = useCallback((e) => {
        if (touchStartX.current == null) return;
        const endX = e.changedTouches[0].clientX;
        const delta = touchStartX.current - endX;
        if (Math.abs(delta) >= SWIPE_THRESHOLD) {
            if (delta > 0) goNext();
            else goPrev();
        }
        touchStartX.current = null;
    }, [goNext, goPrev]);

    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Featured Projects</h2>
                    <div className="mt-2 w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
                </div>

                {/* Slider container – one card visible at a time; touch swipe on mobile */}
                <div
                    className="relative overflow-hidden touch-pan-y"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                    >
                        {PROJECTS.map((project) => (
                            <div key={project.id} className="w-full flex-shrink-0 px-1">
                                <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:bg-slate-800/60 transition-all duration-300 group">
                                    <div className="md:flex">
                                        <div className="md:w-1/2 bg-slate-900/50 min-h-[250px] relative overflow-hidden">
                                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient || 'from-indigo-900/40 to-slate-900'} flex items-center justify-center group-hover:scale-105 transition-transform duration-700`}>
                                                <span className="text-slate-600 font-bold text-4xl opacity-20 transform -rotate-12">{project.placeholderLabel || project.title}</span>
                                            </div>
                                        </div>
                                        <div className="p-8 md:w-1/2 flex flex-col justify-center">
                                            <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                                            <p className="text-slate-400 mb-6">{project.description}</p>

                                            <div className="flex flex-wrap gap-2 mb-8">
                                                {(project.tags || []).map((tag) => (
                                                    <span key={tag.name} className={`px-2 py-1 text-xs font-medium rounded ${tag.color}`}>{tag.name}</span>
                                                ))}
                                            </div>

                                            <div className="flex flex-wrap gap-3">
                                                <Link to={project.caseStudyLink} className="inline-flex items-center text-indigo-400 font-semibold hover:text-indigo-300 transition-colors group-hover:translate-x-1 duration-300">
                                                    View Case Study
                                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                                    </svg>
                                                </Link>
                                                {project.liveDemoUrl && (
                                                    <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-slate-400 hover:text-white text-sm font-medium transition-colors">
                                                        Live Demo →
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Prev / Next arrows – optional, can remove if you want dots only */}
                    {PROJECTS.length > 1 && (
                        <>
                            <button
                                type="button"
                                onClick={goPrev}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 z-10 w-10 h-10 rounded-full bg-slate-800/90 border border-slate-600 text-white flex items-center justify-center hover:bg-slate-700 transition-colors opacity-80 hover:opacity-100"
                                aria-label="Previous project"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                            </button>
                            <button
                                type="button"
                                onClick={goNext}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 z-10 w-10 h-10 rounded-full bg-slate-800/90 border border-slate-600 text-white flex items-center justify-center hover:bg-slate-700 transition-colors opacity-80 hover:opacity-100"
                                aria-label="Next project"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                            </button>
                        </>
                    )}
                </div>

                {/* Dots – click to jump to project */}
                {PROJECTS.length > 1 && (
                    <div className="flex justify-center gap-2 mt-8">
                        {PROJECTS.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => goTo(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                                    index === activeIndex
                                        ? 'bg-indigo-500 scale-125'
                                        : 'bg-slate-600 hover:bg-slate-500'
                                }`}
                                aria-label={`Go to project ${index + 1}`}
                                aria-current={index === activeIndex ? 'true' : undefined}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
