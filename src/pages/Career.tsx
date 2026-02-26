
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, GraduationCap, Heart, MapPin } from 'lucide-react';
import { GenericPageSkeleton, useSimulatedLoading } from '../components/ui/Skeleton';

export function Career() {
    const isLoading = useSimulatedLoading();
    const jobs = [
        { title: "Senior Digital Twin Architect", loc: "Frankfurt, HQ", type: "Full-Time" },
        { title: "Offshore Wind Engineer", loc: "North Sea Array", type: "Rotational" },
        { title: "ESG Compliance Analyst", loc: "Paris, FR", type: "Full-Time" },
        { title: "Predictive Maintenance Data Scientist", loc: "Remote (EMEA)", type: "Full-Time" }
    ];

    if (isLoading) return <GenericPageSkeleton />;

    return (
        <div className="w-full min-h-screen bg-brand-navy animate-in fade-in duration-700">
            <div className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 border-b border-brand-surface overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-brand-navy/80 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
                        alt="Team Working"
                        className="w-full h-full object-cover mix-blend-overlay opacity-60"
                    />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-brand-blue/30 bg-brand-blue/10 text-brand-blue text-xs font-mono mb-4 uppercase tracking-wider">
                            Careers at Nexa
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Engineer the Future</h1>
                        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-light">
                            Join the minds solving Europe's most complex energy challenges. Expect rigorous standards, continuous innovation, and a transformative career trajectory.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    <div className="lg:col-span-1 space-y-8">
                        <h3 className="text-2xl font-bold text-white mb-6">Why Join Us?</h3>
                        <div className="flex gap-4">
                            <Heart className="w-6 h-6 text-brand-neon flex-shrink-0" />
                            <div>
                                <h4 className="text-white font-medium mb-1">Comprehensive Benefits</h4>
                                <p className="text-slate-400 text-sm">Top-tier European healthcare, equity grants, and performance-based energy bonuses.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <GraduationCap className="w-6 h-6 text-brand-blue flex-shrink-0" />
                            <div>
                                <h4 className="text-white font-medium mb-1">Continuous Development</h4>
                                <p className="text-slate-400 text-sm">Mandatory paid upskilling in AI, ESG methodologies, and advanced engineering.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Globe className="w-6 h-6 text-brand-blue flex-shrink-0" />
                            <div>
                                <h4 className="text-white font-medium mb-1">Global Mobility</h4>
                                <p className="text-slate-400 text-sm">Fluid placement opportunities across 14 operational regions.</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <div className="bg-[#050C1A] border border-brand-surface rounded-lg overflow-hidden">
                            <div className="p-6 border-b border-brand-surface flex justify-between items-center bg-brand-surface/30">
                                <h3 className="text-lg font-bold text-white">Open Roles</h3>
                                <span className="text-brand-blue font-mono text-sm">42 Openings</span>
                            </div>
                            <div className="divide-y divide-brand-surface">
                                {jobs.map((job, idx) => (
                                    <div key={idx} className="p-6 hover:bg-brand-surface/20 transition-colors group cursor-pointer flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                                        <div>
                                            <h4 className="text-white font-semibold text-lg group-hover:text-brand-blue transition-colors">{job.title}</h4>
                                            <div className="flex gap-4 mt-2 text-sm text-slate-400 font-mono">
                                                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {job.loc}</span>
                                                <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" /> {job.type}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <button className="text-brand-neon text-sm font-medium hover:text-white transition-colors flex items-center gap-2">
                                                Apply <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-6 text-center">
                            <button className="px-6 py-3 border border-brand-surface rounded text-slate-300 hover:text-white hover:bg-brand-surface transition-colors font-medium">
                                View Full ATS Portal
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

function Globe({ className }: any) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M2 12h20" /></svg>
}
