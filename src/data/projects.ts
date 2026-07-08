import type { Lang } from '../i18n/utils';

// ──────────────────────────────────────────────────────────────────────
// NOT: E-DOOR ve Mimware ilişkisi kesinleşmemiştir. Şu an "rebrand"
// varsayımıyla (Mimware ürünlerinin E-DOOR adı altında sunulması)
// hazırlanmıştır. İlişki netleştikçe bu bölüm güncellenmelidir.
// ──────────────────────────────────────────────────────────────────────

export interface LocalizedString {
  tr: string;
  en: string;
}

export interface ProjectFeature {
  icon: string;
  title: LocalizedString;
  desc: LocalizedString;
}

export interface ProjectTechItem {
  name: string;
  desc: LocalizedString;
}

export interface ProjectTechGroup {
  category: LocalizedString;
  icon: string;
  items: ProjectTechItem[];
}

export interface ProjectStat {
  value: string;
  label: LocalizedString;
}

export interface ProjectScreenshot {
  src: string;
  alt: LocalizedString;
  title: LocalizedString;
  desc: LocalizedString;
  icon: string;
}

export type ServiceCategory =
  | 'enterprise'
  | 'field-service'
  | 'iot'
  | 'document'
  | 'fleet'
  | 'infrastructure';

export interface Project {
  slug: string;
  icon: string;
  name: LocalizedString;
  subtitle: LocalizedString;
  category: LocalizedString;
  summary: LocalizedString;
  tags: string[];
  year?: string;
  client?: LocalizedString;
  cardTag: LocalizedString;
  stats: ProjectStat[];
  features: ProjectFeature[];
  techStack: ProjectTechGroup[];
  screenshots?: ProjectScreenshot[];
  departments?: LocalizedString[];
  externalUrl?: string;
  serviceCategory: ServiceCategory;
}

