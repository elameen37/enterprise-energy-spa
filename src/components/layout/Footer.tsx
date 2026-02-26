
import { NavLink } from 'react-router';
import { Globe, ArrowUpRight, ArrowUp } from 'lucide-react';

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#050C1A] border-t border-brand-surface pt-20 pb-10 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[radial-gradient(ellipse_at_top,_var(--color-brand-blue)_0%,_transparent_50%)] opacity-5 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

                    <div className="md:col-span-4">
                        <div className="flex items-center gap-2 mb-6">
                            <Globe className="w-6 h-6 text-brand-blue" />
                            <span className="text-xl font-bold tracking-tight text-white">
                                NEXA<span className="text-brand-blue">ENERGY</span>
                            </span>
                        </div>
                        <p className="text-sm text-slate-400 mb-8 max-w-sm leading-relaxed">
                            Pioneering the European energy transition through operational excellence, radical transparency, and digital innovation. Securing our grids into 2050 and beyond.
                        </p>
                        <div className="flex flex-col space-y-2">
                            <div className="text-xs font-mono text-slate-500 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" /> HQ: Frankfurt, Germany
                            </div>
                            <div className="text-xs font-mono text-slate-500 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-neon animate-pulse" /> Ticker: NXEN (FRA)
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="text-white font-semibold mb-6 text-sm tracking-wider uppercase">Enterprise</h3>
                        <ul className="space-y-4">
                            <li><NavLink to="/about" className="text-sm text-slate-400 hover:text-brand-blue transition-colors">About Nexa</NavLink></li>
                            <li><NavLink to="/operations" className="text-sm text-slate-400 hover:text-brand-blue transition-colors">Operations</NavLink></li>
                            <li><NavLink to="/career" className="text-sm text-slate-400 hover:text-brand-blue transition-colors">Careers</NavLink></li>
                            <li><NavLink to="/contact" className="text-sm text-slate-400 hover:text-brand-blue transition-colors">Contact Central</NavLink></li>
                        </ul>
                    </div>

                    <div className="md:col-span-3">
                        <h3 className="text-white font-semibold mb-6 text-sm tracking-wider uppercase">Corporate Affairs</h3>
                        <ul className="space-y-4">
                            <li>
                                <NavLink to="/esg-dashboard" className="text-sm text-brand-neon hover:text-white transition-colors flex items-center gap-1 group">
                                    ESG Command Center <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </NavLink>
                            </li>
                            <li><NavLink to="/governance" className="text-sm text-slate-400 hover:text-brand-blue transition-colors">Board of Directors</NavLink></li>
                            <li><NavLink to="/governance" className="text-sm text-slate-400 hover:text-brand-blue transition-colors">Executive Compensation</NavLink></li>
                            <li><NavLink to="/investors" className="text-sm text-slate-400 hover:text-brand-blue transition-colors">Regulatory Filings</NavLink></li>
                        </ul>
                    </div>

                    <div className="md:col-span-3">
                        <h3 className="text-white font-semibold mb-6 text-sm tracking-wider uppercase">Investor Relations</h3>
                        <ul className="space-y-4">
                            <li><NavLink to="/investors" className="text-sm text-slate-400 hover:text-brand-blue transition-colors">Q3 2026 Earnings</NavLink></li>
                            <li><NavLink to="/investors" className="text-sm text-slate-400 hover:text-brand-blue transition-colors">Capital Allocation</NavLink></li>
                            <li><NavLink to="/login" className="text-sm text-slate-400 hover:text-brand-blue transition-colors">Enterprise Portal Login</NavLink></li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-brand-surface flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-slate-500">
                        &copy; {new Date().getFullYear()} Nexa Energy SE. All rights reserved. Registered in Germany.
                    </p>
                    <div className="flex items-center space-x-8 text-xs text-slate-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
                        <a href="#" className="hover:text-white transition-colors">Cookie Dashboard</a>
                    </div>
                </div>
            </div>

            {/* Back to Top */}
            <button
                onClick={scrollToTop}
                className="absolute right-8 bottom-8 w-12 h-12 bg-brand-surface/50 hover:bg-brand-blue hover:text-brand-navy text-slate-400 rounded-full border border-brand-surface flex items-center justify-center transition-all group backdrop-blur-sm shadow-lg z-20"
                aria-label="Scroll to top"
            >
                <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
        </footer>
    );
}
