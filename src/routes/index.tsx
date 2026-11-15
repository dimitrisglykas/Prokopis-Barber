import { createFileRoute } from "@tanstack/react-router";
import { HaircutAdvisor } from "@/components/haircut-advisor";
import { barberPrices } from "@/lib/haircut-advisor";
import {
  Phone,
  MapPin,
  Star,
  Clock,
  Navigation,
  Scissors,
  Instagram,
} from "lucide-react";

const IMG = "/images";

const storefront = `${IMG}/koureio-korinthos-barber-shop-prosopsi-kolliatsou-35.webp`;
const historyPortrait = `${IMG}/istoria-prokopis-barbershop-korinthos.webp`;


const SITE = "https://prokopis.lovable.app";
const REVIEW_URL = "https://g.page/r/CSuxeKbN7oEXEBM/review";
const INSTAGRAM_URL = "https://www.instagram.com/prokopis_barber/";
const OG_IMAGE = `${SITE}${IMG}/og-prokopis-barber-shop-korinthos.jpg`;
const LOGO_URL = `${SITE}/logo.png`;

const GALLERY = [
  {
    src: `${IMG}/koureio-korinthos-andriko-kourema-burst-fade-vafi.webp`,
    alt: "Ανδρικό κούρεμα burst fade με βαφή – κουρείο Προκόπης Ντερτιλής, Κόρινθος",
  },
  {
    src: `${IMG}/koureio-korinthos-andriko-kourema-buzz-cut.webp`,
    alt: "Ανδρικό κούρεμα buzz cut χωρίς fade – κουρείο Προκόπης Ντερτιλής, Κόρινθος",
  },
  {
    src: `${IMG}/koureio-korinthos-andriko-kourema-slick-back-fade.webp`,
    alt: "Ανδρικό κούρεμα slick back με fade – κουρείο στην Κόρινθο",
  },
  {
    src: `${IMG}/koureio-korinthos-kourema-me-mixani-low-fade.webp`,
    alt: "Κούρεμα μόνο με μηχανή, low fade – κουρείο Κόρινθος",
  },
  {
    src: `${IMG}/koureio-korinthos-kourema-me-mixani-drop-fade.webp`,
    alt: "Κούρεμα με μηχανή και drop fade – barber shop στην Κόρινθο",
  },
  {
    src: `${IMG}/koureio-korinthos-paidiko-kourema-taper-fade.webp`,
    alt: "Παιδικό κούρεμα taper fade σε σγουρά μαλλιά – κουρείο Κόρινθος",
  },
];


