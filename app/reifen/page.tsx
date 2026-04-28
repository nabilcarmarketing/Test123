import HeaderMain from "@/components/HeaderMain";
import Footer from "@/components/Footer";

export default function ReifenAnfragePage() {
  return (
 <>
       <HeaderMain
 />


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

<Footer />



</main>


    </>
  );
}