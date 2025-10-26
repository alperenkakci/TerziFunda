import { ScissorsIcon, ClockIcon } from '@heroicons/react/24/outline';

const services = [
  {
    id: 1,
    name: 'Pantolon Paça Kesme',
    description: 'Profesyonel pantolon paça kesme hizmeti. Orijinal dikişi korunarak yapılır.',
    duration: 'Aynı gün',
    icon: ScissorsIcon,
  },
  {
    id: 2,
    name: 'Pantolon Daraltma',
    description: 'Bel ve bacak daraltma işlemleri. Kıyafetiniz vücudunuza tam oturacak şekilde ayarlanır.',
    duration: '1-2 gün',
    icon: ScissorsIcon,
  },
  {
    id: 3,
    name: 'Kıyafet Onarımı',
    description: 'Yırtık, kopuk ve hasar görmüş kıyafetlerin onarımı. Görünmez tamir tekniği.',
    duration: '1-3 gün',
    icon: ScissorsIcon,
  },
  {
    id: 4,
    name: 'Ölçü Değişiklikleri',
    description: 'Kilo değişikliği sonrası kıyafet ölçü ayarlamaları. Gömlek, elbise, ceket.',
    duration: '2-4 gün',
    icon: ScissorsIcon,
  },
];

export default function ServicesSection() {
  return (
    <section id="hizmetler" className="py-16 sm:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hizmetlerimiz
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            25 yıllık deneyimimizle sunduğumuz kaliteli terzilik hizmetleri
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col rounded-lg bg-white border border-gray-200 p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center">
                <service.icon className="h-8 w-8 text-gray-700" />
                <h3 className="ml-3 text-xl font-semibold text-gray-900">
                  {service.name}
                </h3>
              </div>
              
              <p className="mt-4 text-gray-600 flex-grow">
                {service.description}
              </p>
              
              <div className="mt-6">
                <div className="flex items-center text-sm text-gray-500">
                  <ClockIcon className="h-4 w-4 mr-1" />
                  <span>Teslim süresi: {service.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Service Notice */}
        <div className="mt-12 rounded-lg bg-white border border-gray-200 p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Acil İşler Kabul Edilir
          </h3>
          <p className="text-gray-600">
            Özel durumlar için aynı gün teslim hizmeti sunuyoruz. 
            Acil işleriniz için lütfen önceden arayarak bilgi verin.
          </p>
        </div>
      </div>
    </section>
  );
}