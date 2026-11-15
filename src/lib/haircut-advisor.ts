import { z } from "zod";

export const barberPrices = [
  { title: "Ανδρικό κούρεμα", price: "10,00€" },
  { title: "Ανδρικό (μόνο μηχανή)", price: "8,00€" },
  { title: "Παιδικό κούρεμα", price: "8,00€" },
  { title: "Καθάρισμα αυχένα / φαβορίτες", price: "2,00€" },
  { title: "Τριμμάρισμα", price: "5,00€" },
  { title: "Σχήμα γενειάδας / τριμμάρισμα", price: "5,00€" },
  { title: "Λούσιμο", price: "ΔΩΡΕΑΝ" },
];

export const advisorInputSchema = z.object({
  hair: z.string().trim().min(3).max(800),
  look: z.string().trim().min(3).max(800),
});

export const advisorResultSchema = z.object({
  styles: z.array(z.object({
    name: z.string().min(1).max(100),
    reason: z.string().min(1).max(600),
    upkeep: z.string().min(1).max(300),
    serviceId: z.number().int().min(0).max(2),
  })).min(1).max(3),
  barberNote: z.string().min(1).max(600),
});

export type AdvisorResult = z.infer<typeof advisorResultSchema>;