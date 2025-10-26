import { MapPinIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function LocationSection() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Konum ve İletişim
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Bahçelievler'de kolayca ulaşabileceğiniz konumumuzda sizleri bekliyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                İletişim Bilgileri
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPinIcon className="h-6 w-6 text-gray-700 mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <p className="text-base font-medium text-gray-900">Adres</p>
                    <p className="text-gray-600">
                      Zafer Mahallesi Cihangir Sokak No:7 Giriş Dükkan<br />
                      Bahçelievler/İstanbul
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <PhoneIcon className="h-6 w-6 text-gray-700 mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <p className="text-base font-medium text-gray-900">Telefon</p>
                    <a 
                      href="tel:+905337944438" 
                      className="text-gray-900 hover:text-gray-700 transition-colors"
                    >
                      (533) 794 44 38
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <ClockIcon className="h-6 w-6 text-gray-700 mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <p className="text-base font-medium text-gray-900">Çalışma Saatleri</p>
                    <div className="text-gray-600 space-y-1">
                      <p>Pazartesi - Cuma: 09:00 - 18:00</p>
                      <p>Cumartesi: 09:00 - 17:00</p>
                      <p>Pazar: 10:00 - 17:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Transportation Info */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">
                Ulaşım Bilgileri
              </h4>
              <div className="text-blue-800 space-y-2">
                <p>• Bahçelievler Metro İstasyonu'na 5 dakika yürüme mesafesi</p>
                <p>• Şirinevler, Soğanlı, Yenibosna bölgelerine yakın</p>
                <p>• Otobüs durağı 2 dakika mesafede</p>
                <p>• Ücretsiz sokak parkı mevcut</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+905337944438"
                className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Hemen Ara
              </a>
              <a
                href="https://share.google/tVjoPFDWt26FQSZu9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition-colors"
              >
                <MapPinIcon className="h-5 w-5 mr-2" />
                Yol Tarifi Al
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.665!2d28.8584!3d41.0082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0x198d27b7ac3b5c0e!2sZafer%2C%20Cihangir%20Sk.%20No%3A7%2C%2034180%20Bah%C3%A7elievler%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1635000000000!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Terzi Funda Konum"
              />
            </div>
            
            {/* Map overlay with business info */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <h4 className="font-semibold text-gray-900">Terzi Funda</h4>
              <p className="text-sm text-gray-600">Zafer Mah. Cihangir Sok. No:7</p>
              <p className="text-sm text-indigo-600 font-medium">Bahçelievler/İstanbul</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}