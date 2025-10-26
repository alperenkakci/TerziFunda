import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Galeri - Terzi Funda | İşlerimizden Örnekler',
  description: 'Terzi Funda\'nın yaptığı işlerden örnekler. Pantolon paça kesme, daraltma ve kıyafet onarımı öncesi-sonrası fotoğrafları.',
};

const categories = [
  { id: 'all', name: 'Tümü' },
  { id: 'paca', name: 'Paça Kesme' },
  { id: 'daraltma', name: 'Daraltma' },
  { id: 'onarim', name: 'Onarım' },
  { id: 'olcu', name: 'Ölçü Değişikliği' },
];

// Placeholder gallery items - gerçek projede bu veriler API'den gelecek
const galleryItems = [
  {
    id: 1,
    title: 'Pantolon Paça Kesme',
    category: 'paca',
    beforeImage: '/placeholder-before.jpg',
    afterImage: '/placeholder-after.jpg',
    description: 'Uzun pantolon paçası profesyonelce kesildi',
  },
  {
    id: 2,
    title: 'Pantolon Daraltma',
    category: 'daraltma',
    beforeImage: '/placeholder-before.jpg',
    afterImage: '/placeholder-after.jpg',
    description: 'Bol pantolon vücut ölçülerine göre daraltıldı',
  },
  {
    id: 3,
    title: 'Ceket Onarımı',
    category: 'onarim',
    beforeImage: '/placeholder-before.jpg',
    afterImage: '/placeholder-after.jpg',
    description: 'Yırtık ceket görünmez tamir tekniği ile onarıldı',
  },
  {
    id: 4,
    title: 'Gömlek Ölçü Ayarı',
    category: 'olcu',
    beforeImage: '/placeholder-before.jpg',
    afterImage: '/placeholder-after.jpg',
    description: 'Kilo verme sonrası gömlek ölçüleri ayarlandı',
  },
  {
    id: 5,
    title: 'Elbise Daraltma',
    category: 'daraltma',
    beforeImage: '/placeholder-before.jpg',
    afterImage: '/placeholder-after.jpg',
    description: 'Elbise bel ve kol bölgelerinden daraltıldı',
  },
  {
    id: 6,
    title: 'Pantolon Onarımı',
    category: 'onarim',
    beforeImage: '/placeholder-before.jpg',
    afterImage: '/placeholder-after.jpg',
    description: 'Diz bölgesindeki yırtık onarıldı',
  },
];

export default function GaleriPage() {
  return (
    <div className="py-16 sm:py-24">
      {/* Hero Section */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              İşlerimizden Örnekler
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              25 yıllık deneyimimizle yaptığımız işlerin öncesi ve sonrası fotoğrafları. 
              Kaliteli işçiliğimizi görmek için galerimizi inceleyin.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        {/* Category Filter - Future enhancement */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 bg-gray-100 rounded-lg p-2">
            {categories.map((category) => (
              <button
                key={category.id}
                className="px-4 py-2 rounded-md text-sm font-medium transition-colors bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
              {/* Before/After Images */}
              <div className="relative">
                <div className="grid grid-cols-2">
                  {/* Before Image Placeholder */}
                  <div className="aspect-square bg-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-2"></div>
                      <span className="text-xs text-gray-500 font-medium">ÖNCE</span>
                    </div>
                  </div>
                  
                  {/* After Image Placeholder */}
                  <div className="aspect-square bg-gray-100 flex items-center justify-center border-l border-gray-200">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-indigo-200 rounded-lg mx-auto mb-2"></div>
                      <span className="text-xs text-indigo-600 font-medium">SONRA</span>
                    </div>
                  </div>
                </div>
                
                {/* Divider */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
                
                {/* Category Badge */}
                <div className="mt-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {categories.find(cat => cat.id === item.category)?.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note about images */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-lg p-6 max-w-2xl mx-auto border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Fotoğraf Çekimi Hakkında
            </h3>
            <p className="text-gray-600">
              Müşterilerimizin mahremiyetini korumak amacıyla, fotoğraf çekimi sadece 
              izin verilen işler için yapılmaktadır. Daha fazla örnek görmek için 
              dükkanımızı ziyaret edebilirsiniz.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Sizin İçin de Kaliteli İş Çıkaralım
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Kıyafetleriniz için profesyonel terzilik hizmeti almak istiyorsanız, 
              bize ulaşın. Ücretsiz ölçü alma ve fiyat teklifi.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="tel:+905337944438"
                className="inline-flex items-center rounded-md bg-gray-900 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors"
              >
                Hemen Ara
              </a>
              <a
                href="/iletisim"
                className="text-base font-semibold leading-6 text-gray-900 hover:text-gray-700 transition-colors"
              >
                İletişim Bilgileri <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}