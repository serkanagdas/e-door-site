# E-DOOR Kurumsal Web Sitesi

E-DOOR Dijital Bilişim'in kurumsal tanıtım web sitesi kaynak kodu. Bu repo,
statik olarak üretilen (SSG) çok dilli (TR/EN) bir Astro sitesidir.

- **Stack:** Astro 5 · Tailwind CSS 3 · TypeScript (strict)

---

## İçindekiler

1. [Genel Bakış](#genel-bakış)
2. [Hızlı Başlangıç](#hızlı-başlangıç)
3. [Proje Yapısı](#proje-yapısı)
4. [Çoklu Dil (i18n) Sistemi](#çoklu-dil-i18n-sistemi)
5. [Tasarım Sistemi](#tasarım-sistemi)
6. [Sayfalar ve Rotalar](#sayfalar-ve-rotalar)
7. [Bileşenler (Components)](#bileşenler-components)
8. [Projeler ve Veri Katmanı](#projeler-ve-veri-katmanı)
9. [İletişim Formu](#iletişim-formu)
10. [Build & Dağıtım](#build--dağıtım)
11. [Geliştirme Rehberi](#geliştirme-rehberi)
12. [Bilinen Notlar ve TODO'lar](#bilinen-notlar-ve-todolar)

---

## Genel Bakış

E-DOOR, kurumsal otomasyon ve özel yazılım çözümleri sunan bir yazılım
mühendisliği ekibidir. Bu web sitesi; anasayfa, hakkımızda, hizmetler,
projeler ve iletişim sayfalarından oluşan tam bir kurumsal tanıtım
sitesidir. TR varsayılan, EN ikincil dildir.

Site tamamen statik olarak build edilir; JavaScript bağımlılığı minimumda
tutulur (sadece interaktif öğeler için: mobil menü, süreç carousel'i,
form gönderimi, gökyüzü shader'ı, scroll-reveal animasyonları).

---

## Hızlı Başlangıç

### Gereksinimler

- **Node.js** >= 18
- npm

### Kurulum ve Geliştirme

```bash
npm install          # bağımlılıkları kur
npm run dev          # geliştirme sunucusu (http://localhost:4321)
npm run build        # statik build -> dist/
npm run preview      # build çıktısını lokalde önizle
```

---

## Proje Yapısı

```
edoor-archive/
├── astro.config.mjs          # Astro config: site URL, i18n, Tailwind entegrasyonu
├── tailwind.config.mjs        # Material Design 3 tabanlı renk/typography tokenları
├── tsconfig.json              # Astro strict TypeScript
├── netlify.toml               # Netlify build ayarları (Node 22)
├── package.json
├── public/
│   ├── favicon.svg            # E-DOOR marka favicon (SVG)
│   ├── images/                # Logo, team.jpg, ekran görüntüleri
│   └── projeler/sifahane/     # Proje görselleri için talimat (README.txt)
└── src/
    ├── layouts/
    │   └── Layout.astro       # Tüm sayfaların ortak iskeleti (head, Navbar, Footer)
    ├── components/            # Yeniden kullanılabilir UI bileşenleri (12 adet)
    ├── pages/
    │   ├── index.astro            # TR Anasayfa
    │   ├── hakkimizda.astro       # TR Hakkımızda
    │   ├── hizmetler.astro        # TR Hizmetler
    │   ├── iletisim.astro         # TR İletişim
    │   ├── projeler/
    │   │   ├── index.astro        # TR Projeler listesi
    │   │   └── [slug].astro       # TR Dinamik proje detay sayfası
    │   └── en/                    # İngilizce sayfalar (TR ile birebir ayna)
    │       ├── index.astro
    │       ├── about.astro
    │       ├── services.astro
    │       ├── contact.astro
    │       └── projects/
    │           ├── index.astro
    │           └── [slug].astro
    ├── i18n/
    │   ├── ui.json            # Tüm UI metinleri (her anahtar { tr, en } çifti)
    │   └── utils.ts           # Dil tespiti, çeviri fonksiyonu, slug eşleştirme
    ├── data/
    │   └── projects.ts        # Proje verileri, hizmet kategorileri, diğer ürünler
    ├── styles/
    │   └── global.css         # @font-face tanımları, utility sınıfları, navbar animasyonu
    └── assets/
        └── fonts/             # Material Symbols subset woff2
```

---

## Çoklu Dil (i18n) Sistemi

Site **iki dilli** çalışır: **Türkçe (varsayılan)** ve **İngilizce**.

### Mekanizma

- **Astro built-in i18n** (`astro.config.mjs`):
  - `defaultLocale: 'tr'`, `locales: ['tr', 'en']`
  - `prefixDefaultLocale: false` → TR sayfalar kök dizinde (`/hakkimizda`),
    EN sayfalar `/en/` öneki altında (`/en/about`)
- **Çeviriler** `src/i18n/ui.json` dosyasında tutulur. Her anahtar `{ "tr":
  "...", "en": "..." }` yapısındadır.
- **Çeviri fonksiyonu** (`src/i18n/utils.ts`):
  - `useTranslations(lang)` → `t(key)` fonksiyonu döner; nokta notasyonuyla
    derin erişim destekler (örn. `t('hero.titleA')`)
  - `getLangFromUrl(url)` → URL'den dili tespit eder
  - `getNavLinks(lang)` → dil bazlı navigasyon linklerini döner
  - `getCounterpartUrl(pathname)` → mevcut sayfanın diğer dildeki karşılığını
    hesaplar (LanguageSwitcher için)
  - `localizePath(path, lang)` → yolu dile göre lokalize eder

### Slug Eşleştirme (TR ↔ EN)

Sayfa yolları dil bazında farklıdır ve `utils.ts` içindeki haritalar ile
eşleştirilir:

| Türkçe        | English       |
|---------------|---------------|
| `/`           | `/en/`        |
| `/hakkimizda` | `/en/about`   |
| `/hizmetler`  | `/en/services`|
| `/projeler`   | `/en/projects`|
| `/iletisim`   | `/en/contact` |

### Yeni Bir Çeviri Anahtarı Eklemek

1. `src/i18n/ui.json` içine anahtarı ekle:
   ```json
   "yeniAnahtar": { "tr": "Türkçe metin", "en": "English text" }
   ```
2. Bileşende kullan:
   ```astro
   const t = useTranslations(lang);
   <p>{t('yeniAnahtar')}</p>
   ```

> **Not:** Diziler de desteklenir (örn. `services.items`, `process.steps`).
> `t()` fonksiyonu dil seçimini otomatik yapar; dönen değerin tipini cast et.

---

## Tasarım Sistemi

Proje, **Material Design 3 (Material You)** tabanlı bir renk ve tipografi
sistemi kullanır. Tüm tokenlar `tailwind.config.mjs` içinde tanımlıdır.

### Renkler

| Token                  | Hex       | Kullanım                        |
|------------------------|-----------|---------------------------------|
| `background`           | `#fcf8f8` | Sayfa arka planı (sıcak beyaz)  |
| `on-background`        | `#1c1b1b` | Ana metin rengi                 |
| `primary`              | `#5d5f5f` | Birincil (nötr gri)             |
| `secondary`            | `#2b5daa` | İkincil — marka mavisi          |
| `secondary-container`  | `#7fabfe` | Hover/vurgu arka planları       |
| `surface-container-*`  | çeşitli   | Kart katmanları (5 seviye)      |
| `outline-variant`      | `#c4c7c8` | Kenarlık çizgileri              |
| `error`                | `#ba1a1a` | Hata durumları                  |

### Tipografi

- **Başlıklar (Headline):** `Geist Variable` (woff2, self-hosted)
- **Gövde (Body):** `Inter Variable` (woff2, self-hosted, latin + latin-ext)
- **İkonlar:** `Material Symbols Outlined Variable` (self-hosted subset)
  - İkonlar font yüklenene kadar `opacity: 0` ile gizlenir, `.icon-font-ready`
    sınıfı eklenince görünür hale gelir (FOUC önleme).

### Font Yükleme Stratejisi

- Fontlar `@fontsource-variable/*` paketlerinden lokal olarak build edilir
  (harici CDN yok).
- `Layout.astro` `<head>` içinde `preload` ile önceden yüklenir.
- `global.css`'te `@font-face` ile `font-display: swap` kullanılır.

### Spacing & Font Size

- `tailwind.config.mjs` içinde özel spacing birimleri: `base` (8px), `gutter`
  (16px), `margin` (24px).
- Özel font-size tokenları: `headline-lg`, `headline-md`, `body-lg`,
  `body-md`, `label-md`.

### Utility Sınıfları (`global.css`)

| Sınıf            | Açıklama                                        |
|------------------|-------------------------------------------------|
| `.hero-pattern`  | Radial dot pattern (Hero/Cta arka plan deseni)  |
| `.animated-grid` | Blue grid lines + radial mask (Hero dekorasyon) |
| `.glass-card`    | Frosted glass efekti (backdrop-blur + border)   |
| `.grid-wave`     | CSS `@property` ile ripple animasyonu           |
| `.reveal`        | Scroll-reveal: IntersectionObserver ile fade-in |

---

## Sayfalar ve Rotalar

### Türkçe (kök)

| Rota                  | Dosya                          | İçerik                          |
|-----------------------|--------------------------------|---------------------------------|
| `/`                   | `pages/index.astro`            | Anasayfa (Hero, About, Services, Process, Criteria, CTA) |
| `/hakkimizda`         | `pages/hakkimizda.astro`       | Hikaye, Misyon/Vizyon, Değerler, Ekip |
| `/hizmetler`          | `pages/hizmetler.astro`        | Hizmet kategorileri, ürünler, diğer çözümler |
| `/projeler`           | `pages/projeler/index.astro`   | Proje kartları listesi          |
| `/projeler/:slug`     | `pages/projeler/[slug].astro`  | Dinamik proje detay sayfası     |
| `/iletisim`           | `pages/iletisim.astro`         | İletişim formu + bilgi + harita |

### İngilizce (`/en/`)

TR sayfaların birebir aynısı `pages/en/` altında yer alır. İçerik
`ui.json` üzerinden EN dilinden çekilir.

> **Önemli:** `Hizmetler` sayfası geçici olarak Navbar ve Footer'dan
> gizlenmiştir (`Navbar.astro` navLinks dizisinde `services` çıkarılmış).
> Sayfa hala erişilebilir; yeniden eklemek için `navLinks`'e `services`
> ekleyin.

---

## Bileşenler (Components)

Tüm bileşenler `src/components/` altındadır ve `lang?: Lang` prop'u alır.

| Bileşen              | Dosya                  | Açıklama |
|----------------------|------------------------|----------|
| **Navbar**           | `Navbar.astro`         | Sabit üst menü. Scroll-aware: anasayfada gökyüzüyle kaynaşır, scroll'da katı çubuğa dönüşür. Mobil hamburger menü. View Transitions uyumlu (`astro:page-load`). |
| **Footer**           | `Footer.astro`         | Logo, tagline, hızlı linkler, hizmet/yasal linkler, dil değiştirici. |
| **LanguageSwitcher** | `LanguageSwitcher.astro`| TR ↔ EN geçiş linki. `getCounterpartUrl()` ile karşı dildeki URL'yi hesaplar. |
| **Hero**             | `Hero.astro`           | Anasayfa hero bölümü. `SkyShader` + slogan + `HeroMarquee`. |
| **SkyShader**        | `SkyShader.astro`      | WebGL fragment shader ile gerçekçi gökyüzü + sürüklenen bulutlar. Progressive enhancement (WebGL yoksa CSS gradient fallback). `RENDER_SCALE = 0.2` ile performans optimizasyonu. IntersectionObserver + visibilitychange ile GPU tasarrufu. View Transitions cleanup. |
| **HeroMarquee**      | `HeroMarquee.astro`    | Scroll ipucu (fare ikonu + "Keşfet"). Tıklayınca bir ekran aşağı kaydırır. |
| **About**            | `About.astro`          | Anasayfadaki "Genç, Dinamik" tanıtım bölümü + team.jpg + stat kartı. |
| **Services**         | `Services.astro`       | 4 hizmet kartı grid (ikon + başlık + açıklama). |
| **Process**          | `Process.astro`        | 6 adımlı süreç carousel'i. Track translateX animasyonu, step dots, keyboard nav (←/→), panel fade-in. |
| **SuccessCriteria**  | `SuccessCriteria.astro`| Featured spotlight + 3 standart kart. Scroll-reveal ile IntersectionObserver. |
| **CTA**              | `CTA.astro`            | "Birlikte Çalışalım" çağrı bölümü. Tüm alt sayfalarda tekrar kullanılır. |
| **ProjectCard**      | `ProjectCard.astro`    | Proje kartı (ikon, kategori, başlık, özet, tagler, hover efekti). |
| **ProjectDetail**    | `ProjectDetail.astro`  | Proje detay sayfası iskeleti: Hero, ekran görüntüleri, özellikler, teknik altyapı, departmanlar, CTA. Görsel yükleme placeholder yönetimi içerir. |

### View Transitions (Astro)

Site `ClientRouter` (Astro View Transitions) kullanır. Tüm client-side
script'ler `astro:page-load` event'ine bağlıdır; sayfa geçişlerinde otomatik
yeniden çalışır. WebGL context ise `astro:before-swap` ile temizlenir.

---

## Projeler ve Veri Katlanı

Tüm proje verileri `src/data/projects.ts` içinde TypeScript arayüzleri ile
tiplenmiş olarak tutulur. İçerik yönetimi **kod tabanlıdır** (headless CMS
yok); proje eklemek/silmek için bu dosya düzenlenir.

### Veri Yapısı

```typescript
interface Project {
  slug: string;                    // URL slug (örn: 'sifahane')
  icon: string;                    // Material Symbols ikon adı
  name: LocalizedString;           // { tr, en }
  subtitle: LocalizedString;
  category: LocalizedString;
  summary: LocalizedString;
  tags: string[];                  // Teknoloji etiketleri
  year?: string;
  client?: LocalizedString;
  cardTag: LocalizedString;
  stats: ProjectStat[];            // Stat kartı metrikleri
  features: ProjectFeature[];      // Özellik kartları
  techStack: ProjectTechGroup[];   // Gruplandırılmış teknik altyapı
  screenshots?: ProjectScreenshot[];// Ekran görüntüleri (opsiyonel)
  departments?: LocalizedString[]; // Entegre departmanlar (opsiyonel)
  externalUrl?: string;            // Canlı demo/documentation linki
  serviceCategory: ServiceCategory;// Hizmetler sayfası kategorizasyonu
}
```

### Mevcut Projeler

| Slug                     | Adı                          | Kategori               | ServiceCategory |
|--------------------------|------------------------------|------------------------|-----------------|
| `sifahane`               | Şifahane                     | ERP & Kurumsal         | `enterprise`    |
| `kolayssh`               | KolaySSH                     | Saha Servisi & CRM     | `field-service` |
| `akilli-yakit-yonetimi`  | Akıllı Yakıt Yönetimi (IFMS) | IoT & Filo             | `iot`           |
| `akilli-bakim-ariza`     | Akıllı Bakım & Arıza         | IoT & Endüstriyel      | `iot`           |
| `biekipman`              | BiEkipman                    | IoT & Endüstriyel      | `iot`           |
| `kolaydrive`             | KolayDrive                   | Doküman Yönetimi       | `document`      |

### Diğer Ürünler

`otherProducts` dizisinde detay sayfası olmayan, sadece isim/açıklama
listesi şeklinde gösterilen ürünler bulunur (Portavoice, MSB Yakıt
Lojistiği, Otomatik Sera, vb.).

### Hizmet Kategorileri

`serviceCategories` dizisi, Hizmetler sayfasında projeleri kategori bazında
gruplandırmak için kullanılır (`enterprise`, `field-service`, `iot`,
`document`).

### Yeni Proje Eklemek

1. `src/data/projects.ts` → `projects` dizisine yeni bir `Project` nesnesi ekle.
   - `slug` benzersiz olmalı (URL'de kullanılır).
   - Tüm `LocalizedString` alanları hem `tr` hem `en` içermeli.
   - `serviceCategory` uygun kategoriye set edilmeli.
2. (Opsiyonel) Ekran görüntüleri için görselleri `public/images/` altına koy ve
   `screenshots` dizisine referans ver.
3. Build al → proje otomatik olarak hem TR hem EN sayfalarında görünür
   (`getStaticPaths` dinamik route'lardan üretildiği için).

---

## İletişim Formu

İletişim sayfası (`/iletisim`, `/en/contact`) [Web3Forms](https://web3forms.com)
servisini kullanarak form gönderimini handling eder — backend gerektirmez.

- **Endpoint:** `https://api.web3forms.com/submit`
- **Access Key:** `iletisim.astro` içinde hard-coded (`WEB3FORMS_ACCESS_KEY`)
- Form gönderimi client-side `fetch` ile yapılır; loading spinner + success/
  error durumları yönetilir.
- KVKK onay checkbox'ı zorunludur (Türkiye mevzuatı).
- Honeypot alanı (`botcheck`) spam koruması için mevcut.

> **Güvenlik notu:** Access key公开 (client-side) — Web3Forms public key
> tasarımı gereği normaldir, ancak spam için rate-limiting kontrol edilmelidir.

---

## Build & Dağıtım

### Build Komutu

```bash
npm run build    # astro build -> dist/
```

Build statiktir; tüm sayfalar HTML olarak üretilir. TR projeleri kök dizinde,
EN projeleri `/en/` altında çıktı verir.

### Netlify Dağıtımı

`netlify.toml` yapılandırması:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "22"
```

`main` branch'ine push yapıldığında Netlify otomatik build + deploy eder.

### Astro i18n Build Çıktısı

```
dist/
├── index.html              # TR Anasayfa
├── hakkimizda/index.html
├── hizmetler/index.html
├── iletisim/index.html
├── projeler/
│   ├── index.html          # TR Proje listesi
│   ├── sifahane/index.html
│   ├── kolayssh/index.html
│   └── ...
└── en/
    ├── index.html          # EN Anasayfa
    ├── about/index.html
    └── ...
```

---

## Geliştirme Rehberi

### Yeni Sayfa Eklemek (Örnek: Blog)

1. **TR sayfa:** `src/pages/blog.astro`
2. **EN sayfa:** `src/pages/en/blog.astro` (TR'nin aynısı, içerik
   `useTranslations` ile EN'den çekilir)
3. **Çeviriler:** `src/i18n/ui.json` içine `blogPage` bölümü ekle
4. **Slug eşleştirme:** `src/i18n/utils.ts` → `trToEnSlugs` haritasına
   `'/blog': '/blog'` ekle
5. **Navbar:** `src/components/Navbar.astro` → `navLinks` dizisine ekle
   (sadece `pages/en/` versiyonunda da unutma)
6. **Footer:** Footer'da link varsa ekle

### Yeni Bileşen Eklemek

1. `src/components/YeniBilesen.astro` oluştur
2. `lang?: Lang` prop'u ekle, `useTranslations(lang)` ile metinleri çek
3. Kullanacağın sayfada import et ve `<YeniBilesen lang={lang} />` olarak çağır
4. Client-side JS varsa `document.addEventListener('astro:page-load', ...)`
   ile View Transitions uyumlu yap

### Stil Yazımı

- Tailwind utility class'ları tercih edilir (`className="..."`)
- Tekrarlanan stiller için `@layer components` içinde `global.css`'e
  utility sınıfı ekle
- Renkler her zaman `tailwind.config.mjs`'deki tokenları kullanmalı
  (hard-coded hex'ten kaçının)
- Font ailesi: başlıklar `font-headline`, gövde `font-body`

### İkon Kullanımı

```astro
<span class="material-symbols-outlined">icon_name</span>
```

İkon adlarını [Material Symbols](https://fonts.google.com/icons) listesinden
seçin. İkonlar font olarak yüklenir; boyut `text-[Npx]` veya `text-Nxl` ile
ayarlanır.

### TypeScript

- `tsconfig.json` → `astro/tsconfigs/strict` (katı mod)
- `any` kullanmaktan kaçının; `Lang` tipini import edin
- `t()` fonksiyonu `any` döner (dinamik erişim) — gerekirse cast edin

### Erişilebilirlik (Accessibility)

- Tüm interaktif öğelerde `aria-label` kullanılır (örn. menü toggle)
- `alt` metinleri tüm görsellerde mevcut
- `prefers-reduced-motion` tüm animasyonlarda dikkate alınır
- Klavye navigasyonu (örn. Process carousel ←/→ okları)
- Form alanlarında `autocomplete` attribute'ları

---

## Bilinen Notlar ve TODO'lar

### E-DOOR / Mimware İlişkisi

`src/data/projects.ts` başındaki nota göre, E-DOOR ile Mimware arasındaki
marka ilişkisi kesinleşmemiştir. Şu an "rebrand" varsayımıyla (Mimware
ürünlerinin E-DOOR adı altında sunulması) içerik hazırlanmıştır. İlişki
netleştikçe bu bölüm güncellenmelidir.

### Hizmetler Sayfası Gizli

Hizmetler (`/hizmetler`, `/en/services`) sayfası geçici olarak Navbar ve
Footer'dan kaldırılmıştır (commit: `e2d492b`). Sayfalar hala erişilebilir.

### Yer Tutucu İçerikler

- İletişim sayfasındaki ofis adresi placeholder: "Ofis adresi buraya
  eklenecek" (`ui.json` → `contactPage.infoAddressValue`)
- Sosyal medya linkleri `#` placeholder (LinkedIn, Instagram, GitHub)
- Footer'daki yasal linkler (Gizlilik Politikası, KVKK vb.) `#` placeholder
- Ekip üyeleri gerçek isim/avatar yerine "Backend", "Frontend", "UI/UX"
  placeholder'ları

### Web3Forms Access Key

Access key `iletisim.astro` içinde hard-coded. Güvenlik açısından ortam
değişkenine (`import.meta.env`) taşınması değerlendirilebilir.

### Ekran Görüntüleri

`public/projeler/sifahane/README.txt` dosyasında ekran görüntüsü ekleme
talimatları vardır. Yeni proje ekran görüntüleri `public/images/` altına
yüklenmeli ve `projects.ts` → `screenshots` dizisinde referanslanmalıdır.

### Performans

- SkyShader `RENDER_SCALE = 0.2` ile render edilir (bulutlar yumuşak olduğu
  için görsel kayıp yok, GPU tasarrufu var)
- Görseller `loading="lazy"` ile yüklenir
- Fontlar `preload` + `font-display: swap` ile optimize edilir

---

## Bağımlılıklar

| Paket                                          | Sürüm    | Amaç                          |
|------------------------------------------------|----------|-------------------------------|
| `astro`                                        | ^5.13.0  | Statik site framework         |
| `@astrojs/tailwind`                            | ^6.0.2   | Tailwind entegrasyonu         |
| `tailwindcss`                                  | ^3.4.17  | Utility-first CSS             |
| `@fontsource-variable/inter`                   | ^5.2.8   | Inter font (gövde)            |
| `@fontsource-variable/geist`                   | ^5.2.9   | Geist font (başlık)           |
| `@fontsource-variable/material-symbols-outlined` | ^5.2.45 | Material Symbols ikon fontu   |

Geliştirme bağımlılığı yok; linter/formatter yapılandırması mevcut değil.
