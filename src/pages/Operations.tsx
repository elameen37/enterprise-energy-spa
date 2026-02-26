
import { motion } from 'framer-motion';
import { Factory, Droplets, Zap, ArrowRight, ShieldCheck, Target } from 'lucide-react';
import { GenericPageSkeleton, useSimulatedLoading } from '../components/ui/Skeleton';

export function Operations() {
    const isLoading = useSimulatedLoading();

    if (isLoading) return <GenericPageSkeleton />;

    return (
        <div className="w-full relative min-h-screen bg-brand-navy animate-in fade-in duration-700">
            <div className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden border-b border-brand-surface">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#050C1A] z-10" />
                    <div className="absolute inset-0 bg-brand-navy/80 z-20" />
                    <img
                        src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4d?auto=format&fit=crop&q=80&w=2000"
                        alt="Industrial Facility"
                        className="w-full h-full object-cover mix-blend-overlay opacity-50 relative z-0"
                    />
                </div>
                <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] -translate-y-1/2 z-20" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-brand-blue/30 bg-brand-blue/10 text-brand-blue text-xs font-mono mb-4 uppercase tracking-wider">
                            Asset Strategy Map
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Operations & Infrastructure</h1>
                        <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl font-light">
                            Nexa Energy manages a highly synchronized portfolio consisting of low-capex legacy hydrocarbon assets and high-growth renewable energy hubs. All optimized via centralized automated command.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <OperationCard
                        title="Upstream Extraction"
                        subtitle="North Sea & Atlantic Basin"
                        icon={<Droplets className="w-8 h-8 text-brand-blue" />}
                        stats={[
                            { label: "Daily Production", value: "850k boe/d" },
                            { label: "Lifting Cost", value: "$12.40/boe" },
                            { label: "Methane Intensity", value: "0.15%" }
                        ]}
                    />

                    <OperationCard
                        title="Midstream & Refining"
                        subtitle="Central Europe Logistics Core"
                        icon={<Factory className="w-8 h-8 text-brand-blue" />}
                        stats={[
                            { label: "Refining Setup", value: "1.2M bbl/d" },
                            { label: "Pipeline Network", value: "4,500 km" },
                            { label: "Biofuel Blend", value: "18%" }
                        ]}
                    />

                    <OperationCard
                        title="Renewable Power"
                        subtitle="Offshore Wind & Green H2"
                        icon={<Zap className="w-8 h-8 text-brand-neon" />}
                        stats={[
                            { label: "Installed Capacity", value: "4.2 GW" },
                            { label: "Pipeline '24-'30", value: "12.0 GW" },
                            { label: "Green CAPEX Share", value: "65%" }
                        ]}
                    />

                </div>

                <div className="mt-20">
                    <div className="bg-[#050C1A] border border-brand-surface rounded-lg p-5 sm:p-8 relative overflow-hidden group">
                        <div className="absolute right-0 top-0 w-64 h-64 bg-brand-neon/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                            <div className="max-w-xl">
                                <h3 className="text-2xl font-bold text-white mb-4">Centralized Command Center (C3)</h3>
                                <p className="text-slate-400 mb-6">
                                    Every asset is mapped into our Digital Twin environment, allowing predictive maintenance via machine learning and instantaneous emergency shutdown commands across perfectly secure air-gapped networks.
                                </p>
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
                                    <div className="flex items-center gap-2 text-sm text-brand-neon font-mono">
                                        <ShieldCheck className="w-4 h-4" /> ISO 27001 Certified
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-brand-blue font-mono">
                                        <Target className="w-4 h-4" /> 0.0ms Latency Tolerances
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button className="px-6 py-3 bg-brand-blue hover:bg-brand-blue/90 text-brand-navy font-semibold rounded flex items-center gap-2 transition-colors">
                                    Access C3 Portal <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function OperationCard({ title, subtitle, icon, stats }: any) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-[#050C1A] border border-brand-surface rounded-lg p-8 hover:border-brand-blue/50 transition-colors"
        >
            <div className="w-16 h-16 rounded bg-brand-surface/50 border border-brand-surface flex items-center justify-center mb-6">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
            <p className="text-brand-blue text-sm mb-8 font-medium">{subtitle}</p>

            <div className="space-y-4">
                {stats.map((s: any, i: number) => (
                    <div key={i} className="flex justify-between items-end border-b border-brand-surface pb-2">
                        <span className="text-sm text-slate-400">{s.label}</span>
                        <span className="text-white font-mono font-medium">{s.value}</span>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
