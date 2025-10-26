import { PhoneIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function HeroSection() {
  return (
    <section className="relative bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            25 Yıllık Deneyimle
            <span className="text-gray-700"> Kaliteli Terzilik</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Bahçelievler, Yenibosna, Şirinevler, Kocasinan bölgelerinde profesyonel terzilik hizmeti. 
            Pantolon paça kesme, daraltma ve kıyafet onarımında uzman. Metro yakını, aynı gün teslim.
          </p>
          
          {/* Key Features */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center text-green-700">
              <CheckCircleIcon className="h-5 w-5 mr-2" />
              <span>25 Yıllık Deneyim</span>
            </div>
            <div className="flex items-center text-green-700">
              <CheckCircleIcon className="h-5 w-5 mr-2" />
              <span>Uygun Fiyatlar</span>
            </div>
            <div className="flex items-center text-green-700">
              <CheckCircleIcon className="h-5 w-5 mr-2" />
              <span>Acil İşler Kabul Edilir</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="tel:+905337944438"
              className="inline-flex items-center rounded-md bg-gray-900 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 transition-colors"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              Hemen Ara
            </a>
            <a
              href="#hizmetler"
              className="text-base font-semibold leading-6 text-gray-900 hover:text-gray-700 transition-colors"
            >
              Hizmetleri Gör <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>


    </section>
  );
}