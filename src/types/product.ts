import { Treatment } from "./treatment";

export type Product = {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  fullDescription?: string;
  price?: number;
  benefits?: string[];
  ingredients?: string[];
  usageInstructions?: string;
  treatments?: Treatment[];
};
