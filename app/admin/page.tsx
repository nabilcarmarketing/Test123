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
    featured: false,
    sold: false,
  });
  
useEffect(() => {
  const checkSession = async () => {
    const { data } = await supabase.auth.getSession();

    if (!data.session) {
      window.location.replace("/admin/login");
    }
  };

  checkSession();
}, []);

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [editingCarId, setEditingCarId] = useState<number | null>(null);

const logout = async () => {
  await supabase.auth.signOut();

  // ALLE Cookies brutal löschen
  document.cookie.split(";").forEach((c) => {
    document.cookie = c
      .replace(/^ +/, "")
      .replace(/=.*/, "=;expires=" + new Date(0).toUTCString() + ";path=/");
  });

  // kompletter Reload
  window.location.replace("/admin/login");
};

  const fetchCars = async () => {
    const { data, error } = await supabase
      .from("cars")
      .select(`
      *,
      car_images (
      id,
      image_url
      )
      `)
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

  let firstImageUrl = "";

  for (let i = 0; i < selectedFiles.length; i++) {
    const file = selectedFiles[i];
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

    const imageUrl = publicData.publicUrl;

    if (i === 0) {
      firstImageUrl = imageUrl;
    }

    await supabase.from("car_images").insert([
      {
        car_id: carId,
        image_url: imageUrl,
      },
    ]);
  }

  if (firstImageUrl) {
    await supabase
      .from("cars")
      .update({
        cover_image: firstImageUrl,
      })
      .eq("id", carId);
  }
  };

  const addCar = async () => {
   if (editingCarId) {
  const { error } = await supabase
    .from("cars")
    .update({
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
      featured: newCar.featured,
      sold: newCar.sold,
    })
    .eq("id", editingCarId);

  if (error) {
    console.log("UPDATE ERROR:", error);
    return;
  }
if (selectedFiles.length > 0) {
  await uploadImages(editingCarId);
}
  setEditingCarId(null);
  setSelectedFiles([]);
  fetchCars();

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
    featured: false,
    sold: false,
  });

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
      featured: false,
      sold: false,
    });

    setSelectedFiles([]);
    fetchCars();
  };
 
const handleEdit = (car: any) => {
  setEditingCarId(car.id);

  setNewCar({
    title: car.title || "",
    subtitle: car.subtitle || "",
    price: car.price || "",
    mileage: car.mileage || "",
    first_registration: car.first_registration || "",
    fuel: car.fuel || "",
    transmission: car.transmission || "",
    power: car.power || "",
    equipment: car.equipment || "",
    description: car.description || "",
    status: car.status || "Verfügbar",
    featured: car.featured || false,
    sold: car.sold || false,
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
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
                  

<div className="flex gap-4 overflow-x-auto mt-4 pb-3">
  {car.car_images?.map((image: any) => (
    <div
      key={image.id}
      className="flex-shrink-0"
    >
      <div className="relative group">
        <img
          src={image.image_url}
          alt="Fahrzeugbild"
          onClick={() => setPreviewImage(image.image_url)}
          className={`w-32 h-24 object-cover rounded-xl border-2 cursor-pointer transition ${
            car.cover_image === image.image_url
              ? "border-red-600"
              : "border-gray-200"
          }`}
        />

        {/* Stern oben links */}
        <button
   type="button"
  onClick={async () => {
    const { error } = await supabase
      .from("cars")
      .update({
        cover_image: image.image_url,
      })
      .eq("id", car.id);

    if (error) {
      console.log("COVER IMAGE ERROR:", error);
      return;
    }

    fetchCars();
  }}
  className={`absolute top-2 left-2 w-7 h-7 rounded-full flex items-center justify-center text-sm transition backdrop-blur-sm opacity-0 group-hover:opacity-100 ${
    car.cover_image === image.image_url
      ? "bg-yellow-400 text-white opacity-100"
      : "bg-black/40 text-white hover:bg-black/60"
  }`}
>
  ★
</button>

        {/* Löschen unten rechts */}
        <button
          type="button"
          onClick={async () => {
            const { error } = await supabase
              .from("car_images")
              .delete()
              .eq("id", image.id);

            if (error) {
              console.log("DELETE IMAGE ERROR:", error);
              return;
            }

            fetchCars();
          }}
          className="absolute bottom-2 right-2 bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition"
        >
          Löschen
        </button>
      </div>
    </div>
  ))}
</div>


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
<p></p>
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
          

          <Button
                className="rounded-xl bg-red-600 hover:bg-gray-800 text-white"
                onClick={() => handleEdit(car)}
          >
            Bearbeiten
            </Button>


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
      {previewImage && (
  <div className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center">
    <button
      type="button"
      onClick={() => setPreviewImage(null)}
      className="absolute top-6 right-6 text-white text-4xl font-bold"
    >
      ×
    </button>

    <img
      src={previewImage}
      alt="Vorschau"
      className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl"
    />
  </div>
)}
    </>
  );
}