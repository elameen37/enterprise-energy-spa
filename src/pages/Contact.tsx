import { motion } from 'framer-motion';
import { Phone, Mail, Building } from 'lucide-react';
import { GenericPageSkeleton, useSimulatedLoading } from '../components/ui/Skeleton';

export function Contact() {
    const isLoading = useSimulatedLoading();

    if (isLoading) return <GenericPageSkeleton />;

    return (
        <div className="w-full min-h-screen bg-brand-navy animate-in fade-in duration-700">
            <div className="relative pt-32 pb-24 border-b border-brand-surface overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-brand-navy/80 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
                        alt="Corporate Office"
                        className="w-full h-full object-cover mix-blend-overlay opacity-50"
                    />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
                        <p className="text-xl text-slate-300 max-w-2xl font-light">
                            Engage with our corporate affairs, investor relations, or media teams. We maintain strict SLAs for all regulatory and strategic inquiries.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-8">Direct Inquiries</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-2">First Name</label>
                                    <input type="text" className="w-full bg-[#050C1A] border border-brand-surface rounded p-3 text-white focus:outline-none focus:border-brand-blue transition-colors" placeholder="Jane" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-2">Last Name</label>
                                    <input type="text" className="w-full bg-[#050C1A] border border-brand-surface rounded p-3 text-white focus:outline-none focus:border-brand-blue transition-colors" placeholder="Doe" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Corporate Email</label>
                                <input type="email" className="w-full bg-[#050C1A] border border-brand-surface rounded p-3 text-white focus:outline-none focus:border-brand-blue transition-colors" placeholder="jane.doe@institution.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Inquiry Type</label>
                                <select className="w-full bg-[#050C1A] border border-brand-surface rounded p-3 text-white focus:outline-none focus:border-brand-blue transition-colors appearance-none">
                                    <option>Investor Relations</option>
                                    <option>Media & Press</option>
                                    <option>Regulatory Affairs</option>
                                    <option>General Support</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                                <textarea rows={4} className="w-full bg-[#050C1A] border border-brand-surface rounded p-3 text-white focus:outline-none focus:border-brand-blue transition-colors" placeholder="State your inquiry here..." />
                            </div>
                            <button type="button" className="w-full py-4 bg-brand-blue hover:bg-brand-blue/90 text-brand-navy font-bold rounded transition-colors">
                                Submit Inquiry Securely
                            </button>
                        </form>
                    </div>

                    <div className="space-y-12">
                        <div>
                            <h2 className="text-2xl font-semibold text-white mb-8">Global Headquarters</h2>
                            <div className="bg-[#050C1A] border border-brand-surface rounded-lg p-6 space-y-4">
                                <div className="flex items-start gap-4">
                                    <Building className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                                    <div>
                                        <div className="text-white font-medium mb-1">Nexa Energy SE</div>
                                        <div className="text-slate-400 text-sm">OpernTurm, Bockenheimer Landstraße 2-4<br />60306 Frankfurt am Main, Germany</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 pt-4 border-t border-brand-surface/50">
                                    <Phone className="w-5 h-5 text-brand-blue flex-shrink-0" />
                                    <div className="text-slate-300 text-sm font-mono">+49 69 1234 5678</div>
                                </div>
                                <div className="flex items-center gap-4 pt-4 border-t border-brand-surface/50">
                                    <Mail className="w-5 h-5 text-brand-blue flex-shrink-0" />
                                    <div className="text-slate-300 text-sm font-mono">ir@nexa-energy.com</div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg overflow-hidden border border-brand-surface h-[300px] relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82121.23395932594!2d8.608770732899487!3d50.121307681434316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd096f477096c5%3A0x422435029b0c600!2sFrankfurt%2C%20Germany!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Nexa Energy HQ Location"
                                className="absolute inset-0 grayscale contrast-125 opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
