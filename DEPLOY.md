# Terzi Funda Website - Deploy Rehberi

## 🚀 Deploy Seçenekleri

### 1. Vercel (Önerilen - Ücretsiz)
```bash
# Vercel CLI kurulumu
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

### 2. Netlify (Ücretsiz)
```bash
# Netlify CLI kurulumu
npm i -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --dir=out --prod
```

### 3. GitHub Pages (Ücretsiz)
1. GitHub repository oluştur
2. Code'u push et
3. Settings > Pages > Source: GitHub Actions
4. `.github/workflows/deploy.yml` dosyası otomatik oluşturulacak

### 4. Hostinger/Turhost (Ücretli)
```bash
# Build
npm run build

# out/ klasörünü FTP ile yükle
```

## 📋 Deploy Öncesi Kontrol Listesi

### ✅ Teknik Kontroller
- [x] Build başarılı (`npm run build`)
- [x] Tüm sayfalar çalışıyor
- [x] SEO meta tags tamamlandı
- [x] Structured data eklendi
- [x] Sitemap oluşturuldu
- [x] Robots.txt hazırlandı
- [x] Responsive tasarım test edildi

### ✅ İçerik Kontrolleri
- [x] Telefon numarası: (533) 794 44 38
- [x] Adres: Zafer Mahallesi Cihangir Sokak No:7
- [x] Çalışma saatleri güncellendi
- [x] Google Maps linki eklendi
- [x] Tüm bölgeler eklendi (Bahçelievler, Yenibosna, Şirinevler, Kocasinan)

### 🔧 Deploy Sonrası Yapılacaklar

#### 1. Google Search Console
- Site ekle: https://search.google.com/search-console
- Sitemap gönder: https://terzifunda.com/sitemap.xml
- URL inspection ile sayfaları test et

#### 2. Google My Business
- İşletme profili oluştur/güncelle
- Website linkini ekle
- Fotoğraflar ekle
- Çalışma saatlerini güncelle

#### 3. Google Analytics
- GA4 hesabı oluştur
- Tracking ID'yi `Analytics.tsx` dosyasına ekle
- Conversion goals ayarla (telefon aramaları)

#### 4. Yerel Dizinler
- Yandex Haritalar'a ekle
- Foursquare'e ekle
- Yelp'e ekle (varsa)

#### 5. Sosyal Medya (Opsiyonel)
- Instagram Business hesabı
- Facebook Business sayfası
- Website linklerini ekle

## 🎯 SEO Optimizasyon Stratejisi

### Hedef Anahtar Kelimeler
**Birincil:**
- Bahçelievler terzi
- Yenibosna terzi  
- Şirinevler terzi
- Kocasinan terzi

**İkincil:**
- pantolon paça kesme Bahçelievler
- pantolon daraltma Yenibosna
- kıyafet onarımı Şirinevler
- terzi dükkanı Kocasinan

**Uzun Kuyruk:**
- Bahçelievler metro yakını terzi
- aynı gün terzi hizmeti İstanbul
- uygun fiyat terzi Bahçelievler
- acil terzi işleri Yenibosna

### İçerik Stratejisi
1. **Blog yazıları** (gelecekte eklenebilir):
   - "Pantolon Paçası Nasıl Kesilir?"
   - "Kıyafet Onarımında Dikkat Edilmesi Gerekenler"
   - "Terzi Seçerken Nelere Dikkat Etmeli?"

2. **Yerel içerik**:
   - Bölge rehberleri
   - Ulaşım bilgileri
   - Çevredeki önemli yerler

### Teknik SEO
- [x] Site hızı optimize edildi
- [x] Mobile-first tasarım
- [x] Structured data eklendi
- [x] Meta tags optimize edildi
- [x] Internal linking yapıldı
- [x] Image alt texts eklendi

## 📊 Performans Metrikleri

### Takip Edilecek KPI'lar
- Organik trafik artışı
- Yerel arama sıralamaları
- Telefon araması sayısı
- Google My Business görüntülenmeleri
- Sayfa yükleme hızı
- Bounce rate

### Araçlar
- Google Analytics 4
- Google Search Console
- Google My Business Insights
- PageSpeed Insights
- GTmetrix

## 🔒 Güvenlik

### SSL Sertifikası
- Vercel/Netlify otomatik SSL sağlar
- Let's Encrypt ücretsiz SSL
- Cloudflare SSL (opsiyonel)

### Güvenlik Headers
- Content Security Policy
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection

## 📞 Destek

Deploy sırasında sorun yaşanırsa:
1. Build loglarını kontrol et
2. Browser console'da hata var mı bak
3. Responsive tasarımı test et
4. Tüm linklerin çalıştığını kontrol et

## 🎉 Go Live!

Site canlıya alındıktan sonra:
1. Tüm sayfaları test et
2. Mobil uyumluluğu kontrol et  
3. Telefon numarasının tıklanabilir olduğunu test et
4. Google Maps linkinin çalıştığını kontrol et
5. SEO araçlarına siteyi ekle

**Site URL:** https://terzifunda.com
**Backup URL:** https://terzi-funda.vercel.app