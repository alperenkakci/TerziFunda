# GitHub Repository Kurulum Rehberi

## 🔐 Private Repository Oluşturma

### 1. GitHub'da Yeni Repository Oluştur
1. GitHub.com'a git
2. Sağ üstteki "+" butonuna tıkla
3. "New repository" seç
4. Repository bilgileri:
   - **Repository name**: `terzi-funda-website`
   - **Description**: `Terzi Funda - Bahçelievler Terzilik Hizmeti Website`
   - **Visibility**: ✅ **Private** (Önemli!)
   - **Initialize**: ❌ Hiçbirini seçme (README, .gitignore, license)

### 2. Repository'yi Bağla
```bash
# Remote repository ekle
git remote add origin https://github.com/[KULLANICI_ADIN]/terzi-funda-website.git

# Ana branch'i main olarak ayarla
git branch -M main

# İlk push
git push -u origin main
```

### 3. Netlify ile Bağlantı Kur

#### Netlify Dashboard'da:
1. https://app.netlify.com/ adresine git
2. "New site from Git" butonuna tıkla
3. "GitHub" seçeneğini seç
4. Repository'yi seç: `terzi-funda-website`
5. Build ayarları:
   - **Branch to deploy**: `main`
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
6. "Deploy site" butonuna tıkla

#### Otomatik Deploy Ayarları:
- ✅ Her push'da otomatik deploy
- ✅ Pull request preview
- ✅ Branch deploys

### 4. Custom Domain (Opsiyonel)
Eğer kendi domain'in varsa:
1. Netlify Dashboard > Site settings > Domain management
2. "Add custom domain" tıkla
3. Domain'i ekle (örn: terzifunda.com)
4. DNS ayarlarını güncelle:
   ```
   Type: CNAME
   Name: www
   Value: [site-name].netlify.app
   
   Type: A
   Name: @
   Value: 75.2.60.5
   ```

## 🚀 Deploy Sonrası Kontrol Listesi

### ✅ Site Kontrolü
- [ ] Site açılıyor mu? (https://[site-name].netlify.app)
- [ ] Tüm sayfalar çalışıyor mu?
- [ ] Mobil uyumlu mu?
- [ ] Telefon numarası tıklanabiliyor mu?
- [ ] Google Maps linki çalışıyor mu?

### ✅ SEO Kontrolü
- [ ] Google Search Console'a site ekle
- [ ] Sitemap gönder: /sitemap.xml
- [ ] robots.txt kontrol et: /robots.txt
- [ ] Meta tags kontrol et (view source)
- [ ] Structured data test et: https://search.google.com/test/rich-results

### ✅ Performance Kontrolü
- [ ] PageSpeed Insights test et
- [ ] GTmetrix ile hız testi
- [ ] Mobile-friendly test

## 📊 Analytics Kurulumu

### Google Analytics 4
1. https://analytics.google.com/ adresine git
2. Yeni property oluştur
3. Measurement ID'yi kopyala (G-XXXXXXXXXX)
4. `src/components/Analytics.tsx` dosyasında güncelle:
   ```typescript
   gtag('config', 'G-XXXXXXXXXX');
   ```

### Google Search Console
1. https://search.google.com/search-console/ adresine git
2. Property ekle: https://terzifunda.com
3. Ownership doğrula (HTML tag method)
4. Sitemap gönder: https://terzifunda.com/sitemap.xml

## 🔧 Güncelleme Süreci

### Kod Değişiklikleri
```bash
# Değişiklikleri yap
git add .
git commit -m "feat: yeni özellik eklendi"
git push origin main
```

### Netlify Otomatik Deploy
- Push sonrası 2-3 dakika içinde site güncellenir
- Deploy loglarını Netlify dashboard'dan takip et
- Hata varsa build loglarını kontrol et

## 🆘 Sorun Giderme

### Build Hatası
1. Netlify dashboard > Deploys > Failed deploy
2. Build log'u incele
3. Yerel olarak test et: `npm run build`
4. Hatayı düzelt ve tekrar push et

### Site Açılmıyor
1. Netlify status kontrol et
2. DNS ayarları kontrol et
3. SSL sertifikası kontrol et

### SEO Sorunları
1. Google Search Console'da hata var mı kontrol et
2. Structured data test et
3. Meta tags kontrol et

## 📞 Destek

Herhangi bir sorun yaşarsan:
1. GitHub Issues kullan
2. Netlify support'a başvur
3. Build loglarını paylaş

---

**🎉 Başarılar! Site artık canlıda ve SEO optimizasyonu ile yerel müşterilere ulaşmaya hazır.**