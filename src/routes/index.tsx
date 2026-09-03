import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Star, Clock, Navigation, Scissors, Instagram } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import storefront from "@/assets/storefront-new.jpg.asset.json";
import work1 from "@/assets/work-100056.png.asset.json";
import work2 from "@/assets/work-100135.png.asset.json";
import work3 from "@/assets/work-100150.png.asset.json";
import work4 from "@/assets/work-100159.png.asset.json";
import work5 from "@/assets/work-mullet.png.asset.json";
import work6 from "@/assets/work-burst-fade.png.asset.json";

const SITE = "https://prokopis.lovable.app";
const REVIEW_URL = "https://g.page/r/CSuxeKbN7oEXEBM/review";
const INSTAGRAM_URL = "https://www.instagram.com/prokopis_barber/";
const OG_IMAGE = `${SITE}${storefront.url}`;

const GALLERY = [
  { src: work6.url, alt: "Burst fade με χρώμα – κούρεμα στο κουρείο Προκόπης, Κόρινθος" },
  { src: work5.url, alt: "Mullet με μαλλιά όγκου – ανδρικό κούρεμα Κόρινθος" },
  { src: work1.url, alt: "Slick back με fade – δουλειά του κουρείου" },
  { src: work2.url, alt: "Textured crop με χαμηλό fade" },
  { src: work3.url, alt: "Mullet με drop fade" },
  { src: work4.url, alt: "Taper fade σε σγουρά μαλλιά" },
];

const PRICES = [
  { title: "Ανδρικό κούρεμα", price: "10,00€" },
  { title: "Ανδρικό (μόνο μηχανή)", price: "8,00€" },
  { title: "Παιδικό κούρεμα", price: "8,00€" },
  { title: "Καθάρισμα αυχένα / φαβορίτες", price: "2,00€" },
  { title: "Τριμμάρισμα", price: "5,00€" },
  { title: "Σχήμα γενειάδας / τριμμάρισμα", price: "5,00€" },
  { title: "Λούσιμο", price: "ΔΩΡΕΑΝ" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Κουρείο Κόρινθος | Προκόπης Ντερτιλής Barber Shop" },
      {
        name: "description",
        content:
          "Κουρείο στην Κόρινθο, Κολιάτσου 35. Ανδρικά κουρέματα από 8€, fade, γενειάδα, παιδικό 8€, λούσιμο δωρεάν. 4,8/5 από 72 κριτικές. Τηλ. 2741 025156.",
      },
      { property: "og:title", content: "Κουρείο Κόρινθος | Προκόπης Ντερτιλής Barber Shop" },
      {
        property: "og:description",
        content:
          "Ανδρικά κουρέματα, fade, ξύρισμα και περιποίηση γενειάδας στην Κόρινθο. Κολιάτσου 35 · 2741 025156.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: SITE }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HairSalon",
          name: "Προκόπης Ντερτιλής Μ. Barber Shop",
          image: OG_IMAGE,
          url: SITE,
          telephone: "+302741025156",
          priceRange: "€€",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Κολιάτσου 35",
            addressLocality: "Κόρινθος",
            postalCode: "20131",
            addressCountry: "GR",
          },
          sameAs: [INSTAGRAM_URL],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "72",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "14:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "17:00",
              closes: "21:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Saturday"],
              opens: "09:00",
              closes: "17:00",
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});


