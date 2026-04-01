/**
 * BALANERGY BEHANDELINGEN PAGE
 * Design: "Warme Aarde – Organisch & Sensueel"
 * All treatments and arrangements on one page, no submenus
 */

import { Link } from "wouter";
import { Phone, Mail, Calendar } from "lucide-react";

const ONLINE_AGENDA_URL = "https://www.supersaas.nl/schedule/balanergy/Balanergy";

const THAI_MASSAGE_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663495181631/fJXKTVuKN2f6PMKBQCtqnD/thai-massage-card-2Too8mGBKCNKbSUtmar8wB.webp";
const REFLEXOLOGY_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663495181631/fJXKTVuKN2f6PMKBQCtqnD/reflexology-card-EQ6LwzB9aYoSACiAE3ScrU.webp";
const RELAXATION_IMAGE = "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80";
const YOGA_IMAGE = "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80";
const STUDIO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663495181631/fJXKTVuKN2f6PMKBQCtqnD/about-mascha-dvPzjAqj7qTAQ57W5UwV4y.webp";

const treatments = [
  {
    id: "thai",
    title: "Thaise Yogamassage",
    subtitle: "Op de mat",
    description:
      "De traditionele vorm van yogamassage, zoals die in Noord-Thailand ook het meest wordt gegeven. Op een comfortabele kapok rolmatras worden yoga stretches gecombineerd met acupressuur massage. Geschikt voor iedereen, van 10 tot 100 jaar.",
    image: THAI_MASSAGE_IMAGE,
    prices: [
      { duration: "60 min", price: "€ 59,-" },
      { duration: "75 min", price: "€ 69,-" },
      { duration: "90 min", price: "€ 79,-" },
    ],
    tag: "Meest geboekt",
  },
  {
    id: "reflexology",
    title: "Voetreflexologie",
    subtitle: "Thais & Westers",
    description:
      "Een combinatie van westerse en Thaise voetreflexologie. Bij 60 minuten worden ook de onderbenen tot en met de knie gemasseerd. Ook mogelijk als pure voetmassage inclusief voetenbad en scrub.",
    image: REFLEXOLOGY_IMAGE,
    prices: [
      { duration: "30 min", price: "€ 35,-" },
      { duration: "60 min", price: "€ 55,-" },
    ],
    tag: null,
  },
  {
    id: "relaxation",
    title: "Ontspanningsmassage",
    subtitle: "Anti-stress & Herstel",
    description:
      "Van ontspannend tot therapeutisch, van klassieke oliemassage tot sportmassage. Het zwaartepunt ligt bij rug, nek en schouders, maar ook handen, voeten en hoofd komen aan bod. Na afloop krijg je een miniflesje massageolie mee.",
    image: RELAXATION_IMAGE,
    prices: [
      { duration: "60 min", price: "€ 59,-" },
      { duration: "90 min", price: "€ 79,-" },
    ],
    tag: null,
  },
  {
    id: "yoga",
    title: "Personal Yoga Training",
    subtitle: "Op maat",
    description:
      "Personal Yoga Training en Les Mills Body Balance Training op maat. Of je nu beginner bent of gevorderd, de les wordt volledig afgestemd op jouw niveau, doelen en lichaam.",
    image: YOGA_IMAGE,
    prices: [
      { duration: "Op aanvraag", price: "Prijs op aanvraag" },
    ],
    tag: null,
  },
];

const arrangements = [
  {
    id: "arrangement-winter",
    title: "Winter Arrangement",
    subtitle: "Seizoensarrangement",
    description:
      "Stimulerende massage met westerse en oosterse technieken met essentiële olie naar keuze. Start met een scrub van rug, nek, schouders en achterkant benen. Daarna volgt een massage van rug, nek, schouders, benen, armen en voeten.",
    image: STUDIO_IMAGE,
    prices: [
      { duration: "60 min", price: "€ 59,-" },
      { duration: "90 min", price: "€ 79,-" },
    ],
    tag: "Seizoen",
  },
  {
    id: "arrangement-combi",
    title: "Combi Thai & Reflexologie",
    subtitle: "Arrangement",
    description:
      "Heerlijke Thaise yogamassage gecombineerd met 15-20 minuten voetreflexologie. Start met een warm voetenbad en een kopje kruidenthee. Bij 90 minuten komt het hele lichaam aan bod.",
    image: THAI_MASSAGE_IMAGE,
    prices: [
      { duration: "60 min", price: "€ 59,-" },
      { duration: "90 min", price: "€ 79,-" },
    ],
    tag: null,
  },
];

