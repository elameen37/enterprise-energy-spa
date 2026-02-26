import React from 'react';

export function Skeleton({ className }: { className?: string }) {
    return (
        <div className={`animate-pulse bg-brand-surface border border-brand-surface/50 rounded overflow-hidden relative ${className}`}>
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>
    );
}

export function SkeletonText({ lines = 3, className }: { lines?: number, className?: string }) {
    return (
        <div className={`space-y-3 ${className}`}>
            {[...Array(lines)].map((_, i) => (
                <Skeleton
                    key={i}
                    className={`h-4 ${i === lines - 1 ? 'w-2/3' : 'w-full'}`}
                />
            ))}
        </div>
    );
}

export function GenericPageSkeleton() {
    return (
        <div className="w-full min-h-screen bg-brand-navy pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                {/* Hero Skeleton */}
                <div className="space-y-6 max-w-3xl">
                    <Skeleton className="w-32 h-8 rounded-full" />
                    <Skeleton className="w-full h-16" />
                    <Skeleton className="w-4/5 h-16" />
                    <SkeletonText lines={3} className="pt-4 max-w-2xl" />
                </div>

                {/* Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="bg-[#050C1A] border border-brand-surface rounded-lg p-6 space-y-4">
                            <Skeleton className="w-12 h-12 rounded" />
                            <Skeleton className="w-3/4 h-6" />
                            <SkeletonText lines={2} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Hook to simulate loading
export function useSimulatedLoading(delay = 1200) {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return isLoading;
}
