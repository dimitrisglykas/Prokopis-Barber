import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Star, Clock, Navigation, Scissors, MessageCircle, Instagram } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import storefront from "@/assets/storefront.webp.asset.json";
import { Reveal } from "@/components/Reveal";

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
    <main className="relative min-h-screen overflow-hidden">
      <div className="ambient-bg" aria-hidden />
      <div className="ambient-bg-alt" aria-hidden />
      <div className="grain-overlay" aria-hidden />

      <header className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Εσωτερικό κλασικού κουρείου με φωτισμό και καρέκλα barber"
          width={1600}
          height={1000}
          className="animate-slow-zoom absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
        <div className="pole-stripes animate-stripes absolute inset-x-0 top-0 h-1.5" />

        <div className="relative mx-auto max-w-5xl px-5 pb-16 pt-20 text-center sm:pb-24 sm:pt-28">
          <p
            className="animate-rise text-xs font-semibold uppercase tracking-[0.35em] text-primary"
            style={{ animationDelay: "60ms" }}
          >
            Est. Κόρινθος · Ελλάδα
          </p>
          <h1 className="animate-rise mt-5 text-5xl leading-[0.95] sm:text-7xl" style={{ animationDelay: "160ms" }}>
            <span className="shimmer-text">Προκόπης Ντερτιλής</span>
            <span className="mt-2 block text-foreground">Barber Shop</span>
          </h1>
          <p
            className="animate-rise mx-auto mt-5 max-w-md text-base text-muted-foreground sm:text-lg"
            style={{ animationDelay: "280ms" }}
          >
            Shear / Shave / Shine. Κλασική τεχνική κουρέα με σύγχρονο styling.
          </p>

          <div
            className="animate-rise mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: "400ms" }}
          >
            <a
              href="#book"
              className="animate-glow inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.04] active:scale-95 sm:w-auto"
            >
              <MessageCircle className="size-4" /> Κλείσε ραντεβού
            </a>
            <a
              href="https://maps.google.com/?q=Κολιάτσου+35,+Κόρινθος+20131"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-md border border-border px-6 py-3 font-semibold text-foreground transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:bg-secondary sm:w-auto"
            >
              <Navigation className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />{" "}
              Οδηγίες
            </a>
          </div>

          <div
            className="animate-rise animate-float mt-10 inline-flex items-center gap-3 rounded-full border border-border bg-card/70 px-5 py-2 backdrop-blur"
            style={{ animationDelay: "520ms" }}
          >
            <span className="font-display text-2xl text-primary">4,8</span>
            <span className="flex gap-0.5" aria-hidden>
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className="animate-rise size-4 fill-primary text-primary"
                  style={{ animationDelay: `${600 + i * 90}ms` }}
                />
              ))}
            </span>
            <span className="text-sm text-muted-foreground">72 κριτικές Google</span>
          </div>
        </div>
      </header>

      <section className="relative mx-auto max-w-5xl px-5 py-10" aria-labelledby="book">
        <Reveal as="h2" id="book" className="text-center text-3xl sm:text-4xl">
          Κλείσε ραντεβού
        </Reveal>
        <Reveal
          as="p"
          delay={80}
          className="mx-auto mt-3 max-w-lg text-center text-sm text-muted-foreground sm:text-base"
        >
          Επίλεξε τον τρόπο που σου ταιριάζει — άμεσα, τηλεφωνικά ή μέσω Instagram.
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Reveal as="article" delay={120} className="surface-card lift-card group flex flex-col items-center p-6 text-center">
            <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
              <MessageCircle className="size-6 text-primary" />
            </div>
            <h3 className="mt-4 text-xl">Άμεσα με chatbot</h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">
              Κλείσε το ραντεβού σου σε λίγα δευτερόλεπτα μέσω του chatbot.
            </p>
            <button
              type="button"
              onClick={() => {
                const bp = (window as unknown as { botpress?: { open: () => void } }).botpress;
                if (bp?.open) bp.open();
              }}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.03] active:scale-95"
            >
              <MessageCircle className="size-4" /> Άνοιξε chat
            </button>
          </Reveal>

          <Reveal as="article" delay={220} className="surface-card lift-card group flex flex-col items-center p-6 text-center">
            <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
              <Phone className="size-6 text-primary" />
            </div>
            <h3 className="mt-4 text-xl">Τηλεφωνικώς</h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">
              Κάλεσέ μας για άμεση επιβεβαίωση του ραντεβού σου.
            </p>
            <a
              href="tel:+302741025156"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md border border-border px-4 py-2.5 font-semibold text-foreground transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:bg-secondary"
            >
              <Phone className="size-4" /> 2741 025156
            </a>
          </Reveal>

          <Reveal as="article" delay={320} className="surface-card lift-card group flex flex-col items-center p-6 text-center">
            <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
              <Instagram className="size-6 text-primary" />
            </div>
            <h3 className="mt-4 text-xl">Μέσω Instagram</h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">
              Στείλε μας DM στο Instagram για να κλείσεις το ραντεβού σου.
            </p>
            <a
              href="https://www.instagram.com/prokopis_barber/"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md border border-border px-4 py-2.5 font-semibold text-foreground transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:bg-secondary"
            >
              <Instagram className="size-4" /> @prokopis_barber
            </a>
          </Reveal>
        </div>
      </section>

      <section className="relative mx-auto max-w-5xl px-5 py-16" aria-labelledby="services">
        <Reveal as="h2" id="services" className="text-3xl sm:text-4xl">
          Υπηρεσίες
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal as="article" key={s.title} delay={100 + i * 90} className="surface-card lift-card group p-5">
              <Scissors className="size-5 text-primary transition-transform duration-500 group-hover:rotate-[-18deg] group-hover:scale-110" />
              <h3 className="mt-4 text-xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-5xl px-5 py-8" aria-labelledby="hours">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="surface-card lift-card p-6">
            <h2 id="hours" className="flex items-center gap-2 text-3xl">
              <Clock className="animate-float size-6 text-primary" /> Ωράριο
            </h2>
            <dl className="mt-6 divide-y divide-border">
              {HOURS.map((h, i) => (
                <Reveal
                  key={h.day}
                  delay={60 + i * 60}
                  className="flex items-start justify-between gap-4 py-3 transition-colors duration-300 hover:text-primary"
                >
                  <dt className="font-semibold">{h.day}</dt>
                  <dd className="text-right text-sm text-muted-foreground">
                    {h.slots.map((slot) => (
                      <div key={slot}>{slot}</div>
                    ))}
                  </dd>
                </Reveal>
              ))}
            </dl>
            <p className="mt-4 text-xs text-muted-foreground">Το ωράριο ίσως διαφέρει σε αργίες.</p>
          </Reveal>

          <Reveal delay={140} className="surface-card lift-card group overflow-hidden">
            <div className="overflow-hidden">
              <img
                src={storefront.url}
                alt="Η πρόσοψη του Barber Shop Προκόπης στην Κόρινθο"
                loading="lazy"
                className="h-56 w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110 sm:h-72"
              />
            </div>
            <div className="p-6">
              <h2 className="flex items-center gap-2 text-3xl">
                <MapPin className="animate-float size-6 text-primary" /> Πού θα μας βρεις
              </h2>
              <p className="mt-4 text-muted-foreground">Κολιάτσου 35, Κόρινθος 201 31</p>
              <a
                href="tel:+302741025156"
                className="story-link mt-1 block font-semibold text-primary"
              >
                2741 025156
              </a>
              <a
                href="https://www.instagram.com/prokopis_barber/"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                @prokopis_barber στο Instagram
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative mx-auto max-w-5xl px-5 py-8">
        <Reveal className="surface-card overflow-hidden">
          <iframe
            title="Χάρτης – Barber Shop Προκόπης, Κολιάτσου 35, Κόρινθος"
            src="https://www.google.com/maps?q=%CE%9A%CE%BF%CE%BB%CE%B9%CE%AC%CF%84%CF%83%CE%BF%CF%85%2035%2C%20%CE%9A%CF%8C%CF%81%CE%B9%CE%BD%CE%B8%CE%BF%CF%82%2020131&output=embed"
            loading="lazy"
            className="h-72 w-full border-0 sm:h-96"
          />
        </Reveal>
      </section>

      <footer className="relative mt-8 border-t border-border py-10 text-center text-sm text-muted-foreground">
        <div className="pole-stripes animate-stripes mx-auto mb-6 h-1 w-24 rounded-full" />
        <Reveal as="p">Προκόπης Ντερτιλής Μ. Barber Shop · Κολιάτσου 35, Κόρινθος</Reveal>
        <Reveal as="p" delay={80} className="mt-1">
          Κουρείο · Ανδρικά κουρέματα &amp; styling
        </Reveal>
      </footer>
    </main>
  );
}
