/**
 * BALANERGY ARRANGEMENTEN PAGE
 * Design: "Warme Aarde – Organisch & Sensueel"
 * Arrangements and special packages
 */

import { Link } from "wouter";
import { Phone, Mail, ArrowRight } from "lucide-react";

const ONLINE_AGENDA_URL = "https://www.supersaas.nl/schedule/balanergy/Balanergy";

const THAI_MASSAGE_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663495181631/fJXKTVuKN2f6PMKBQCtqnD/thai-massage-card-2Too8mGBKCNKbSUtmar8wB.webp";
const STUDIO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663495181631/fJXKTVuKN2f6PMKBQCtqnD/about-mascha-dvPzjAqj7qTAQ57W5UwV4y.webp";

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
  {
    id: "arrangement-pregnancy",
    title: "Zwangerschapsmassage",
    subtitle: "Speciaal voor toekomstige moeders",
    description:
      "Een zachte, veilige massage speciaal ontworpen voor zwangere vrouwen. Ondersteunt het lichaam bij de veranderingen en helpt bij ontspanning en welzijn.",
    image: STUDIO_IMAGE,
    prices: [
      { duration: "60 min", price: "€ 59,-" },
      { duration: "90 min", price: "€ 79,-" },
    ],
    tag: null,
  },
  {
    id: "arrangement-gift",
    title: "Cadeaubon",
    subtitle: "Het perfecte geschenk",
    description:
      "Geef het geschenk van ontspanning en welzijn. Een cadeaubon voor elke gelegenheid — kies zelf het bedrag en de geldigheidsduur.",
    image: THAI_MASSAGE_IMAGE,
    prices: [
      { duration: "Naar keuze", price: "Prijs op aanvraag" },
    ],
    tag: null,
  },
];

export default function Arrangementen() {
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
              <a className="font-body text-sm font-medium hover:opacity-70" style={{ color: "#6B6560" }}>
                Behandelingen
              </a>
            </Link>
            <Link href="/arrangementen">
              <a className="font-body text-sm font-medium" style={{ color: "#8DA089" }}>
                Arrangementen
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
              Arrangementen & Acties
            </h1>
            <p className="font-body text-lg" style={{ color: "#8DA089" }}>
              Speciale pakketten en aanbiedingen
            </p>
          </div>
        </section>

        {/* Arrangements Grid */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {arrangements.map((arrangement) => (
                <div key={arrangement.id} className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full">
                  {/* Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={arrangement.image}
                      alt={arrangement.title}
                      className="w-full h-full object-cover"
                    />
                    {arrangement.tag && (
                      <div
                        className="absolute top-3 left-3 px-3 py-1 rounded text-xs font-semibold text-white"
                        style={{ backgroundColor: "#C69C6D" }}
                      >
                        {arrangement.tag}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <p className="font-body text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#8DA089" }}>
                      {arrangement.subtitle}
                    </p>
                    <h3 className="font-display text-lg font-bold mb-3" style={{ color: "#3E3A37" }}>
                      {arrangement.title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed mb-4 flex-grow" style={{ color: "#6B6560" }}>
                      {arrangement.description}
                    </p>

                    {/* Prices */}
                    <div className="space-y-2 mb-4 pb-4 border-b" style={{ borderColor: "#E8D5C4" }}>
                      {arrangement.prices.map((price, idx) => (
                        <div key={idx} className="flex justify-between font-body text-sm">
                          <span style={{ color: "#6B6560" }}>{price.duration}</span>
                          <span className="font-semibold" style={{ color: "#C69C6D" }}>
                            {price.price}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Button */}
                    <a
                      href={ONLINE_AGENDA_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 rounded font-body text-sm font-semibold text-white text-center transition-opacity hover:opacity-90"
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
              Klaar voor een arrangement?
            </h2>
            <p className="font-body text-lg mb-6" style={{ color: "#6B6560" }}>
              Boek direct online of neem contact op voor meer informatie
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
                <li><Link href="/arrangementen"><a className="opacity-80 hover:opacity-100">Arrangementen</a></Link></li>
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