const HOURS = [
  { day: "Δευτέρα", slots: ["Κλειστά"] },
  { day: "Τρίτη", slots: ["9:00 π.μ. – 2:00 μ.μ.", "5:00 – 9:00 μ.μ."] },
  { day: "Τετάρτη", slots: ["Από 9:00 π.μ. μέχρι 7:00 μ.μ."] },
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
      <header className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Εσωτερικό κλασικού κουρείου με φωτισμό και καρέκλα barber"
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
        <div className="pole-stripes absolute inset-x-0 top-0 h-1.5" />

        <div className="relative mx-auto max-w-5xl px-5 pb-16 pt-20 text-center sm:pb-24 sm:pt-28">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            Est. Κόρινθος · Ελλάδα
          </p>
          <h1 className="mt-5 text-5xl leading-[0.95] sm:text-7xl">
            <span className="text-gold-gradient">Προκόπης Ντερτιλής</span>
            <span className="mt-2 block text-foreground">Barber Shop</span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base text-muted-foreground sm:text-lg">
            Shear / Shave / Shine. Κλασική τεχνική κουρέα με σύγχρονο styling.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="tel:+302741025156"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-[1.02] sm:w-auto"
            >
              <Phone className="size-4" /> Κλείσε ραντεβού · 2741 025156
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-secondary sm:w-auto"
            >
              <Instagram className="size-4" /> Ραντεβού στο Instagram
            </a>
            <a
              href="https://maps.google.com/?q=Κολιάτσου+35,+Κόρινθος+20131"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border px-6 py-3 font-semibold text-foreground transition-colors hover:bg-secondary sm:w-auto"
            >
              <Navigation className="size-4" /> Οδηγίες
            </a>
          </div>

          <div className="mt-10 flex flex-col items-center gap-3">
            <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card/70 px-5 py-2 backdrop-blur">
              <span className="font-display text-2xl text-primary">4,8</span>
              <span className="flex gap-0.5" aria-hidden>
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
              </span>
              <span className="text-sm text-muted-foreground">72 κριτικές Google</span>
            </div>
            <a
              href={REVIEW_URL}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-primary hover:underline"
            >
              Άφησε αξιολόγηση στο Google
            </a>
          </div>

        </div>
      </header>

      <section className="mx-auto max-w-5xl px-5 py-16" aria-labelledby="services">
        <h2 id="services" className="text-3xl sm:text-4xl">
          Υπηρεσίες
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article key={s.title} className="surface-card p-5">
              <Scissors className="size-5 text-primary" />
              <h3 className="mt-4 text-xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-8" aria-labelledby="prices">
        <h2 id="prices" className="text-3xl sm:text-4xl">
          Τιμοκατάλογος
        </h2>
        <ul className="mt-8 surface-card divide-y divide-border p-2">
          {PRICES.map((p) => (
            <li key={p.title} className="flex items-center justify-between gap-4 px-4 py-4">
              <span className="font-semibold">{p.title}</span>
              <span className="font-display text-xl text-primary">{p.price}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-8" aria-labelledby="gallery">
        <h2 id="gallery" className="text-3xl sm:text-4xl">
          Φωτογραφίες δουλειάς
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {GALLERY.map((g) => (
            <figure key={g.src} className="surface-card overflow-hidden">
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
            </figure>
          ))}
        </div>
      </section>


      <section className="mx-auto max-w-5xl px-5 py-8" aria-labelledby="hours">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="surface-card p-6">
            <h2 id="hours" className="flex items-center gap-2 text-3xl">
              <Clock className="size-6 text-primary" /> Ωράριο
            </h2>
            <dl className="mt-6 divide-y divide-border">
              {HOURS.map((h) => (
                <div key={h.day} className="flex items-start justify-between gap-4 py-3">
                  <dt className="font-semibold">{h.day}</dt>
                  <dd className="text-right text-sm text-muted-foreground">
                    {h.slots.map((slot) => (
                      <div key={slot}>{slot}</div>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs text-muted-foreground">
              Το ωράριο ίσως διαφέρει σε αργίες.
            </p>
          </div>

          <div className="surface-card overflow-hidden">
            <img
              src={storefront.url}
              alt="Η πρόσοψη του Barber Shop Προκόπης στην Κόρινθο"
              loading="lazy"
              className="h-56 w-full object-cover sm:h-72"
            />
            <div className="p-6">
              <h2 className="flex items-center gap-2 text-3xl">
                <MapPin className="size-6 text-primary" /> Πού θα μας βρεις
              </h2>
              <p className="mt-4 text-muted-foreground">Κολιάτσου 35, Κόρινθος 201 31</p>
              <a
                href="tel:+302741025156"
                className="mt-1 block font-semibold text-primary hover:underline"
              >
                2741 025156
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm text-muted-foreground hover:text-foreground"
              >
                @prokopis_barber στο Instagram – ραντεβού με μήνυμα
              </a>
              <a
                href={REVIEW_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-2 block text-sm text-primary hover:underline"
              >
                Άφησε αξιολόγηση στο Google
              </a>

            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-8">
        <div className="surface-card overflow-hidden">
          <iframe
            title="Χάρτης – Barber Shop Προκόπης, Κολιάτσου 35, Κόρινθος"
            src="https://www.google.com/maps?q=%CE%9A%CE%BF%CE%BB%CE%B9%CE%AC%CF%84%CF%83%CE%BF%CF%85%2035%2C%20%CE%9A%CF%8C%CF%81%CE%B9%CE%BD%CE%B8%CE%BF%CF%82%2020131&output=embed"
            loading="lazy"
            className="h-72 w-full border-0 sm:h-96"
          />
        </div>
      </section>

      <footer className="mt-8 border-t border-border py-10 text-center text-sm text-muted-foreground">
        <div className="pole-stripes mx-auto mb-6 h-1 w-24 rounded-full" />
        <p>Προκόπης Ντερτιλής Μ. Barber Shop · Κολιάτσου 35, Κόρινθος</p>
        <p className="mt-1">Κουρείο · Ανδρικά κουρέματα &amp; styling</p>
      </footer>
    </main>
  );
}
