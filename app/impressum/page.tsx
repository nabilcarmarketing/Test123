import HeaderMain from "@/components/HeaderMain";
import Footer from "@/components/Footer";

export default function ImpressumPage() {
  return (
    <>
      <HeaderMain
/>

      <main className="min-h-screen bg-white text-black px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-red-600 uppercase tracking-[0.25em] md:tracking-[0.3em] text-xs md:text-sm font-medium">
            Rechtliche Angaben
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
            Impressum
          </h1>

          <p className="text-gray-600 mt-5 md:mt-6 text-base md:text-lg leading-relaxed max-w-3xl">
            Angaben zu Betreiber, Kontakt und rechtlicher Verantwortlichkeit für
            die Website von Nabil Car Nordhorn.
          </p>

          <div className="grid gap-6 md:gap-8 mt-12">
            <section className="bg-gray-50 rounded-3xl border border-gray-200 p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
              <p className="text-gray-700 leading-relaxed">
                Nabil Car Nordhorn
                <br />
                Gildehauser Weg 22
                <br />
                48529 Nordhorn
              </p>
            </section>

            <section className="bg-gray-50 rounded-3xl border border-gray-200 p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
              <p className="text-gray-700 leading-relaxed">
                Ansprechpartner Verkauf: Mazen Mislim
                <br />
                Telefon: +49 1520 3799152
                <br />
                E-Mail: info@nabilcar.de
              </p>
            </section>

            <section className="bg-gray-50 rounded-3xl border border-gray-200 p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Vertreten durch</h2>
              <p className="text-gray-700 leading-relaxed">
                Inhaber:
                <br />
                Nabil Mislim
              </p>
            </section>

            <section className="bg-gray-50 rounded-3xl border border-gray-200 p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Nabil Mislim
                <br />
                Gildehauser Weg 22
                <br />
                48529 Nordhorn
              </p>
            </section>

            <section className="bg-gray-50 rounded-3xl border border-gray-200 p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Gewerblicher Hinweis</h2>
              <p className="text-gray-700 leading-relaxed">
                Gewerblich angemeldeter KFZ-Handel.
              </p>
            </section>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href="/datenschutz"
              className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
            >
              Datenschutz
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center border border-gray-300 px-6 py-3 rounded-xl font-semibold hover:border-red-600 hover:text-red-600 transition"
            >
              Zur Startseite
            </a>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}