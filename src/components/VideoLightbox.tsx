"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

interface VideoLightboxProps {
    videoUrl: string | null;
    onClose: () => void;
}

export function VideoLightbox({ videoUrl, onClose }: VideoLightboxProps) {
    // Close on ESC key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);

        if (videoUrl) {
            document.body.style.overflow = "hidden";
        }

        return () => {
            window.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "unset";
        };
    }, [videoUrl, onClose]);

    return (
        <AnimatePresence>
            {videoUrl && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-950/95 backdrop-blur-md p-4 md:p-12"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-5xl aspect-video md:aspect-[16/9] lg:aspect-[16/9] max-h-[90vh] bg-black rounded-lg overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 bg-stone-900/50 hover:bg-stone-900 text-white rounded-full transition-colors backdrop-blur-sm"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <video
                            src={videoUrl}
                            autoPlay
                            controls
                            className="w-full h-full object-contain"
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
