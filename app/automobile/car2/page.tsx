"use client";

import { useState } from "react";

import HeaderCar from "@/components/HeaderCar";
import Footer from "@/components/Footer";

export default function Car2Page() {
  const images = [
    "/cars/car2/car2.1.avif",
    "/cars/car2/car2.2.avif",
    "/cars/car2/car2.3.avif",
    "/cars/car2/car2.4.avif",
    "/cars/car2/car2.5.avif",
    "/cars/car2/car2.6.avif",
    "/cars/car2/car2.7.avif",
    "/cars/car2/car2.8.avif",
    "/cars/car2/car2.9.avif",
    "/cars/car2/car2.10.avif",
    "/cars/car2/car2.11.avif",
    "/cars/car2/car2.12.avif",
    "/cars/car2/car2.13.avif",
    "/cars/car2/car2.14.avif",
    "/cars/car2/car2.15.avif",
    "/cars/car2/car2.16.avif",
    "/cars/car2/car2.17.avif",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>


           <HeaderCar />

      <main className="min-h-screen bg-gray-50 px-4 md:px-6 py-8 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
                <div className="relative group">
                  <img
                    src={images[currentImage]}
                    alt="Opel Zafira Life"
                    className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover cursor-pointer"
                    onClick={() => setIsOpen(true)}
                  />

                  <button
                    type="button"
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 hover:bg-white text-black shadow-lg flex items-center justify-center text-3xl font-bold transition opacity-100 lg:opacity-0 lg:group-hover:opacity-100 z-20"
                    aria-label="Vorheriges Bild"
                  >
                    ‹
                  </button>

                  <button
                    type="button"
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 hover:bg-white text-black shadow-lg flex items-center justify-center text-3xl font-bold transition opacity-100 lg:opacity-0 lg:group-hover:opacity-100 z-20"
                    aria-label="Nächstes Bild"
                  >
                    ›
                  </button>
                </div>

                <div className="px-3 sm:px-4 py-4">
                  <div className="flex gap-3 sm:gap-4 overflow-x-auto scroll-smooth no-scrollbar pb-1">
                    {images.map((image, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setCurrentImage(index)}
                        className={`flex-shrink-0 rounded-2xl overflow-hidden border-2 transition duration-300 ${
                          currentImage === index
                            ? "border-red-600"
                            : "border-transparent hover:border-red-300"
                        }`}
                      >
                        <img
                          src={image}
                          alt={`Opel Zafira Life ${index + 1}`}
                          className="w-[148px] h-[96px] md:w-[168px] md:h-[108px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-8 sticky top-24">
                <h1 className="text-3xl md:text-4xl font-bold text-black">
                  Opel Zafira Life
                </h1>
                <p className="text-gray-500 text-lg md:text-xl mt-2">
                  Elegance M
                </p>

                <p className="text-red-600 text-3xl md:text-4xl font-bold mt-8">
                  19.900 €
                </p>

                <div className="space-y-4 mt-8 text-gray-700">
                  <p>
                    <strong>Kilometerstand:</strong> 209.000 km
                  </p>
                  <p>
                    <strong>Erstzulassung:</strong> 11/2020
                  </p>
                  <p>
                    <strong>Kraftstoff:</strong> Diesel
                  </p>
                  <p>
                    <strong>Getriebe:</strong> Automatik
                  </p>
                  <p>
                    <strong>Leistung:</strong> 130 kW (177 PS)
                  </p>
                </div>

                <a
                  href="tel:+4915203799152"
                  className="mt-10 block bg-red-600 hover:bg-red-700 transition text-white text-center px-6 py-4 rounded-xl font-semibold"
                >
                  Direkt anfragen
                </a>

                <a
                  href="https://home.mobile.de/home/vip?sb=rel&od=up&customerId=468257&vc=Car&searchId=eb7eb935-88a8-5e8d-e5c2-dcb9b217c220&ref=srp&id=453098559"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block border border-gray-300 hover:border-red-600 transition text-center px-6 py-4 rounded-xl font-semibold text-black"
                >
                  Auf mobile.de ansehen
                </a>
              </div>
            </div>
          </div>

          <section className="mt-12 md:mt-16 bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Ausstattung & Beschreibung
            </h2>

            <p className="text-gray-600 mt-5 md:mt-6 text-base md:text-lg leading-relaxed">
              Gepflegter Opel Zafira Life Elegance mit Automatikgetriebe, großem
              Raumangebot und sehr guter Ausstattung. Das Fahrzeug ist technisch
              in gutem Zustand, geprüft und sofort verfügbar. Ideal als
              Familienfahrzeug, Shuttle, Geschäftswagen oder für lange Reisen
              mit maximalem Komfort.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-10 text-gray-700">
              <p>• Navigationssystem Multimedia Navi Pro</p>
              <p>• Rückfahrkamera mit 180° Umgebungsansicht</p>
              <p>• Sitzheizung vorne</p>
              <p>• Tempomat</p>
              <p>• Klimaautomatik (2-Zonen)</p>
              <p>• 8-Gang Automatikgetriebe</p>
              <p>• 8-Sitzer mit 3. Sitzreihe</p>
              <p>• Panorama-Glasdach</p>
              <p>• Head-Up Display</p>
              <p>• Massagesitze vorne</p>

              {showMore && (
                <>
                  <p>• Bi-Xenon Scheinwerfer</p>
                  <p>• Adaptives Kurvenlicht</p>
                  <p>• Spurhalteassistent</p>
                  <p>• Verkehrszeichenerkennung</p>
                  <p>• Abstandswarner</p>
                  <p>• Berganfahrassistent</p>
                  <p>• Anhängerkupplung abnehmbar</p>
                  <p>• Elektrische Schiebetüren links & rechts</p>
                  <p>• Elektrische Sitzeinstellung</p>
                  <p>• Elektrische Fensterheber</p>
                  <p>• Elektrische Außenspiegel</p>
                  <p>• Innenspiegel automatisch abblendend</p>
                  <p>• Regensensor</p>
                  <p>• Leichtmetallfelgen</p>
                  <p>• Abgedunkelte Scheiben</p>
                  <p>• Bluetooth / DAB Radio</p>
                  <p>• Lederlenkrad</p>
                  <p>• Multifunktionslenkrad</p>
                  <p>• ISOFIX Kindersitzbefestigung</p>
                  <p>• Start/Stopp-Automatik</p>
                  <p>• Partikelfilter + AdBlue</p>
                  <p>• Frontantrieb</p>
                  <p>• Scheckheftgepflegt</p>
                  <p>• Inspektion neu</p>
                  <p>• Standheizung mit Funkfernbedienung</p>
                  <p>• HiFi Soundsystem mit Subwoofer</p>
                  <p>• Parkpilot vorne & hinten</p>
                  <p>• Solar-Protect Wärmeschutzverglasung</p>
                </>
              )}
            </div>

            <div className="mt-10">
              <button
                type="button"
                onClick={() => setShowMore(!showMore)}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition"
              >
                {showMore ? "Weniger anzeigen" : "Mehr Informationen"}
              </button>
            </div>
          </section>
        </div>
        
              <Footer />

      </main>

      {isOpen && (
        <div className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 md:top-6 md:right-6 text-white text-4xl font-bold"
            aria-label="Schließen"
          >
            ×
          </button>

          <button
            type="button"
            onClick={prevImage}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 bg-white/85 hover:bg-white text-black w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg flex items-center justify-center text-2xl font-bold transition"
            aria-label="Vorheriges Bild"
          >
            ←
          </button>

          <img
            src={images[currentImage]}
            alt="Opel Zafira Life groß"
            className="max-w-[92vw] max-h-[88vh] object-contain rounded-2xl shadow-2xl"
          />

          <button
            type="button"
            onClick={nextImage}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 bg-white/85 hover:bg-white text-black w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg flex items-center justify-center text-2xl font-bold transition"
            aria-label="Nächstes Bild"
          >
            →
          </button>
        </div>
      )}
    </>
  );
}