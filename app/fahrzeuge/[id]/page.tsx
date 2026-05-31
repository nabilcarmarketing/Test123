import { supabaseServer } from "@/lib/supabase-server";
import CarDetailsClient from "./cardetails";

// SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: car } = await supabaseServer
    .from("cars")
    .select("*")
    .eq("id", Number(id))
    .single();

  if (!car) {
    return {
      title: "Fahrzeug nicht gefunden | Nabil Car",
    };
  }

  const { data: images } = await supabaseServer
    .from("car_images")
    .select("image_url")
    .eq("car_id", Number(id))
    .limit(1);

  return {
    title: `${car.title} kaufen | Nabil Car Nordhorn`,
    description: car.description?.slice(0, 150) || "",

    openGraph: {
      title: car.title,
      description: car.description || "",
      images: images?.[0]?.image_url
        ? [images[0].image_url]
        : [],
    },
  };
}

// Page
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  console.log("ID:", id);

  const { data: car, error } = await supabaseServer
    .from("cars")
    .select("*")
    .eq("id", Number(id))
    .single();

  console.log("CAR:", car);
  console.log("ERROR:", error);

  if (!car) {
    return (
      <div className="p-10 text-center">
        Fahrzeug nicht gefunden
      </div>
    );
  }

  const { data: images } = await supabaseServer
    .from("car_images")
    .select("image_url")
    .eq("car_id", Number(id));

  return (
    <CarDetailsClient
      car={car}
      images={images?.map((img) => img.image_url) || []}
    />
  );
}