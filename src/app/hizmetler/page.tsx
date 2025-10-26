import { Metadata } from 'next';
import { ScissorsIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Hizmetler - Terzi Funda | Bahçelievler Terzilik Hizmetleri',
  description: 'Pantolon paça kesme, daraltma, kıyafet onarımı ve ölçü değişiklikleri. Kaliteli terzilik hizmeti.',
};

const services = [
  {
    id: 1,
    name: 'Pantolon Paça Kesme',
    description: 'Profesyonel pantolon paça kesme hizmeti. Orijinal dikişi korunarak yapılır.',
    detailedDescription: 'Pantolon paçalarınızı boy uzunluğunuza göre ayarlıyoruz. Orijinal dikim tekniği korunarak, görünmez dikim yapılır. Tüm kumaş türleri için uygun.',
    duration: 'Aynı gün',
    features: ['Orijinal dikim korunur', 'Görünmez dikim', 'Tüm kumaş türleri', 'Aynı gün teslim'],
    icon: ScissorsIcon,
  },
  {
    id: 2,
    name: 'Pantolon Daraltma',
    description: 'Bel ve bacak daraltma işlemleri. Kıyafetiniz vücudunuza tam oturacak şekilde ayarlanır.',
    detailedDescription: 'Bel ve bacak bölgelerinden daraltma işlemi yapılır. Vücut ölçülerinize göre kıyafetiniz yeniden şekillendirilir.',
    duration: '1-2 gün',
    features: ['Bel daraltma', 'Bacak daraltma', 'Ölçü alma', 'Prova hizmeti'],
    icon: ScissorsIcon,
  },
  {
    id: 3,
    name: 'Kıyafet Onarımı',
    description: 'Yırtık, kopuk ve hasar görmüş kıyafetlerin onarımı. Görünmez tamir tekniği.',
    detailedDescription: 'Yırtık, delik, kopuk kıyafetlerinizi onarıyoruz. Görünmez tamir teknikleri ile kıyafetiniz eski haline döner.',
    duration: '1-3 gün',
    features: ['Yırtık onarımı', 'Delik kapatma', 'Kopuk dikim', 'Görünmez tamir'],
    icon: ScissorsIcon,
  },
  {
    id: 4,
    name: 'Ölçü Değişiklikleri',
    description: 'Kilo değişikliği sonrası kıyafet ölçü ayarlamaları. Gömlek, elbise, ceket.',
    detailedDescription: 'Kilo verme veya alma sonrası kıyafetlerinizi yeni ölçülerinize göre ayarlıyoruz. Gömlek, elbise, ceket gibi tüm kıyafet türleri.',
    duration: '2-4 gün',
    features: ['Gömlek ayarı', 'Elbise ayarı', 'Ceket ayarı', 'Ölçü alma'],
    icon: ScissorsIcon,
  },
];

export default function HizmetlerPage() {
  return (
    <div className="py-16 sm:py-24">
      {/* Hero Section */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Terzilik Hizmetlerimiz
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              25 yıllık deneyimimizle sunduğumuz profesyonel terzilik hizmetleri. 
              Kaliteli işçilik ve hızlı teslimat.
            </p>
          </div>
        </div>
      </div>

      {/* Services Detail */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 bg-white">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-gray-700 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">{service.name}</h2>
                </div>
                
                <p className="text-lg text-gray-600 mb-6">
                  {service.detailedDescription}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircleIcon className="h-5 w-5 text-gray-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Duration */}
                <div className="flex items-center mb-6">
                  <div className="flex items-center text-gray-600">
                    <ClockIcon className="h-5 w-5 mr-2" />
                    <span className="font-semibold">Teslim süresi: {service.duration}</span>
                  </div>
                </div>

                <a
                  href="tel:+905337944438"
                  className="inline-flex items-center rounded-md bg-gray-900 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors"
                >
                  Hemen Ara
                </a>
              </div>

              {/* Image placeholder */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="aspect-[4/3] rounded-lg bg-gray-100 flex items-center justify-center">
                  <service.icon className="h-24 w-24 text-gray-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Service CTA */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Acil İşler Kabul Edilir
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Özel durumlar için aynı gün teslim hizmeti sunuyoruz. 
              Acil işleriniz için lütfen önceden arayarak bilgi verin.
            </p>
            <div className="mt-10">
              <a
                href="tel:+905337944438"
                className="inline-flex items-center rounded-md bg-gray-900 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors"
              >
                Acil İş İçin Ara: (533) 794 44 38
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}