import type { Product } from "@/types/shop";

export const products: Product[] = [
  {
    id: "key-01",
    name: "Mechanical Keyboard",
    category: "Input",
    shortDescription: "Tactile switches and a compact layout for focused typing.",
    price: 1299000,
    accentColor: "#00a9ce",
  },
  {
    id: "aud-02",
    name: "Wireless Headphones",
    category: "Audio",
    shortDescription: "Balanced sound with soft cushions for long listening sessions.",
    price: 1799000,
    accentColor: "#2059c7",
  },
  {
    id: "mse-03",
    name: "Ergonomic Mouse",
    category: "Input",
    shortDescription: "A sculpted wireless mouse shaped for all-day comfort.",
    price: 849000,
    accentColor: "#f15a29",
  },
  {
    id: "std-04",
    name: "Adjustable Laptop Stand",
    category: "Workspace",
    shortDescription: "A stable aluminum stand with six practical height settings.",
    price: 679000,
    accentColor: "#00a9ce",
  },
];
