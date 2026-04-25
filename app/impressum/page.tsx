export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-red-600 mb-10">
          Impressum
        </h1>

        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
            <p>
              Nabil Car Nordhorn
              <br />
              Gildehauser Weg 22
              <br />
              48529 Nordhorn
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Kontakt</h2>
            <p>
              Telefon: +49 1725 240728
              <br />
              E-Mail: info@nabilcar.de
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Vertreten durch</h2>
            <p>
              Inhaber / Geschäftsführer:
              <br />
              Nabil Mislim
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Umsatzsteuer-ID
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
              <br />
              (platzhalter noch UST-ID)
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>
              Nabil Mislim
              <br />
              Gildehauser Weg 22
              <br />
              48529 Nordhorn
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}