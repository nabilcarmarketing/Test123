"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AdminPage() {
  const [cars, setCars] = useState<any[]>([]);

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
        .from("Car.Images")
        .upload(fileName, file);

      if (uploadError) {
        console.log("UPLOAD ERROR:", uploadError);
        continue;
      }

      const { data: publicData } = supabase.storage
        .from("Car.Images")
        .getPublicUrl(fileName);

      const { error: imageInsertError } = await supabase
        .from("Car.Images")
        .insert([
          {
            car_id: carId,
            image_url: publicData.publicUrl,
          },
        ]);

      if (imageInsertError) {
        console.log("IMAGE INSERT ERROR:", imageInsertError);
      } else {
        console.log("IMAGE SAVED:", publicData.publicUrl);
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
      },
    ])
    .select()
    .single();

  console.log("CAR DATA:", data);
  console.log("CAR ERROR:", error);

  if (error) {
    console.log("CAR INSERT ERROR:", error);
    return;
  }

  if (data?.id) {
    console.log("CAR CREATED:", data.id);
    await uploadImages(data.id);
  } else {
    console.log("NO CAR ID RETURNED");
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

  return (
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

        <div className="grid gap-4">
          {cars.map((car) => (
            <Card key={car.id} className="rounded-3xl border shadow-sm">
              <CardContent className="p-6 flex flex-col gap-4 md:flex-row md:justify-between">
                <div>
                  <h3 className="text-xl font-bold">{car.title}</h3>
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
  );
}
