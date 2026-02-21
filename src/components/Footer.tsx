"use client";

import { brandIdentity } from "@/data/config";
import Link from "next/link";
import { MessageCircle, Instagram, MapPin, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-stone-900 pt-24 pb-12 border-t border-stone-800">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 mb-16">
                    <div>
                        <Link href="/" className="inline-block text-2xl font-serif font-semibold lowercase text-brand-orange mb-8 tracking-wider">
                            {brandIdentity.name}
                        </Link>
                        <p className="text-stone-400 mb-8 max-w-md leading-relaxed">
                            Hayalinizdeki konsepti oluşturmak için Antalya'nın en tecrübeli ekibiyle tanışın. Mimari destek ve kişiye özel tasarım çözümleri için Masadağı'ndaki mağazamıza çayımızı içmeye bekleriz.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href={brandIdentity.instagramUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 border border-stone-800 flex items-center justify-center rounded-full text-stone-400 hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href={`https://wa.me/${brandIdentity.phoneLink}`}
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 border border-stone-800 flex items-center justify-center rounded-full text-stone-400 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all"
                            >
                                <MessageCircle className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-6">İletişim</h4>
                            <ul className="space-y-4 text-sm text-stone-400">
                                <li className="flex gap-3">
                                    <Phone className="w-4 h-4 text-stone-500 flex-shrink-0" />
                                    <a href={`tel:${brandIdentity.phoneLink}`} className="hover:text-brand-orange transition-colors">
                                        {brandIdentity.phoneDisplay}
                                    </a>
                                </li>
                                <li className="flex gap-3">
                                    <MapPin className="w-4 h-4 text-stone-500 flex-shrink-0" />
                                    {brandIdentity.location}
                                </li>
                                <li>
                                    <a
                                        href={`https://wa.me/${brandIdentity.phoneLink}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-brand-orange font-medium hover:underline"
                                    >
                                        WhatsApp Destek Hattı
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-6">Hızlı Menü</h4>
                            <ul className="space-y-4 text-sm text-stone-400">
                                <li><Link href="/#koleksiyon" className="hover:text-stone-50 transition-colors">Koleksiyon</Link></li>
                                <li><Link href="/#ilham" className="hover:text-stone-50 transition-colors">İlham Kaynağı</Link></li>
                                <li><Link href="/#faq" className="hover:text-stone-50 transition-colors">S.S.S.</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-stone-500">
                    <p>&copy; {new Date().getFullYear()} {brandIdentity.name}. Tüm hakları saklıdır.</p>
                    <p className="mt-4 md:mt-0 tracking-widest uppercase">Antalya • Masadağı • Kepez</p>
                </div>
            </div>
        </footer>
    );
}
