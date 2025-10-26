# Terzi Funda Website

Bahçelievler'de bulunan Terzi Funda dükkanı için geliştirilmiş modern, SEO odaklı web sitesi.

## 🚀 Canlı Site
- **Ana URL**: https://terzifunda.netlify.app
- **Backup URL**: https://terzi-funda.vercel.app

## ✨ Özellikler

- 🎯 **Gelişmiş SEO**: Yerel arama için optimize edilmiş
- 📱 **Mobil Uyumlu**: Responsive tasarım
- ⚡ **Hızlı Yükleme**: Next.js ile optimize edilmiş performans
- 🗺️ **Konum Entegrasyonu**: Google Maps entegrasyonu
- 📞 **Kolay İletişim**: Tıklanabilir telefon numaraları
- 🔍 **Structured Data**: Google için zengin snippet desteği
- 🏢 **Yerel SEO**: Bahçelievler, Yenibosna, Şirinevler, Kocasinan bölgeleri için optimize

## 🛠 Teknoloji Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Icons**: Heroicons
- **Language**: TypeScript
- **Deployment**: Netlify (Ana), Vercel (Backup)

## 📋 Kurulum

```bash
# Repository'yi klonla
git clone https://github.com/[username]/terzi-funda-website.git
cd terzi-funda-website

# Bağımlılıkları yükle
npm install

# Development server'ı başlat
npm run dev

# Production build
npm run build
```

## 🚀 Deploy

### Netlify (Otomatik)
- GitHub'a push yap
- Netlify otomatik deploy eder
- Build command: `npm run build`
- Publish directory: `out`

### Manuel Deploy
```bash
npm run build
netlify deploy --dir=out --prod
```

## Sayfa Yapısı

- **Ana Sayfa** (`/`): Hero section, hizmetler özeti, hakkında, konum
- **Hizmetler** (`/hizmetler`): Detaylı hizmet bilgileri ve fiyatlar
- **Hakkımızda** (`/hakkimizda`): Şirket hikayesi ve değerler
- **Galeri** (`/galeri`): İş örnekleri (önce/sonra fotoğrafları)
- **İletişim** (`/iletisim`): Konum, iletişim bilgileri, SSS

## SEO Özellikleri

### Local SEO
- Schema.org LocalBusiness markup
- Google My Business entegrasyonu hazır
- Yerel anahtar kelimeler optimize edilmiş
- Konum bazlı içerik

### Technical SEO
- Sitemap.xml otomatik oluşturulur
- Robots.txt yapılandırılmış
- Meta tags optimize edilmiş
- Open Graph desteği
- Structured data (JSON-LD)

### Target Keywords
- **Primary**: "Bahçelievler terzi", "Zafer Mahallesi terzi"
- **Secondary**: "pantolon paça kesme Bahçelievler", "terzi Şirinevler"
- **Long-tail**: "uygun fiyat terzi Bahçelievler", "acil terzi hizmeti"

## İçerik Yönetimi

### Kolay Güncellenebilir Alanlar
- Telefon numarası: `src/components/Header.tsx` ve diğer bileşenlerde
- Adres bilgileri: `src/components/LocationSection.tsx`
- Hizmet fiyatları: `src/components/ServicesSection.tsx`
- Çalışma saatleri: `src/components/Footer.tsx`

### Fotoğraf Ekleme
- Galeri fotoğrafları: `public/` klasörüne eklenip `src/app/galeri/page.tsx` güncellenir
- Hero section arka plan: Tailwind gradient yerine gerçek fotoğraf kullanılabilir

## Deployment

### Vercel (Önerilen)
```bash
# Vercel CLI ile deploy
npx vercel

# Veya GitHub'a push yaparak otomatik deploy
git push origin main
```

### Netlify
```bash
# Build komutu: npm run build
# Publish directory: .next
```

## Performans Optimizasyonları

- Next.js Image component kullanımı
- Lazy loading
- Code splitting
- CSS optimizasyonu
- Font optimization (Google Fonts)

## Analytics ve Tracking

Site Google Analytics 4 entegrasyonu için hazır. `src/app/layout.tsx` dosyasına tracking kodu eklenebilir.

## Güvenlik

- HTTPS zorunlu
- XSS koruması
- CSRF koruması (Next.js built-in)
- Content Security Policy hazır

## Browser Desteği

- Chrome (son 2 versiyon)
- Firefox (son 2 versiyon)
- Safari (son 2 versiyon)
- Edge (son 2 versiyon)
- Mobile browsers

## Lisans

Bu proje Terzi Funda için özel olarak geliştirilmiştir.

## İletişim

Teknik destek için: [developer-email]