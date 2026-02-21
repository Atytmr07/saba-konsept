"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { brandIdentity } from "@/data/config";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Koleksiyon", href: "/#koleksiyon" },
        { name: "İlham", href: "/#ilham" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                isScrolled
                    ? "bg-stone-50/80 backdrop-blur-md py-4 shadow-sm border-b border-stone-200/50"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
                {/* Logo Area */}
                <Link
                    href="/"
                    className="text-xl md:text-2xl font-serif font-semibold tracking-wider transition-colors duration-300 lowercase text-brand-orange"
                >
                    {brandIdentity.name}
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm tracking-wide uppercase font-medium relative group transition-colors duration-300",
                                isScrolled ? "text-stone-600 hover:text-stone-900" : "text-stone-300 hover:text-stone-50"
                            )}
                        >
                            {link.name}
                            {/* Animated underline */}
                            <span
                                className={cn(
                                    "absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full",
                                    isScrolled ? "bg-brand-orange" : "bg-stone-50"
                                )}
                            />
                        </Link>
                    ))}

                    <a
                        href={`https://wa.me/${brandIdentity.phoneLink}`}
                        target="_blank"
                        rel="noreferrer"
                        className={cn(
                            "px-6 py-2.5 text-sm tracking-wide uppercase font-medium transition-all duration-300 border",
                            isScrolled
                                ? "bg-brand-orange text-stone-50 border-brand-orange hover:bg-transparent hover:text-brand-orange"
                                : "bg-stone-50 text-stone-900 border-stone-50 hover:bg-transparent hover:text-stone-50"
                        )}
                    >
                        Bize Ulaşın
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <X className={cn("w-6 h-6", isScrolled ? "text-stone-900" : "text-stone-50")} />
                    ) : (
                        <Menu className={cn("w-6 h-6", isScrolled ? "text-stone-900" : "text-stone-50")} />
                    )}
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            <div
                className={cn(
                    "fixed inset-0 top-[72px] bg-stone-50/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden",
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-2xl font-serif text-stone-800 hover:text-brand-orange transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
                <a
                    href={`https://wa.me/${brandIdentity.phoneLink}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 px-8 py-4 bg-brand-orange text-stone-50 tracking-wider uppercase font-medium hover:opacity-90 transition-opacity"
                >
                    WhatsApp Üzerinden Ulaşın
                </a>
            </div>
        </header>
    );
}
