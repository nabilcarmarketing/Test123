"use client";

import { useState } from "react";

import HeaderCar from "@/components/HeaderCar";
import Footer from "@/components/Footer";

export default function Car4Page() {
  const images = [
    "/cars/car4/car4.1.avif",
    "/cars/car4/car4.2.avif",
    "/cars/car4/car4.3.avif",
    "/cars/car4/car4.4.avif",
    "/cars/car4/car4.5.avif",
    "/cars/car4/car4.6.avif",
    "/cars/car4/car4.7.avif",
    "/cars/car4/car4.8.avif",
    "/cars/car4/car4.9.avif",
    "/cars/car4/car4.10.avif",
    "/cars/car4/car4.11.avif",
    "/cars/car4/car4.12.avif",
    "/cars/car4/car4.13.avif",
    "/cars/car4/car4.14.avif",
    "/cars/car4/car4.15.avif",
    "/cars/car4/car4.16.avif",
    "/cars/car4/car4.17.avif",
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
                    alt="Opel Insignia"
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

                <div className="relative p-4">
                  <div className="flex gap-3 overflow-x-auto scroll-smooth no-scrollbar">
                    {images.map((image, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setCurrentImage(index)}
                        className={`flex-shrink-0 rounded-2xl overflow-hidden border-2 transition ${
                          currentImage === index
                            ? "border-red-600"
                            : "border-transparent hover:border-red-300"
                        }`}
                      >
                        <img
                          src={image}
                          alt={`Opel Insignia ${index + 1}`}
                          className="w-[140px] h-[90px] md:w-[160px] md:h-[100px] object-cover"
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
                  Opel Insignia
                </h1>
                <p className="text-gray-500 text-lg md:text-xl mt-2">
                  B Sports Tourer Innovation
                </p>

                <p className="text-red-600 text-3xl md:text-4xl font-bold mt-8">
                  10.950 €
                </p>

                <div className="space-y-4 mt-8 text-gray-700">
                  <p>
                    <strong>Kilometerstand:</strong> 172.000 km
                  </p>
                  <p>
                    <strong>Erstzulassung:</strong> 09/2018
                  </p>
                  <p>
                    <strong>Kraftstoff:</strong> Diesel
                  </p>
                  <p>
                    <strong>Getriebe:</strong> Automatik
                  </p>
                  <p>
                    <strong>Leistung:</strong> 125 kW (170 PS)
                  </p>
                </div>

                <a
                  href="tel:+4915203799152"
                  className="mt-10 block bg-red-600 hover:bg-red-700 transition text-white text-center px-6 py-4 rounded-xl font-semibold"
                >
                  Direkt anfragen
                </a>

                <a
                  href="https://home.mobile.de/home/vip?sb=p&od=down&customerId=468257&vc=Car&ref=srp&searchId=b587d8ec-77d9-88ef-e335-eaa3183eab36&id=443669461"
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
              Gepflegter Opel Insignia Sports Tourer Innovation mit
              Automatikgetriebe, sehr guter Ausstattung und komfortablem
              Dieselantrieb. Das Fahrzeug ist technisch in gutem Zustand,
              geprüft und sofort verfügbar. Ideal als Familienfahrzeug,
              Alltagswagen oder für lange Strecken mit hohem Komfort.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-10 text-gray-700">
              <p>• Multimedia Navi Pro</p>
              <p>• Rückfahrkamera + Einparkhilfe vorne & hinten</p>
              <p>• Sitzheizung vorne</p>
              <p>• Tempomat</p>
              <p>• Klimaautomatik (2-Zonen)</p>
              <p>• 8-Gang Automatikgetriebe</p>
              <p>• LED IntelliLux Scheinwerfer</p>
              <p>• Panorama-Schiebedach elektrisch</p>
              <p>• Spurhalteassistent</p>
              <p>• Apple CarPlay & Android Auto</p>

              {showMore && (
                <>
                  <p>• ABS / ESP / Traktionskontrolle</p>
                  <p>• ISOFIX Kindersitzbefestigung</p>
                  <p>• Lederlenkrad beheizbar</p>
                  <p>• Multifunktionslenkrad</p>
                  <p>• Elektrische Fensterheber</p>
                  <p>• Elektrische & beheizbare Außenspiegel</p>
                  <p>• Keyless Zentralverriegelung</p>
                  <p>• Berganfahr-Assistent</p>
                  <p>• Frontantrieb</p>
                  <p>• Start/Stopp-Automatik</p>
                  <p>• Adaptives Kurvenlicht</p>
                  <p>• Allwetterreifen</p>
                  <p>• Anhängerkupplung abnehmbar</p>
                  <p>• Leichtmetallfelgen</p>
                  <p>• DAB Radio + Bluetooth</p>
                  <p>• Bordcomputer</p>
                  <p>• Ergonomiesitze vorne</p>
                  <p>• Wärmeschutzverglasung hinten</p>
                  <p>• Partikelfilter</p>
                  <p>• Euro 6 / Umweltplakette Grün</p>
                  <p>• HU Neu</p>
                  <p>• Anhängelast gebremst: 1.950 kg</p>
                  <p>• Servolenkung</p>
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
            alt="Opel Insignia groß"
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