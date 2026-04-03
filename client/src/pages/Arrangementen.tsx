/*
 * BALANERGY ARRANGEMENTEN PAGE
 * Design: "Warme Aarde – Organisch & Sensueel"
 * All arrangements, actions, and special offers on one page
 */

import { Link } from "wouter";
import { Phone, Mail, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";

const ONLINE_AGENDA_URL = "https://www.supersaas.nl/schedule/balanergy/Balanergy";

const acties = [
  {
    title: "Kom kennis maken met Thaise yogamassage",
    description: "Krijg een massage tegen dit scherpe actietarief! Per persoon eenmalig te boeken tegen deze speciale prijs.",
    prices: [
      { duration: "60 min", price: "€ 52,50" },
      { duration: "90 min", price: "€ 72,50" },
    ],
    note: "Niet cumuleerbaar met andere acties, kortingen of aanbiedingen.",
  },
  {
    title: "Kom kennis maken met voetreflexologie",
    description: "Boek een behandeling met Thaise en westerse technieken gecombineerd tegen dit scherpe actietarief.",
    prices: [
      { duration: "45 min", price: "€ 42,50" },
    ],
    note: "Niet cumuleerbaar met andere acties, kortingen of aanbiedingen.",
  },
  {
    title: "Scrub, achterkant lichaam",
    description: "Ontdoe je huid van dode huidcellen. Scrub van rug, billen (indien gewenst) en achterkant benen extra bij je behandeling.",
    prices: [
      { duration: "Extra", price: "€ 6,95" },
    ],
    note: "Voeg toe bij je boeking in de opmerkingen.",
  },
];

const seizoensArrangementen = [
  {
    title: "Winter arrangement",
    subtitle: "Tafel",
    prices: [
      { duration: "60 min", price: "€ 59,-" },
      { duration: "90 min", price: "€ 79,-" },
    ],
    description: "Stimulerende massage met westerse en oosterse technieken met essentiële olie naar keuze. Start met scrub van rug, nek, schouders en achterkant benen. Daarna massage van alle lichaamsdelen inclusief voeten.",
  },
  {
    title: "Balsem Sinaasappel-Kaneel arrangement",
    subtitle: "Tafel",
    prices: [
      { duration: "60 min", price: "€ 59,-" },
      { duration: "90 min", price: "€ 79,-" },
    ],
    description: "Start met kaneel of sinaasappel etherische oliebad van voeten. Insmering met verwarmende therapeutische balsem, gevolgd door massage met verwarmde essentiële olie.",
  },
  {
    title: "Balsem kaneel/sinaasappel arrangement Thais",
    subtitle: "Mat",
    prices: [
      { duration: "60 min", price: "€ 62,50" },
      { duration: "90 min", price: "€ 82,50" },
    ],
    description: "Start met warm voetbad met essentiële olie. Insmering met verwarmende therapeutische balsem, gevolgd door Thaise massage met keuze uit ontspannende of therapeutische massage.",
  },
];

const vasteArrangementen = [
  {
    title: "Antistress massage",
    subtitle: "Tafel",
    prices: [
      { duration: "60 min", price: "€ 59,-" },
      { duration: "90 min", price: "€ 79,-" },
    ],
    description: "Ontspannende massage met zwaartepunt op rug, nek, schouders, handen, voeten en hoofd. Na afloop krijg je een miniflesje massageolie met anti-stress essentiële olie mee naar huis.",
  },
  {
    title: "Thai Western massage",
    subtitle: "Mat & Tafel",
    prices: [
      { duration: "90 min", price: "€ 82,50" },
    ],
    description: "Start op mat met voetbad, massage van armen, handen, voeten, benen en rug met yogastretches. Vervolgens op tafel rug, nek, schouders en hoofd.",
  },
  {
    title: "Combi Thaise yogamassage en voetreflexologie",
    subtitle: "Mat",
    prices: [
      { duration: "60 min", price: "€ 59,-" },
      { duration: "90 min", price: "€ 79,-" },
    ],
    description: "Thaise yogamassage met ongeveer 15-20 minuten voetreflexologie. Start met warm voetenbad en kopje kruiden- of vruchtenthee naar keuze.",
  },
  {
    title: "Indian summer arrangement",
    subtitle: "Tafel",
    prices: [
      { duration: "60 min", price: "€ 59,-" },
      { duration: "90 min", price: "€ 79,-" },
    ],
    description: "Start met voetenbad en kopje thee, daarna stevige scrub van rug en achterkant benen, gevolgd door massage van rug, nek, schouders, achterkant benen en bilspieren.",
  },
  {
    title: "Samui zwangerschapsarrangement",
    subtitle: "Tafel of Mat",
    prices: [
      { duration: "60 min", price: "€ 59,-" },
      { duration: "90 min", price: "€ 79,-" },
    ],
    description: "Speciaal voor zwangeren. Start met warm voetenbad met lavendelolie en kopje kruidenthee. Ontspannende massage van hoofd, gezicht, nek, schouders, armen, handen en voeten.",
  },
];

function ArrangementCard({ title, subtitle, prices, description, note }: { title: string; subtitle: string; prices: Array<{ duration: string; price: string }>; description: string; note?: string }) {
  return (
    <div
      className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full justify-between"
      style={{ borderTop: "1px solid rgba(198,156,109,0.15)" }}
    >
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-display text-xl font-bold mb-1" style={{ color: "#3E3A37" }}>
          {title}
        </h3>
        <p className="font-body text-xs font-semibold mb-3" style={{ color: "#8DA089" }}>
          {subtitle}
        </p>
        <p className="font-body text-sm leading-relaxed mb-6 flex-1" style={{ color: "#6B6560", height: "6.5em", overflow: "hidden" }}>
          {description}
        </p>
      </div>

      {/* Divider */}
      <div className="border-t" style={{ borderColor: "rgba(141,160,137,0.2)" }} />

      {/* Price and Duration */}
      <div className="p-6">
        <div className="space-y-2 mb-3">
          {prices.map((p, idx) => (
            <div key={idx} className="flex justify-between font-body text-sm">
              <span style={{ color: "#6B6560" }}>{p.duration}</span>
              <span style={{ color: "#8DA089", fontWeight: "600" }}>{p.price}</span>
            </div>
          ))}
        </div>
        {note && (
          <p className="font-body text-xs mb-4 italic" style={{ color: "#C69C6D" }}>
            {note}
          </p>
        )}

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
  );
}

function ActieCard({ title, prices, description, note }: { title: string; prices: Array<{ duration: string; price: string }>; description: string; note: string }) {
  return (
    <div
      className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full justify-between"
      style={{ borderTop: "1px solid rgba(198,156,109,0.15)" }}
    >
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-display text-xl font-bold mb-1" style={{ color: "#3E3A37" }}>
          {title}
        </h3>
        <p className="font-body text-sm leading-relaxed mb-6 flex-1" style={{ color: "#6B6560", height: "6.5em", overflow: "hidden" }}>
          {description}
        </p>
      </div>

      {/* Divider */}
      <div className="border-t" style={{ borderColor: "rgba(141,160,137,0.2)" }} />

      {/* Price and Duration */}
      <div className="p-6">
        <div className="space-y-2 mb-3">
          {prices.map((p, idx) => (
            <div key={idx} className="flex justify-between font-body text-sm">
              <span style={{ color: "#6B6560" }}>{p.duration}</span>
              <span style={{ color: "#8DA089", fontWeight: "600" }}>{p.price}</span>
            </div>
          ))}
        </div>
        <p className="font-body text-xs mb-4 italic" style={{ color: "#C69C6D" }}>
          {note}
        </p>

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
  );
}

export default function Arrangementen() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FCF9F5" }}>
      <Navigation />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-2" style={{ color: "#3E3A37" }}>
              Arrangementen & Acties
            </h1>
            <p className="font-body text-lg" style={{ color: "#8DA089" }}>
              Leuke acties en arrangementen speciaal samengesteld voor jouw welzijn
            </p>
          </div>
        </section>

        {/* Acties Section */}
        <section className="py-12">
          <div className="container">
            <div className="flex items-center gap-3 mb-8">
              <Sparkles size={24} style={{ color: "#C69C6D" }} />
              <h2 className="font-display text-3xl font-bold" style={{ color: "#3E3A37" }}>
                Acties
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {acties.map((actie, idx) => (
                <ActieCard key={idx} {...actie} />
              ))}
            </div>
          </div>
        </section>

        {/* Seizoens Arrangementen Section */}
        <section className="py-12">
          <div className="container">
            <h2 className="font-display text-3xl font-bold mb-8" style={{ color: "#3E3A37" }}>
              Seizoens- & Etherische Olie Arrangementen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {seizoensArrangementen.map((arr, idx) => (
                <ArrangementCard key={idx} {...arr} />
              ))}
            </div>
          </div>
        </section>

        {/* Vaste Arrangementen Section */}
        <section className="py-12">
          <div className="container">
            <h2 className="font-display text-3xl font-bold mb-8" style={{ color: "#3E3A37" }}>
              Vaste Arrangementen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {vasteArrangementen.map((arr, idx) => (
                <ArrangementCard key={idx} {...arr} />
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
              Kies je arrangement en boek direct online via onze agenda
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
