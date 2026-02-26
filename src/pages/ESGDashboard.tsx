
import { motion } from 'framer-motion';
import { Download, Filter, Droplet, Wind, Zap, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { GenericPageSkeleton, useSimulatedLoading } from '../components/ui/Skeleton';

export function ESGDashboard() {
    const isLoading = useSimulatedLoading();

    if (isLoading) return <GenericPageSkeleton />;

    return (
        <div className="w-full relative bg-[#050C1A] min-h-screen animate-in fade-in duration-700">
            <DashboardHeader />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    <div className="lg:col-span-2">
                        <EmissionsChart />
                    </div>
                    <div className="lg:col-span-1">
                        <ComplianceStatus />
                    </div>
                </div>
                <AssetLevelGrid />
            </div>
        </div>
    );
}

function DashboardHeader() {
    return (
        <div className="bg-brand-navy border-b border-brand-surface pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-brand-neon/30 bg-brand-neon/10 text-brand-neon text-xs font-mono mb-4">
                            <span className="w-2 h-2 rounded-full bg-brand-neon animate-pulse" />
                            AUDIT TRAIL ACTIVE • LAST SYNC: JUST NOW
                        </div>
                        <h1 className="text-4xl font-bold text-white mb-2">Live ESG Reporting Engine</h1>
                        <p className="text-slate-400 max-w-2xl">
                            Fully transparent, real-time telemetry from EMEA operations.
                            Data ingested via IoT layer, strictly adhering to EU Corporate Sustainability Reporting Directive (CSRD) frameworks.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="px-4 py-2 bg-brand-surface hover:bg-brand-surface/80 border border-brand-surface transition-colors rounded text-sm text-white flex items-center gap-2">
                            <Filter className="w-4 h-4" /> Edit Parameters
                        </button>
                        <button className="px-4 py-2 bg-brand-blue text-brand-navy hover:bg-brand-blue/90 transition-colors rounded text-sm font-semibold flex items-center gap-2 group">
                            <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" /> Export TCFD PDF
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function EmissionsChart() {
    return (
        <div className="bg-brand-navy border border-brand-surface rounded-lg p-6 h-full flex flex-col">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h3 className="text-lg font-semibold text-white">Carbon Intensity Snapshot</h3>
                    <p className="text-xs text-slate-500 font-mono">Scope 1 & 2 • kg CO2e / boe</p>
                </div>
                <select className="bg-brand-surface/50 border border-brand-surface text-sm text-white rounded px-3 py-1.5 focus:outline-none focus:border-brand-blue">
                    <option>YTD 2026</option>
                    <option>FY 2025</option>
                    <option>FY 2024</option>
                </select>
            </div>

            <div className="flex-grow flex items-end justify-between gap-2 md:gap-4 mt-auto border-b border-brand-surface pb-2">
                {/* Fake chart data representing reduction over months */}
                {[85, 82, 79, 81, 75, 72, 68, 65, 62, 58, 55, 50].map((val, i) => (
                    <div key={i} className="flex flex-col items-center w-full group">
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${val}%` }}
                            transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
                            className="w-full bg-brand-surface group-hover:bg-brand-blue/50 rounded-t relative transition-colors"
                        >
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black px-2 py-1 text-xs text-white rounded font-mono transition-opacity">
                                {val}kg
                            </div>
                        </motion.div>
                        <span className="text-[10px] text-slate-500 mt-2">
                            {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][i]}
                        </span>
                    </div>
                ))}
            </div>
            <div className="flex justify-between mt-4 text-xs font-mono text-slate-400">
                <span>Target: 45kg CO2e/boe by 2030</span>
                <span className="text-brand-neon">Current: 50.2kg</span>
            </div>
        </div>
    );
}

function ComplianceStatus() {
    return (
        <div className="bg-brand-navy border border-brand-surface rounded-lg p-6 h-full">
            <h3 className="text-lg font-semibold text-white mb-6">Regulatory Compliance</h3>

            <div className="space-y-6">
                <ComplianceItem
                    title="EU Taxonomy Alignment"
                    value="42%"
                    status="Ahead of Schedule"
                    icon={<CheckCircle2 className="w-5 h-5 text-brand-neon" />}
                />
                <ComplianceItem
                    title="Methane Flaring"
                    value="0.12%"
                    status="Zero-Routine Flaring Maintained"
                    icon={<CheckCircle2 className="w-5 h-5 text-brand-neon" />}
                />
                <ComplianceItem
                    title="Water Intensity"
                    value="Pending QA"
                    status="Sensor Calibration (North Sea)"
                    icon={<AlertTriangle className="w-5 h-5 text-amber-500" />}
                />
            </div>

            <div className="mt-8 pt-6 border-t border-brand-surface">
                <div className="text-xs text-slate-500 font-mono mb-2">BLOCKCHAIN LEDGER HASH</div>
                <div className="text-[10px] text-slate-400 font-mono break-all bg-[#050C1A] p-2 rounded border border-brand-surface">
                    0x7a3f8c2b1e9d4a5f6b8c7d9e2a1b4c3d5e8f7a6b5c4d3e2f1a0b9c8d7e6f5a4b
                </div>
            </div>
        </div>
    );
}

function ComplianceItem({ title, value, status, icon }: any) {
    return (
        <div className="flex items-start gap-4">
            <div className="mt-0.5">{icon}</div>
            <div>
                <div className="text-sm font-medium text-white">{title}</div>
                <div className="text-xl font-bold font-mono text-slate-200 my-0.5">{value}</div>
                <div className="text-xs text-slate-400">{status}</div>
            </div>
        </div>
    );
}

function AssetLevelGrid() {
    const assets = [
        { name: "Alpha-1 Deepwater Platform", type: "Upstream", status: "Nominal", power: "Renewable Shore-Link", icon: <Droplet className="w-4 h-4" /> },
        { name: "Euro-Transit Pipeline Segment B", type: "Midstream", status: "Nominal", power: "Grid", icon: <Zap className="w-4 h-4" /> },
        { name: "Bavaria Synthetic Fuels Refinery", type: "Downstream", status: "Maintenance", power: "Grid / Local Solar", icon: <AlertTriangle className="w-4 h-4" /> },
        { name: "North Sea Wind Array V", type: "Renewables", status: "Nominal", power: "Generating (1.2GW)", icon: <Wind className="w-4 h-4 text-brand-neon" /> },
    ];

    return (
        <div className="bg-brand-navy border border-brand-surface rounded-lg overflow-hidden">
            <div className="p-6 border-b border-brand-surface bg-brand-surface/20 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-white">Live Asset Telemetry</h3>
                <span className="text-xs text-brand-neon font-mono">4 ACTIVE SENSORS</span>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-[#050C1A] border-b border-brand-surface text-xs font-mono text-slate-400 uppercase tracking-wider">
                            <th className="px-6 py-4 font-medium">Asset ID</th>
                            <th className="px-6 py-4 font-medium">Segment</th>
                            <th className="px-6 py-4 font-medium">Power Source</th>
                            <th className="px-6 py-4 font-medium">Live Status</th>
                            <th className="px-6 py-4 font-medium">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-surface">
                        {assets.map((asset, i) => (
                            <tr key={i} className="hover:bg-brand-surface/20 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded bg-brand-surface flex items-center justify-center text-slate-300">
                                            {asset.icon}
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-white">{asset.name}</div>
                                            <div className="text-xs text-slate-500 font-mono">ID: NX-{1042 + i}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-brand-surface text-slate-300">
                                        {asset.type}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-300">{asset.power}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2 text-sm text-slate-300">
                                        <span className={`w-2 h-2 rounded-full ${asset.status === 'Nominal' ? 'bg-brand-neon' : 'bg-amber-500 animate-pulse'}`} />
                                        {asset.status}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="text-xs font-medium text-brand-blue hover:text-white transition-colors">
                                        View Data Logs
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
