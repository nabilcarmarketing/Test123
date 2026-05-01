import { supabaseServer } from "@/lib/supabase-server";
import CarDetailsClient from "./cardetails";

// 🔹 SEO Meta
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}) {
  const { data: car } = await supabaseServer
    .from("cars")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!car) {
    return {
      title: "Fahrzeug nicht gefunden | Nabil Car",
    };
  }

  const { data: images } = await supabaseServer
    .from("car_images")
    .select("image_url")
    .eq("car_id", params.id)
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

// 🔹 Page (Server Component)
export default async function Page({
  params,
}: {
  params: { id: string };
}) {
  const { data: car } = await supabaseServer
    .from("cars")
    .select("*")
    .eq("id", params.id)
    .single();

  const { data: images } = await supabaseServer
    .from("car_images")
    .select("image_url")
    .eq("car_id", params.id);

  return (
    <CarDetailsClient
      car={car}
      images={images?.map((img) => img.image_url) || []}
    />
  );
}