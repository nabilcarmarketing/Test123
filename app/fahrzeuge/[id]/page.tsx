"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

import HeaderCar from "@/components/HeaderCar";
import Footer from "@/components/Footer";

export default function CarDetailsPage() {
  const params = useParams();
  const carId = params.id;

  const [car, setCar] = useState<any>(null);
  const [images, setImages] = useState<string[]>([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchCar = async () => {
      const { data, error } = await supabase
        .from("cars")
        .select("*")
        .eq("id", carId)
        .single();

      if (error) {
        console.log("CAR FETCH ERROR:", error);
        return;
      }

      setCar(data);

      const { data: imageData, error: imageError } = await supabase
        .from("car_images")
        .select("image_url")
        .eq("car_id", carId);

      if (imageError) {
        console.log("IMAGE FETCH ERROR:", imageError);
        return;
      }

      setImages(imageData?.map((img) => img.image_url) || []);
    };

    if (carId) {
      fetchCar();
    }
  }, [carId]);

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  if (!car) {
    return (
      <>
        <HeaderCar />
        <main className="min-h-screen flex items-center justify-center">
          <p className="text-xl">Fahrzeug wird geladen...</p>
        </main>
      </>
    );
  }

  return (
    <>
      <HeaderCar />

      <main className="min-h-screen bg-gray-50 px-4 md:px-6 py-8 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
                <div className="relative group">
                  <img
                    src={images[currentImage] || "/placeholder.jpg"}
                    alt={car.title}
                    className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover cursor-pointer"
                    onClick={() => setIsOpen(true)}
                  />

                  {images.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 hover:bg-white text-black shadow-lg flex items-center justify-center text-3xl font-bold z-20"
                      >
                        ‹
                      </button>

                      <button
                        type="button"
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 hover:bg-white text-black shadow-lg flex items-center justify-center text-3xl font-bold z-20"
                      >
                        ›
                      </button>
                    </>
                  )}
                </div>

                <div className="px-3 sm:px-4 py-4">
                  <div className="flex gap-3 overflow-x-auto pb-1">
                    {images.map((image, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setCurrentImage(index)}
                        className={`flex-shrink-0 rounded-2xl overflow-hidden border-2 ${
                          currentImage === index
                            ? "border-red-600"
                            : "border-transparent"
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${car.title} ${index + 1}`}
                          className="w-[148px] h-[96px] object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-8 sticky top-24">
                <h1 className="text-3xl md:text-4xl font-bold">
                  {car.title}
                </h1>

                <p className="text-gray-500 text-lg mt-2">
                  {car.subtitle}
                </p>

                <p className="text-red-600 text-4xl font-bold mt-8">
                  {car.price}
                </p>

                <div className="space-y-4 mt-8 text-gray-700">
                  <p><strong>Kilometerstand:</strong> {car.mileage}</p>
                  <p><strong>Erstzulassung:</strong> {car.first_registration}</p>
                  <p><strong>Kraftstoff:</strong> {car.fuel}</p>
                  <p><strong>Getriebe:</strong> {car.transmission}</p>
                  <p><strong>Leistung:</strong> {car.power}</p>
                </div>

                <a
                  href="tel:+4915203799152"
                  className="mt-10 block bg-red-600 hover:bg-red-700 transition text-white text-center px-6 py-4 rounded-xl font-semibold"
                >
                  Direkt anfragen
                </a>
              </div>
            </div>
          </div>

          <section className="mt-12 bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold">
              Ausstattung & Beschreibung
            </h2>

            <p className="text-gray-600 mt-6 text-lg leading-relaxed">
              {car.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 text-gray-700">
              {(car.equipment || "")
                .split(",")
                .map((item: string, index: number) => (
                  <p key={index}>• {item.trim()}</p>
                ))}
            </div>

            <div className="mt-10">
              <button
                type="button"
                onClick={() => setShowMore(!showMore)}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition"
              >
                {showMore ? "Weniger anzeigen" : "Mehr Informationen"}
              </button>
            </div>
          </section>
        </div>

        <Footer />
      </main>

      {isOpen && (
        <div className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 text-white text-4xl font-bold"
          >
            ×
          </button>

          <img
            src={images[currentImage] || "/placeholder.jpg"}
            alt={car.title}
            className="max-w-[92vw] max-h-[88vh] object-contain rounded-2xl"
          />
        </div>
      )}
    </>
  );
}