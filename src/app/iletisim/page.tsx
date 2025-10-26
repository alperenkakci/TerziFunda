import { Metadata } from 'next';
import { MapPinIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'İletişim - Terzi Funda | Bahçelievler Konum ve İletişim Bilgileri',
  description: 'Terzi Funda iletişim bilgileri, konum, çalışma saatleri ve yol tarifi. Bahçelievler Zafer Mahallesi\'nde hizmet veriyoruz.',
};

const contactInfo = [
  {
    icon: PhoneIcon,
    title: 'Telefon',
    details: '(533) 794 44 38',
    action: 'tel:+905337944438',
    actionText: 'Ara',
  },
  {
    icon: MapPinIcon,
    title: 'Adres',
    details: 'Zafer Mahallesi Cihangir Sokak No:7 Giriş Dükkan, Bahçelievler/İstanbul',
    action: 'https://share.google/tVjoPFDWt26FQSZu9',
    actionText: 'Yol Tarifi',
  },
  {
    icon: ClockIcon,
    title: 'Çalışma Saatleri',
    details: 'Pzt-Cum: 09:00-18:00\nCmt: 09:00-17:00\nPazar: 10:00-17:00',
    action: null,
    actionText: null,
  },
];

const faqItems = [
  {
    question: 'Randevu almam gerekiyor mu?',
    answer: 'Randevu almanıza gerek yoktur. Çalışma saatlerimiz içinde dükkanımıza gelebilirsiniz. Ancak acil işler için önceden arayarak bilgi vermenizi öneririz.',
  },
  {
    question: 'Fiyatlar nasıl belirleniyor?',
    answer: 'Fiyatlar işin türüne, zorluğuna ve kumaş tipine göre belirlenir. Ücretsiz ölçü alma ve fiyat teklifi için dükkanımızı ziyaret edebilirsiniz.',
  },
  {
    question: 'Teslim süreleri ne kadar?',
    answer: 'Pantolon paça kesme aynı gün, daraltma işlemleri 1-2 gün, onarım işleri 1-3 gün sürmektedir. Acil işler için aynı gün teslim mümkündür.',
  },
  {
    question: 'Hangi bölgelere hizmet veriyorsunuz?',
    answer: 'Bahçelievler, Şirinevler, Soğanlı, Yenibosna ve çevresindeki tüm bölgelere hizmet veriyoruz. Metro ve otobüs ile kolay ulaşım imkanı mevcuttur.',
  },
  {
    question: 'Garanti veriyor musunuz?',
    answer: 'Evet, tüm işlerimiz için garanti veriyoruz. Herhangi bir sorun olması durumunda ücretsiz düzeltme yapılır.',
  },
];

export default function IletisimPage() {
  return (
    <div className="py-16 sm:py-24">
      {/* Hero Section */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              İletişim
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Bahçelievler'de kolayca ulaşabileceğiniz konumumuzda sizleri bekliyoruz. 
              Sorularınız için bize ulaşın.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="flex justify-center mb-4">
                <info.icon className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {info.title}
              </h3>
              <p className="text-gray-600 mb-4 whitespace-pre-line">
                {info.details}
              </p>
              {info.action && (
                <a
                  href={info.action}
                  target={info.action.startsWith('http') ? '_blank' : undefined}
                  rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors"
                >
                  {info.actionText}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Map and Location Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
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
          </div>

          {/* Location Details */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Konum Detayları
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Ulaşım İmkanları
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Bahçelievler Metro İstasyonu'na 5 dakika yürüme mesafesi</li>
                  <li>• Şirinevler, Soğanlı, Yenibosna bölgelerine yakın</li>
                  <li>• Otobüs durağı 2 dakika mesafede</li>
                  <li>• Ücretsiz sokak parkı mevcut</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Çevredeki Önemli Yerler
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Bahçelievler Devlet Hastanesi (10 dk)</li>
                  <li>• Bahçelievler Belediyesi (8 dk)</li>
                  <li>• Carousel AVM (15 dk)</li>
                  <li>• Bahçelievler Pazarı (5 dk)</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-green-900 mb-2">
                  Kolay Bulma İpuçları
                </h4>
                <p className="text-green-800 text-sm">
                  Zafer Mahallesi Cihangir Sokak'ta, sokağın başındaki giriş katta yer alıyoruz. 
                  Bahçelievler Metro'dan çıktıktan sonra Zafer Mahallesi yönüne doğru yürüyün.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Sıkça Sorulan Sorular
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.question}
                </h3>
                <p className="text-gray-600">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Hemen İletişime Geçin
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Kıyafetleriniz için profesyonel terzilik hizmeti almak istiyorsanız, 
              bize ulaşın. Ücretsiz ölçü alma ve fiyat teklifi.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="tel:+905337944438"
                className="inline-flex items-center rounded-md bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-colors"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                (533) 794 44 38
              </a>
              <a
                href="https://share.google/tVjoPFDWt26FQSZu9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold leading-6 text-white hover:text-gray-200 transition-colors"
              >
                Yol Tarifi Al <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}