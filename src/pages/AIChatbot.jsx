import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AIChatbot = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="relative z-10 pt-24 pb-20">
            <section className="px-4 sm:px-6 lg:px-8 mb-16">
                <div className="max-w-6xl mx-auto">
                    <div className="relative rounded-3xl overflow-hidden aspect-video md:aspect-[21/9] bg-gradient-to-br from-violet-900 to-slate-900 border border-slate-800 shadow-2xl animate-fade-in-up">
                        <div className="absolute inset-0 flex items-center justify-center flex-col p-6 text-center">
                            <h1 className="relative z-10 text-4xl md:text-6xl font-extrabold text-white mb-4">
                                Document Chatbot
                            </h1>
                            <p className="relative z-10 text-violet-200 text-lg md:text-xl max-w-2xl bg-slate-900/50 backdrop-blur-sm p-4 rounded-xl border border-violet-500/30">
                                Conversational RAG AI · Powered by Llama-3 & Pinecone
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 md:flex md:justify-between md:items-start gap-8 animate-fade-in-up">
                        <div className="md:w-2/3">
                            <h2 className="text-3xl font-bold text-white mb-4">Project Overview</h2>
                            <p className="text-lg text-slate-400 leading-relaxed">
                                An AI-powered document chatbot that lets users upload PDFs and ask questions about their content in natural language. Built with Retrieval-Augmented Generation (RAG), it embeds document chunks into a Pinecone vector database and uses Llama-3 to generate accurate, context-aware answers. Real-time WebSocket streaming delivers responses token-by-token for a smooth conversational experience.
                            </p>
                            <div className="mt-8 flex gap-4">
                                <a href="https://chatbot-zeta-flax-37.vercel.app/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all shadow-lg shadow-indigo-500/25 flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                    Live Demo
                                </a>
                            </div>
                        </div>

                        <div className="mt-8 md:mt-0 md:w-1/3 p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
                            <h3 className="text-lg font-semibold text-white mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {['React', 'Llama-3', 'Pinecone', 'RAG', 'WebSocket', 'PDF Parsing', 'Vector DB'].map(tech => (
                                    <span key={tech} className="px-3 py-1 bg-slate-700/50 rounded-md text-sm text-violet-300 border border-slate-600">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 animate-fade-in-up">
                <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-violet-500 pl-4">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:bg-slate-800/60 transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                        </div>
                        <h3 className="font-semibold text-white mb-2">PDF Upload & Preview</h3>
                        <p className="text-sm text-slate-400">Upload any PDF document and preview it alongside the chat interface for easy reference.</p>
                    </div>
                    <div className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:bg-slate-800/60 transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                        </div>
                        <h3 className="font-semibold text-white mb-2">RAG-Powered Q&A</h3>
                        <p className="text-sm text-slate-400">Ask anything about your document — the system retrieves relevant chunks from Pinecone and grounds Llama-3 responses in your data.</p>
                    </div>
                    <div className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:bg-slate-800/60 transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-400 mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <h3 className="font-semibold text-white mb-2">WebSocket Streaming</h3>
                        <p className="text-sm text-slate-400">Responses stream in real time via WebSocket for a fluid, ChatGPT-like conversational experience.</p>
                    </div>
                </div>
            </section>

            <div className="max-w-4xl mx-auto mt-20 px-4 text-center">
                <Link to="/#projects" className="inline-flex items-center text-slate-400 hover:text-white transition-colors">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    Back to Featured Projects
                </Link>
            </div>
        </main>
    );
};

export default AIChatbot;
