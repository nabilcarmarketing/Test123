import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Top Info Bar */}
<div className="bg-red-600 text-white text-sm">
  <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
    


    <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
    </div>

  </div>
</div>

      {/* Header */}
<header className="bg-white border-b border-gray-200 sticky top-0 z-50">
  <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6 flex items-center justify-between">
    
    {/* Logo */}
    <div>
      <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-red-600">
        Nabil Car
      </h1>

      <p className="text-xs md:text-sm tracking-[0.3em] md:tracking-[0.4em] text-gray-500 uppercase ml-1 md:ml-3">
        Nordhorn
      </p>
    </div>

    {/* Desktop Navigation */}
    <div className="hidden lg:flex gap-8 xl:gap-10 text-base xl:text-lg font-medium text-gray-800">
      <a href="#" className="hover:text-red-600 transition">
        Startseite
      </a>

      <a href="#ueber-uns" className="hover:text-red-600 transition">
        Über uns
      </a>

      <a href="#fahrzeuge" className="hover:text-red-600 transition">
        Fahrzeuge
      </a>

      <a href="#reifen" className="hover:text-red-600 transition">
        Reifen & Felgen
      </a>

      <a href="#kontakt" className="hover:text-red-600 transition">
        Kontakt
      </a>
    </div>

    {/* Mobile.de Button */}
    <a
      href="https://home.mobile.de/NABIL-CAR"
      className="bg-red-600 hover:bg-red-700 transition text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold shadow-lg text-sm md:text-base"
    >
      Mobile.de
    </a>

  </nav>
</header>

      {/* Hero Section */}
<section className="relative min-h-[600px] md:min-h-[700px] flex items-center">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "linear-gradient(to right, rgba(0,0,0,0.72), rgba(0,0,0,0.25)), url('/images/Header.png')",
    }}
  />

  <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full text-white">
    <p className="uppercase tracking-[0.25em] md:tracking-[0.35em] text-red-500 text-xs md:text-sm font-medium">
      Nabil Car Nordhorn
    </p>

    <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold leading-tight mt-4">
      An- & Verkauf von
      <br />
      <span className="text-red-500">
        Gebrauchtwagen
      </span>
    </h2>

    <p className="text-base sm:text-lg md:text-xl text-gray-200 mt-6 md:mt-8 max-w-2xl leading-relaxed">
      Gebrauchtwagen, Premium Reifensätze, Alufelgen &
      Kompletträder zu fairen Preisen - mit Büro,
      Fahrzeugbestand und persönlicher Beratung direkt
      in Nordhorn.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-10 w-full sm:w-auto">
      <a
        href="https://home.mobile.de/NABIL-CAR"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-600 hover:bg-red-700 transition px-6 md:px-8 py-4 rounded-xl font-semibold text-base md:text-lg text-white text-center w-full sm:w-auto"
      >
        Fahrzeuge ansehen
      </a>

      <a
        href="tel:+4915203799152"
        className="border border-white px-6 md:px-8 py-4 rounded-xl font-semibold text-base md:text-lg text-white text-center hover:bg-white hover:text-black transition w-full sm:w-auto"
      >
        Termin vereinbaren
      </a>
    </div>
  </div>
</section>

     {/* Vorteile */}
<section className="bg-gray-50 py-16 px-4 md:px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-xl font-bold">
        Geprüfte Qualität
      </h3>

      <p className="text-gray-600 mt-3 leading-relaxed">
        Alle Fahrzeuge werden sorgfältig geprüft und in
        gepflegtem Zustand angeboten.
      </p>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-xl font-bold">
        Große Auswahl
      </h3>

      <p className="text-gray-600 mt-3 leading-relaxed">
        Fahrzeuge, Reifensätze, Alufelgen und
        Kompletträder direkt vor Ort verfügbar.
      </p>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-xl font-bold">
        Faire Preise
      </h3>

      <p className="text-gray-600 mt-3 leading-relaxed">
        Ehrliche Beratung, transparente Preise und
        zuverlässige Kaufabwicklung.
      </p>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-xl font-bold">
        Schnelle Abwicklung
      </h3>

      <p className="text-gray-600 mt-3 leading-relaxed">
        Unkomplizierte Prozesse und schnelle
        Terminvereinbarung ohne Umwege.
      </p>
    </div>

  </div>
