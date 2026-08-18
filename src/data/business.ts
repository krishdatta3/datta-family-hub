import csc from "@/assets/csc.jpg";
import bangles from "@/assets/bangles.jpg";
import shoes from "@/assets/shoes.jpg";
import tailoring from "@/assets/tailoring.jpg";
import { businessesCore, type BusinessCore } from "./business-core";

export { ADDRESS, MAPS_QUERY, testimonials, faqs } from "./business-core";
export type { BusinessCore } from "./business-core";

export type Business = BusinessCore & { image: string };

const images: Record<string, string> = {
  "datta-services": csc,
  "sara-bangdi-bhandar": bangles,
  "datta-and-sons-shoe-shop": shoes,
  "sara-tailoring-shop": tailoring,
};

export const businesses: Business[] = businessesCore.map((b) => ({
  ...b,
  image: images[b.slug]!,
}));
