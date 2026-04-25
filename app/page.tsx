import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Top Info Bar */}
      <div className="bg-red-600 text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col md:flex-row justify-between gap-3">
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-red-600">
              Nabil Car
            </h1>
            <p className="text-sm tracking-[0.4em] text-gray-500 uppercase ml-3">
                Nordhorn
            </p>
          </div>

          <div className="hidden md:flex gap-10 text-lg font-medium">
            <a href="#">Startseite</a>
            <a href="#ueberuns">Über uns</a>
            <a href="#fahrzeuge">Fahrzeuge</a>
            <a href="#reifen">Reifen & Felgen</a>
            <a href="#kontakt">Kontakt</a>
          </div>

          <a
              href="https://home.mobile.de/NABIL-CAR?utm_source=bing&utm_medium=cpc&utm_campaign=PS%3EDE%3ECars%3ECore%3EDSA%3EHome__n-ps-bi-h-c-a-a&utm_content=&utm_term=mobile&msclkid=19009f0530b117a292b5f6ee7d7c3288"
              className="bg-red-600 hover:bg-red-700 transition text-white px-6 py-3 rounded-xl font-semibold shadow-lg"
              >
              Mobile.de Nabil Car
          </a>

        </nav>
      </header>

      {/* Hero Section */}
     <section className="relative min-h-[700px] flex items-center">
        <div
            className="absolute inset-0 bg-cover bg-center"
             style={{
                      backgroundImage:
                     "linear-gradient(to right, rgba(0,0,0,0.72), rgba(0,0,0,0.25)), url('/images/header.png')",
                    }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white">
          <p className="uppercase tracking-[0.35em] text-red-400 text-sm font-medium">
            Nabil Car Nordhorn
          </p>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight mt-4">
            An- & Verkauf von
            <br />
            <span className="text-red-500">Gebrauchtwagen</span>
          </h2>

          <p className="text-xl text-gray-200 mt-8 max-w-2xl leading-relaxed">
            Gebrauchtwagen, Premium Reifensätze, Alufelgen & Kompletträder zu fairen Preisen – mit Werkstatt, Büro und persönlicher Beratung direkt in Nordhorn.
          </p>

         <div className="flex flex-col sm:flex-row gap-4 mt-10">
           <a
               href="https://home.mobile.de/NABIL-CAR?utm_source=bing&utm_medium=cpc&utm_campaign=PS%3EDE%3ECars%3ECore%3EDSA%3EHome__n-ps-bi-h-c-a-a&utm_content=&utm_term=mobile&msclkid=19009f0530b117a292b5f6ee7d7c3288"
                target="_blank"
               rel="noopener noreferrer"
               className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-xl font-semibold text-lg text-white text-center"
            >
               Fahrzeuge ansehen
           </a>

           <a
              href="tel:+49 1520 3799152"
              className="border border-white px-8 py-4 rounded-xl font-semibold text-lg text-white text-center hover:bg-white hover:text-black transition"
            >
              Termin vereinbaren
            </a>
          </div>
        </div>
     </section>

      {/* Vorteile */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold">Geprüfte Qualität</h3>
            <p className="text-gray-600 mt-3">
              Alle Fahrzeuge werden sorgfältig geprüft und in Top-Zustand angeboten.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Premium Auswahl</h3>
            <p className="text-gray-600 mt-3">
              Große Auswahl an Fahrzeugen, Reifensätzen und Alufelgen.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Faire Preise</h3>
            <p className="text-gray-600 mt-3">
              Ehrliche Beratung, transparente Preise und schneller Ablauf.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Schnelle Abwicklung</h3>
            <p className="text-gray-600 mt-3">
              Unkomplizierte Prozesse und schnelle Terminvereinbarung.
            </p>
          </div>
        </div>
      </section>

      



{/* Über Uns */}
<section id="ueberuns" className="py-24 px-6 bg-white border-t border-gray-200">
  <div className="max-w-7xl mx-auto">
    <p className="text-red-600 uppercase tracking-[0.3em] text-sm font-medium">
      Über Uns
    </p>

    <h2 className="text-5xl font-bold mt-4">
      Vertrauen, Erfahrung & echte regionale Präsenz
    </h2>

    <p className="text-gray-600 mt-8 max-w-4xl text-lg leading-relaxed">
      Seit über 24 Jahren steht Nabil Car in Nordhorn für zuverlässigen
      Gebrauchtwagenhandel, Premium-Reifensätze und persönliche Beratung.
      Als familiengeführter Betrieb legen wir Wert auf faire Preise,
      ehrliche Beratung und langfristige Kundenzufriedenheit.
      Unsere Fahrzeuge werden vor dem Verkauf sorgfältig geprüft,
      technisch vorbereitet und professionell aufbereitet.
    </p>

    <div className="grid md:grid-cols-4 gap-6 mt-14">
      <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
        <h3 className="text-3xl font-bold text-red-600">24+</h3>
        <p className="text-gray-700 mt-3 font-medium">
          Jahre Erfahrung auf mobile.de und im Fahrzeughandel
        </p>
      </div>

      <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
        <h3 className="text-3xl font-bold text-red-600">4,2★</h3>
        <p className="text-gray-700 mt-3 font-medium">
          Positive Bewertungen und langjähriges Vertrauen unserer Kunden
        </p>
      </div>

      <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
        <h3 className="text-3xl font-bold text-red-600">3 Sprachen</h3>
        <p className="text-gray-700 mt-3 font-medium">
          Deutsch, Arabisch und Englisch für persönliche Beratung
        </p>
      </div>

      <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
        <h3 className="text-3xl font-bold text-red-600">Regional</h3>
        <p className="text-gray-700 mt-3 font-medium">
          Engagement in der Region und Unterstützung lokaler Vereine
        </p>
      </div>
    </div>

    <div className="mt-16 bg-gray-900 text-white rounded-3xl p-10">
      <h3 className="text-3xl font-bold">
        Verwurzelt in Nordhorn - mehr als nur Fahrzeughandel
      </h3>

      <p className="text-gray-300 mt-6 text-lg leading-relaxed max-w-4xl">
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
<section id="fahrzeuge" className="py-24 px-6 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <p className="text-red-600 uppercase tracking-[0.3em] text-sm font-medium">
      Unsere Fahrzeuge
    </p>

    <h2 className="text-5xl font-bold mt-4">
      Ausgewählte Gebrauchtwagen
    </h2>

    <p className="text-gray-600 mt-6 max-w-3xl text-lg leading-relaxed">
      Entdecken Sie unsere geprüften und gepflegten Fahrzeuge - 
      sofort verfügbar und fair angeboten. Von zuverlässigen Alltagsfahrzeugen über 
      Familienautos bis hin zu Kombis, SUVs und ausgewählten Fahrzeugen für jeden Bedarf.
    </p>

    <div className="grid md:grid-cols-3 gap-8 mt-14">
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
          className="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden"
        >
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-56 object-cover"
          />

          <div className="p-8">
            <h3 className="text-2xl font-bold">{car.name}</h3>

            <p className="text-gray-600 mt-3">
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
  </div>
</section>


 {/* Reifen & Felgen */}
<section id="reifen" className="bg-black text-white py-24 px-6">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    
    {/* Linke Seite Text */}
    <div>
      <p className="text-red-600 text-bold uppercase tracking-[0.3em] text-sm font-medium">
        Reifen & Felgen
      </p>

      <h2 className="text-5xl font-bold mt-4 leading-tight ">
        Premium Reifensätze,
         </h2>

      <h2 className="text-red-600 text-5xl font-bold mt-4 leading-tight ">
        Alufelgen & Kompletträder
      </h2>

      <p className="text-gray-300 mt-6 max-w-2xl text-lg leading-relaxed">
        Markenqualität zum besten Preis. Große Auswahl an Premium-Marken wie
        Michelin, Continental, Goodyear und mehr.
      </p>

      {/* Reifen Anfrage Box */}
      <div className="mt-10">

        <a
          href="/reifen"
          className="inline-block mt-6 bg-red-600 hover:bg-red-700 transition text-white px-8 py-4 rounded-xl font-semibold"
        >
          Zum Anfrageformular
        </a>
      </div>
    </div>

    {/* Rechte Seite Reifenbild */}
    <div className="flex justify-center">
      <div className="w-full max-w-xl">
        <img
          src="/images/reifen-banner.png"
          alt="Reifen & Felgen"
          className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
        />
      </div>
    </div>

  </div>
</section>


{/* Kontakt */}
<section id="kontakt" className="py-20 px-6 bg-white">
  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start">
    <div>
      <h3 className="text-2xl font-bold">Adresse</h3>
      <p className="text-gray-600 mt-4">
        Nabil Car Nordhorn
        <br />
        Gildehauser Weg 16 & 22
        <br />
        48529 Nordhorn
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-bold">Telefon</h3>
      <p className="text-gray-600 mt-4">
          Tel.: +49 1520 3799152 
        <br />
          Tel. 2: +49 1725 240728
        <br />
          Mobil: +49 5921 7123553
        <br /> 
          Fax: +49 5921 784642
        <br /> <br />
          Mo - Fr: 09:00 – 18:00 Uhr
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-bold">Informationen</h3>
      <div className="mt-4 space-y-2">
        <a href="/impressum" className="hover:text-red-600 transition">
          Impressum
        </a>
<br />
        <a href="/datenschutz" className="hover:text-red-600 transition">
          Datenschutz
        </a>

      </div>
    </div>
  </div>
</section>
    </main>
  );
}