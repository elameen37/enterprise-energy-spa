import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Globe } from 'lucide-react';
import { NavLink } from 'react-router';
import { GenericPageSkeleton, useSimulatedLoading } from '../components/ui/Skeleton';

export function Login() {
    const isLoading = useSimulatedLoading(600); // slightly faster for login

    if (isLoading) return <GenericPageSkeleton />;

    return (
        <div className="w-full min-h-screen bg-brand-navy flex items-center justify-center relative overflow-hidden animate-in fade-in duration-500">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-brand-navy/90 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000"
                    alt="Data Center"
                    className="w-full h-full object-cover mix-blend-overlay opacity-40 z-0 relative"
                />
                <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 z-10" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-20 w-full max-w-md bg-[#050C1A]/80 backdrop-blur-xl border border-brand-surface rounded-2xl p-8 shadow-2xl"
            >
                <div className="flex justify-center mb-8">
                    <NavLink to="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center hover:bg-brand-blue/20 transition-colors">
                            <Globe className="w-6 h-6 text-brand-blue" />
                        </div>
                    </NavLink>
                </div>

                <h2 className="text-2xl font-bold text-white text-center mb-2">Enterprise Portal Access</h2>
                <p className="text-slate-400 text-sm text-center mb-8 max-w-xs mx-auto">
                    Authorized personnel only. All access attempts are logged and audited.
                </p>

                <form className="space-y-5">
                    <div>
                        <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Corporate ID / Email</label>
                        <div className="relative">
                            <input type="text" className="w-full bg-brand-navy border border-brand-surface rounded px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors pl-11" placeholder="CORP-ID or Email" />
                            <Lock className="w-5 h-5 text-slate-500 absolute left-3 top-3.5" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Passcode</label>
                        <div className="relative">
                            <input type="password" className="w-full bg-brand-navy border border-brand-surface rounded px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors pl-11" placeholder="••••••••" />
                            <ShieldCheck className="w-5 h-5 text-slate-500 absolute left-3 top-3.5" />
                        </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 rounded border-brand-surface bg-brand-navy text-brand-blue focus:ring-brand-blue/20" />
                            <span className="text-sm text-slate-400">Remember Device</span>
                        </label>
                        <a href="#" className="text-sm text-brand-blue hover:text-white transition-colors">Reset Access</a>
                    </div>

                    <button type="button" className="w-full py-4 mt-4 bg-brand-blue hover:bg-brand-blue/90 text-brand-navy font-bold rounded transition-colors flex justify-center items-center gap-2">
                        Authenticate Session <ArrowRight className="w-4 h-4" />
                    </button>
                </form>

                <div className="mt-8 pt-6 border-t border-brand-surface text-center">
                    <div className="text-xs font-mono text-slate-500 flex items-center justify-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-brand-neon animate-pulse" />
                        SECURE CONNECTION ESTABLISHED
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

function ArrowRight({ className }: any) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>;
}
