"use client";

import Image from "next/image";
import Link from "next/link";
import { brandIdentity, trustFeatures, productCategories, lookbookVideos } from "@/data/config";
import { AnimatedSection } from "@/components/AnimatedSection";
import { VideoShowcase } from "@/components/VideoShowcase";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { VideoLightbox } from "@/components/VideoLightbox";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Gem, Truck, ShieldCheck, MapPin, Phone, ArrowRight } from "lucide-react";

const featureIcons = [Gem, Truck, ShieldCheck];

export default function Home() {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    return (
        <main className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-brand-orange selection:text-white pb-0">
            <VideoLightbox videoUrl={selectedVideo} onClose={() => setSelectedVideo(null)} />

            <HeroSlideshow />

            <section className="bg-stone-100 py-16 border-b border-stone-200">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divider-stone-200">
                        {trustFeatures.map((feature, idx) => {
                            const Icon = featureIcons[idx] || Gem;
                            return (
                                <AnimatedSection key={idx} delay={idx * 0.2}>
                                    <div className="flex flex-col items-center">
                                        <div className="w-16 h-16 rounded-full bg-transparent border border-stone-200 mb-6 flex items-center justify-center text-brand-orange">
                                            <Icon className="w-6 h-6 stroke-[1.5]" />
                                        </div>
                                        <h3 className="text-lg font-serif text-stone-800 mb-3">{feature.title}</h3>
                                        <p className="text-stone-600 text-sm leading-relaxed max-w-xs">{feature.description}</p>
                                    </div>
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section id="koleksiyon" className="py-24 bg-stone-50">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="flex flex-col items-center mb-16 text-center">
                        <span className="text-brand-orange tracking-[0.15em] text-xs font-semibold uppercase mb-4">Zamansız Çizgiler</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-stone-800">Seçkin Koleksiyonumuz</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8">
                        {productCategories.map((cat, idx) => (
                            <AnimatedSection key={cat.id} delay={idx * 0.2} className={idx === 0 || idx === 3 ? "lg:col-span-1" : ""}>
                                <div
                                    className="group relative w-full h-[400px] lg:h-[500px] overflow-hidden rounded-sm cursor-pointer bg-stone-200"
                                    onClick={() => cat.video && setSelectedVideo(cat.video)}
                                >
                                    {cat.video ? (
                                        <video
                                            src={cat.video}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    ) : (
                                        <Image
                                            src={cat.image}
                                            alt={cat.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-stone-900/30 group-hover:bg-stone-900/50 transition-colors duration-500" />
                                    <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end z-10">
                                        <h3 className="text-2xl font-serif text-stone-50 mb-2">{cat.title}</h3>
                                        <div className="overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                            <p className="text-stone-200 text-sm font-light mt-2">{cat.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            <VideoShowcase onVideoClick={setSelectedVideo} />

            <section id="ilham" className="py-24 bg-stone-50 border-t border-stone-200">
                <div className="container mx-auto px-6 lg:px-12 text-center">
                    <span className="text-brand-orange tracking-[0.15em] text-xs font-semibold uppercase mb-4 block">İlham Kaynağı</span>
                    <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-6">İlham Veren Mekanlar</h2>
                    <p className="text-stone-600 font-light mb-12 max-w-xl mx-auto">
                        Koleksiyonumuzun evlerdeki zarafetine tanık olun. İlham panomuz sürekli yenileniyor.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                        {lookbookVideos.map((vUrl, i) => (
                            <div
                                key={i}
                                className="relative aspect-[9/16] w-full overflow-hidden rounded-sm bg-stone-800 lg:aspect-square cursor-pointer active:scale-95 transition-transform"
                                onClick={() => setSelectedVideo(vUrl)}
                            >
                                <video
                                    src={vUrl}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="metadata"
                                    className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                        ))}
                    </div>

                    <a href={brandIdentity.instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm tracking-[0.15em] uppercase border-b border-stone-800 text-stone-800 pb-2 hover:border-brand-orange hover:text-brand-orange transition-all duration-300">
                        Daha Fazlası İçin Instagram'da Bizi Takip Edin ({brandIdentity.instagramHandle})
                    </a>
                </div>
            </section>

            <FAQ />

            <section className="bg-white py-24 md:py-32 relative overflow-hidden">
                {/* Subtle Background Pattern */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-50/50 -z-10 rounded-l-[100px] hidden lg:block" />

                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-center relative gap-8 lg:gap-0">

                        {/* Map Container - Constrained Width */}
                        <div className="w-full lg:w-3/5 h-[400px] sm:h-[500px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl shadow-stone-200/50 relative z-10 group">
                            <iframe
                                src={brandIdentity.googleMapsEmbed}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Saba Konsept Location"
                                className="grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 object-cover"
                            />
                            {/* Inner Border Accent */}
                            <div className="absolute inset-0 border border-black/5 rounded-[2rem] pointer-events-none" />
                        </div>

                        {/* Floating Info Card - Overlapping onto the Map */}
                        <div className="w-[calc(100%-2rem)] mx-auto -mt-16 lg:mt-0 lg:mx-0 lg:w-[45%] lg:-ml-24 relative z-20">
                            <AnimatedSection direction="up">
                                <div className="bg-white p-8 lg:p-14 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-stone-100">
                                    <span className="text-brand-orange tracking-[0.2em] text-xs font-semibold uppercase mb-4 block">Bizi Ziyaret Edin</span>
                                    <h2 className="text-3xl lg:text-4xl font-serif text-stone-900 mb-6 leading-tight">Mağazamıza<br className="hidden lg:block" /> Bekliyoruz</h2>
                                    <p className="text-stone-500 text-sm leading-relaxed mb-10">
                                        Masadağı'ndaki mağazamızı ziyaret ederek koleksiyonlarımızı yakından inceleyebilir, iç mimarlarımızla yeni evinizin hikayesini planlayabilirsiniz.
                                    </p>

                                    <div className="space-y-6 mb-10">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center flex-shrink-0 text-brand-orange">
                                                <MapPin className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold text-stone-900 uppercase tracking-widest mb-1 mt-1">Adres</p>
                                                <p className="text-stone-500 text-sm leading-relaxed pr-4">{brandIdentity.location}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center flex-shrink-0 text-brand-orange">
                                                <Phone className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold text-stone-900 uppercase tracking-widest mb-1 mt-1">İletişim</p>
                                                <a href={`tel:${brandIdentity.phoneLink}`} className="text-stone-500 text-sm hover:text-brand-orange transition-colors">{brandIdentity.phoneDisplay}</a>
                                            </div>
                                        </div>
                                    </div>

                                    <a
                                        href={brandIdentity.googleMapsUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group relative flex items-center justify-center gap-3 w-full py-4 lg:py-5 overflow-hidden rounded-xl bg-stone-900 text-white transition-all duration-300 hover:shadow-xl hover:shadow-brand-orange/20"
                                    >
                                        <span className="absolute inset-0 w-full h-full bg-brand-orange transform -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0" />
                                        <span className="relative z-10 text-sm tracking-widest uppercase font-semibold">Yol Tarifi Al</span>
                                        <ArrowRight className="w-4 h-4 relative z-10 transform group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
