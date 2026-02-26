import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, PieChart, FileText, Download } from 'lucide-react';
import { GenericPageSkeleton, useSimulatedLoading } from '../components/ui/Skeleton';

export function Investors() {
    const isLoading = useSimulatedLoading();

    if (isLoading) return <GenericPageSkeleton />;

    return (
        <div className="w-full min-h-screen bg-brand-navy animate-in fade-in duration-700">
            <div className="pt-32 pb-24 bg-[#050C1A] border-b border-brand-surface relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#050C1A] z-10" />
                    <div className="absolute inset-0 bg-brand-navy/70 z-20" />
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
                        alt="Corporate Buildings"
                        className="w-full h-full object-cover mix-blend-luminosity opacity-40 relative z-0"
                    />
                </div>
                <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[100px] z-20" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Investor Relations</h1>
                        <p className="text-lg text-slate-400 max-w-2xl">
                            Transparent, real-time access to financial performance, capital allocation strategy, and corporate filings.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
                    <StatCard title="Market Cap" value="€24.8B" trend="+2.4%" />
                    <StatCard title="Dividend Yield" value="6.2%" trend="Stable" />
                    <StatCard title="YTD Return" value="14.5%" trend="+14.5%" />
                    <StatCard title="Free Cash Flow" value="€3.2B" trend="+12%" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                            <FileText className="text-brand-blue" /> Latest Filings & Reports
                        </h2>
                        <div className="space-y-4">
                            <ReportRow title="Q3 2026 Earnings Presentation" date="Oct 15, 2026" type="PDF (4.2MB)" />
                            <ReportRow title="Q3 2026 Press Release" date="Oct 15, 2026" type="PDF (1.1MB)" />
                            <ReportRow title="2025 Annual Sustainability Report" date="Mar 01, 2026" type="Interactive / PDF" />
                            <ReportRow title="2025 Form 20-F" date="Feb 28, 2026" type="PDF (8.5MB)" />
                        </div>
                        <button className="mt-6 text-brand-blue hover:text-white transition-colors text-sm font-medium">
                            View All Filings →
                        </button>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                            <TrendingUp className="text-brand-blue" /> Capital Allocation Strategy
                        </h2>
                        <div className="bg-[#050C1A] border border-brand-surface rounded-lg p-6">
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-sm text-slate-300 mb-2">
                                        <span>Base Dividend Maintenance</span>
                                        <span className="font-mono">35%</span>
                                    </div>
                                    <div className="w-full bg-brand-surface rounded-full h-2">
                                        <div className="bg-brand-blue h-2 rounded-full" style={{ width: '35%' }} />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm text-slate-300 mb-2">
                                        <span>Green Energy CAPEX</span>
                                        <span className="font-mono">40%</span>
                                    </div>
                                    <div className="w-full bg-brand-surface rounded-full h-2">
                                        <div className="bg-brand-neon h-2 rounded-full" style={{ width: '40%' }} />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm text-slate-300 mb-2">
                                        <span>Share Buybacks & Debt Reduction</span>
                                        <span className="font-mono">25%</span>
                                    </div>
                                    <div className="w-full bg-brand-surface rounded-full h-2">
                                        <div className="bg-slate-500 h-2 rounded-full" style={{ width: '25%' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatCard({ title, value, trend }: any) {
    const isPositive = trend.includes('+');
    return (
        <div className="bg-[#050C1A] border border-brand-surface rounded-lg p-6 hover:border-brand-blue/30 transition-colors">
            <div className="text-sm text-slate-400 mb-2">{title}</div>
            <div className="text-3xl font-bold text-white mb-2 font-mono">{value}</div>
            <div className={`text-sm font-mono ${isPositive ? 'text-brand-neon' : 'text-slate-400'}`}>
                {trend}
            </div>
        </div>
    );
}

function ReportRow({ title, date, type }: any) {
    return (
        <div className="flex items-center justify-between p-4 bg-[#050C1A] border border-brand-surface rounded-lg hover:bg-brand-surface/30 transition-colors group cursor-pointer">
            <div>
                <div className="text-white font-medium group-hover:text-brand-blue transition-colors">{title}</div>
                <div className="text-xs text-slate-500 font-mono mt-1">{date} • {type}</div>
            </div>
            <Download className="w-5 h-5 text-slate-400 group-hover:text-brand-blue" />
        </div>
    );
}
