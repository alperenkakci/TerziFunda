import { StarIcon, UserIcon, ClockIcon } from '@heroicons/react/24/solid';

const features = [
  {
    name: '25 Yıllık Deneyim',
    description: 'Tekstil sektöründe çeyrek asırlık deneyim ile kaliteli hizmet.',
    icon: ClockIcon,
  },
  {
    name: 'Uzman İşçilik',
    description: 'Her türlü kıyafet onarımı ve ölçü değişikliğinde profesyonel yaklaşım.',
    icon: UserIcon,
  },
  {
    name: 'Müşteri Memnuniyeti',
    description: 'Yıllardır güvenilir hizmet veren, müşteri odaklı çalışma prensibi.',
    icon: StarIcon,
  },
];

export default function AboutSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Terzi Funda
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            1999 yılından bu yana Bahçelievler'de hizmet veriyoruz. 
            25 yıllık deneyimimizle pantolon paça kesme, daraltma, kıyafet onarımı 
            ve ölçü değişiklikleri konularında uzmanlaştık.
          </p>
        </div>

        {/* Features */}
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt className="flex items-center text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-6 w-6 text-gray-700 mr-3" />
                  {feature.name}
                </dt>
                <dd className="mt-2 ml-9 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}