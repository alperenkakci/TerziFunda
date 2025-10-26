import { Metadata } from 'next';
import { StarIcon, UserIcon, ClockIcon, HeartIcon } from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: 'Hakkımızda - Terzi Funda | 25 Yıllık Deneyim',
  description: '1999 yılından bu yana Bahçelievler\'de hizmet veren Terzi Funda\'nın 25 yıllık tekstil deneyimi.',
};

const values = [
  {
    name: 'Kalite',
    description: 'Her işimizde en yüksek kalite standartlarını uygularız.',
    icon: StarIcon,
  },
  {
    name: 'Güven',
    description: 'Müşterilerimizle uzun vadeli güven ilişkisi kurarız.',
    icon: HeartIcon,
  },
  {
    name: 'Deneyim',
    description: '25 yıllık sektör deneyimimizi her işe yansıtırız.',
    icon: ClockIcon,
  },
  {
    name: 'Müşteri Odaklılık',
    description: 'Müşteri memnuniyeti bizim için en önemli önceliktir.',
    icon: UserIcon,
  },
];

export default function HakkimizdaPage() {
  return (
    <div className="py-16 sm:py-24 bg-white">
      {/* Hero Section */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Hakkımızda
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Bahçelievler'de 25 yıldır kaliteli terzilik hizmeti sunuyoruz.
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Terzi Funda
            </h2>
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                1999 yılından bu yana Bahçelievler Zafer Mahallesi'nde hizmet veriyoruz. 
                25 yıllık deneyimimizle pantolon paça kesme, daraltma, kıyafet onarımı 
                ve ölçü değişiklikleri konularında uzmanlaştık.
              </p>
              <p>
                Kaliteli işçilik ve uygun fiyat politikamızla müşterilerimize 
                en iyi hizmeti sunmaya devam ediyoruz. Dükkanımızda her kıyafeti 
                özenle işliyor, müşteri memnuniyetini ön planda tutuyoruz.
              </p>
            </div>
          </div>
          
          {/* Image placeholder */}
          <div className="aspect-[4/3] rounded-2xl bg-gray-100 flex items-center justify-center">
            <UserIcon className="h-32 w-32 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Neden Bizi Tercih Etmelisiniz?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              İş yapış şeklimizi belirleyen temel prensiplerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.name} className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="flex justify-center mb-4">
                  <value.icon className="h-12 w-12 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.name}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Kıyafetleriniz İçin Bize Ulaşın
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Profesyonel terzilik hizmeti için dükkanımızı ziyaret edin. 
              Ücretsiz ölçü alma ve fiyat teklifi.
            </p>
            <div className="mt-10">
              <a
                href="tel:+905337944438"
                className="inline-flex items-center rounded-md bg-gray-900 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors"
              >
                Hemen Ara: (533) 794 44 38
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}