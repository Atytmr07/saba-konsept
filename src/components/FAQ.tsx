"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

const faqs = [
    {
        question: "Ürünlerinizi kişiye özel ölçü ve renklerle üretiyor musunuz?",
        answer: "Evet, Saba Konsept olarak çoğu modelimizde mekanınıza uygun ölçü, kumaş ve renk seçenekleri sunuyoruz. İç mimarlarımızla birlikte hayalinizdeki tasarımı evinize uyarlıyoruz."
    },
    {
        question: "Teslimat ve kurulum süreci nasıl işliyor?",
        answer: "Antalya içi (özellikle Kepez ve Masadağı bölgesi) teslimatlarımız ücretsizdir. Kendi profesyonel ekibimiz mobilyalarınızı evinize getirir, kurulumunu yapar ve her şeyin kusursuz olduğundan emin olmadan ayrılmaz."
    },
    {
        question: "Mobilyalarınızda hangi malzemeleri kullanıyorsunuz?",
        answer: "Kaliteden ödün vermiyoruz. İskeletlerimizde fırınlanmış gürgen ağacı, kumaşlarımızda ise leke tutmayan premium seriler tercih ediyoruz. Tüm malzemelerimiz uzun ömürlü ve dayanıklı olacak şekilde seçilmektedir."
    },
    {
        question: "Ürünlerinizin garanti süresi ne kadar?",
        answer: "Saba Konsept'ten aldığınız tüm ürünler, üretim ve malzeme hatalarına karşı 2 yıl resmi garanti kapsamındadır. Ayrıca satış sonrası teknik destek ekibimiz her zaman yanınızdadır."
    },
    {
        question: "Mağazanıza gidemezsem nasıl sipariş verebilirim?",
        answer: "Web sitemizdeki WhatsApp butonu üzerinden bizimle iletişime geçebilirsiniz. Görüntülü arama ile ürünlerimizi yakından görebilir, kataloglarımızdan seçim yapabilir ve güvenle sipariş oluşturabilirsiniz."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-stone-50 border-t border-stone-200">
            <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
                <AnimatedSection className="text-center mb-16">
                    <span className="text-brand-orange tracking-[0.15em] text-xs font-semibold uppercase mb-4 block">Merak Edilenler</span>
                    <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-6">Sıkça Sorulan Sorular</h2>
                </AnimatedSection>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="border-b border-stone-200 lg:px-4">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full py-6 flex justify-between items-center text-left group"
                            >
                                <span className="text-stone-800 font-medium group-hover:text-brand-orange transition-colors">
                                    {faq.question}
                                </span>
                                {openIndex === idx ? (
                                    <Minus className="w-5 h-5 text-brand-orange flex-shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 text-stone-400 group-hover:text-brand-orange flex-shrink-0 transition-colors" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-8 text-stone-600 leading-relaxed text-sm">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
