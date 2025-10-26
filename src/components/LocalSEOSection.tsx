import { MapPinIcon, ClockIcon, PhoneIcon } from '@heroicons/react/24/outline';

const serviceAreas = [
  {
    name: 'Bahçelievler',
    description: 'Bahçelievler merkez ve tüm mahallelerinde terzilik hizmeti',
    distance: '0 km - Dükkanımızın bulunduğu bölge',
    highlights: ['Metro yakını', 'Merkezi konum', 'Kolay ulaşım']
  },
  {
    name: 'Yenibosna',
    description: 'Yenibosna bölgesine hızlı ve kaliteli terzilik hizmeti',
    distance: '2 km - 10 dakika mesafe',
    highlights: ['Hızlı teslimat', 'Uygun fiyat', 'Kaliteli işçilik']
  },
  {
    name: 'Şirinevler',
    description: 'Şirinevler sakinleri için profesyonel terzi hizmeti',
    distance: '3 km - 15 dakika mesafe',
    highlights: ['Deneyimli terzi', 'Aynı gün teslim', 'Güvenilir hizmet']
  },
  {
    name: 'Kocasinan',
    description: 'Kocasinan bölgesinde terzilik ihtiyaçlarınız için',
    distance: '4 km - 20 dakika mesafe',
    highlights: ['25 yıllık deneyim', 'Ölçü garantisi', 'Müşteri memnuniyeti']
  },
  {
    name: 'Soğanlı',
    description: 'Soğanlı mahallesi için terzi ve kıyafet onarım hizmeti',
    distance: '2.5 km - 12 dakika mesafe',
    highlights: ['Hızlı hizmet', 'Uygun konum', 'Kaliteli tamir']
  },
  {
    name: 'Zafer Mahallesi',
    description: 'Zafer Mahallesi sakinleri için en yakın terzi',
    distance: '0 km - Mahallemizdeyiz',
    highlights: ['Komşu terzi', 'Anında hizmet', 'Güvenilir']
  }
];

const quickServices = [
  'Pantolon paça kesme - Aynı gün',
  'Pantolon daraltma - 1-2 gün', 
  'Kıyafet onarımı - 1-3 gün',
  'Ölçü değişiklikleri - 2-4 gün',
  'Acil işler - Aynı gün teslim'
];

export default function LocalSEOSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hizmet Verdiğimiz Bölgeler */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hizmet Verdiğimiz Bölgeler
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Bahçelievler ve çevresindeki tüm bölgelere kaliteli terzilik hizmeti sunuyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {serviceAreas.map((area) => (
            <div key={area.name} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <MapPinIcon className="h-6 w-6 text-gray-700 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">{area.name}</h3>
              </div>
              <p className="text-gray-600 mb-3">{area.description}</p>
              <p className="text-sm text-gray-500 mb-4">{area.distance}</p>
              <div className="flex flex-wrap gap-2">
                {area.highlights.map((highlight, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-800"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Hızlı Hizmetler */}
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Hızlı Terzilik Hizmetleri
              </h3>
              <p className="text-gray-600 mb-6">
                Tüm bölgelerden gelen müşterilerimize hızlı ve kaliteli hizmet sunuyoruz. 
                Acil işleriniz için aynı gün teslim imkanı.
              </p>
              <ul className="space-y-3">
                {quickServices.map((service, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <ClockIcon className="h-5 w-5 text-gray-600 mr-3 flex-shrink-0" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Hemen İletişime Geçin
              </h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <PhoneIcon className="h-5 w-5 text-gray-600 mr-3" />
                  <a href="tel:+905337944438" className="text-gray-900 hover:text-gray-700">
                    (533) 794 44 38
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="h-5 w-5 text-gray-600 mr-3" />
                  <span className="text-gray-700">Zafer Mah. Cihangir Sok. No:7</span>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-5 w-5 text-gray-600 mr-3" />
                  <span className="text-gray-700">Pzt-Paz: 09:00-18:00</span>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="tel:+905337944438"
                  className="w-full inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors"
                >
                  Hemen Ara
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}