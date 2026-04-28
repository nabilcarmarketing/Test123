"use client";

import { useRef, useState } from "react";

import HeaderCar from "@/components/HeaderCar";

export default function Car6Page() {
  const images = [
    "/cars/car6/car6.1.avif",
    "/cars/car6/car6.2.avif",
    "/cars/car6/car6.3.avif",
    "/cars/car6/car6.4.avif",
    "/cars/car6/car6.5.avif",
    "/cars/car6/car6.6.avif",
    "/cars/car6/car6.7.avif",
    "/cars/car6/car6.8.avif",
    "/cars/car6/car6.9.avif",
    "/cars/car6/car6.10.avif",
    "/cars/car6/car6.11.avif",
    "/cars/car6/car6.12.avif",
    "/cars/car6/car6.13.avif",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

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
                    alt="Citroën C3"
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


                  <div
                    ref={sliderRef}
                    className="flex gap-3 overflow-x-auto scroll-smooth no-scrollbar "
                  >
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
                          alt={`Citroën C3 ${index + 1}`}
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
                  Citroën C3
                </h1>
                <p className="text-gray-500 text-lg md:text-xl mt-2">
                  Tendance
                </p>

                <p className="text-red-600 text-3xl md:text-4xl font-bold mt-8">
                  5.950 €
                </p>

                <div className="space-y-4 mt-8 text-gray-700">
                  <p>
                    <strong>Kilometerstand:</strong> 57.000 km
                  </p>
                  <p>
                    <strong>Erstzulassung:</strong> 06/2010
                  </p>
                  <p>
                    <strong>Kraftstoff:</strong> Benzin
                  </p>
                  <p>
                    <strong>Getriebe:</strong> Schaltgetriebe
                  </p>
                  <p>
                    <strong>Leistung:</strong> 70 kW (95 PS)
                  </p>
                </div>

                <a
                  href="tel:+4915203799152"
                  className="mt-10 block bg-red-600 hover:bg-red-700 transition text-white text-center px-6 py-4 rounded-xl font-semibold"
                >
                  Direkt anfragen
                </a>

                <a
                  href="https://home.mobile.de/home/vip?sb=ml&od=up&customerId=468257&vc=Car&ref=srp&searchId=a648873f-bd9f-c53a-88ce-e8b105f8de6e&id=450680978"
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
              Gepflegter Citroën C3 Tendance mit sparsamem Benzinmotor, niedrigem
              Kilometerstand und zuverlässiger Ausstattung. Das Fahrzeug ist technisch in
              gutem Zustand, geprüft und sofort verfügbar. Ideal als Stadtfahrzeug,
              Fahranfängerauto oder günstiger Alltagswagen.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-10 text-gray-700">
              <p>• Klimaanlage</p>
              <p>• Panorama-Dach</p>
              <p>• Bordcomputer</p>
              <p>• Elektrische Fensterheber</p>
              <p>• ISOFIX Kindersitzbefestigung</p>
              <p>• Leichtmetallfelgen</p>
              <p>• Lederlenkrad</p>
              <p>• Nebelscheinwerfer</p>
              <p>• Zentralverriegelung</p>
              <p>• Nichtraucher-Fahrzeug</p>

              {showMore && (
                <>
                  <p>• ABS / ESP</p>
                  <p>• Front- und Seiten-Airbags</p>
                  <p>• Frontantrieb</p>
                  <p>• Servolenkung</p>
                  <p>• Sommerreifen</p>
                  <p>• Winterreifen</p>
                  <p>• Stahlfelgen</p>
                  <p>• Metallic-Lackierung</p>
                  <p>• City-Paket</p>
                  <p>• Garantie</p>
                  <p>• Inspektion neu</p>
                  <p>• HU Neu</p>
                  <p>• Euro 5</p>
                  <p>• 2 Fahrzeughalter</p>
                  <p>• Anhängelast gebremst: 1.150 kg</p>
                  <p>• Anhängelast ungebremst: 570 kg</p>
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

        <footer className="bg-gray-100 border-t border-gray-200 py-16 md:py-20 px-4 md:px-6 mt-20 md:mt-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-5">
                Adresse
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Nabil Car Nordhorn
                <br />
                Gildehauser Weg 16 & 22
                <br />
                48529 Nordhorn
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-5">
                Telefon
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Tel.: +49 1520 3799152
                <br />
                Tel. 2: +49 152 540728
                <br />
                Mobil: +49 5921 7123553
                <br />
                Fax: +49 5921 784642
                <br />
                <br />
                Mo - Fr: 09:00 - 18:00 Uhr
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-5">
                Informationen
              </h3>

              <div className="flex flex-col gap-3">
                <a
                  href="/impressum"
                  className="text-gray-700 hover:text-red-600 transition font-medium"
                >
                  Impressum
                </a>

                <a
                  href="/datenschutz"
                  className="text-gray-700 hover:text-red-600 transition font-medium"
                >
                  Datenschutz
                </a>

                <a
                  href="/reifen"
                  className="text-gray-700 hover:text-red-600 transition font-medium"
                >
                  Reifen-Anfrage
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {isOpen && (
        <div className="fixed inset-0 z-[999] bg-black/95 flex flex-col items-center justify-center p-4">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 md:top-6 md:right-6 text-white text-4xl font-bold"
            aria-label="Schließen"
          >
            ×
          </button>

          <div className="relative flex items-center justify-center w-full flex-1">
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
              alt="Citroën C3 groß"
              className="max-w-[92vw] max-h-[76vh] object-contain rounded-2xl shadow-2xl"
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

          <div className="w-full max-w-6xl mt-4 overflow-x-auto pb-2">
            <div className="flex gap-3 justify-start md:justify-center min-w-max px-1">
              {images.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentImage(index)}
                  className={`flex-shrink-0 rounded-2xl overflow-hidden border-2 transition ${
                    currentImage === index
                      ? "border-red-600 ring-2 ring-red-600"
                      : "border-white/20 hover:border-red-300"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Citroën C3 ${index + 1}`}
                    className="w-[88px] h-[60px] md:w-[110px] md:h-[74px] object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}