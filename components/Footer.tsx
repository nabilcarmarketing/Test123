export default function Footer() {
  return (
    

    <footer id="kontakt"
    className="bg-gray-100 border-t border-gray-200 py-16 md:py-20 px-4 md:px-6 mt-20 md:mt-24">
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
              href="/reifen"
              className="text-gray-700 hover:text-red-600 transition font-medium"
            >
              Reifen-Anfrage
            </a>
            <a
              href="/admin/login"
              className="text-gray-700 hover:text-red-600 transition font-medium"
            >
              Mitarbeiter Portal
            </a>
          </div>
        </div>
      </div>
      
    </footer>
  );
}