"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import HeaderAdmin from "@/components/HeaderAdmin";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AdminPage() {
  const router = useRouter();

  const [cars, setCars] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  const [newCar, setNewCar] = useState({
    title: "",
    subtitle: "",
    price: "",
    mileage: "",
    first_registration: "",
    fuel: "",
    transmission: "",
    power: "",
    equipment: "",
    description: "",
    status: "Verfügbar",
  });

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const logout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  const fetchCars = async () => {
    const { data, error } = await supabase
      .from("cars")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      console.log("FETCH ERROR:", error);
      return;
    }

    setCars(data || []);
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const uploadImages = async (carId: number) => {
    if (!selectedFiles.length) return;

    for (const file of selectedFiles) {
      const fileName = `${Date.now()}-${file.name}`;

      const { error: uploadError } = await supabase.storage
        .from("car_images")
        .upload(fileName, file);

      if (uploadError) {
        console.log("UPLOAD ERROR:", uploadError);
        continue;
      }

      const { data: publicData } = supabase.storage
        .from("car_images")
        .getPublicUrl(fileName);

      const { error: imageInsertError } = await supabase.from("car_images").insert([
        {
          car_id: carId,
          image_url: publicData.publicUrl,
        },
      ]);

      if (imageInsertError) {
        console.log("IMAGE INSERT ERROR:", imageInsertError);
      }
    }
  };

  const addCar = async () => {
    if (!newCar.title || !newCar.price) {
      console.log("Pflichtfelder fehlen");
      return;
    }

    const { data, error } = await supabase
      .from("cars")
      .insert([
        {
          title: newCar.title,
          subtitle: newCar.subtitle,
          price: newCar.price,
          mileage: newCar.mileage,
          first_registration: newCar.first_registration,
          fuel: newCar.fuel,
          transmission: newCar.transmission,
          power: newCar.power,
          equipment: newCar.equipment,
          description: newCar.description,
          status: newCar.status,
          sold: false,
        },
      ])
      .select()
      .single();

    if (error) {
      console.log("CAR INSERT ERROR:", error);
      return;
    }

    if (data?.id) {
      await uploadImages(data.id);
    }

    setNewCar({
      title: "",
      subtitle: "",
      price: "",
      mileage: "",
      first_registration: "",
      fuel: "",
      transmission: "",
      power: "",
      equipment: "",
      description: "",
      status: "Verfügbar",
    });

    setSelectedFiles([]);
    fetchCars();
  };

  const removeCar = async (id: number) => {
    await supabase.from("car_images").delete().eq("car_id", id);
    await supabase.from("cars").delete().eq("id", id);
    fetchCars();
  };

  const toggleSold = async (id: number, sold: boolean) => {
    const { error } = await supabase
      .from("cars")
      .update({ sold })
      .eq("id", id);

    if (error) {
      console.log("TOGGLE SOLD ERROR:", error);
      return;
    }

    fetchCars();
  };

  const filteredCars = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return cars;

    return cars.filter((car) => {
      const haystack = [
        car.title,
        car.subtitle,
        car.price,
        car.mileage,
        car.first_registration,
        car.fuel,
        car.transmission,
        car.power,
        car.status,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return haystack.includes(q);
    });
  }, [cars, search]);

  return (
    <>
      <HeaderAdmin />

      <main className="min-h-screen bg-gray-50 p-6 md:p-10">
        <div className="max-w-7xl mx-auto space-y-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Nabil Car Admin
            </p>
            <h1 className="text-4xl font-bold mt-2">Fahrzeugverwaltung</h1>
            <p className="text-gray-600 mt-3">
              Fahrzeuge komplett verwalten inklusive Galerie.
            </p>
          </div>

          <Card className="rounded-3xl border shadow-sm">
            <CardContent className="p-6 space-y-6">
              <h2 className="text-2xl font-semibold">Neues Fahrzeug</h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries({
                  title: "Fahrzeugname",
                  subtitle: "Modell / Variante",
                  price: "Preis",
                  mileage: "Kilometerstand",
                  first_registration: "Erstzulassung",
                  fuel: "Kraftstoff",
                  transmission: "Getriebe",
                  power: "Leistung",
                }).map(([key, label]) => (
                  <div key={key} className="space-y-2">
                    <Label>{label}</Label>
                    <Input
                      value={(newCar as any)[key]}
                      onChange={(e) =>
                        setNewCar({ ...newCar, [key]: e.target.value })
                      }
                    />
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <Label>Ausstattung</Label>
                <Input
                  value={newCar.equipment}
                  onChange={(e) =>
                    setNewCar({ ...newCar, equipment: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label>Beschreibung</Label>
                <Input
                  value={newCar.description}
                  onChange={(e) =>
                    setNewCar({ ...newCar, description: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label>Fahrzeugbilder (mehrere möglich)</Label>
                <Input
                  type="file"
                  multiple
                  onChange={(e) =>
                    setSelectedFiles(Array.from(e.target.files || []))
                  }
                />
              </div>

              <Button
                onClick={addCar}
                className="rounded-xl px-6 py-3 font-semibold"
              >
                Fahrzeug speichern
              </Button>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border shadow-sm">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Fahrzeuge suchen</h2>
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Suche nach Fahrzeug, Preis, KM, Kraftstoff..."
                className="rounded-xl"
              />
              <p className="text-sm text-gray-500">
                Gefunden: {filteredCars.length} von {cars.length}
              </p>
            </CardContent>
          </Card>
          

          <div className="grid gap-4">
            {filteredCars.map((car) => (
              <Card
                key={car.id}
                className={`rounded-3xl border shadow-sm ${
                  car.sold ? "bg-gray-100" : "bg-white"
                }`}
              >
                <CardContent className="p-6 flex flex-col gap-5 md:flex-row md:justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold">{car.title}</h3>
                      {car.sold && (
                        <span className="text-xs font-semibold bg-red-600 text-white px-3 py-1 rounded-full">
                          Verkauft
                        </span>
                      )}
                    </div>

                    <p className="text-gray-600">{car.subtitle}</p>
                    <p className="text-gray-600">{car.price}</p>
                    <p className="text-gray-600">{car.mileage}</p>
                    <p className="text-gray-600">
                      {car.fuel} · {car.transmission}
                    </p>
                    <p className="text-gray-600">{car.power}</p>
                    <p className="text-sm text-green-600 font-medium mt-2">
                      {car.status}
                    </p>
<label className="flex items-center gap-3 mt-4">
  <input
    type="checkbox"
    checked={!!car.featured}
    onChange={async (e) => {
      const { error } = await supabase
        .from("cars")
        .update({
          featured: e.target.checked,
        })
        .eq("id", car.id);

      if (error) {
        console.log("FEATURED UPDATE ERROR:", error);
        return;
      }

      fetchCars();
    }}
  />
  <span>Auf Startseite anzeigen</span>
</label>
                    <label className="flex items-center gap-3 mt-4">
                      <input
                        type="checkbox"
                        checked={!!car.sold}
                        onChange={(e) =>
                          toggleSold(car.id, e.target.checked)
                        }
                      />
                      <span>Als verkauft markieren</span>
                    </label>
                  </div>

                  <Button
                    variant="destructive"
                    className="rounded-xl"
                    onClick={() => removeCar(car.id)}
                  >
                    Löschen
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}