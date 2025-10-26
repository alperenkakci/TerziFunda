export default function StructuredData() {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://terzifunda.com/#business",
    "name": "Terzi Funda",
    "alternateName": "Funda Terzi Dükkanı",
    "description": "Bahçelievler, Yenibosna, Şirinevler ve çevresinde 25 yıllık deneyimle terzilik hizmeti. Pantolon paça kesme, daraltma, kıyafet onarımı ve ölçü değişiklikleri.",
    "url": "https://terzifunda.com",
    "telephone": "+905337944438",
    "email": "info@terzifunda.com",
    "foundingDate": "1999",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Zafer Mahallesi Cihangir Sokak No:7 Giriş Dükkan",
      "addressLocality": "Bahçelievler",
      "addressRegion": "İstanbul",
      "postalCode": "34180",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.0082,
      "longitude": 28.8584
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "17:00"
      }
    ],
    "paymentAccepted": "Nakit, Kredi Kartı",
    "currenciesAccepted": "TRY",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Terzilik Hizmetleri",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pantolon Paça Kesme",
            "description": "Profesyonel pantolon paça kesme hizmeti, aynı gün teslim",
            "serviceType": "Terzilik"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pantolon Daraltma",
            "description": "Bel ve bacak daraltma işlemleri, ölçü alma dahil",
            "serviceType": "Terzilik"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kıyafet Onarımı",
            "description": "Yırtık, kopuk ve hasar görmüş kıyafetlerin onarımı",
            "serviceType": "Terzilik"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ölçü Değişiklikleri",
            "description": "Gömlek, elbise, ceket ölçü ayarlamaları",
            "serviceType": "Terzilik"
          }
        }
      ]
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Bahçelievler",
        "containedInPlace": {
          "@type": "State",
          "name": "İstanbul"
        }
      },
      {
        "@type": "City", 
        "name": "Yenibosna"
      },
      {
        "@type": "City",
        "name": "Şirinevler"
      },
      {
        "@type": "City",
        "name": "Kocasinan"
      },
      {
        "@type": "City",
        "name": "Soğanlı"
      },
      {
        "@type": "Neighborhood",
        "name": "Zafer Mahallesi"
      }
    ],
    "knowsAbout": [
      "Terzilik",
      "Pantolon paça kesme",
      "Pantolon daraltma", 
      "Kıyafet onarımı",
      "Ölçü değişiklikleri",
      "Tekstil tamiri",
      "Giyim düzeltme"
    ],
    "sameAs": [
      "https://www.google.com/maps/place/Terzi+Funda"
    ]
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://terzifunda.com/#organization",
    "name": "Terzi Funda",
    "url": "https://terzifunda.com",
    "logo": "https://terzifunda.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+905337944438",
      "contactType": "customer service",
      "availableLanguage": "Turkish",
      "areaServed": "TR"
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Ana Sayfa",
        "item": "https://terzifunda.com"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": "Hizmetler",
        "item": "https://terzifunda.com/hizmetler"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Hakkımızda", 
        "item": "https://terzifunda.com/hakkimizda"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "İletişim",
        "item": "https://terzifunda.com/iletisim"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
    </>
  );
}