const PRICES = barberPrices;


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Κουρείο Κόρινθος | Κολιάτσου 35 – Prokopis Barber Shop",
      },
      {
        name: "description",
        content:
          "Κουρείο στην Κόρινθο, Κολιάτσου 35. Ανδρικό 10€, μόνο μηχανή 8€, παιδικό 8€, γενειάδα 5€, λούσιμο δωρεάν. Τρ–Πα 9:00–14:00 & 17:00–21:00, Τε 9:00–19:00, Σα 9:00–17:00. Τηλ. 2741 025156.",
      },
      { name: "keywords", content: "κουρείο Κόρινθος, barber shop Κόρινθος, ανδρικά κουρέματα Κόρινθος, fade Κόρινθος, παιδικό κούρεμα Κόρινθος" },
      { name: "geo.region", content: "GR-ESYE31" },
      { name: "geo.placename", content: "Κόρινθος" },
      { name: "geo.position", content: "37.9407;22.9327" },
      {
        property: "og:title",
        content: "Κουρείο Κόρινθος – Prokopis Barber Shop | Κολιάτσου 35",
      },
      {
        property: "og:description",
        content:
          "Ανδρικά & παιδικά κουρέματα, fade και γενειάδα στην Κόρινθο. Ανδρικό 10€, μηχανή 8€, παιδικό 8€, λούσιμο δωρεάν. Τρ–Πα 9:00–14:00 & 17:00–21:00, Τε 9:00–19:00, Σα 9:00–17:00. Κολιάτσου 35 · 2741 025156.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "el_GR" },
      { property: "og:site_name", content: "Προκόπης Ντερτιλής Μ. Barber Shop" },
      { property: "og:url", content: SITE },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:secure_url", content: OG_IMAGE },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content:
          "Προκόπης Ντερτιλής Μ. Barber Shop – Κουρείο στην Κόρινθο, Κολιάτσου 35",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Κουρείο Κόρινθος – Prokopis Barber Shop | Κολιάτσου 35",
      },
      {
        name: "twitter:description",
        content:
          "Κολιάτσου 35, Κόρινθος · 2741 025156. Ανδρικό 10€, μηχανή 8€, παιδικό 8€, λούσιμο δωρεάν. Τρ–Πα 9:00–14:00 & 17:00–21:00, Τε 9:00–19:00, Σα 9:00–17:00.",
      },
      { name: "twitter:image", content: OG_IMAGE },
      {
        name: "twitter:image:alt",
        content:
          "Κουρείο Προκόπης Ντερτιλής – Κόρινθος, Κολιάτσου 35",
      },
    ],

    links: [{ rel: "canonical", href: SITE }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HairSalon",
          "@id": `${SITE}#barbershop`,
          name: "Προκόπης Ντερτιλής Μ. Barber Shop",
          alternateName: "Κουρείο Προκόπης Κόρινθος",
          description:
            "Κουρείο στην Κόρινθο με ανδρικά κουρέματα, fade, περιποίηση γενειάδας και παιδικά κουρέματα. Λούσιμο δωρεάν.",
          image: OG_IMAGE,
          logo: LOGO_URL,
          url: SITE,
          telephone: "+302741025156",
          priceRange: "€",
          currenciesAccepted: "EUR",
          paymentAccepted: "Μετρητά, Κάρτα",
          areaServed: [
            { "@type": "City", name: "Κόρινθος" },
            { "@type": "AdministrativeArea", name: "Νομός Κορινθίας" },
          ],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Κολιάτσου 35",
            addressLocality: "Κόρινθος",
            addressRegion: "Κορινθία",
            postalCode: "20131",
            addressCountry: "GR",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 37.9407,
            longitude: 22.9327,
          },
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "+302741025156",
              contactType: "Ραντεβού",
              areaServed: "GR",
              availableLanguage: ["el", "en"],
            },
          ],
          sameAs: [INSTAGRAM_URL, REVIEW_URL],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "72",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Τιμοκατάλογος κουρείου",
            itemListElement: [
              { name: "Ανδρικό κούρεμα", price: "10.00" },
              { name: "Ανδρικό κούρεμα (μόνο μηχανή)", price: "8.00" },
              { name: "Παιδικό κούρεμα", price: "8.00" },
              { name: "Καθάρισμα αυχένα / φαβορίτες", price: "2.00" },
              { name: "Τριμμάρισμα", price: "5.00" },
              { name: "Σχήμα γενειάδας", price: "5.00" },
              { name: "Λούσιμο", price: "0.00" },
            ].map((s) => ({
              "@type": "Offer",
              price: s.price,
              priceCurrency: "EUR",
              itemOffered: {
                "@type": "Service",
                name: s.name,
                serviceType: "Κουρείο",
                provider: { "@id": `${SITE}#barbershop` },
                areaServed: { "@type": "City", name: "Κόρινθος" },
              },
            })),
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Wednesday"],
              opens: "09:00",
              closes: "19:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Tuesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "14:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Tuesday", "Thursday", "Friday"],
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
  { day: "Τετάρτη", slots: ["9:00 π.μ. – 7:00 μ.μ."] },
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
          src={storefront}
          alt="Πρόσοψη κουρείου Προκόπης Ντερτιλής – Κολιάτσου 35, Κόρινθος"
          width={1200}
          height={676}
          loading="eager"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
        <div className="pole-stripes absolute inset-x-0 top-0 h-1.5" />


        <div className="relative mx-auto max-w-5xl px-5 pb-16 pt-20 text-center sm:pb-24 sm:pt-28">
          <img
            src="/logo.png"
            alt="Προκόπης Ντερτιλής Barber Shop Logo"
            width={128}
            height={128}
            loading="eager"
            decoding="async"
            className="mx-auto mb-6 h-28 w-28 rounded-full object-contain sm:h-32 sm:w-32"
          />
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            Est. 1926 · Κόρινθος
          </p>
          <h1 className="mt-5 text-5xl leading-[0.95] sm:text-7xl">
            <span className="text-gold-gradient">Προκόπης Ντερτιλής</span>
            <span className="mt-2 block text-foreground">Barber Shop</span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base text-muted-foreground sm:text-lg">
            Κουρείο στην Κόρινθο – Κολιάτσου 35. Κλασική τεχνική κουρέα με σύγχρονο styling.
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




      <section className="mx-auto max-w-5xl px-5 py-8" aria-labelledby="services">
        <h2 id="services" className="section-title text-3xl sm:text-4xl">
          Υπηρεσίες
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article key={s.title} className="surface-card surface-card-hover p-5">
              <Scissors className="size-5 text-primary" />
              <h3 className="mt-4 text-xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-8" aria-labelledby="prices">
        <h2 id="prices" className="section-title text-3xl sm:text-4xl">
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

      <HaircutAdvisor />

      <section className="mx-auto max-w-5xl px-5 py-8" aria-labelledby="gallery">
        <h2 id="gallery" className="section-title text-3xl sm:text-4xl">
          Φωτογραφίες δουλειάς
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {GALLERY.map((g) => (
            <figure key={g.src} className="surface-card surface-card-hover overflow-hidden">
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                decoding="async"
                width={900}
                height={1200}
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="aspect-[3/4] w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-8" aria-labelledby="istoria">
        <h2 id="istoria" className="section-title text-3xl sm:text-4xl">
          Η Ιστορία του Prokopis Barbershop
        </h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Η διαδρομή του Prokopis Barbershop στηρίζεται στην πολυετή τριβή με την ανδρική
              περιποίηση και σε μια βαθιά οικογενειακή παράδοση.
            </p>
            <p>
              Ο Προκόπης Ντερτιλής ολοκλήρωσε τις σπουδές του στη σχολή Αμάραντος το 2005,
              εγκαινιάζοντας την επαγγελματική του πορεία στον χώρο. Στη συνέχεια, εμπλούτισε τις
              γνώσεις του παρακολουθώντας εξειδικευμένα σεμινάρια πάνω στις τεχνικές του modern
              &amp; classic barbering, ενώ η θητεία του στο κομμωτήριο Nicolas στην Αθήνα
              λειτούργησε ως καθοριστικός σταθμός για την απόκτηση τεχνογνωσίας υψηλού επιπέδου.
            </p>
            <p>
              Το πρώτο του επιχειρηματικό βήμα έγινε το 2009 σε χώρο εντός στοάς, για να
              ακολουθήσει το 2016 η δημιουργία του σημερινού Barbershop, ενός σύγχρονου χώρου
              αφιερωμένου αποκλειστικά στην ανδρική περιποίηση.
            </p>
            <p>
              Η ενασχόλησή του με το επάγγελμα αποτελεί φυσική εξέλιξη μιας οικογενειακής ιστορίας
              που μετρά τέσσερις γενιές. Τόσο ο προπάππους όσο και ο παππούς του διατηρούσαν το
              δικό τους παραδοσιακό κουρείο στην οδό Κύπρου στην Κόρινθο. Αυτές οι καταβολές
              ενέπνευσαν τον Προκόπη να συνεχίσει την οικογενειακή τέχνη, προσαρμόζοντάς την στις
              απαιτήσεις του σήμερα.
            </p>
            <p>
              Με έμφαση στη συνέπεια και την τεχνική κατάρτιση, το Prokopis Barbershop αποτελεί
              πλέον σημείο αναφοράς για την ανδρική φροντίδα στην Κόρινθο.
            </p>
          </div>
          <figure className="surface-card surface-card-hover self-start overflow-hidden">
            <img
              src={historyPortrait}
              alt="Ο Προκόπης Ντερτιλής μπροστά στο Prokopis Barbershop στην Κόρινθο"
              loading="lazy"
              decoding="async"
              width={900}
              height={1198}
              sizes="(min-width: 1024px) 316px, (min-width: 640px) calc(100vw - 40px), calc(100vw - 40px)"
              className="block h-auto w-full"
            />
          </figure>

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

          <div className="surface-card surface-card-hover overflow-hidden">
            <img
              src={storefront}
              alt="Η πρόσοψη του Barber Shop Προκόπης στην Κόρινθο"
              loading="lazy"
              decoding="async"
              width={1200}
              height={676}
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
        <div className="surface-card surface-card-hover overflow-hidden">
          <iframe
            title="Χάρτης – Barber Shop Προκόπης, Κολιάτσου 35, Κόρινθος"
            src="https://www.google.com/maps?q=%CE%9A%CE%BF%CE%BB%CE%B9%CE%AC%CF%84%CF%83%CE%BF%CF%85%2035%2C%20%CE%9A%CF%8C%CF%81%CE%B9%CE%BD%CE%B8%CE%BF%CF%82%2020131&output=embed"
            loading="lazy"
            className="h-72 w-full border-0 sm:h-96"
          />
        </div>
      </section>

      <footer className="mt-8 border-t border-border py-10 text-center text-sm text-muted-foreground">
        <div className="mx-auto max-w-5xl px-5">
          <div className="pole-stripes mx-auto mb-6 h-1 w-24 rounded-full" />
          <p>Προκόπης Ντερτιλής Μ. Barber Shop · Κολιάτσου 35, Κόρινθος</p>
          <p className="mt-1">Κουρείο · Ανδρικά κουρέματα &amp; styling</p>
          <a href="https://dimitrisglykas.com" target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-xs text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">Designed &amp; Engineered by Dimitris Glykas</a>
        </div>
      </footer>
    </main>
  );
}
