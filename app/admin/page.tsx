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
    price: "",
    mileage: "",
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const fetchCars = async () => {
    const { data, error } = await supabase
      .from("cars")
      .select("*")
      .order("id", { ascending: false });

    if (!error && data) {
      setCars(data);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const uploadImage = async (carId: number) => {
    if (!selectedFile) return;

    const fileName = `${Date.now()}-${selectedFile.name}`;

    const { error } = await supabase.storage
      .from("car-images")
      .upload(fileName, selectedFile);

    if (error) {
      console.log(error);
      return;
    }

    const { data } = supabase.storage
      .from("car-images")
      .getPublicUrl(fileName);

    await supabase.from("car_images").insert([
      {
        car_id: carId,
        image_url: data.publicUrl,
      },
    ]);
  };

  const addCar = async () => {
    if (!newCar.title || !newCar.price) return;

    const { data } = await supabase
      .from("cars")
      .insert([
        {
          title: newCar.title,
          subtitle: "",
          price: newCar.price,
          mileage: newCar.mileage || "-",
          fuel: "-",
          transmission: "-",
          power: "-",
          status: "Verfügbar",
        },
      ])
      .select()
      .single();

    if (data && selectedFile) {
      await uploadImage(data.id);
    }

    setNewCar({
      title: "",
      price: "",
      mileage: "",
    });

    setSelectedFile(null);
    fetchCars();
  };

  const removeCar = async (id: number) => {
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
          <h1 className="text-4xl font-bold text-black mt-2">
            Fahrzeugverwaltung
          </h1>
          <p className="text-gray-600 mt-3">
            Fahrzeuge hinzufügen, verwalten und entfernen.
          </p>
        </div>

        <Card className="rounded-3xl border shadow-sm">
          <CardContent className="p-6 space-y-6">
            <h2 className="text-2xl font-semibold">Neues Fahrzeug</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label>Fahrzeugname</Label>
                <Input
                  placeholder="z. B. Ford Focus"
                  value={newCar.title}
                  onChange={(e) =>
                    setNewCar({ ...newCar, title: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label>Preis</Label>
                <Input
                  placeholder="z. B. 5.950 €"
                  value={newCar.price}
                  onChange={(e) =>
                    setNewCar({ ...newCar, price: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label>Kilometerstand</Label>
                <Input
                  placeholder="z. B. 160.000 km"
                  value={newCar.mileage}
                  onChange={(e) =>
                    setNewCar({ ...newCar, mileage: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label>Fahrzeugbild</Label>
                <Input
                  type="file"
                  onChange={(e) =>
                    setSelectedFile(e.target.files?.[0] || null)
                  }
                />
              </div>
            </div>

            <Button
              onClick={addCar}
              className="rounded-xl px-6 py-3 font-semibold"
            >
              Fahrzeug hinzufügen
            </Button>
          </CardContent>
        </Card>

        <div className="grid gap-4">
          {cars.map((car) => (
            <Card key={car.id} className="rounded-3xl border shadow-sm">
              <CardContent className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">{car.title}</h3>
                  <p className="text-gray-600 mt-1">{car.price}</p>
                  <p className="text-gray-600">{car.mileage}</p>
                  <p className="text-sm text-green-600 font-medium mt-2">
                    {car.status}
                  </p>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" className="rounded-xl">
                    Bearbeiten
                  </Button>

                  <Button
                    variant="destructive"
                    className="rounded-xl"
                    onClick={() => removeCar(car.id)}
                  >
                    Löschen
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
