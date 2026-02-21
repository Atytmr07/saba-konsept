"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { brandIdentity } from "@/data/config";
import { AnimatedSection } from "@/components/AnimatedSection";

const heroImages = [
    {
        id: "f1",
        src: "/images/foto1.jpeg",
        alt: "Antalya Kepez Masadağı Saba Konsept Mobilya Mağazası Dış Görünüm"
    },
    {
        id: "v1",
        src: "/images/foto1.jpeg",
        video: "/videos/video1.mp4",
        alt: "Antalya Modern Mobilya Tasarımı ve İç Mimarlık Hizmetleri - Saba Konsept"
    },
    {
        id: "v2",
        src: "/images/foto1.jpeg",
        video: "/videos/video2.mp4",
        alt: "Antalya Lüks Salon Takımları ve Özel Tasarım Mobilyalar - Saba Konsept"
    },
    {
        id: "v3",
        src: "/images/foto1.jpeg",
        video: "/videos/video3.mp4",
        alt: "Antalya Zarif Yemek Odası Takımları - Saba Konsept Masadağı Mağazası"
    },
    {
        id: "v4",
        src: "/images/foto1.jpeg",
        video: "/videos/video4.mp4",
        alt: "Antalya Özel Ölçü Yatak Odası ve Mimari Tasarım Projeleri - Saba Konsept"
    }
];

export function HeroSlideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full h-[85vh] min-h-[600px] flex items-center overflow-hidden">
            {/* Animated Background Images - All rendered to prevent flashing, opacity toggled */}
            <div className="absolute inset-0 z-0 bg-stone-900">
                {heroImages.map((image, index) => (
                    <motion.div
                        key={image.id}
                        initial={false}
                        animate={{
                            opacity: index === currentIndex ? 1 : 0,
                            scale: index === currentIndex ? 1 : 1.05
                        }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        {image.video ? (
                            (index === currentIndex || index === (currentIndex + 1) % heroImages.length || index === (currentIndex === 0 ? heroImages.length - 1 : currentIndex - 1)) ? (
                                <video
                                    src={image.video}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover object-center"
                                />
                            ) : null
                        ) : (
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover object-center"
                                priority={index === 0} // Only priority load the first image
                            />
                        )}
                    </motion.div>
                ))}
                {/* Elegant Gradient Overlay to ensure text readability (Left-weighted for new layout) */}
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-stone-900/90 via-stone-900/40 to-transparent" />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-stone-900/40 to-transparent" />
            </div>

            {/* Static Overlay Content - Left Aligned Editorial Layout */}
            <div className="relative z-20 container mx-auto px-6 lg:px-12 flex flex-col items-start text-left mt-24">
                <AnimatedSection delay={0.1} direction="right">
                    <span className="text-stone-200 tracking-[0.2em] text-sm md:text-base font-medium mb-6 uppercase block">
                        {brandIdentity.name} • {brandIdentity.location.split(',')[0]}
                    </span>
                </AnimatedSection>
                <AnimatedSection delay={0.3} direction="right">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl text-stone-50 font-serif leading-[1.1] max-w-4xl mb-8">
                        Yaşam Alanlarınızı <br /><span className="italic text-brand-orange">Sanata</span> Dönüştürün.
                    </h1>
                </AnimatedSection>
                <AnimatedSection delay={0.5} direction="right">
                    <p className="text-stone-200 text-lg md:text-xl font-light max-w-2xl mb-12 border-l-2 border-brand-orange pl-6">
                        Saba Konsept ile modern tasarım, üstün konfor ve zarafet evinizde. Masadağı mağazamıza davetlisiniz.
                    </p>
                </AnimatedSection>

                <AnimatedSection delay={0.7} direction="up" className="flex justify-start w-full">
                    <div className="flex flex-col sm:flex-row gap-6">
                        <a href="#koleksiyon" className="group flex items-center justify-center px-10 py-5 bg-stone-50 text-stone-900 text-sm tracking-widest uppercase font-semibold hover:bg-stone-200 transition-colors duration-300">
                            Koleksiyonu Keşfet
                        </a>
                        <a href={`https://wa.me/${brandIdentity.phoneLink}`} target="_blank" rel="noreferrer" className="group flex items-center justify-center px-10 py-5 border border-stone-50 text-stone-50 text-sm tracking-widest uppercase font-semibold hover:bg-stone-50 hover:text-stone-900 transition-colors duration-300 backdrop-blur-sm">
                            Bize Ulaşın
                        </a>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
