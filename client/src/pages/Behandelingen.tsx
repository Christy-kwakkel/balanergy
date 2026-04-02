/*
 * BALANERGY BEHANDELINGEN PAGE
 * Design: "Warme Aarde – Organisch & Sensueel"
 * All treatments on one page, no submenus
 */

import { Link } from "wouter";
import { Phone, Mail, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";

const ONLINE_AGENDA_URL = "https://www.supersaas.nl/schedule/balanergy/Balanergy";

const treatments = [
  {
    id: "ontspanning",
    title: "Ontspanningsmassage",
    subtitle: "Ontspanning",
    description:
      "Diepe ontspanningsmassage met essentiële oliën. Minimaal 45 minuten voor ware ontspanning. Kan steviger uitgevoerd worden als je dat wilt.",
    prices: [
      { duration: "45 min", price: "€ 45,-" },
      { duration: "60 min", price: "€ 55,-" },
      { duration: "75 min", price: "€ 65,-" },
      { duration: "90 min", price: "€ 75,-" },
      { duration: "120 min", price: "€ 95,-" },
    ],
  },
  {
    id: "sportmassage",
    title: "Sportmassage",
    subtitle: "Klachtgericht",
    description:
      "Voor pijn, blessures en overbelasting van specifieke lichaamsdelen. Niet alleen voor sporters—voor iedereen met bewegingsklachten zoals hoofdpijn, rugpijn en nek-/schouderklachten.",
    prices: [
      { duration: "30 min", price: "€ 35,-" },
      { duration: "45 min", price: "€ 45,-" },
      { duration: "60 min", price: "€ 55,-" },
      { duration: "75 min", price: "€ 65,-" },
      { duration: "90 min", price: "€ 75,-" },
      { duration: "120 min", price: "€ 95,-" },
    ],
  },
  {
    id: "combinatiemassage",
    title: "Combinatiemassage",
    subtitle: "Combinatie",
    description:
      "Mix van ontspannings- en sportmassage. Behandelt specifieke probleemgebieden terwijl je overall ontspanning behoudt. Minimaal 45 minuten.",
    prices: [
      { duration: "45 min", price: "€ 45,-" },
      { duration: "60 min", price: "€ 55,-" },
      { duration: "75 min", price: "€ 65,-" },
      { duration: "90 min", price: "€ 75,-" },
      { duration: "120 min", price: "€ 95,-" },
    ],
  },
  {
    id: "rugpijnmassage",
    title: "Rugpijnmassage",
    subtitle: "Gespecialiseerd",
    description:
      "Gespecialiseerde behandeling van boven- en onderrug met Thaise acupressuur en klachtgerichte massage. Gebruikt speciale Thaise balsem voor diep spierwerk.",
    prices: [
      { duration: "30 min", price: "€ 35,-" },
      { duration: "45 min", price: "€ 45,-" },
    ],
  },
  {
    id: "hoofdpijnmassages",
    title: "Hoofdpijnmassages",
    subtitle: "Gespecialiseerd",
    description:
      "Drie gespecialiseerde typen: stress-/spanningsmigraine, nek-/schouder-gerelateerde hoofdpijn, en sinuscongestie-hoofdpijn met pepermuntolie en Thaise balsem.",
    prices: [
      { duration: "30 min", price: "€ 35,-" },
    ],
  },
  {
    id: "thai",
    title: "Thaise Yogamassage",
    subtitle: "Thais",
    description:
      "Traditionele Thaise yogamassage met strekking en acupressuurtechnieken. Geschikt voor iedereen van 10 tot 100 jaar oud.",
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
    subtitle: "Reflexologie",
    description:
      "Voetreflexologie en massage met Thaise en westerse technieken. Bij 60 minuten worden ook de onderbenen tot aan de knie gemasseerd.",
    prices: [
      { duration: "30 min", price: "€ 35,-" },
      { duration: "60 min", price: "€ 55,-" },
    ],
  },
];

export default function Behandelingen() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FCF9F5" }}>
      <Navigation />

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
                  <div className="p-6 flex-1 flex flex-col">
                    {t.tag && (
                      <span className="inline-block px-3 py-1 rounded text-xs font-semibold mb-3 w-fit" style={{ backgroundColor: "#C69C6D", color: "white" }}>
                        {t.tag}
                      </span>
                    )}
                    <h3 className="font-display text-xl font-bold mb-1" style={{ color: "#3E3A37" }}>
                      {t.title}
                    </h3>
                    <p className="font-body text-xs font-semibold mb-3" style={{ color: "#8DA089" }}>
                      {t.subtitle}
                    </p>
                    <p className="font-body text-sm leading-relaxed mb-6 flex-1" style={{ color: "#6B6560", height: "6.5em", overflow: "hidden" }}>
                      {t.description}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="border-t" style={{ borderColor: "rgba(141,160,137,0.2)" }} />

                  {/* Prices */}
                  <div className="p-6">
                    <div className="space-y-2 mb-6">
                      {t.prices.map((p, idx) => (
                        <div key={idx} className="flex justify-between font-body text-sm">
                          <span style={{ color: "#6B6560" }}>{p.duration}</span>
                          <span style={{ color: "#8DA089", fontWeight: "600" }}>{p.price}</span>
                        </div>
                      ))}
                    </div>

                    {/* Book Button */}
                    <a
                      href={ONLINE_AGENDA_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-3 rounded font-body text-sm font-semibold text-white text-center transition-opacity hover:opacity-90"
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
        <section className="py-16 md:py-24">
          <div className="container text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6" style={{ color: "#3E3A37" }}>
              Klaar om je afspraak in te boeken?
            </h2>
            <p className="font-body text-lg mb-8 max-w-2xl mx-auto" style={{ color: "#6B6560" }}>
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