export default function Behandelingen() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FCF9F5" }}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container py-4 flex justify-between items-center">
          <Link href="/">
            <a className="font-display text-2xl font-bold" style={{ color: "#3E3A37" }}>
              Balanergy
            </a>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/">
              <a className="font-body text-sm font-medium hover:opacity-70" style={{ color: "#6B6560" }}>
                Home
              </a>
            </Link>
            <Link href="/behandelingen">
              <a className="font-body text-sm font-medium" style={{ color: "#8DA089" }}>
                Behandelingen
              </a>
            </Link>
            <Link href="/over-mij">
              <a className="font-body text-sm font-medium hover:opacity-70" style={{ color: "#6B6560" }}>
                Over Mij
              </a>
            </Link>
            <Link href="/contact">
              <a className="font-body text-sm font-medium hover:opacity-70" style={{ color: "#6B6560" }}>
                Contact
              </a>
            </Link>
          </nav>
          <a
            href={ONLINE_AGENDA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded font-body text-sm font-semibold text-white"
            style={{ backgroundColor: "#8DA089" }}
          >
            BOEK NU
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-2" style={{ color: "#3E3A37" }}>
              Behandelingen & Prijzen
            </h1>
            <p className="font-body text-lg" style={{ color: "#8DA089" }}>
              Van ontspannend tot therapeutisch — er is altijd een behandeling die op dit moment bij jou past
            </p>
          </div>
        </section>

        {/* Treatments Grid */}
        <section className="py-12">
          <div className="container">
            <h2 className="font-display text-3xl font-bold mb-8" style={{ color: "#3E3A37" }}>
              Onze Behandelingen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {treatments.map((t) => (
                <div
                  key={t.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full justify-between"
                  style={{ borderTop: "1px solid rgba(198,156,109,0.15)" }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={t.image}
                      alt={t.title}
                      className="w-full h-full object-cover"
                    />
                    {t.tag && (
                      <span
                        className="absolute top-3 left-3 text-xs font-body font-semibold px-3 py-1 rounded-full"
                        style={{ backgroundColor: "#C69C6D", color: "white", letterSpacing: "0.04em" }}
                      >
                        {t.tag}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col h-full justify-between">
                    <p className="font-body text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#8DA089" }}>
                      {t.subtitle}
                    </p>
                    <h3 className="font-display text-xl font-semibold mb-3" style={{ color: "#3E3A37" }}>
                      {t.title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed" style={{ color: "#6B6560", height: "9.1em", overflow: "hidden", marginBottom: "0" }}>
                      {t.description}
                    </p>

                    {/* Prices */}
                    <div className="border-t pt-4 mb-4 mt-auto" style={{ borderColor: "rgba(198,156,109,0.25)" }}>
                      {t.prices.map((p, pi) => (
                        <div key={pi} className="flex justify-between items-center py-1">
                          <span className="font-body text-sm" style={{ color: "#6B6560" }}>
                            {p.duration}
                          </span>
                          <span className="font-body text-sm font-semibold" style={{ color: "#3E3A37" }}>
                            {p.price}
                          </span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={ONLINE_AGENDA_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded font-body text-sm font-semibold text-white text-center transition-opacity hover:opacity-90"
                      style={{ backgroundColor: "#8DA089" }}
                    >
                      BOEK NU
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Arrangements Section */}
        <section className="py-12" style={{ backgroundColor: "rgba(141,160,137,0.05)" }}>
          <div className="container">
            <h2 className="font-display text-3xl font-bold mb-8" style={{ color: "#3E3A37" }}>
              Arrangementen & Acties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {arrangements.map((a) => (
                <div
                  key={a.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full justify-between"
                  style={{ borderTop: "1px solid rgba(198,156,109,0.15)" }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={a.image}
                      alt={a.title}
                      className="w-full h-full object-cover"
                    />
                    {a.tag && (
                      <span
                        className="absolute top-3 left-3 text-xs font-body font-semibold px-3 py-1 rounded-full"
                        style={{ backgroundColor: "#C69C6D", color: "white", letterSpacing: "0.04em" }}
                      >
                        {a.tag}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col h-full justify-between">
                    <p className="font-body text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#8DA089" }}>
                      {a.subtitle}
                    </p>
                    <h3 className="font-display text-xl font-semibold mb-3" style={{ color: "#3E3A37" }}>
                      {a.title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed" style={{ color: "#6B6560", height: "9.1em", overflow: "hidden", marginBottom: "0" }}>
                      {a.description}
                    </p>

                    {/* Prices */}
                    <div className="border-t pt-4 mb-4 mt-auto" style={{ borderColor: "rgba(198,156,109,0.25)" }}>
                      {a.prices.map((p, pi) => (
                        <div key={pi} className="flex justify-between items-center py-1">
                          <span className="font-body text-sm" style={{ color: "#6B6560" }}>
                            {p.duration}
                          </span>
                          <span className="font-body text-sm font-semibold" style={{ color: "#3E3A37" }}>
                            {p.price}
                          </span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={ONLINE_AGENDA_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded font-body text-sm font-semibold text-white text-center transition-opacity hover:opacity-90"
                      style={{ backgroundColor: "#8DA089" }}
                    >
                      BOEK NU
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12">
          <div className="container text-center">
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "#3E3A37" }}>
              Klaar om je afspraak in te boeken?
            </h2>
            <p className="font-body text-lg mb-6" style={{ color: "#6B6560" }}>
              Kies je behandeling en boek direct online via onze agenda
            </p>
            <a
              href={ONLINE_AGENDA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded font-body text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#8DA089" }}
            >
              ONLINE AGENDA
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-8" style={{ backgroundColor: "#3E3A37", color: "white" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-display text-lg font-bold mb-4">Balanergy</h3>
              <p className="font-body text-sm opacity-80">
                Praktijk voor Thaise yogamassage & voetreflexologie in IJsselmuiden
              </p>
            </div>
            <div>
              <h4 className="font-body text-sm font-semibold mb-4">Snelle Links</h4>
              <ul className="space-y-2 font-body text-sm">
                <li><Link href="/"><a className="opacity-80 hover:opacity-100">Home</a></Link></li>
                <li><Link href="/behandelingen"><a className="opacity-80 hover:opacity-100">Behandelingen</a></Link></li>
                <li><Link href="/over-mij"><a className="opacity-80 hover:opacity-100">Over Mij</a></Link></li>
                <li><Link href="/contact"><a className="opacity-80 hover:opacity-100">Contact</a></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-body text-sm font-semibold mb-4">Contact</h4>
              <div className="space-y-2 font-body text-sm">
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <a href="tel:0642874405" className="opacity-80 hover:opacity-100">06-42874405</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <a href="mailto:balanergy@hotmail.com" className="opacity-80 hover:opacity-100">balanergy@hotmail.com</a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white border-opacity-20 pt-8 text-center font-body text-sm opacity-80">
            <p>&copy; 2026 Balanergy. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
