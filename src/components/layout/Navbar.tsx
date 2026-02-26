import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const mainNavLinks = [
    { name: 'Operations', path: '/operations' },
    { name: 'Sustainability', path: '/esg-dashboard' },
    { name: 'Investors', path: '/investors' },
    { name: 'Governance', path: '/governance' },
];

const moreNavLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/career' },
    { name: 'Contact', path: '/contact' },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsMoreOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav className="fixed w-full z-50 bg-brand-navy/80 backdrop-blur-md border-b border-brand-surface/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <NavLink to="/" className="flex items-center gap-2 group">
                            <div className="w-8 h-8 rounded bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center group-hover:bg-brand-blue/20 transition-colors">
                                <Globe className="w-5 h-5 text-brand-blue" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white group-hover:text-brand-blue transition-colors">
                                NEXA<span className="text-brand-blue">ENERGY</span>
                            </span>
                        </NavLink>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {mainNavLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition-colors hover:text-brand-blue relative ${isActive ? 'text-brand-blue' : 'text-slate-300'}`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {link.name}
                                        {isActive && (
                                            <motion.div
                                                layoutId="nav-pill"
                                                className="absolute -bottom-7 left-0 right-0 h-0.5 bg-brand-blue"
                                            />
                                        )}
                                    </>
                                )}
                            </NavLink>
                        ))}

                        {/* More Dropdown */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setIsMoreOpen(!isMoreOpen)}
                                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-brand-blue ${isMoreOpen ? 'text-brand-blue' : 'text-slate-300'}`}
                            >
                                More <ChevronDown className={`w-4 h-4 transition-transform ${isMoreOpen ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {isMoreOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full mt-6 w-48 bg-[#050C1A] border border-brand-surface rounded-lg shadow-xl overflow-hidden py-2"
                                    >
                                        {moreNavLinks.map(link => (
                                            <NavLink
                                                key={link.name}
                                                to={link.path}
                                                onClick={() => setIsMoreOpen(false)}
                                                className={({ isActive }) =>
                                                    `block px-4 py-2 text-sm font-medium transition-colors ${isActive ? 'bg-brand-surface/50 text-brand-blue' : 'text-slate-300 hover:text-white hover:bg-brand-surface/30'}`
                                                }
                                            >
                                                {link.name}
                                            </NavLink>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="flex items-center gap-4 ml-6 pl-6 border-l border-brand-surface">
                            <button className="flex items-center gap-2 text-xs font-mono text-brand-neon hover:text-brand-neon/80 transition-colors">
                                <span className="w-2 h-2 rounded-full bg-brand-neon animate-pulse" />
                                MARKETS OPEN
                            </button>
                            <NavLink to="/login" className="px-4 py-2 text-sm font-medium bg-brand-surface hover:bg-brand-surface/80 border border-brand-surface/50 rounded text-white transition-all hover:border-brand-blue/50 group">
                                <span className="flex items-center gap-2">Portal Login</span>
                            </NavLink>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-300 hover:text-white p-2"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-brand-navy/95 border-b border-brand-surface/50 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {[...mainNavLinks, ...moreNavLinks].map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `block px-3 py-4 text-base font-medium rounded-md ${isActive
                                            ? 'bg-brand-surface/50 text-brand-blue'
                                            : 'text-slate-300 hover:bg-brand-surface/30 hover:text-white'
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                            <div className="mt-4 pt-4 border-t border-brand-surface/50">
                                <NavLink to="/login" className="w-full flex justify-center items-center px-4 py-3 text-sm font-medium bg-brand-blue text-brand-navy rounded hover:bg-brand-blue/90 transition-colors">
                                    Portal Login
                                </NavLink>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
