"use client";

import { useState } from "react";

export default function Car1Page() {
  const images = [
    "/cars/car1/car2.1.avif",
    "/cars/car1/car2.2.avif",
    "/cars/car1/car2.3.avif",
    "/cars/car1/car2.4.avif",
    "/cars/car1/car2.5.avif",
    "/cars/car1/car2.6.avif",
    "/cars/car1/car2.7.avif",
    "/cars/car1/car2.8.avif",
    "/cars/car1/car2.9.avif",
    "/cars/car1/car2.10.avif",
    "/cars/car1/car2.11.avif",
    "/cars/car1/car2.12.avif",
    "/cars/car1/car2.13.avif",
    "/cars/car1/car2.14.avif",
    "/cars/car1/car2.15.avif",
    "/cars/car1/car2.16.avif",
    "/cars/car1/car2.17.avif",
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
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 text-black">
        <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-red-600">
              Nabil Car
            </h1>
            <p className="text-xs md:text-sm tracking-[0.35em] md:tracking-[0.4em] text-gray-500 uppercase">
              Nordhorn
            </p>
          </div>

          <div className="hidden lg:flex gap-8 text-lg font-medium text-gray-800">
            <a href="/" className="hover:text-red-600 transition">
              Startseite
            </a>
            <a href="/#ueber-uns" className="hover:text-red-600 transition">
              Über uns
            </a>
            <a href="/#fahrzeuge" className="hover:text-red-600 transition">
              Fahrzeuge
            </a>
            <a href="/#reifen" className="hover:text-red-600 transition">
              Reifen & Felgen
            </a>
            <a href="/#kontakt" className="hover:text-red-600 transition">
              Kontakt
            </a>
          </div>

          <a
            href="/#fahrzeuge"
            className="bg-red-600 hover:bg-red-700 transition text-white px-4 md:px-6 py-2.5 md:py-3 rounded-xl font-semibold shadow-lg text-sm md:text-base whitespace-nowrap"
          >
            Zurück zu Fahrzeuge
          </a>
        </nav>
      </header>

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

                <div className="grid grid-cols-5 gap-3 p-3 md:p-4">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrentImage(index)}
                      className={`rounded-xl overflow-hidden border transition ${
                        currentImage === index
                          ? "border-red-600 ring-2 ring-red-600"
                          : "border-gray-200 hover:border-red-300"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Opel Zafira Life ${index + 1}`}
                        className="w-full h-16 sm:h-20 md:h-24 object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-8 sticky top-24">
                <h1 className="text-3xl md:text-4xl font-bold text-black">
                  Opel Zafira Life
                </h1>
                <p className="text-gray-500 text-lg md:text-xl mt-2">Elegance M</p>

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
                  href="https://home.mobile.de/home/vip?sb=p&od=down&customerId=468257&vc=Car&ref=srp&searchId=740b3c4a-f995-b91d-b4c9-0a0725a692f7&id=441291645"
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
              Gepflegter Opel Zafira Life Elegance mit Automatikgetriebe, großem Raumangebot
              und sehr guter Ausstattung. Das Fahrzeug ist technisch in gutem Zustand,
              geprüft und sofort verfügbar. Ideal als Familienfahrzeug, Shuttle,
              Geschäftswagen oder für lange Reisen mit maximalem Komfort.
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

        <footer className="bg-gray-100 border-t border-gray-200 py-16 md:py-20 px-4 md:px-6 mt-20 md:mt-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-5">Adresse</h3>
              <p className="text-gray-700 leading-relaxed">
                Nabil Car Nordhorn
                <br />
                Gildehauser Weg 16 & 22
                <br />
                48529 Nordhorn
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-5">Telefon</h3>
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
                  href="/reifen-anfrage"
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
            alt="Ford Kuga groß"
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