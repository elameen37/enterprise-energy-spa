import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield, Target, Award } from 'lucide-react';
import { GenericPageSkeleton, useSimulatedLoading } from '../components/ui/Skeleton';

export function About() {
    const isLoading = useSimulatedLoading();

    if (isLoading) return <GenericPageSkeleton />;

    return (
        <div className="w-full min-h-screen bg-brand-navy animate-in fade-in duration-700">
            {/* Hero Section */}
            <div className="relative pt-32 pb-24 border-b border-brand-surface overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-brand-navy/80 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
                        alt="Global Network"
                        className="w-full h-full object-cover mix-blend-overlay opacity-60"
                    />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Nexa Energy</h1>
                        <p className="text-xl text-slate-300 max-w-2xl font-light">
                            We are a premier European energy corporation dedicated to bridging the gap between historical baseload security and the imperative of complete decarbonization.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-6">
                            Nexa Energy was established with a singular focus: to engineer the resilience required for Europe's economic stability while rigorously adopting sustainable methodologies. We do not just extract and refine; we innovate, capturing emissions and reallocating massive capital into offshore wind, hydrogen arrays, and carbon capture grids.
                        </p>
                        <div className="grid grid-cols-2 gap-6 mt-12">
                            <ValueProp icon={<Globe className="w-6 h-6 text-brand-blue" />} title="Global Reach" desc="Operations across 14 EMEA regions." />
                            <ValueProp icon={<Shield className="w-6 h-6 text-brand-blue" />} title="Ironclad Security" desc="Securing the European power grid." />
                            <ValueProp icon={<Target className="w-6 h-6 text-brand-neon" />} title="Net Zero 2040" desc="Aggressive ESG and transition targets." />
                            <ValueProp icon={<Award className="w-6 h-6 text-brand-blue" />} title="Operational Excellence" desc="Award-winning safety and engineering." />
                        </div>
                    </div>

                    <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-brand-surface pb-6">
                        <div className="absolute inset-0 bg-brand-navy/60 z-10" />
                        <img
                            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1000"
                            alt="Corporate Board"
                            className="w-full h-full object-cover mix-blend-luminosity opacity-80"
                        />
                        <div className="absolute bottom-6 left-6 right-6 z-20 bg-[#050C1A]/90 backdrop-blur border border-brand-surface p-6 rounded-lg">
                            <div className="text-2xl font-bold text-white mb-1">€500M+</div>
                            <div className="text-sm text-brand-blue font-mono">Annual R&D Commitment</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ValueProp({ icon, title, desc }: any) {
    return (
        <div>
            <div className="w-12 h-12 rounded bg-brand-surface flex items-center justify-center mb-4">
                {icon}
            </div>
            <h4 className="text-white font-semibold mb-2">{title}</h4>
            <p className="text-slate-400 text-sm">{desc}</p>
        </div>
    )
}
