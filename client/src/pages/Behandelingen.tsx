/*
 * BALANERGY BEHANDELINGEN PAGE
 * Design: "Warme Aarde – Organisch & Sensueel"
 * All treatments on one page, no submenus
 */

import { Link } from "wouter";
import { Phone, Mail, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import ExpandableCard from "@/components/ExpandableCard";

const ONLINE_AGENDA_URL = "https://www.supersaas.nl/schedule/balanergy/Balanergy";

const treatments = [
  {
    id: "ontspanning",
    title: "Ontspanningsmassage",
    subtitle: "Ontspanning",
    description:
      "Diepe ontspanningsmassage met essentiële oliën. Minimaal 45 minuten voor ware ontspanning. Kan steviger uitgevoerd worden als je dat wilt.",
    fullDescription:
      "Een diepe ontspanningsmassage met essentiële oliën naar keuze. Deze massage is speciaal ontworpen om je lichaam en geest volledig tot rust te brengen. Minimaal 45 minuten is aanbevolen voor een ware ontspanningservaring. De massage kan steviger uitgevoerd worden als je dat wilt, afhankelijk van je voorkeur en behoeften op dat moment.",
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
    fullDescription:
      "Sportmassage is niet alleen voor sporters! Deze gespecialiseerde massage behandelt pijn, blessures en overbelasting van specifieke lichaamsdelen. Het is perfect voor iedereen met bewegingsklachten zoals hoofdpijn, rugpijn en nek-/schouderklachten. De massage richt zich op het herstellen van de normale functie van spieren en gewrichten, en helpt bij het voorkomen van blessures.",
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
    fullDescription:
      "De combinatiemassage is een perfecte mix van ontspannings- en sportmassage. Deze massage behandelt specifieke probleemgebieden met gerichte technieken, terwijl je overall ontspanning behoudt. Het is ideaal als je zowel ontspanning als therapeutische behandeling wilt. Minimaal 45 minuten is aanbevolen voor de beste resultaten.",
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
    fullDescription:
      "De rugpijnmassage is een gespecialiseerde behandeling van boven- en onderrug met Thaise acupressuur en klachtgerichte massagetechnieken. Deze massage maakt gebruik van speciale Thaise balsem voor diep spierwerk en helpt bij het verlichten van rugpijn en spanning. Perfect voor degenen die veel tijd achter een bureau doorbrengen of fysieke arbeid verrichten.",
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
    fullDescription:
      "De hoofdpijnmassage behandelt drie gespecialiseerde typen hoofdpijn: stress-/spanningsmigraine, nek-/schouder-gerelateerde hoofdpijn, en sinuscongestie-hoofdpijn. Deze massage maakt gebruik van pepermuntolie en Thaise balsem om spanning te verlichten en bloedcirculatie te verbeteren. De behandeling richt zich op de specifieke oorzaak van je hoofdpijn voor optimale verlichting.",
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
    fullDescription:
      "De traditionele Thaise yogamassage is een eeuwenoude techniek die strekking en acupressuurtechnieken combineert. Deze massage werkt met je energielijnen en helpt bij het herstellen van balans in je lichaam. Het is geschikt voor iedereen van 10 tot 100 jaar oud en kan zowel ontspannend als therapeutisch zijn, afhankelijk van je behoeften.",
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
    fullDescription:
      "Voetreflexologie is gebaseerd op het principe dat bepaalde punten op je voeten corresponderen met verschillende organen en systemen in je lichaam. Deze massage combineert Thaise en westerse reflexologietechnieken. Bij 60 minuten worden ook de onderbenen tot aan de knie gemasseerd, wat zorgt voor een meer complete behandeling en betere circulatie.",
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
                <div key={t.id}>
                  {t.tag && (
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 rounded text-xs font-semibold" style={{ backgroundColor: "#C69C6D", color: "white" }}>
                        {t.tag}
                      </span>
                    </div>
                  )}
                  <ExpandableCard
                    title={t.title}
                    subtitle={t.subtitle}
                    description={t.description}
                    fullDescription={t.fullDescription}
                    prices={t.prices}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cancellation Policy Section */}
        <section className="py-12 bg-white">
          <div className="container max-w-3xl">
            <div className="bg-yellow-50 border-l-4 p-6" style={{ borderColor: "#C69C6D", backgroundColor: "rgba(198,156,109,0.1)" }}>
              <p className="font-body text-base font-semibold mb-3" style={{ color: "#3E3A37" }}>
                ⚠️ Annuleringsbeleid
              </p>
              <p className="font-body text-base leading-relaxed mb-3" style={{ color: "#6B6560" }}>
                <strong>Let op:</strong> Vanwege de volle agenda worden afspraken die minder dan 24 uur van tevoren worden afgezegd, ongeacht de reden, in rekening gebracht.
              </p>
              <p className="font-body text-base leading-relaxed" style={{ color: "#6B6560" }}>
                <strong>Uitzondering:</strong> Wanneer je iemand anders in jouw plaats laat komen voor dezelfde tijdsduur, dan geldt dit niet.
              </p>
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
                <li><Link href="/" className="opacity-80 hover:opacity-100">Home</Link></li>
                <li><Link href="/behandelingen" className="opacity-80 hover:opacity-100">Behandelingen</Link></li>
                <li><Link href="/over-mij" className="opacity-80 hover:opacity-100">Over Mij</Link></li>
                <li><Link href="/arrangementen" className="opacity-80 hover:opacity-100">Arrangementen</Link></li>
                <li><Link href="/workshops" className="opacity-80 hover:opacity-100">Workshops & Opleidingen</Link></li>
                <li><Link href="/personal-training" className="opacity-80 hover:opacity-100">Personal Training</Link></li>
                <li><Link href="/contact" className="opacity-80 hover:opacity-100">Contact</Link></li>
                <li><Link href="/info" className="opacity-80 hover:opacity-100">Info</Link></li>
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
