import React from 'react';
import { Outlet } from 'react-router';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function RootLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-brand-navy text-slate-200 font-inter selection:bg-brand-blue/30 selection:text-white">
            <Navbar />
            <main className="flex-grow pt-20">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
