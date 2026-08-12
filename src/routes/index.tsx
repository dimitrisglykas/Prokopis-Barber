import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Star, Clock, Navigation, Scissors } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import storefront from "@/assets/storefront.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Προκόπης Ντερτιλής Barber Shop | Κουρείο στην Κόρινθο" },
      {
        name: "description",
        content:
          "Ανδρικά κουρέματα, ξύρισμα και περιποίηση γενειάδας στην Κόρινθο. Κολιάτσου 35. Βαθμολογία 4,8/5 από 72 κριτικές. Τηλ. 2741 025156.",
      },
      { property: "og:title", content: "Προκόπης Ντερτιλής Barber Shop | Κόρινθος" },
      {
        property: "og:description",
        content: "Shear / Shave / Shine. Κουρείο στην Κόρινθο, Κολιάτσου 35. 4,8/5 σε 72 κριτικές.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const HOURS = [
  { day: "Δευτέρα", slots: ["Κλειστά"] },
  { day: "Τρίτη", slots: ["9:00 π.μ. – 2:00 μ.μ.", "5:00 – 9:00 μ.μ."] },
  { day: "Τετάρτη", slots: ["9:00 π.μ. – 2:00 μ.μ.", "5:00 – 9:00 μ.μ."] },
  { day: "Πέμπτη", slots: ["9:00 π.μ. – 2:00 μ.μ.", "5:00 – 9:00 μ.μ."] },
  { day: "Παρασκευή", slots: ["9:00 π.μ. – 2:00 μ.μ.", "5:00 – 9:00 μ.μ."] },
  { day: "Σάββατο", slots: ["9:00 π.μ. – 5:00 μ.μ."] },
  { day: "Κυριακή", slots: ["Κλειστά"] },
];

const SERVICES = [
  { title: "Ανδρικό Κούρεμα", desc: "Fade, ψαλίδι, styling προσαρμοσμένο στο πρόσωπό σου." },
  { title: "Ξύρισμα με Ξυράφι", desc: "Ζεστή πετσέτα, αφρός και κλασικό straight razor." },
  { title: "Περιποίηση Γενειάδας", desc: "Σχηματισμός, τριμάρισμα και λάδια περιποίησης." },
  { title: "Παιδικό Κούρεμα", desc: "Υπομονή και ακρίβεια για τους μικρούς πελάτες." },
  { title: "Βαφή & Highlights", desc: "Επαγγελματικά προϊόντα label.m – Toni&Guy World." },
  { title: "Styling & Shine", desc: "Φινίρισμα που κρατάει από το πρωί μέχρι το βράδυ." },
];

function Index() {
  return (
    <main className="min-h-screen">
      <header className="relative isolate flex min-h-[80vh] flex-col items-center justify-center overflow-hidden border-b border-primary/20 px-5 text-center">
        <img
          src={heroImg}
          alt="Εσωτερικό κλασικού κουρείου με φωτισμό και καρέκλα barber"
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        <div className="grain absolute inset-0" />

        <div className="relative z-10 max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Est. Κόρινθος · Ελλάδα
          </p>
          <h1 className="mt-6 text-5xl leading-[0.95] sm:text-7xl md:text-8xl">
            <span className="text-gold-gradient">Προκόπης Ντερτιλής</span>
            <span className="mt-2 block text-foreground">Barber Shop</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base text-muted-foreground sm:text-lg">
            Shear / Shave / Shine. Κλασική τεχνική κουρέα με σύγχρονο styling.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+302741025156"
              className="inline-flex w-full items-center justify-center gap-2 bg-primary px-8 py-4 font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-accent sm:w-auto"
            >
              <Phone className="size-4" /> Κλείσε ραντεβού
            </a>
            <a
              href="https://maps.google.com/?q=Κολιάτσου+35,+Κόρινθος+20131"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 border border-primary px-8 py-4 font-bold uppercase tracking-widest text-primary transition-colors hover:bg-primary/10 sm:w-auto"
            >
              <Navigation className="size-4" /> Οδηγίες
            </a>
          </div>

          <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-border bg-card/70 px-5 py-2 backdrop-blur">
            <span className="font-display text-2xl text-primary">4,8</span>
            <span className="flex gap-0.5" aria-hidden>
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="size-4 fill-primary text-primary" />
              ))}
            </span>
            <span className="text-sm text-muted-foreground">72 κριτικές Google</span>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-5 py-24" aria-labelledby="services">
        <h2 id="services" className="text-center text-4xl text-primary">
          Υπηρεσίες
        </h2>
        <div className="mt-14 grid gap-8">
          {SERVICES.map((s) => (
            <article key={s.title} className="group flex items-start gap-4 border-b border-primary/20 pb-6">
              <Scissors className="mt-1 size-5 shrink-0 text-primary" />
              <div className="flex-1">
                <h3 className="text-xl font-bold uppercase tracking-tight transition-colors group-hover:text-primary">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-primary/20 bg-card">
        <div className="mx-auto grid max-w-6xl md:grid-cols-2">
          <div className="border-b border-primary/20 p-8 md:border-b-0 md:border-r md:p-16">
            <div className="mb-12">
              <h4 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                <MapPin className="size-4" /> Η Τοποθεσία
              </h4>
              <p className="text-2xl leading-relaxed">Κολιάτσου 35,<br />Κόρινθος 201 31</p>
              <a
                href="tel:+302741025156"
                className="mt-2 block text-xl font-semibold text-primary hover:underline"
              >
                2741 025156
              </a>
              <a
                href="https://www.instagram.com/prokopis_barber/"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-sm text-muted-foreground hover:text-foreground"
              >
                @prokopis_barber στο Instagram
              </a>
            </div>
            <div>
              <h4 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                <Clock className="size-4" /> Ωράριο
              </h4>
              <dl className="space-y-2 text-lg">
                {HOURS.map((h) => (
                  <div key={h.day} className="flex justify-between">
                    <dt>{h.day}</dt>
                    <dd className={h.slots[0] === "Κλειστά" ? "text-muted-foreground" : ""}>
                      {h.slots.join(" · ")}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-xs text-muted-foreground">
                Το ωράριο ίσως διαφέρει σε αργίες.
              </p>
            </div>
          </div>

          <div className="relative min-h-[400px] overflow-hidden bg-secondary md:min-h-full">
            <img
              src={storefront.url}
              alt="Η πρόσοψη του Barber Shop Προκόπης στην Κόρινθο"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-60 grayscale transition-opacity duration-700 hover:opacity-100 hover:grayscale-0"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-8">
        <div className="surface-card overflow-hidden">
          <iframe
            title="Χάρτης – Barber Shop Προκόπης, Κολιάτσου 35, Κόρινθος"
            src="https://www.google.com/maps?q=%CE%9A%CE%BF%CE%BB%CE%B9%CE%AC%CF%84%CF%83%CE%BF%CF%85%2035%2C%20%CE%9A%CF%8C%CF%81%CE%B9%CE%BD%CE%B8%CE%BF%CF%82%2020131&output=embed"
            loading="lazy"
            className="h-72 w-full border-0 sm:h-96"
          />
        </div>
      </section>

      <footer className="py-12 text-center text-xs uppercase tracking-widest text-muted-foreground">
        <p>Προκόπης Ντερτιλής Μ. Barber Shop · Κολιάτσου 35, Κόρινθος</p>
        <p className="mt-2">Κουρείο · Ανδρικά κουρέματα &amp; styling</p>
      </footer>
    </main>
  );
}
