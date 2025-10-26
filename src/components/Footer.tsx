import Link from 'next/link';
import { PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Terzi Funda</h3>
            <p className="text-gray-300 text-sm mb-4">
              25 yıllık tekstil deneyimi ile Bahçelievler&apos;de kaliteli ve uygun fiyatlı terzilik hizmeti.
            </p>
            <div className="flex items-center text-gray-300 text-sm mb-2">
              <MapPinIcon className="h-4 w-4 mr-2 flex-shrink-0" />
              <span>Zafer Mahallesi Cihangir Sokak No:7 Giriş Dükkan, Bahçelievler/İstanbul</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hizmetler" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-gray-300 hover:text-white text-sm transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">İletişim</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300 text-sm">
                <PhoneIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                <a href="tel:+905337944438" className="hover:text-white transition-colors">
                  (533) 794 44 38
                </a>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <ClockIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>Pzt-Cum: 09:00-18:00, Cmt: 09:00-17:00, Paz: 10:00-17:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <p className="text-center text-sm text-gray-400">
            © 2024 Terzi Funda. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}