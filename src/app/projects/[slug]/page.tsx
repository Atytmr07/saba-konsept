import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectGallery, brandIdentity } from "@/data/config";

// Force static rendering for these known routes if you wish, or let it be dynamic
export function generateStaticParams() {
    return projectGallery.map((p) => ({
        slug: p.slug,
    }));
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = projectGallery.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-stone-50">
            {/* Header/Nav minimal */}
            <header className="absolute top-0 left-0 right-0 z-50 p-6 flex justify-between items-center text-stone-50">
                <Link href="/" className="text-sm font-semibold tracking-[0.2em] uppercase hover:text-stone-300 transition-colors">
                    {brandIdentity.name}
                </Link>
                <Link href="/#koleksiyon" className="text-xs tracking-wider uppercase border-b border-stone-50/50 pb-1 hover:border-stone-50 transition-colors">
                    Geri Dön
                </Link>
            </header>

            {/* Hero Image */}
            <div className="relative w-full h-[60vh] md:h-[75vh] min-h-[500px]">
                <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-stone-900/30" />
                <div className="absolute inset-0 flex items-end p-6 md:p-16 lg:p-24 bg-gradient-to-t from-stone-900/80 to-transparent">
                    <div className="w-full max-w-5xl mx-auto">
                        <span className="text-stone-300 tracking-[0.2em] text-xs font-semibold uppercase mb-4 block">
                            {project.location}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-stone-50 mb-6">
                            {project.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 lg:px-12 py-16 md:py-24 max-w-5xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24 mb-24">
                    <div className="lg:col-span-1 border-t border-stone-200 pt-8">
                        <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-stone-400 mb-6">Proje Detayları</h3>
                        <ul className="space-y-4 text-sm text-stone-600">
                            <li>
                                <strong className="block text-stone-800 font-medium mb-1">Konum</strong>
                                {project.location}
                            </li>
                            <li>
                                <strong className="block text-stone-800 font-medium mb-1">Kategori</strong>
                                İç Mimari & Dekorasyon
                            </li>
                            <li>
                                <strong className="block text-stone-800 font-medium mb-1">Tasarım Çizgisi</strong>
                                Modern, Zarif, Premium
                            </li>
                        </ul>
                    </div>
                    <div className="lg:col-span-2 border-t border-stone-200 pt-8">
                        <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-stone-400 mb-6">Yaklaşımımız</h3>
                        <p className="text-stone-800 text-lg md:text-xl font-light leading-relaxed">
                            {project.description}
                        </p>
                    </div>
                </div>

                {/* Gallery */}
                <div className="space-y-12 md:space-y-24">
                    {project.images.map((img, idx) => (
                        <div key={idx} className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-sm bg-stone-200">
                            <Image
                                src={img}
                                alt={`${project.title} - Image ${idx + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA / Footer minimal */}
            <div className="bg-stone-900 text-stone-50 py-24 mt-auto">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-serif mb-6">Sizin Hikayenizi Ne Zaman Yazıyoruz?</h2>
                    <p className="text-stone-400 font-light mb-12 max-w-md mx-auto">
                        {brandIdentity.name} ayrıcalığıyla, yaşam alanlarınıza değer katmak için Masadağı mağazamıza bekliyoruz.
                    </p>
                    <a
                        href={`https://wa.me/${brandIdentity.phoneLink}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center px-8 py-4 bg-brand-orange text-stone-50 text-sm tracking-wider uppercase font-medium hover:opacity-90 transition-opacity duration-300"
                    >
                        Projeyi Birlikte Planlayalım
                    </a>
                </div>
            </div>
        </div>
    );
}