</section>

      



{/* Über Uns */}
<section
  id="ueber-uns"
  className="py-20 md:py-24 px-4 md:px-6 bg-white border-t border-gray-200"
>
  <div className="max-w-7xl mx-auto">
    <p className="text-red-600 uppercase tracking-[0.25em] md:tracking-[0.3em] text-xs md:text-sm font-medium">
      Über Uns
    </p>

    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 leading-tight">
      Vertrauen, Erfahrung & echte regionale Präsenz
    </h2>

    <p className="text-gray-600 mt-6 md:mt-8 max-w-4xl text-base md:text-lg leading-relaxed">
      Seit über 25 Jahren steht Nabil Car in Nordhorn für zuverlässigen
      Gebrauchtwagenhandel und persönliche Beratung.
      Als familiengeführter Betrieb legen wir Wert auf faire Preise,
      ehrliche Beratung und langfristige Kundenzufriedenheit.
      Unsere Fahrzeuge werden vor dem Verkauf sorgfältig geprüft,
      technisch vorbereitet und professionell aufbereitet.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 md:mt-14">
      <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
        <h3 className="text-2xl md:text-3xl font-bold text-red-600">
          25+
        </h3>
        <p className="text-gray-700 mt-3 font-medium leading-relaxed">
          Jahre Erfahrung auf mobile.de und im Fahrzeughandel
        </p>
      </div>

      <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
        <h3 className="text-2xl md:text-3xl font-bold text-red-600">
          4,2★
        </h3>
        <p className="text-gray-700 mt-3 font-medium leading-relaxed">
          Positive Bewertungen und langjähriges Vertrauen unserer Kunden
        </p>
      </div>

      <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
        <h3 className="text-2xl md:text-3xl font-bold text-red-600">
          3 Sprachen
        </h3>
        <p className="text-gray-700 mt-3 font-medium leading-relaxed">
          Deutsch, Arabisch und Englisch für persönliche Beratung
        </p>
      </div>

      <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
        <h3 className="text-2xl md:text-3xl font-bold text-red-600">
          Regional
        </h3>
        <p className="text-gray-700 mt-3 font-medium leading-relaxed">
          Engagement in der Region und Unterstützung lokaler Vereine
        </p>
      </div>
    </div>

    <div className="mt-14 md:mt-16 bg-gray-900 text-white rounded-3xl p-6 md:p-10">
      <h3 className="text-2xl md:text-3xl font-bold leading-tight">
        Verwurzelt in Nordhorn - mehr als nur Fahrzeughandel
      </h3>

      <p className="text-gray-300 mt-5 md:mt-6 text-base md:text-lg leading-relaxed max-w-4xl">
        Neben dem Fahrzeughandel engagieren wir uns seit Jahren aktiv
        in der Region und unterstützen verschiedene Vereine und den
        lokalen Sport - unter anderem durch Sponsoring von Vereinen wie
        dem VfL Nordhorn, SV Schwefingen und Volleyballvereinen aus Uelsen.
        Für uns bedeutet Geschäft nicht nur Verkauf, sondern langfristige
        Beziehungen, Vertrauen und Verantwortung vor Ort.
      </p>
    </div>
  </div>
</section>





