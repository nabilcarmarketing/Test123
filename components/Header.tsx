type HeaderProps = {
  buttonText?: string;
  buttonLink?: string;
};

export default function Header({
  buttonText = "Zurück zu Fahrzeuge",
  buttonLink = "/#fahrzeuge",
}: HeaderProps) {
  return (
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
          href={buttonLink}
          className="bg-red-600 hover:bg-red-700 transition text-white px-4 md:px-6 py-2.5 md:py-3 rounded-xl font-semibold shadow-lg text-sm md:text-base whitespace-nowrap"
        >
          {buttonText}
        </a>
      </nav>
    </header>
  );
}