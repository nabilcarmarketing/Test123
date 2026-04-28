export default function DatenschutzPage() {
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
            href="/"
            className="bg-red-600 hover:bg-red-700 transition text-white px-4 md:px-6 py-2.5 md:py-3 rounded-xl font-semibold shadow-lg text-sm md:text-base whitespace-nowrap"
          >
            Zurück zur Startseite
          </a>
        </nav>
      </header>

      <main className="min-h-screen bg-white text-black px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-red-600 uppercase tracking-[0.25em] md:tracking-[0.3em] text-xs md:text-sm font-medium">
            Rechtliche Angaben
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
            Datenschutzerklärung
          </h1>

          <p className="text-gray-600 mt-5 md:mt-6 text-base md:text-lg leading-relaxed max-w-3xl">
            Der Schutz Ihrer persönlichen Daten ist uns wichtig. Nachfolgend
            informieren wir Sie über die Verarbeitung personenbezogener Daten
            auf unserer Website.
          </p>

          <div className="grid gap-6 md:gap-8 mt-12">
            <section className="bg-gray-50 rounded-3xl border border-gray-200 p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">
                1. Datenschutz auf einen Blick
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Wir behandeln Ihre personenbezogenen Daten vertraulich und
                entsprechend den gesetzlichen Datenschutzvorschriften sowie
                dieser Datenschutzerklärung.
              </p>
            </section>

            <section className="bg-gray-50 rounded-3xl border border-gray-200 p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">
                2. Verantwortliche Stelle
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Nabil Car Nordhorn
                <br />
                Gildehauser Weg 22
                <br />
                48529 Nordhorn
                <br />
                Inhaber: Nabil Mislim
                <br />
                E-Mail: info@nabilcar.de
                <br />
                Telefon: +49 1520 3799152
              </p>
            </section>

            <section className="bg-gray-50 rounded-3xl border border-gray-200 p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">
                3. Datenerfassung beim Besuch dieser Website
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Beim Aufrufen unserer Website werden durch den Hosting-Anbieter
                automatisch Informationen erfasst. Diese Server-Logfiles können
                z. B. Browsertyp, Betriebssystem, Referrer-URL, Hostname des
                zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse
                umfassen.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Die Erfassung dieser Daten erfolgt, um eine fehlerfreie
                Bereitstellung der Website sicherzustellen und die Stabilität und
                Sicherheit der Systeme zu gewährleisten.
              </p>
            </section>

            <section className="bg-gray-50 rounded-3xl border border-gray-200 p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">
                4. Kontaktaufnahme
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Wenn Sie uns per Telefon, E-Mail oder WhatsApp kontaktieren,
                werden Ihre Angaben zur Bearbeitung Ihrer Anfrage gespeichert.
                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter, sofern
                keine gesetzliche Verpflichtung besteht.
              </p>
            </section>

            <section className="bg-gray-50 rounded-3xl border border-gray-200 p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">
                5. Externe Links
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Unsere Website enthält Links zu externen Webseiten, zum Beispiel
                mobile.de. Auf die Inhalte dieser externen Seiten haben wir
                keinen Einfluss. Für die Inhalte der verlinkten Seiten ist
                ausschließlich der jeweilige Anbieter oder Betreiber
                verantwortlich.
              </p>
            </section>

            <section className="bg-gray-50 rounded-3xl border border-gray-200 p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">
                6. Ihre Rechte
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über
                Herkunft, Empfänger und Zweck Ihrer gespeicherten
                personenbezogenen Daten. Außerdem haben Sie ein Recht auf
                Berichtigung, Sperrung oder Löschung dieser Daten im Rahmen der
                gesetzlichen Vorschriften.
              </p>
            </section>

            <section className="bg-gray-50 rounded-3xl border border-gray-200 p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">
                7. Widerspruch gegen Werbe-E-Mails
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
                Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
                Werbung und Informationsmaterialien wird hiermit widersprochen.
              </p>
            </section>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href="/impressum"
              className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
            >
              Zum Impressum
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center border border-gray-300 px-6 py-3 rounded-xl font-semibold hover:border-red-600 hover:text-red-600 transition"
            >
              Zur Startseite
            </a>
          </div>
        </div>
      </main>
    </>
  );
}