import { useRef, useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { LoaderCircle, Phone, Scissors, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { advisorInputSchema, barberPrices, type AdvisorResult } from "@/lib/haircut-advisor";
import { suggestHaircuts } from "@/lib/haircut-advisor.functions";

export function HaircutAdvisor() {
  const [hair, setHair] = useState("");
  const [look, setLook] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AdvisorResult | null>(null);
  const inFlight = useRef(false);
  const suggest = useServerFn(suggestHaircuts);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;
    const input = advisorInputSchema.safeParse({ hair, look });
    if (!input.success) {
      setError("Συμπλήρωσε και τις δύο περιγραφές με τουλάχιστον 3 χαρακτήρες.");
      return;
    }
    inFlight.current = true;
    setPending(true);
    setError(null);
    setResult(null);
    try {
      const response = await suggest({ data: input.data });
      setResult(response.result);
      setError(response.error);
    } catch {
      setError("Δεν ήταν δυνατή η σύνδεση. Δοκίμασε αργότερα· οι περιγραφές σου παραμένουν εδώ.");
    } finally {
      inFlight.current = false;
      setPending(false);
    }
  }

  return (
    <section className="border-y border-border bg-secondary/30" aria-labelledby="advisor-title">
      <div className="mx-auto max-w-5xl px-5 py-12 sm:py-16">
        <p className="mb-3 flex items-center gap-2 text-xs font-semibold text-primary"><Sparkles className="size-4" aria-hidden="true" /> AI · PROKOPIS</p>
        <h2 id="advisor-title" className="section-title text-3xl sm:text-4xl">Το επόμενο κούρεμά σου</h2>
        <form onSubmit={submit} className="mt-8" aria-busy={pending}>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="advisor-hair" className="mb-3 block text-sm font-semibold">Τα μαλλιά σου</label>
              <Textarea id="advisor-hair" value={hair} onChange={(event) => setHair(event.target.value)} required minLength={3} maxLength={800} disabled={pending} rows={4} placeholder="Π.χ. σγουρά, πυκνά, μεσαίο μήκος…" className="min-h-32 border-border bg-background shadow-none" />
            </div>
            <div>
              <label htmlFor="advisor-look" className="mb-3 block text-sm font-semibold">Το στυλ που θέλεις</label>
              <Textarea id="advisor-look" value={look} onChange={(event) => setLook(event.target.value)} required minLength={3} maxLength={800} disabled={pending} rows={4} placeholder="Π.χ. χαμηλό fade, φυσικό πάνω, λίγο styling…" className="min-h-32 border-border bg-background shadow-none" />
            </div>
          </div>
          <div className="mt-5 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-xs text-muted-foreground">Οι περιγραφές αποστέλλονται για επεξεργασία AI. Μην συμπεριλάβεις προσωπικά στοιχεία.</p>
            <Button type="submit" disabled={pending} className="h-11 w-full sm:w-auto">
              {pending ? <LoaderCircle className="motion-safe:animate-spin" aria-hidden="true" /> : <Scissors aria-hidden="true" />}
              {pending ? "Ετοιμάζουμε τις προτάσεις…" : "Βρες το κούρεμά μου"}
            </Button>
          </div>
        </form>
        {error && <p role="alert" className="mt-6 border-l-2 border-accent pl-4 text-sm text-foreground">{error}</p>}
        <div aria-live="polite" aria-atomic="true">
          {result && <div className="mt-10">
            <h3 className="text-2xl">Οι προτάσεις σου</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {result.styles.map((style, index) => {
                const service = barberPrices[style.serviceId];
                return <article key={`${index}-${style.name}`} className="surface-card flex flex-col p-5">
                  <p className="text-xs font-semibold text-primary">0{index + 1}</p>
                  <h4 className="mt-3 text-lg font-semibold">{style.name}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{style.reason}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground"><span className="font-semibold text-foreground">Περιποίηση: </span>{style.upkeep}</p>
                  {service && <p className="mt-auto flex flex-wrap justify-between gap-2 border-t border-border pt-4 text-sm"><span className="mt-4">{service.title}</span><span className="mt-4 font-semibold text-primary">{service.price}</span></p>}
                </article>;
              })}
            </div>
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">{result.barberNote}</p>
            <p className="mt-2 text-xs text-muted-foreground">Προτάσεις AI · Το τελικό κούρεμα επιβεβαιώνεται με τον κουρέα. Λούσιμο δωρεάν.</p>
            <Button asChild variant="link" className="mt-4 h-auto p-0"><a href="tel:+302741025156"><Phone aria-hidden="true" /> Κλείσε ραντεβού · 2741 025156</a></Button>
          </div>}
        </div>
      </div>
    </section>
  );
}