export const projects: Project[] = [
  // ════════════════════════════════════════════════════════════════════
  // ŞİFAHANE
  // ════════════════════════════════════════════════════════════════════
  {
    slug: 'sifahane',
    icon: 'auto_stories',
    name: { tr: 'Şifahane', en: 'Şifahane' },
    subtitle: {
      tr: 'Kitap Restorasyonu ve Arşivlemesi Otomasyonu',
      en: 'Book Restoration and Archiving Automation',
    },
    category: {
      tr: 'ERP & Kurumsal Yönetim Sistemi',
      en: 'ERP & Enterprise Management System',
    },
    summary: {
      tr: 'Kültür ve Turizm Bakanlığı\'na bağlı Yazma Eser Kurumu için geliştirilen, kitap ve yazma eserlerinin restorasyon, konservasyon, kataloglama, dijitalleştirme ve arşivlenme süreçlerini uçtan uca yöneten kurumsal ölçekli bir yönetim sistemidir. 7 departmanı, 30+ modülü ve IoT tabanlı ortam izleme altyapısıyla kurumun tüm operasyonel akışını tek bir çatı altında birleştirir.',
      en: 'An enterprise-scale management system developed for the Manuscripts Institution under the Ministry of Culture and Tourism, managing the restoration, conservation, cataloging, digitization and archiving processes of books and manuscripts end to end. With 7 departments, 30+ modules and an IoT-based environmental monitoring infrastructure, it unites the institution\'s entire operational flow under one roof.',
    },
    tags: ['PHP', 'PostgreSQL', 'Tailwind CSS', 'jQuery', 'Chart.js', 'Material Design'],
    year: '2025',
    client: { tr: 'Yazma Eser Kurumu', en: 'Manuscripts Institution' },
    cardTag: { tr: 'E-DOOR Kurumsal Çözüm', en: 'E-DOOR Enterprise Solution' },
    stats: [
      { value: '30+', label: { tr: 'Modül & Sayfa', en: 'Modules & Pages' } },
      { value: '7', label: { tr: 'Departman Entegrasyonu', en: 'Department Integration' } },
      { value: 'IoT', label: { tr: 'Sensör Entegrasyonu', en: 'Sensor Integration' } },
      { value: '100%', label: { tr: 'Responsive & Dark Mode', en: 'Responsive & Dark Mode' } },
    ],
    features: [
      {
        icon: 'library_books',
        title: { tr: 'Eser Yönetimi & Kataloglama', en: 'Artifact Management & Cataloging' },
        desc: {
          tr: 'Kitap ve yazma eserlerinin kaydı, kataloglanması, sınıflandırılması ve dijitalleştirilmesi. Çok dilli destek ve eser bazlı değerleme formları.',
          en: 'Registration, cataloging, classification and digitization of books and manuscripts. Multilingual support and artifact-based valuation forms.',
        },
      },
      {
        icon: 'engineering',
        title: { tr: 'Konservasyon & Restorasyon', en: 'Conservation & Restoration' },
        desc: {
          tr: 'Eserlerin fiziki değerlendirmesi, kritik/orta/düşük öncelik analizleri ve restorasyon süreçlerinin uçtan uca takibi.',
          en: 'Physical assessment of artifacts, critical/medium/low priority analysis and end-to-end tracking of restoration processes.',
        },
      },
      {
        icon: 'thermostat',
        title: { tr: 'Isı & Nem İzleme', en: 'Temperature & Humidity Monitoring' },
        desc: {
          tr: 'Depo ve kütüphane ortam koşullarının IoT sensörlerle gerçek zamanlı takibi, trend grafikleri ve eşik uyarıları.',
          en: 'Real-time tracking of warehouse and library environmental conditions with IoT sensors, trend charts and threshold alerts.',
        },
      },
      {
        icon: 'checklist',
        title: { tr: 'Rutin İş Takibi', en: 'Routine Task Tracking' },
        desc: {
          tr: 'Periyodik bakım ve kontrol görevlerinin planlanması, ataması ve tamamlanma durumlarının izlenmesi.',
          en: 'Planning, assignment and completion status monitoring of periodic maintenance and control tasks.',
        },
      },
      {
        icon: 'translate',
        title: { tr: 'Çeviri Operasyonları', en: 'Translation Operations' },
        desc: {
          tr: 'Çeviri taleplerinin alınması, eser bazlı çeviri süreç yönetimi ve yıllık çeviri performans takibi.',
          en: 'Receiving translation requests, artifact-based translation process management and annual translation performance tracking.',
        },
      },
      {
        icon: 'museum',
        title: { tr: 'Sergi Yönetimi', en: 'Exhibition Management' },
        desc: {
          tr: 'Sergilerin planlanması, devam eden ve tamamlanan sergilerin takibi ile yıllık sergi durum analitikleri.',
          en: 'Planning exhibitions, tracking ongoing and completed exhibitions, and annual exhibition status analytics.',
        },
      },
      {
        icon: 'developer_board',
        title: { tr: 'IoT Cihaz Yönetimi', en: 'IoT Device Management' },
        desc: {
          tr: 'Sensör ve cihaz tanımlamaları, rutin tanımları ve cihaz bazlı veri toplama altyapısı.',
          en: 'Sensor and device definitions, routine definitions and device-based data collection infrastructure.',
        },
      },
      {
        icon: 'admin_panel_settings',
        title: { tr: 'Rol Tabanlı Erişim', en: 'Role-Based Access' },
        desc: {
          tr: 'Departman ve yetki seviyesine göre detaylı erişim kontrolü, ekip/rol yönetimi ve denetim kayıtları.',
          en: 'Detailed access control by department and authorization level, team/role management and audit logs.',
        },
      },
    ],
    techStack: [
      {
        category: { tr: 'Back-End', en: 'Back-End' },
        icon: 'dns',
        items: [
          { name: 'PHP', desc: { tr: 'Sunucu tarafı iş mantığı', en: 'Server-side business logic' } },
          { name: 'PostgreSQL', desc: { tr: 'İlişkisel veritabanı (PDO)', en: 'Relational database (PDO)' } },
          { name: 'Prepared Statements', desc: { tr: 'Güvenli veri erişimi', en: 'Secure data access' } },
        ],
      },
      {
        category: { tr: 'Front-End', en: 'Front-End' },
        icon: 'code',
        items: [
          { name: 'Tailwind CSS', desc: { tr: 'Utility-first stil sistemi', en: 'Utility-first styling system' } },
          { name: 'jQuery', desc: { tr: 'DOM etkileşimleri', en: 'DOM interactions' } },
          { name: 'Select2', desc: { tr: 'Gelişmiş arama/seçim', en: 'Advanced search/select' } },
        ],
      },
      {
        category: { tr: 'Görselleştirme', en: 'Visualization' },
        icon: 'monitoring',
        items: [
          { name: 'Chart.js', desc: { tr: 'İnteraktif grafikler', en: 'Interactive charts' } },
          { name: 'Material Symbols', desc: { tr: 'Tutarlı ikon seti', en: 'Consistent icon set' } },
          { name: 'Dark Mode', desc: { tr: 'Tema desteği', en: 'Theme support' } },
        ],
      },
      {
        category: { tr: 'Altyapı', en: 'Infrastructure' },
        icon: 'cloud',
        items: [
          { name: 'Responsive', desc: { tr: 'Mobil & masaüstü uyum', en: 'Mobile & desktop compatibility' } },
          { name: 'Rol Bazlı Güvenlik', desc: { tr: 'Yetkilendirme katmanı', en: 'Authorization layer' } },
          { name: 'Modüler Mimari', desc: { tr: 'Veri/şablon ayrımı', en: 'Data/template separation' } },
        ],
      },
    ],
    screenshots: [
      {
        src: '/images/anasayfa.png',
        alt: {
          tr: 'Şifahane Dashboard - Başkan Yönetim Paneli',
          en: 'Şifahane Dashboard - President Management Panel',
        },
        title: { tr: 'Yönetim Paneli (Dashboard)', en: 'Management Panel (Dashboard)' },
        desc: {
          tr: 'Eser öncelik dağılımı, konservasyon durumu, ısı-nem trendleri ve departman bazlı analitik grafikler tek ekranda.',
          en: 'Artifact priority distribution, conservation status, temperature-humidity trends and department-based analytics charts on a single screen.',
        },
        icon: 'dashboard',
      },
      {
        src: '/images/eser_sayfasi.png',
        alt: {
          tr: 'Şifahane Eser Yönetimi Ekranı',
          en: 'Şifahane Artifact Management Screen',
        },
        title: { tr: 'Eser Yönetimi & Kataloglama', en: 'Artifact Management & Cataloging' },
        desc: {
          tr: 'Yazma eserlerinin kaydı, fiziki değerlendirme formları ve kataloglama işlemleri için kapsamlı arayüz.',
          en: 'A comprehensive interface for manuscript registration, physical assessment forms and cataloging operations.',
        },
        icon: 'library_books',
      },
      {
        src: '/images/sicaklik_takip.png',
        alt: {
          tr: 'Şifahane Depo Sıcaklık Takip Ekranı',
          en: 'Şifahane Warehouse Temperature Tracking Screen',
        },
        title: { tr: 'Depo Sıcaklık & Nem Takibi', en: 'Warehouse Temperature & Humidity Tracking' },
        desc: {
          tr: 'Depo ve kütüphane ortam koşullarının gerçek zamanlı izlenmesi, tarih aralıklı trend grafikleri ve eşik analizi.',
          en: 'Real-time monitoring of warehouse and library environmental conditions, date-ranged trend charts and threshold analysis.',
        },
        icon: 'thermostat',
      },
    ],
    departments: [
      { tr: 'Kitap Şifahanesi ve Arşiv Dairesi', en: 'Book Şifahane and Archive Department' },
      { tr: 'Önleyici Koruma', en: 'Preventive Conservation' },
      { tr: 'Taşra Teşkilatı', en: 'Provincial Organization' },
      { tr: 'Yazma ve Nadir Eserler', en: 'Manuscripts and Rare Works' },
      { tr: 'Çeviri ve Yayın', en: 'Translation and Publication' },
      { tr: 'Araştırma ve Eğitim', en: 'Research and Education' },
      { tr: 'Strateji & İnsan Kaynakları', en: 'Strategy & Human Resources' },
    ],
    externalUrl: 'https://belgeleme.yek.gov.tr/',
    serviceCategory: 'enterprise',
  },

  // ════════════════════════════════════════════════════════════════════
  // KOLAYSSH
  // ════════════════════════════════════════════════════════════════════
  {
    slug: 'kolayssh',
    icon: 'support_agent',
    name: { tr: 'KolaySSH', en: 'KolaySSH' },
    subtitle: {
      tr: 'Akıllı Satış Sonrası Hizmet Takibi',
      en: 'Smart After-Sales Service Tracking',
    },
    category: {
      tr: 'Saha Servisi & CRM Platformu',
      en: 'Field Service & CRM Platform',
    },
    summary: {
      tr: 'Satıştan teknik servise, garantiden yedek parçaya — uçtan uca dijital platform. Satış, CRM, PDI, servis, bakım, arıza, eğitim, anket ve performans süreçlerini tek çatı altında birleştiren bütünleşik çözüm. Mobil saha ekibi yönetimi ve ERP entegrasyonuyla operasyonel verimliliği maksimize eder.',
      en: 'From sales to technical service, from warranty to spare parts — an end-to-end digital platform. An integrated solution combining sales, CRM, PDI, service, maintenance, fault management, training, survey, and performance processes under one roof. Maximizes operational efficiency with mobile field team management and ERP integration.',
    },
    tags: ['ASP.NET Core', 'PostgreSQL', 'React', 'Flutter', 'Docker', 'ERP Entegrasyon'],
    cardTag: { tr: 'E-DOOR Ürün Ailesi', en: 'E-DOOR Product Family' },
    stats: [
      { value: '8+', label: { tr: 'Entegre Modül', en: 'Integrated Modules' } },
      { value: 'ERP', label: { tr: 'Tam Entegrasyon', en: 'Full Integration' } },
      { value: 'Mobil', label: { tr: 'Saha Uygulaması', en: 'Field Application' } },
      { value: '360°', label: { tr: 'Performans Takibi', en: 'Performance Tracking' } },
    ],
    features: [
      {
        icon: 'hub',
        title: { tr: 'Bütünleşik Platform', en: 'Unified Platform' },
        desc: {
          tr: 'Satış, CRM, PDI, servis, bakım, arıza, eğitim, anket ve performans süreçlerini tek bir çatı altında birleştirir. Tüm operasyonu merkezi olarak yönetin.',
          en: 'Combines sales, CRM, PDI, service, maintenance, fault management, training, survey, and performance processes under a single roof. Manage all operations centrally.',
        },
      },
      {
        icon: 'groups',
        title: { tr: 'Satış, Bayi & Teknik Ekip', en: 'Sales, Dealer & Technical Team' },
        desc: {
          tr: 'Satış, bayi ve teknik servis ekiplerinin tüm aktiviteleri anlık olarak izlenir; performans raporlanır ve şeffaf biçimde takip edilir.',
          en: 'All activities of sales, dealer, and technical service teams are monitored in real time; performance is reported and tracked transparently.',
        },
      },
      {
        icon: 'mobile_friendly',
        title: { tr: 'Mobile Clocking & Saha', en: 'Mobile Clocking & Field' },
        desc: {
          tr: 'Mobil giriş-çıkış (clocking), görev atama ve konum bazlı iş kaydı ile saha ekiplerinin verimliliğini ve denetlenebilirliğini artırır.',
          en: 'Increases field team efficiency and auditability with mobile check-in/out (clocking), task assignment, and location-based work logging.',
        },
      },
      {
        icon: 'sync',
        title: { tr: 'ERP Entegrasyonu', en: 'ERP Integration' },
        desc: {
          tr: 'Mevcut ERP sistemiyle tam entegre çalışır; veri tekrarını ortadan kaldırır ve kurumsal veri bütünlüğünü garanti altına alır.',
          en: 'Works fully integrated with the existing ERP system; eliminates data duplication and guarantees corporate data integrity.',
        },
      },
    ],
    techStack: [
      {
        category: { tr: 'Back-End', en: 'Back-End' },
        icon: 'dns',
        items: [
          { name: 'ASP.NET Core 10', desc: { tr: 'Yüksek performanslı sunucu tarafı', en: 'High-performance server-side' } },
          { name: 'PostgreSQL + EF Core', desc: { tr: 'ACID uyumlu ilişkisel veritabanı', en: 'ACID-compliant relational database' } },
          { name: 'Hangfire', desc: { tr: 'Arka plan iş kuyruğu ve zamanlanmış görevler', en: 'Background job queue and scheduled tasks' } },
        ],
      },
      {
        category: { tr: 'Front-End', en: 'Front-End' },
        icon: 'code',
        items: [
          { name: 'React', desc: { tr: 'Bileşen tabanlı modern web arayüzü', en: 'Component-based modern web interface' } },
          { name: 'Flutter', desc: { tr: 'Android & iOS mobil uygulama', en: 'Android & iOS mobile app' } },
          { name: 'SignalR', desc: { tr: 'WebSocket tabanlı gerçek zamanlı iletişim', en: 'WebSocket-based real-time communication' } },
        ],
      },
      {
        category: { tr: 'Veri & Önbellek', en: 'Data & Cache' },
        icon: 'storage',
        items: [
          { name: 'Redis', desc: { tr: 'Dağıtık önbellek ve Pub/Sub', en: 'Distributed cache and Pub/Sub' } },
          { name: 'MeiliSearch', desc: { tr: 'Türkçe uyumlu tam metin arama', en: 'Turkish-compatible full-text search' } },
          { name: 'MongoDB', desc: { tr: 'Esnek şemalı loglama', en: 'Flexible-schema logging' } },
        ],
      },
      {
        category: { tr: 'Altyapı', en: 'Infrastructure' },
        icon: 'cloud',
        items: [
          { name: 'Docker + Kubernetes', desc: { tr: 'Konteyner tabanlı dağıtım ve orkestrasyon', en: 'Container-based deployment and orchestration' } },
          { name: 'Apache Superset', desc: { tr: 'Dinamik raporlama ve iş zekâsı', en: 'Dynamic reporting and business intelligence' } },
          { name: 'MimOS', desc: { tr: 'Kurumsal yazılım altyapısı', en: 'Enterprise software infrastructure' } },
        ],
      },
    ],
    externalUrl: 'https://www.kolayssh.com',
    serviceCategory: 'field-service',
  },

  // ════════════════════════════════════════════════════════════════════
  // AKILLI YAKIT YÖNETİMİ (IFMS)
  // ════════════════════════════════════════════════════════════════════
  {
    slug: 'akilli-yakit-yonetimi',
    icon: 'local_gas_station',
    name: {
      tr: 'Akıllı Yakıt Yönetim Sistemi',
      en: 'Smart Fuel Management System',
    },
    subtitle: {
      tr: 'IoT Tabanlı Yakıt İzleme ve Kontrol Platformu',
      en: 'IoT-Based Fuel Monitoring and Control Platform',
    },
    category: {
      tr: 'IoT & Filo Çözümleri',
      en: 'IoT & Fleet Solutions',
    },
    summary: {
      tr: '%0,02 ölçüm hassasiyetiyle yakıt kayıplarını minimize eden IoT tabanlı uçtan uca çözüm. Ana ve mobil tankerlerde anlık seviye, ısı, kesafet ve alarm takibi; firma, ekipman, lokasyon ve operatör bazlı detaylı maliyet analizi ve yetkilendirmeyle kontrol altına alınmış yakıt verme operasyonları ile fireyi sıfıra indirir.',
      en: 'An end-to-end IoT-based solution that minimizes fuel losses with 0.02% measurement precision. Real-time level, temperature, density and alarm monitoring on main and mobile tankers; detailed cost analysis by company, equipment, location and operator; and authorized fuel dispensing operations that reduce waste to zero.',
    },
    tags: ['IoT', 'ASP.NET Core', 'TimescaleDB', 'Apache Kafka', 'React', 'Flutter', 'Docker'],
    cardTag: { tr: 'E-DOOR IoT Çözümü', en: 'E-DOOR IoT Solution' },
    stats: [
      { value: '%0,02', label: { tr: 'Ölçüm Hassasiyeti', en: 'Measurement Precision' } },
      { value: 'IoT', label: { tr: 'Sensör Entegrasyonu', en: 'Sensor Integration' } },
      { value: '7/24', label: { tr: 'Kesintisiz İzleme', en: 'Uninterrupted Monitoring' } },
      { value: 'O/Offline', label: { tr: 'Saha Desteği', en: 'Field Support' } },
    ],
    features: [
      {
        icon: 'precision_manufacturing',
        title: { tr: 'Yüksek Hassasiyetli Ölçüm', en: 'High Precision Measurement' },
        desc: {
          tr: 'Ana ve mobil tankerlerde anlık yakıt seviyesi, ısı, kesafet (yoğunluk) ve alarm takibi. %0,02 hassasiyetle her damlayı ölçün, kayıpları anında tespit edin.',
          en: 'Real-time fuel level, temperature, density and alarm monitoring on main and mobile tankers. Measure every drop with 0.02% precision and detect losses instantly.',
        },
      },
      {
        icon: 'cloud_sync',
        title: { tr: 'Online–Offline IoT', en: 'Online–Offline IoT' },
        desc: {
          tr: 'Saha bağlantı kesintilerinden bağımsız kesintisiz operasyon. Sensörler internet bağlantısı olmadan da veri toplar; bağlantı kurulduğunda otomatik senkronize olur.',
          en: 'Uninterrupted operation independent of field connectivity disruptions. Sensors collect data even without internet; automatic synchronization upon reconnection.',
        },
      },
      {
        icon: 'monitoring',
        title: { tr: 'Detaylı Maliyet Analizi', en: 'Detailed Cost Analysis' },
        desc: {
          tr: 'Firma, ekipman, lokasyon, kilometre, saat ve operatör bazlı detaylı yakıt tüketim ve maliyet analizleri. Karar destek dashboard\'larıyla verimliliği artırın.',
          en: 'Detailed fuel consumption and cost analysis by company, equipment, location, mileage, hour and operator. Increase efficiency with decision-support dashboards.',
        },
      },
      {
        icon: 'verified_user',
        title: { tr: 'Yetkili Yakıt Verme', en: 'Authorized Fuel Dispensing' },
        desc: {
          tr: 'Tüm yakıt verme işlemleri yetkilendirme mekanizmalarıyla güvence altında. Yetkisiz dağıtımlar engellenir, her işlem kayıt altına alınır ve fire önlenir.',
          en: 'All fuel dispensing operations are secured with authorization mechanisms. Unauthorized distributions are blocked, every transaction is logged, and waste is prevented.',
        },
      },
    ],
    techStack: [
      {
        category: { tr: 'Back-End', en: 'Back-End' },
        icon: 'dns',
        items: [
          { name: 'ASP.NET Core 10', desc: { tr: 'Yüksek performanslı sunucu tarafı', en: 'High-performance server-side' } },
          { name: 'PostgreSQL + EF Core', desc: { tr: 'ACID uyumlu ana iş veritabanı', en: 'ACID-compliant core database' } },
          { name: 'Hangfire', desc: { tr: 'Arka plan iş kuyruğu ve zamanlanmış görevler', en: 'Background job queue and scheduled tasks' } },
        ],
      },
      {
        category: { tr: 'IoT & Veri', en: 'IoT & Data' },
        icon: 'sensors',
        items: [
          { name: 'TimescaleDB', desc: { tr: 'IoT/zaman serisi sensör verisi', en: 'IoT/time-series sensor data' } },
          { name: 'Apache Kafka', desc: { tr: 'Yüksek hacimli sensör mesaj akışı', en: 'High-volume sensor message streaming' } },
          { name: 'MongoDB', desc: { tr: 'Esnek şemalı loglama', en: 'Flexible-schema logging' } },
        ],
      },
      {
        category: { tr: 'Front-End', en: 'Front-End' },
        icon: 'code',
        items: [
          { name: 'React', desc: { tr: 'Gerçek zamanlı izleme dashboard\'ları', en: 'Real-time monitoring dashboards' } },
          { name: 'Flutter', desc: { tr: 'Android & iOS saha mobil uygulaması', en: 'Android & iOS field mobile app' } },
          { name: 'SignalR', desc: { tr: 'WebSocket tabanlı anlık bildirim', en: 'WebSocket-based instant notifications' } },
        ],
      },
      {
        category: { tr: 'Altyapı', en: 'Infrastructure' },
        icon: 'cloud',
        items: [
          { name: 'Docker + Kubernetes', desc: { tr: 'Konteyner orkestrasyon ve otomatik ölçekleme', en: 'Container orchestration and auto-scaling' } },
          { name: 'Apache Superset', desc: { tr: 'BI raporlama ve dinamik panolar', en: 'BI reporting and dynamic dashboards' } },
          { name: 'MimOS', desc: { tr: 'Kurumsal yazılım altyapısı', en: 'Enterprise software infrastructure' } },
        ],
      },
    ],
    externalUrl: 'https://mimware.com/akilli-yakit-yonetim-sistemi',
    serviceCategory: 'iot',
  },
];

