"use client";

import { useState } from "react";

export default function Car1Page() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/cars/car1/car1.avif",
    "/cars/car1/car1.2.avif",
    "/cars/car1/car1.3.avif",
    "/cars/car1/car1.4.avif",
    "/cars/car1/car1.5.avif",
    "/cars/car1/car1.6.avif",
    "/cars/car1/car1.8.avif",
    "/cars/car1/car1.9.avif",
    "/cars/car1/car1.10.avif",
    "/cars/car1/car1.11.avif",
    "/cars/car1/car1.12.avif",
  ];

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 text-black">
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-red-600">
              Nabil Car
            </h1>
            <p className="text-sm tracking-[0.4em] text-gray-500 uppercase">
              Nordhorn
            </p>
          </div>

          <div className="hidden md:flex gap-10 text-lg font-medium">
            <a href="/">Startseite</a>
            <a href="/#ueber-uns">Über uns</a>
            <a href="/#fahrzeuge">Fahrzeuge</a>
            <a href="/#reifen">Reifen & Felgen</a>
            <a href="/#kontakt">Kontakt</a>
          </div>

          <a
            href="/#fahrzeuge"
            className="bg-red-600 hover:bg-red-700 transition text-white px-6 py-3 rounded-xl font-semibold shadow-lg"
          >
            Zurück zu Fahrzeuge
          </a>
        </nav>
      </header>

      <main className="min-h-screen bg-gray-50 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 relative">
                <img
                  src={images[currentImage]}
                  alt="Ford Kuga"
                  className="w-full h-[520px] object-cover"
                />

<button
  onClick={() =>
    setCurrentImage(
      currentImage === 0
        ? images.length - 1
        : currentImage - 1
    )
  }
  className="absolute left-6 top-1/3 -translate-y-1/2 bg-white/60 text-black hover:bg-gray-800 w-25 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl font-bold"
>
  Zurück
</button>

<button
  onClick={() =>
    setCurrentImage(
      currentImage === images.length - 1
        ? 0
        : currentImage + 1
    )
  }
  className="absolute right-6 top-1/3 -translate-y-1/2 bg-white/60 text-black hover:bg-gray-800 w-25 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl font-bold"
>
  Weiter
</button>

                <div className="grid grid-cols-5 gap-3 p-4">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Ford Kuga Bild ${index + 1}`}
                      onClick={() => setCurrentImage(index)}
                      className="w-full h-24 object-cover rounded-xl border border-gray-200 cursor-pointer"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 sticky top-28">
                <h1 className="text-4xl font-bold">Ford Kuga</h1>
                <p className="text-gray-500 text-xl mt-2">ST-Line</p>

                <p className="text-red-600 text-4xl font-bold mt-8">
                  12.950 €
                </p>

                <div className="space-y-4 mt-8 text-gray-700">
                  <p><strong>Kilometerstand:</strong> 186.000 km</p>
                  <p><strong>Erstzulassung:</strong> 07/2019</p>
                  <p><strong>Kraftstoff:</strong> Diesel</p>
                  <p><strong>Getriebe:</strong> Automatik</p>
                  <p><strong>Leistung:</strong> 132 kW (179 PS)</p>
                </div>

                <a
                  href="tel:+4915256008836"
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

          <section className="mt-16 bg-white rounded-3xl shadow-lg border border-gray-100 p-10">
            <h2 className="text-3xl font-bold">Ausstattung & Beschreibung</h2>

            <p className="text-gray-600 mt-6 text-lg leading-relaxed">
              Gepflegter Ford Kuga ST-Line mit Automatikgetriebe, guter
              Ausstattung und zuverlässigem Dieselantrieb. Das Fahrzeug ist
              geprüft, sofort verfügbar und eignet sich ideal als Familien-
              oder Alltagsfahrzeug.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-10 text-gray-700">
              <p>• Navigationssystem</p>
              <p>• Rückfahrkamera</p>
              <p>• Sitzheizung</p>
              <p>• Tempomat</p>
              <p>• Einparkhilfe</p>
              <p>• Alufelgen</p>
              <p>• Klimaautomatik</p>
              <p>• Bluetooth / Freisprecheinrichtung</p>
            </div>
          </section>
        </div>

{/* Footer */}
<footer className="bg-gray-100 border-t border-gray-200 py-20 px-6 mt-24">
  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
    <div>
      <h3 className="text-2xl font-bold text-red-600 mb-6">
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
      <h3 className="text-2xl font-bold text-red-600 mb-6">
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
        Mo - Fr: 09:00 – 18:00 Uhr
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-bold text-red-600 mb-6">
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
    </>
  );
}