import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nabilcar.de",
      lastModified: new Date(),
    },
    {
      url: "https://nabilcar.de/fahrzeuge",
      lastModified: new Date(),
    },
    {
      url: "https://nabilcar.de/impressum",
      lastModified: new Date(),
    },
    {
      url: "https://nabilcar.de/datenschutz",
      lastModified: new Date(),
    },
  ];
}