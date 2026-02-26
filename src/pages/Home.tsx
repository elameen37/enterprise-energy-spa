
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Shield, Activity, Zap, Globe, Building2, Waves, Factory, Atom, Cpu, Rocket } from 'lucide-react';
import { NavLink } from 'react-router';
import { GenericPageSkeleton, useSimulatedLoading } from '../components/ui/Skeleton';

export function Home() {
    const isLoading = useSimulatedLoading(800);

    if (isLoading) return <GenericPageSkeleton />;

    return (
        <div className="w-full relative animate-in fade-in duration-700">
            <HeroSection />
            <ScrollingTicker />
            <AboutPreview />
            <PartnershipsSection />
            <StrategicPillars />
            <OperationsHighlight />
        </div>
    );
}

function HeroSection() {
    return (
        <div className="relative min-h-[80vh] md:min-h-[90vh] bg-brand-navy overflow-hidden flex items-center py-20 md:py-0">
            {/* Abstract Background - WebGL/Video overlay with image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent z-10" />
                <div className="absolute inset-0 bg-brand-navy/40 z-10" />
                <div className="absolute left-1/2 top-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--color-brand-blue)_0%,_transparent_50%)] opacity-20 -translate-x-1/4 mix-blend-screen z-10" />

                {/* High quality free commercial image (Offshore wind energy) */}
                <img
                    src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=2000"
                    alt="Offshore Wind Turbines"
                    className="w-full h-full object-cover mix-blend-overlay opacity-60"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-blue text-xs font-mono mb-6">
                        <span className="w-2 h-2 rounded-full bg-brand-neon animate-pulse" />
                        LIVE: Q3 2026 EARNINGS CONFERENCE CALL IN 14:02:45
                    </div>

                    <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                        Powering the European <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-neon">
                            Energy Transition
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-10 max-w-2xl font-light">
                        Engineered for resilience. Driven by operational excellence.
                        We provide absolute transparency for investors while securing
                        the continent's sustainable future.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <NavLink to="/esg-dashboard" className="inline-flex items-center justify-center px-6 py-3 rounded bg-brand-blue text-brand-navy font-semibold hover:bg-brand-blue/90 transition-all gap-2 group">
                            Live ESG Dashboard
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </NavLink>
                        <button className="inline-flex items-center justify-center px-6 py-3 rounded bg-transparent border border-slate-600 text-white font-medium hover:bg-slate-800 hover:border-slate-400 transition-all gap-2">
                            Investor Relations Room
                        </button>
                    </div>

                    {/* Inline Metrics Card — visible on mobile & tablet only */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="lg:hidden mt-8 backdrop-blur-xl bg-brand-surface/60 border border-brand-surface/80 rounded-lg p-4 sm:p-5"
                    >
                        <h3 className="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">Real-Time Core Metrics</h3>
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            <MetricRow label="EBITDA Margin" value="34.2%" trend="+1.2%" />
                            <MetricRow label="ROCE" value="18.5%" trend="+0.8%" />
                            <MetricRow label="Green CAPEX" value="€850M" trend="+15%" />
                            <MetricRow label="Scope 1 Red." value="-22%" trend="On Target" positive />
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Floating Metrics Card — desktop only */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-80 backdrop-blur-xl bg-brand-surface/60 border border-brand-surface/80 rounded-lg p-6"
            >
                <h3 className="text-xs font-mono text-slate-400 mb-4 uppercase tracking-wider">Real-Time Core Metrics</h3>
                <div className="space-y-4">
                    <MetricRow label="EBITDA Margin" value="34.2%" trend="+1.2%" />
                    <MetricRow label="ROCE" value="18.5%" trend="+0.8%" />
                    <MetricRow label="Green CAPEX" value="€850M" trend="+15%" />
                    <MetricRow label="Scope 1 Red." value="-22%" trend="On Target" positive />
                </div>
            </motion.div>
        </div>
    );
}

function MetricRow({ label, value, trend, positive }: { label: string, value: string, trend: string, positive?: boolean }) {
    return (
        <div className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
            <span className="text-sm text-slate-300">{label}</span>
            <div className="text-right">
                <div className="text-lg font-bold text-white font-mono">{value}</div>
                <div className={`text-xs ${positive || trend.startsWith('+') ? 'text-brand-neon' : 'text-slate-400'}`}>
                    {trend}
                </div>
            </div>
        </div>
    );
}

function ScrollingTicker() {
    return (
        <div className="w-full bg-[#050C1A] border-y border-brand-surface py-2 overflow-hidden flex items-center">
            <div className="flex w-[200%] animate-[ticker_30s_linear_infinite] whitespace-nowrap text-xs font-mono">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex gap-12 pr-12 w-1/2 justify-around">
                        <span className="text-slate-400"><strong className="text-white">NXEN (FRA)</strong> €142.50 <span className="text-brand-neon">+1.24%</span></span>
                        <span className="text-slate-400"><strong className="text-white">BRENT</strong> $84.20 <span className="text-brand-neon">+0.45%</span></span>
                        <span className="text-slate-400"><strong className="text-white">TTF GAS</strong> €32.40 <span className="text-red-500">-1.12%</span></span>
                        <span className="text-slate-400"><strong className="text-white">CARBON (EUA)</strong> €68.10 <span className="text-brand-neon">+0.80%</span></span>
                        <span className="text-slate-500">• LATEST: NEXA ENERGY APPROVES €1.2B OFFSHORE WIND EXPANSION IN NORTH SEA •</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function AboutPreview() {
    return (
        <div className="py-12 sm:py-16 md:py-24 bg-brand-navy border-b border-brand-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-blue text-xs font-mono mb-6">
                            <Globe className="w-3.5 h-3.5" />
                            About Nexa Energy
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                            Engineering Europe's Energy
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-neon"> Resilience</span>
                        </h2>
                        <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-6 max-w-xl">
                            Nexa Energy is a premier European energy corporation bridging baseload security with complete decarbonization. We operate across 14 EMEA regions, deploying massive capital into offshore wind, green hydrogen, and carbon capture technology.
                        </p>
                        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                            With an A- credit rating and €500M+ annual R&D commitment, we are not just powering grids — we are engineering the continent's sustainable future while delivering consistent shareholder returns.
                        </p>
                        <NavLink
                            to="/about"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded bg-brand-surface hover:bg-brand-surface/80 border border-brand-surface/50 text-white font-medium transition-all hover:border-brand-blue/50 group"
                        >
                            Learn More About Us
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </NavLink>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="grid grid-cols-2 gap-4 sm:gap-6"
                    >
                        {[
                            { value: "14", label: "EMEA Regions", sub: "Operational footprint" },
                            { value: "€24.8B", label: "Market Cap", sub: "Frankfurt listed" },
                            { value: "8.5GW", label: "Renewables Pipeline", sub: "By 2030" },
                            { value: "€500M+", label: "Annual R&D", sub: "Innovation spend" },
                        ].map((stat, i) => (
                            <div key={i} className="bg-[#050C1A] border border-brand-surface rounded-lg p-4 sm:p-6 hover:border-brand-blue/30 transition-colors">
                                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-mono mb-1">{stat.value}</div>
                                <div className="text-sm text-brand-blue font-medium mb-0.5">{stat.label}</div>
                                <div className="text-xs text-slate-500 font-mono">{stat.sub}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

function PartnershipsSection() {
    const partners = [
        { name: "EuroGrid Alliance", desc: "Grid Infrastructure", icon: <Cpu className="w-6 h-6" /> },
        { name: "Poseidon Marine", desc: "Offshore Engineering", icon: <Waves className="w-6 h-6" /> },
        { name: "Helios Renewables", desc: "Solar & Wind", icon: <Atom className="w-6 h-6" /> },
        { name: "Titan Industries", desc: "Heavy Manufacturing", icon: <Factory className="w-6 h-6" /> },
        { name: "Meridian Capital", desc: "ESG Investment", icon: <Building2 className="w-6 h-6" /> },
        { name: "NovaTech Labs", desc: "R&D Innovation", icon: <Rocket className="w-6 h-6" /> },
    ];

    return (
        <div className="py-12 sm:py-16 md:py-20 bg-[#050C1A] border-y border-brand-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 sm:mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-surface bg-brand-surface/30 text-slate-400 text-xs font-mono mb-4">
                        Strategic Alliances
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Trusted Partnerships</h2>
                    <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
                        Collaborating with industry leaders across the energy value chain to accelerate the transition.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                    {partners.map((partner, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08, duration: 0.5 }}
                            className="group relative bg-brand-navy/60 backdrop-blur-sm border border-brand-surface rounded-lg p-4 sm:p-5 flex flex-col items-center text-center hover:border-brand-blue/40 hover:bg-brand-surface/30 transition-all duration-300 cursor-pointer"
                        >
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-brand-surface/50 border border-brand-surface flex items-center justify-center mb-3 text-slate-400 group-hover:text-brand-blue group-hover:border-brand-blue/30 group-hover:scale-110 transition-all duration-300">
                                {partner.icon}
                            </div>
                            <div className="text-sm font-semibold text-white group-hover:text-brand-blue transition-colors">{partner.name}</div>
                            <div className="text-xs text-slate-500 font-mono mt-1">{partner.desc}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function StrategicPillars() {
    const pillars = [
        {
            icon: <Zap className="w-6 h-6 text-brand-blue" />,
            title: "Energy Security",
            desc: "Ensuring stable, uninterrupted baseload power across 14 European interconnectors with 99.999% uptime."
        },
        {
            icon: <Leaf className="w-6 h-6 text-brand-neon" />,
            title: "Transition Pathway",
            desc: "Aggressive reallocation of €4B CAPEX towards offshore wind, green hydrogen, and advanced biofuels by 2030."
        },
        {
            icon: <Shield className="w-6 h-6 text-brand-blue" />,
            title: "Governance & Risk",
            desc: "Board-level oversight enforcing strict compliance with EU Taxonomy, CSRD, and local operational regulations."
        },
        {
            icon: <Activity className="w-6 h-6 text-brand-blue" />,
            title: "Financial Resilience",
            desc: "Maintaining an A- credit rating, delivering consistent shareholder returns through disciplined capital allocation."
        }
    ];

    return (
        <div className="py-12 sm:py-16 md:py-24 bg-brand-navy">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Strategic Framework</h2>
                    <p className="text-slate-400 max-w-2xl text-lg">
                        Our multi-decade strategy balances the immediate need for European energy security with the imperative of decarbonization.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-6 rounded-lg bg-brand-surface/30 border border-brand-surface hover:border-brand-blue/30 transition-colors group cursor-pointer"
                        >
                            <div className="w-12 h-12 rounded bg-brand-navy flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-brand-surface group-hover:border-brand-blue/30">
                                {pillar.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">{pillar.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {pillar.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function OperationsHighlight() {
    return (
        <div className="py-12 sm:py-16 md:py-24 bg-[#050C1A] border-y border-brand-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

                    <div>
                        <div className="text-brand-blue text-sm font-semibold tracking-wider uppercase mb-3">Asset Portfolio</div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">Optimized infrastructure across the EMEA region.</h2>
                        <p className="text-slate-300 text-lg mb-8 leading-relaxed font-light">
                            Nexa Energy operates a highly integrated portfolio. From low-carbon deepwater extraction in the North Atlantic to state-of-the-art refining complexes in Central Europe, every asset is continuously optimized via our centralized digital twin environment.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {[
                                "1.2M boe/d total production capacity",
                                "8.5GW renewable energy pipeline",
                                "Tier-1 operator status in 3 major European basins"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-neon flex-shrink-0" />
                                    <span className="text-slate-400">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="text-white font-medium border-b border-brand-blue pb-1 hover:text-brand-blue transition-colors flex items-center gap-2">
                            View Interactive Operations Map <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="relative aspect-square lg:aspect-video bg-brand-surface/50 rounded-lg border border-brand-surface overflow-hidden group">
                        {/* Minimalist Map Placeholder */}
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9IiMwQjFBMzAiLz4KPHBhdGggZD0iTTAgMGg0MHYxfE0wIDB2NDBIMSIgZmlsbD0icmdiYSgyMCwgMzAsIDU4LCAwLjIpIiAvPgo8L3N2Zz4=')] opacity-50" />

                        <div className="absolute inset-0 flex items-center justify-center flex-col">
                            <div className="w-16 h-16 rounded-full bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center mb-4 relative z-10 group-hover:scale-110 transition-transform cursor-pointer">
                                <div className="w-8 h-8 rounded-full bg-brand-blue animate-ping absolute opacity-20" />
                                <Zap className="w-8 h-8 text-brand-blue" />
                            </div>
                            <span className="text-sm font-mono text-slate-400 bg-brand-navy/80 px-3 py-1 rounded relative z-10 backdrop-blur-sm border border-brand-surface">Live Asset Map Render</span>
                        </div>

                        {/* Glowing nodes */}
                        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-brand-neon rounded-full shadow-[0_0_15px_rgba(57,255,20,0.5)]" />
                        <div className="absolute top-1/2 left-2/3 w-3 h-3 bg-brand-neon rounded-full shadow-[0_0_15px_rgba(57,255,20,0.5)]" />
                        <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-brand-blue rounded-full shadow-[0_0_15px_rgba(0,229,255,0.5)]" />
                    </div>

                </div>
            </div>
        </div>
    );
}