// ──────────────────────────────────────────────────────────────────────
// Diğer Ürünler — Detay sayfası olmayan, yalnızca isim/açıklama listesi
// (Mimware Ürünler sunumundan alınmıştır)
// ──────────────────────────────────────────────────────────────────────
export const otherProducts: { name: string; desc: LocalizedString }[] = [
  { name: 'Portavoice', desc: { tr: 'Tur rehberi ses sistemi', en: 'Tour guide audio system' } },
  { name: 'MSB Yakıt Lojistiği', desc: { tr: 'Savunma sanayi IoT çözümü', en: 'Defense industry IoT solution' } },
  { name: 'Otomatik Sera', desc: { tr: 'Tarımsal IoT otomasyonu', en: 'Agricultural IoT automation' } },
  { name: 'Hayvancılık Takip', desc: { tr: 'Sürü yönetim sistemi', en: 'Herd management system' } },
  { name: 'KolayProcurement', desc: { tr: 'Satın alma yönetimi', en: 'Procurement management' } },
  { name: 'Kolayxpense', desc: { tr: 'Masraf yönetimi', en: 'Expense management' } },
  { name: 'KolayWarehouse', desc: { tr: 'Depo & stok yönetimi', en: 'Warehouse & inventory management' } },
];

// ──────────────────────────────────────────────────────────────────────
// Hizmet kategorileri (Hizmetler sayfası için)
// ──────────────────────────────────────────────────────────────────────
export const serviceCategories: {
  key: ServiceCategory;
  icon: string;
  title: LocalizedString;
  desc: LocalizedString;
}[] = [
  {
    key: 'enterprise',
    icon: 'account_tree',
    title: { tr: 'Kurumsal Yönetim Sistemleri', en: 'Enterprise Management Systems' },
    desc: {
      tr: 'Kurumların tüm operasyonel süreçlerini uçtan uca yöneten, departmanlar arası entegre ERP çözümleri.',
      en: 'End-to-end ERP solutions that manage all operational processes of institutions with inter-departmental integration.',
    },
  },
  {
    key: 'field-service',
    icon: 'support_agent',
    title: { tr: 'Saha Servisi & CRM', en: 'Field Service & CRM' },
    desc: {
      tr: 'Satış sonrası hizmet, teknik servis, saha ekibi yönetimi ve müşteri ilişkilerini birleştiren platformlar.',
      en: 'Platforms combining after-sales service, technical support, field team management, and customer relations.',
    },
  },
  {
    key: 'iot',
    icon: 'sensors',
    title: { tr: 'IoT & Endüstriyel Çözümler', en: 'IoT & Industrial Solutions' },
    desc: {
      tr: 'Sensör verisinden gerçek zamanlı iş zekâsına, sahadan buluta uçtan uca IoT tabanlı endüstriyel otomasyon.',
      en: 'End-to-end IoT-based industrial automation from sensor data to real-time business intelligence, from field to cloud.',
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectHref(slug: string, lang: Lang): string {
  return lang === 'tr' ? `/projeler/${slug}` : `/en/projects/${slug}`;
}
