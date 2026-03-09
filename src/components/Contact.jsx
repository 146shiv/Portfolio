import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../constants';

const Contact = () => {
    const [btnText, setBtnText] = useState('Send Message');
    const [disabled, setDisabled] = useState(false);
    const [btnClass, setBtnClass] = useState('bg-indigo-600 hover:bg-indigo-700 border-transparent');

    const handleSubmit = (e) => {
        e.preventDefault();
        setBtnText('Sending...');
        setDisabled(true);

        setTimeout(() => {
            setBtnText('Message Sent!');
            setBtnClass('bg-green-600 border-green-500');

            e.target.reset();

            setTimeout(() => {
                setBtnText('Send Message');
                setDisabled(false);
                setBtnClass('bg-indigo-600 hover:bg-indigo-700 border-transparent');
            }, 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Get In Touch</h2>
                    <p className="mt-4 text-slate-400">Have a project in mind or just want to say hi?</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                                <input type="text" id="name" required className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-slate-600 transition-all outline-none" placeholder="Your Name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                                <input type="email" id="email" required className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-slate-600 transition-all outline-none" placeholder="hello@example.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                                <textarea id="message" rows="4" required className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-slate-600 transition-all outline-none resize-none" placeholder="Tell me about your project..."></textarea>
                            </div>
                            <button type="submit" disabled={disabled} className={`w-full py-3 px-6 rounded-lg text-white font-semibold transition-all duration-300 shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 border ${btnClass}`}>
                                {btnText}
                                {btnText === 'Send Message' && (
                                    <svg className="w-4 h-4 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Socials & Info */}
                    <div className="flex flex-col justify-center space-y-8">
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-white">Connect with me</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {SOCIAL_LINKS.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target={social.external ? '_blank' : undefined}
                                        rel={social.external ? 'noopener noreferrer' : undefined}
                                        onClick={(e) => {
                                            if (social.external && social.url !== '#') {
                                                e.preventDefault();
                                                window.open(social.url, '_blank', 'noopener,noreferrer');
                                            }
                                        }}
                                        className="p-4 bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 text-center transition-all duration-300 hover:-translate-y-1 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                                    >
                                        {social.name === 'LinkedIn' && (
                                            <svg className={`w-8 h-8 mx-auto ${social.iconColor} group-hover:scale-110 transition-transform`} fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                        )}
                                        {social.name === 'GitHub' && (
                                            <svg className={`w-8 h-8 mx-auto ${social.iconColor} group-hover:scale-110 transition-transform`} fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                        )}
                                        {social.name === 'Twitter' && (
                                            <svg className={`w-8 h-8 mx-auto ${social.iconColor} group-hover:scale-110 transition-transform`} fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                                        )}
                                        {social.name === 'Email' && (
                                            <svg className={`w-8 h-8 mx-auto ${social.iconColor} group-hover:scale-110 transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        )}
                                        <span className="block mt-2 text-sm text-slate-300">{social.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
