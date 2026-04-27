export default function ReifenAnfragePage() {
  return (
 <>
 <header className="bg-white border-b border-gray-200 sticky top-0 z-50 text-black">
  <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between text-black">
    <div>
      <h1 className="text-3xl font-bold text-red-600">
        Nabil Car
      </h1>
      <p className="text-sm tracking-[0.3em] text-gray-500 uppercase">
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
      href="/reifen-anfrage"
      className="bg-red-600 hover:bg-red-700 transition text-white px-6 py-3 rounded-xl font-semibold"
    >
      Zur Hauptseite
    </a>
  </nav>
</header>

    <main className="min-h-screen bg-white text-black px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-red-600 mb-10">
          Reifen-Anfrage
        </h1>

        <p className="text-gray-600 text-lg mb-12">
          Senden Sie uns Ihre Reifendaten und wir prüfen direkt unseren Bestand
          für passende Sommerreifen, Winterreifen, Alufelgen oder
          Kompletträder.
        </p>


    <form
      action="https://formsubmit.co/nabilcarmarketing@gmail.com"
      method="POST"
      className="space-y-8"
    >
        <input
  type="hidden"
  name="_subject"
  value="Neue Reifen-Anfrage von der Website"
/>

<input
  type="hidden"
  name="_captcha"
  value="false"
/>

<input
  type="hidden"
  name="_template"
  value="table"
/>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block font-semibold mb-2">Vorname</label>
          <input
            type="text"
            name="vorname"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3"
            placeholder="Vorname"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">Nachname</label>
          <input
            type="text"
            name="nachname"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3"
            placeholder="Nachname"
          />
        </div>
      </div>

      <div>
        <label className="block font-semibold mb-2">Telefonnummer</label>
        <input
          type="text"
          name="telefonnummer"
          required
          className="w-full border border-gray-300 rounded-xl px-4 py-3"
          placeholder="+49..."
        />
      </div>

      <div>
        <label className="block font-semibold mb-2">Fahrzeugmodell</label>
        <input
          type="text"
          name="fahrzeugmodell"
          required
          className="w-full border border-gray-300 rounded-xl px-4 py-3"
          placeholder="z. B. BMW 3er / Audi A4"
        />
      </div>

      <div>
        <label className="block font-semibold mb-2">Reifengröße</label>

        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            name="reifengroesse"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3"
            placeholder="z. B. 225/45"
          />

          <input
            type="text"
            name="zollgroesse"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3"
            placeholder="z. B. R17 / ZR18"
          />
        </div>
      </div>

      <div>
        <label className="block font-semibold mb-2">
          Felgen benötigt?
        </label>

        <select
          name="felgen"
          required
          className="w-full border border-gray-300 rounded-xl px-4 py-3"
        >
          <option value="">Bitte auswählen</option>
          <option>Ja, Alufelgen</option>
          <option>Ja, Stahlfelgen</option>
          <option>Nein, keine Felgen benötigt</option>
        </select>
      </div>

      <div>
        <label className="block font-semibold mb-2">
          Zusatzinfos
        </label>

        <textarea
          name="zusatzinfos"
          rows={5}
          className="w-full border border-gray-300 rounded-xl px-4 py-3"
          placeholder="Sommerreifen / Winterreifen / Premium Marken / Budget / weitere Wünsche"
        />
      </div>

      <button
        type="submit"
        className="bg-red-600 hover:bg-red-700 transition text-white px-8 py-4 rounded-xl font-semibold text-lg"
      >
        Anfrage senden
      </button>
    </form>
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