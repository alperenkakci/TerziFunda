import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import LocalSEOSection from '@/components/LocalSEOSection';
import LocationSection from '@/components/LocationSection';
import StructuredData from '@/components/StructuredData';

export default function Home() {
  return (
    <>
      <StructuredData />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <LocalSEOSection />
      <LocationSection />
    </>
  );
}