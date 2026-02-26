import React from 'react';
import { motion } from 'framer-motion';
import { Users, Scale, FileCheck, ShieldAlert } from 'lucide-react';
import { GenericPageSkeleton, useSimulatedLoading } from '../components/ui/Skeleton';

export function Governance() {
    const isLoading = useSimulatedLoading();

    if (isLoading) return <GenericPageSkeleton />;

    return (
        <div className="w-full min-h-screen bg-brand-navy animate-in fade-in duration-700">
            <div className="pt-24 pb-16 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Corporate Governance</h1>
                        <p className="text-lg text-slate-400 max-w-3xl">
                            Integrity, accountability, and stringent risk management govern every decision at Nexa Energy.
                            Our board structure ensures strict compliance with the highest European regulatory standards.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-8 border-b border-brand-surface pb-4">Board of Directors</h2>
                        <div className="space-y-6">
                            <BoardMember
                                name="Dr. Elena Rostova"
                                role="Chairwoman of the Board"
                                detail="Former EU Energy Commissioner. Ph.D. in Resource Economics."
                            />
                            <BoardMember
                                name="Marcus Vane"
                                role="Chief Executive Officer"
                                detail="25+ years in international energy extraction and transition strategies."
                            />
                            <BoardMember
                                name="Sarah Jenkins, CFA"
                                role="Chair of Audit Committee"
                                detail="Focus on financial transparency and ESG taxonomy alignment."
                            />
                        </div>

                        <div className="mt-12">
                            <h2 className="text-2xl font-semibold text-white mb-8 border-b border-brand-surface pb-4">Executive Compensation</h2>
                            <div className="bg-[#050C1A] border border-brand-surface rounded p-6">
                                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                                    Executive compensation is strictly tied to verifiable ESG targets. 40% of standard executive bonuses are determined by Scope 1 & 2 carbon intensity reductions and the successful execution of our renewable energy pipeline.
                                </p>
                                <button className="text-brand-blue text-sm font-medium hover:text-white transition-colors">
                                    View Compensation Policy Document →
                                </button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-8 border-b border-brand-surface pb-4">Compliance & Policies</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <PolicyCard icon={<Scale />} title="Code of Conduct" />
                            <PolicyCard icon={<FileCheck />} title="Supplier Code" />
                            <PolicyCard icon={<ShieldAlert />} title="Whistleblower Policy" />
                            <PolicyCard icon={<Users />} title="Human Rights Policy" />
                        </div>

                        <div className="mt-12 bg-brand-surface/30 border border-brand-surface rounded p-8">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <ShieldAlert className="text-amber-500" /> Crisis Command Protocol
                            </h3>
                            <p className="text-slate-400 text-sm mb-6">
                                In the event of an operational anomaly or geopolitical crisis affecting our EMEA assets, the localized Crisis Command Protocol activates, converting this portal into a direct situational awareness hub for regulators and authorities.
                            </p>
                            <button disabled className="px-4 py-2 bg-slate-800 text-slate-500 border border-slate-700 rounded text-sm font-mono cursor-not-allowed">
                                SYSTEM NOMINAL - OVERRIDE DISABLED
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

function BoardMember({ name, role, detail }: any) {
    return (
        <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded bg-brand-surface/50 border border-brand-surface flex-shrink-0 flex items-center justify-center">
                <Users className="text-slate-500 w-6 h-6" />
            </div>
            <div>
                <h4 className="text-white font-bold">{name}</h4>
                <div className="text-brand-blue text-sm font-medium mb-1">{role}</div>
                <p className="text-slate-400 text-sm">{detail}</p>
            </div>
        </div>
    );
}

function PolicyCard({ icon, title }: any) {
    return (
        <div className="p-4 border border-brand-surface rounded hover:bg-brand-surface/50 transition-colors group cursor-pointer flex items-center gap-3">
            <div className="text-slate-400 group-hover:text-brand-blue transition-colors">
                {React.cloneElement(icon, { className: 'w-5 h-5' })}
            </div>
            <span className="text-slate-300 group-hover:text-white transition-colors text-sm font-medium">{title}</span>
        </div>
    );
}
