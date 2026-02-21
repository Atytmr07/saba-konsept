"use client";

import { useRef, useState, useEffect } from "react";
import { brandIdentity } from "@/data/config";
import { AnimatedSection } from "@/components/AnimatedSection";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";

// Placeholder video data (using un-copyrighted vertical videos or generic cinematic reels)
const videoData = [
    {
        id: "v5",
        src: "/videos/video5.mp4",
        title: "Modern Oturma Grupları",
        subtitle: "Konforun Zirvesi"
    },
    {
        id: "v6",
        src: "/videos/video6.mp4",
        title: "Ahşap Detaylar",
        subtitle: "Doğadan İlham Alındı"
    },
    {
        id: "v7",
        src: "/videos/video7.mp4",
        title: "Premium Yatak Odaları",
        subtitle: "Huzurlu Uyku"
    },
    {
        id: "v8",
        src: "/videos/video8.mp4",
        title: "Tasarım Aydınlatmalar",
        subtitle: "Mekanın Ruhu"
    },
    {
        id: "v13",
        src: "/videos/video13.mp4",
        title: "Zarif Dokunuşlar",
        subtitle: "Detaydaki Estetik"
    }
];

export function VideoShowcase({ onVideoClick }: { onVideoClick?: (url: string) => void }) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = window.innerWidth * 0.4;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 10);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            // Initial check
            handleScroll();
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <section className="py-24 bg-stone-900 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 mb-12">
                <AnimatedSection>
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6 text-stone-50">
                        <div>
                            <span className="text-brand-orange tracking-[0.15em] text-xs font-semibold uppercase mb-4 block">Hareketli Vitrin</span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif max-w-2xl">Koleksiyonlarımızı <br />Yakından Keşfedin</h2>
                        </div>
                        <p className="text-stone-400 max-w-sm text-sm">
                            Dokuları, renkleri ve detayları en doğal haliyle görün. Saba Konsept kalitesini hissetmek için kaydırın.
                        </p>
                    </div>
                </AnimatedSection>
            </div>

            {/* The Horizontal Scroll Carousel */}
            <div className="relative group/vitrin w-full">
                {/* Navigation Arrows - Desktop Only */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-stone-900 to-transparent z-20 pointer-events-none hidden md:block opacity-0 group-hover/vitrin:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-stone-900 to-transparent z-20 pointer-events-none hidden md:block opacity-0 group-hover/vitrin:opacity-100 transition-opacity duration-500" />

                <button
                    onClick={() => scroll('left')}
                    className={`absolute left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-stone-700 bg-stone-900/50 backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 hover:bg-brand-orange hover:border-brand-orange hidden md:flex ${!canScrollLeft ? 'opacity-0 pointer-events-none' : 'opacity-0 group-hover/vitrin:opacity-100'}`}
                    aria-label="Scroll Left"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                    onClick={() => scroll('right')}
                    className={`absolute right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-stone-700 bg-stone-900/50 backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 hover:bg-brand-orange hover:border-brand-orange hidden md:flex ${!canScrollRight ? 'opacity-0 pointer-events-none' : 'opacity-0 group-hover/vitrin:opacity-100'}`}
                    aria-label="Scroll Right"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 md:gap-6 px-6 lg:px-12 pb-12 pt-4"
                >
                    {videoData.map((video) => (
                        <div
                            key={video.id}
                            className="flex-none w-[85vw] sm:w-[50vw] md:w-[35vw] lg:w-[22vw] snap-center"
                        >
                            <div
                                className="group relative aspect-[9/16] w-full bg-stone-800 rounded-2xl overflow-hidden shadow-2xl shadow-black/20 transform transition-transform duration-500 hover:scale-[1.02] cursor-pointer"
                                onClick={() => onVideoClick?.(video.src)}
                            >
                                <video
                                    className="absolute inset-0 w-full h-full object-cover"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="metadata"
                                    disablePictureInPicture
                                >
                                    <source src={video.src} type="video/mp4" />
                                </video>

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                                {/* Text Content */}
                                <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-2">{video.subtitle}</p>
                                    <h3 className="text-stone-50 text-xl font-serif">{video.title}</h3>
                                    <div className="mt-4 flex items-center gap-2 text-stone-300 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                                        <MessageCircle className="w-4 h-4" />
                                        <span>Büyütmek İçin Tıklayın</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
