// components/HeaderHome.tsx

"use client";

import { motion } from "framer-motion";

export default function HeaderHome() {
  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-red-600">
            Nabil Car
          </h1>

          <p className="text-xs md:text-sm tracking-[0.3em] md:tracking-[0.4em] text-gray-500 uppercase ml-1 md:ml-3">
            Nordhorn
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.3, delay: 0.2 }}
          className="hidden lg:flex gap-8 xl:gap-10 text-base xl:text-lg font-medium text-gray-800"
        >
          <a href="#" className="hover:text-red-600 transition">
            Startseite
          </a>

          <a
            href="#ueber-uns"
            className="hover:text-red-600 transition"
          >
            Über uns
          </a>

          <a
            href="#fahrzeuge"
            className="hover:text-red-600 transition"
          >
            Fahrzeuge
          </a>

          <a
            href="#reifen"
            className="hover:text-red-600 transition"
          >
            Reifen & Felgen
          </a>

          <a
            href="#kontakt"
            className="hover:text-red-600 transition"
          >
            Kontakt
          </a>
        </motion.div>

        <motion.a
          href="https://home.mobile.de/NABIL-CAR"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.5 }}
          whileHover={{ y: -3 }}
          className="bg-red-600 hover:bg-red-700 transition text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold shadow-lg text-sm md:text-base"
        >
          Mobile.de
        </motion.a>
      </nav>
    </header>
  );
}