{/* Fahrzeuge */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-6 mt-14 mb-20 items-start">
  {[
    {
      name: "Ford Kuga ST-Line",
      details: "07/2019 • Diesel • Automatik • 186.000 km",
      price: "12.950 €",
      link: "/automobile/car1",
      image: "/cars/car1/car1.avif",
    },
    {
      name: "Audi Q5",
      details: "2019 • Diesel • Automatik • 102.000 km",
      price: "34.900 €",
      link: "/automobile/car2",
      image: "/cars/car2.jpg",
    },
    {
      name: "Mercedes C220",
      details: "2021 • Diesel • Automatik • 74.000 km",
      price: "31.500 €",
      link: "/automobile/car3",
      image: "/cars/car3.jpg",
    },
    {
      name: "VW Golf 8 GTD",
      details: "2021 • Diesel • Automatik • 58.000 km",
      price: "28.400 €",
      link: "/automobile/car4",
      image: "/cars/car4.jpg",
    },
    {
      name: "BMW X3",
      details: "2020 • Diesel • Automatik • 95.000 km",
      price: "36.900 €",
      link: "/automobile/car5",
      image: "/cars/car5.jpg",
    },
    {
      name: "Audi A6",
      details: "2019 • Diesel • Automatik • 110.000 km",
      price: "33.800 €",
      link: "/automobile/car6",
      image: "/cars/car6.jpg",
    },
  ].map((car) => (
    <div
      key={car.name}
      className="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden hover:shadow-xl transition h-fit max-w-md w-full mx-auto"
    >
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-8">
        <h3 className="text-2xl font-bold leading-tight">
          {car.name}
        </h3>

        <p className="text-gray-600 mt-3 text-base leading-relaxed">
          {car.details}
        </p>

        <p className="text-red-600 text-2xl font-bold mt-5">
          {car.price}
        </p>

        <a
          href={car.link}
          className="mt-6 inline-block bg-red-600 hover:bg-red-700 transition text-white px-6 py-3 rounded-xl font-semibold"
        >
          Mehr erfahren
        </a>
      </div>
    </div>
  ))}
</div>







{/* Reifen & Felgen */}
<section
  id="reifen"
  className="bg-black text-white py-20 md:py-24 px-4 md:px-6"
>
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    {/* Linke Seite */}
    <div>
      <p className="text-red-600 uppercase tracking-[0.25em] md:tracking-[0.3em] text-xs md:text-sm font-semibold">
        Reifen & Felgen
      </p>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 leading-tight">
        Premium Reifensätze,
      </h2>

      <h2 className="text-red-600 text-3xl sm:text-4xl md:text-5xl font-bold mt-2 md:mt-4 leading-tight">
        Alufelgen & Kompletträder
      </h2>

      <p className="text-gray-300 mt-6 max-w-2xl text-base md:text-lg leading-relaxed">
        Markenqualität zum besten Preis. Große Auswahl an Premium-Marken wie
        Michelin, Continental, Goodyear und mehr.
      </p>

      <div className="mt-8 md:mt-10">
        <a
          href="/reifen-anfrage"
          className="inline-block w-full sm:w-auto text-center bg-red-600 hover:bg-red-700 transition text-white px-8 py-4 rounded-xl font-semibold"
        >
          Zum Anfrageformular
        </a>
      </div>
    </div>

    {/* Rechte Seite Bild */}
    <div className="flex justify-center">
      <div className="w-full max-w-xl">
        <img
          src="/images/reifen-banner.png"
          alt="Reifen & Felgen"
          className="w-full h-[320px] sm:h-[420px] md:h-[500px] object-cover rounded-3xl shadow-2xl"
        />
      </div>
    </div>
  </div>
</section>

{/* Kontakt */}
<section
  id="kontakt"
  className="py-16 md:py-20 px-4 md:px-6 bg-white"
>
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
    
    <div>
      <h3 className="text-2xl font-bold">
        Adresse
      </h3>

      <p className="text-gray-600 mt-4 leading-relaxed">
        Nabil Car Nordhorn
        <br />
        Gildehauser Weg 16 & 22
        <br />
        48529 Nordhorn
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-bold">
        Telefon
      </h3>

      <p className="text-gray-600 mt-4 leading-relaxed">
        Tel.: +49 1520 3799152
        <br />
        Tel. 2: +49 1725 240728
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
      <h3 className="text-2xl font-bold">
        Informationen
      </h3>

      <div className="mt-4 flex flex-col gap-3">
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
      </div>
    </div>

  </div>
</section>
    </main>
  );
}