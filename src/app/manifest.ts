import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Easy Pack Indonesia",
    short_name: "Easy Pack",
    description: "Official Website for PT Easy Pack",
    start_url: "/",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "any",
      },
    ],
  };
}
