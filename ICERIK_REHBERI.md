# Saba Konsept - Video-Odaklı İçerik Güncelleme Rehberi

Bu rehber, web sitenizdeki Hero (Video Arka Plan), Canlı Kategoriler ve "İlham Veren Mekanlar" bölümlerindeki videoları nasıl yönetebileceğinizi anlatır. Siteniz artık **"Video-First"** (Önce Video) mimarisine sahiptir.

---

## 1. Hazırlık ve Dosyaları Yükleme

Web sitenizdeki medya dosyaları projenizin kök dizinindeki `public` klasöründe barındırılır.

1.  VsCode üzerinden sol taraftaki dosya ağacında `public` klasörünü bulun.
2.  İçindeki `videos` klasörüne dikey (Reels/TikTok formatlı) veya yatay videolarınızı sürükleyip bırakın.

> **💡 Video İpuçları:**
> - **Format:** Mutlaka `.mp4` kullanın.
> - **Ses:** Videolar otomatik ve sessiz oynatılacağı için ses içermesine gerek yoktur.
> - **Boyut:** Sayfa hızı için her bir video max 10-15MB olmalıdır.

---

## 2. Ana Sayfa (Hero Video) Değiştirme

Ana sayfadaki ilk karşılamada arka planda oynayan videoyu değiştirmek için:

1.  **`src/components/HeroSlideshow.tsx`** dosyasını açın.
2.  `const heroImages = [...]` listesindeki ilk objenin içindeki `video` yolunu güncelleyin.

**Örnek:**
```tsx
const heroImages = [
    {
        id: "img1",
        src: "/images/fallback.jpg", 
        video: "/videos/yeni-hero-video.mp4", // Yeni videonuzun yolu
        alt: "Saba Konsept Giriş"
    },
    // ...
]
```

---

## 3. Canlı Kategori Videoları

Koltuk, Yemek Odası gibi kartların içindeki videolar için:

1.  **`src/data/config.ts`** dosyasını açın.
2.  `export const productCategories = [...]` listesinde istediğiniz kategorinin `video` satırını güncelleyin.

**Örnek:**
```tsx
{
    id: "modern-koltuk-takimlari",
    title: "Modern Koltuk Takımları",
    image: "/images/yedek-foto.jpg",
    video: "/videos/koltuk-detay-videosu.mp4", 
    description: "..."
}
```

---

## 4. İlham Veren Mekanlar (Video Panosu)

En alttaki 4'lü video karesini değiştirmek için:

1.  **`src/data/config.ts`** dosyasını açın.
2.  `export const lookbookVideos = [...]` listesine videolarınızın yollarını ekleyin. 

```tsx
export const lookbookVideos = [
    "/videos/mekan-1.mp4",
    "/videos/mekan-2.mp4",
    "/videos/mekan-3.mp4",
    "/videos/mekan-4.mp4"
];
```

Kayıt işlemlerini (*Ctrl + S* veya *Cmd + S*) yaptıktan hemen sonra web siteniz (eğer `npm run dev` çalışıyorsa) anında otomatik olarak yeni fotoğraflarınızla ve videolarınızla güncellenecektir.
