E-DOOR Şifahane Projesi - Ekran Görüntüleri
============================================

Ekran görüntüleri public/images/ klasöründe tutulmaktadır.
Mevcut görseller ve sayfadaki yerleri:

  public/images/anasayfa.png       -> Dashboard / Başkan Yönetim Paneli
  public/images/eser_sayfasi.png   -> Eser Yönetimi / Kataloglama
  public/images/sicaklik_takip.png -> Depo Sıcaklık & Nem Takibi

Yeni bir ekran görüntüsü eklemek için:
1. Görseli public/images/ klasörüne yükle (PNG/JPG)
2. src/pages/projeler.astro içindeki `screenshots` dizisine yeni bir nesne ekle:
   {
     src: '/images/dosya-adi.png',
     alt: 'Görsel açıklaması',
     title: 'Başlık',
     desc: 'Açıklama metni.',
     icon: 'material_simge_adi',
   }

Öneriler:
- Format: PNG veya JPG
- Boyut: 1920x1080 veya daha geniş (yatay ekran görüntüsü)
- Dosya boyutu: TinyPNG / Squoosh ile sıkıştırın
