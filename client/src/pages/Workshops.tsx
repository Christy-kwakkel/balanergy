/*
 * BALANERGY WORKSHOPS & OPLEIDINGEN PAGE
 * Design: "Warme Aarde – Organisch & Sensueel"
 * Workshops and training courses on one page, clearly separated
 */

import { useEffect } from "react";
import { Link } from "wouter";
import { Phone, Mail, BookOpen } from "lucide-react";
import Navigation from "@/components/Navigation";

const CONTACT_PHONE = "06-42874405";
const CONTACT_EMAIL = "balanergy@hotmail.com";

const workshops = [
  {
    id: "ontspanning-achterkant",
    title: "Ontspanningsmassage Achterkant Lichaam",
    description: "Leer nek-, schouder- en rugontspanningsmassagetechnieken. Inclusief handout met technieken en basiskennis.",
    duration: "2,5-4 uur (1-2 personen)",
    price: "€99 per persoon / €175 voor 2 personen",
  },
  {
    id: "thaise-level1",
    title: "Thaise Massage Level 1",
    description: "Thaise acupressuur en yogamassage voorkant lichaam (voeten, benen, armen, handen, buik, borst, hoofd). Kan zonder massagetafel.",
    duration: "2,5-4 uur (1-2 personen)",
    price: "€125 per persoon / €225 voor 2 personen",
  },
  {
    id: "thaise-level2",
    title: "Thaise Massage Level 2",
    description: "Thaise massage achterkant lichaam en zijposities (voeten, benen, billen, rug, nek, schouders). Aanvulling op Level 1. Kan zonder massagetafel.",
    duration: "2,5-4 uur (1-2 personen)",
    price: "€125 per persoon / €225 voor 2 personen",
  },
  {
    id: "ontspanning-hoofd",
    title: "Ontspanningsmassage Hoofd, Handen en Voeten",
    description: "Leer hoofd-, hand- en voetontspanningsmassagetechnieken. Inclusief handout met technieken en basiskennis.",
    duration: "2 uur",
    price: "€75 per persoon / €140 voor 2 personen",
  },
  {
    id: "ontspanning-heel",
    title: "Ontspanningsmassage Hele Lichaam",
    description: "Volledige lichaamsmassage ontspanning (nek, schouders, rug, benen, armen, handen, hoofd, voeten). Inclusief handout met technieken en basiskennis.",
    duration: "5-6 uur",
    price: "€225 per persoon",
  },
  {
    id: "klachtgerichte",
    title: "Klachtgerichte/Sportmassage",
    description: "Klachtgerichte massage (nek, schouders, rug, heup-/bekkenspieren, bovenbenen). Inclusief handout met technieken en basiskennis.",
    duration: "3-3,5 uur",
    price: "€125 per persoon / €225 voor 2 personen",
  },
];

const trainings = [
  {
    id: "thaise-level1",
    title: "Opleiding Thaise Yogamassage Level 1",
    description: "Leer de basisprincipes van Thaise yogamassage. Voorkant lichaamstechnieken inclusief voeten, benen, armen, handen, buik, borst en hoofd. Maximaal 2 personen per training.",
    duration: "Meerdere sessies",
    price: "Op aanvraag",
  },
  {
    id: "thaise-level2",
    title: "Opleiding Thaise Yogamassage Level 2",
    description: "Geavanceerde Thaise yogamassagetechnieken voor achterkant lichaam en zijposities. Aanvulling op Level 1. Maximaal 2 personen per training.",
    duration: "Meerdere sessies",
    price: "Op aanvraag",
  },
  {
    id: "klachtgerichte",
    title: "Opleiding Klachtgerichte Massage",
    description: "Professionele klachtgerichte massagetraining. Leer specifieke pijngebieden en bewegingsklachten behandelen. Maximaal 2 personen per training.",
    duration: "Meerdere sessies",
    price: "Op aanvraag",
  },
  {
    id: "ontspanning-volledig",
    title: "Volledige Opleiding Ontspanningsmassage",
    description: "Volledige ontspanningsmassagetraining voor het hele lichaam. Inclusief water, kruidenthee en cursusmateriaal. Beschikbaar in het Nederlands of Engels.",
    duration: "Meerdere sessies",
    price: "Op aanvraag",
  },
];

export default function Workshops() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Workshops & Opleidingen | Balanergy";
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FCF9F5" }}>
      <Navigation />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-2" style={{ color: "#3E3A37" }}>
              Workshops & Opleidingen
            </h1>
            <p className="font-body text-lg" style={{ color: "#8DA089" }}>
              Leer massagetechnieken van Mascha en word zelf masseur
            </p>
          </div>
        </section>

        {/* Workshops Section */}
        <section className="py-12">
          <div className="container">
            <h2 className="font-display text-3xl font-bold mb-8" style={{ color: "#3E3A37" }}>
              Workshops
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workshops.map((workshop) => (
                <div
                  key={workshop.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full justify-between"
                  style={{ borderTop: "1px solid rgba(198,156,109,0.15)" }}
                >
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-display text-xl font-bold mb-1" style={{ color: "#3E3A37" }}>
                      {workshop.title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed mb-6 flex-1" style={{ color: "#6B6560", height: "6.5em", overflow: "hidden" }}>
                      {workshop.description}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="border-t" style={{ borderColor: "rgba(141,160,137,0.2)" }} />

                  {/* Details */}
                  <div className="p-6">
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between font-body text-sm">
                        <span style={{ color: "#6B6560" }}>Duur:</span>
                        <span style={{ color: "#8DA089", fontWeight: "600" }}>{workshop.duration}</span>
                      </div>
                      <div className="flex justify-between font-body text-sm">
                        <span style={{ color: "#6B6560" }}>Prijs:</span>
                        <span style={{ color: "#8DA089", fontWeight: "600" }}>{workshop.price}</span>
                      </div>
                    </div>

                    {/* Contact Button */}
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="block w-full py-3 rounded font-body text-sm font-semibold text-white text-center transition-opacity hover:opacity-90"
                      style={{ backgroundColor: "#8DA089" }}
                    >
                      INTERESSE?
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trainings Section */}
        <section className="py-12">
          <div className="container">
            <h2 className="font-display text-3xl font-bold mb-8" style={{ color: "#3E3A37" }}>
              Opleidingen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainings.map((training) => (
                <div
                  key={training.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full justify-between"
                  style={{ borderTop: "1px solid rgba(198,156,109,0.15)" }}
                >
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-display text-xl font-bold mb-1" style={{ color: "#3E3A37" }}>
                      {training.title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed mb-6 flex-1" style={{ color: "#6B6560", height: "6.5em", overflow: "hidden" }}>
                      {training.description}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="border-t" style={{ borderColor: "rgba(141,160,137,0.2)" }} />

                  {/* Details */}
                  <div className="p-6">
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between font-body text-sm">
                        <span style={{ color: "#6B6560" }}>Duur:</span>
                        <span style={{ color: "#8DA089", fontWeight: "600" }}>{training.duration}</span>
                      </div>
                      <div className="flex justify-between font-body text-sm">
                        <span style={{ color: "#6B6560" }}>Prijs:</span>
                        <span style={{ color: "#8DA089", fontWeight: "600" }}>{training.price}</span>
                      </div>
                    </div>

                    {/* Contact Button */}
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="block w-full py-3 rounded font-body text-sm font-semibold text-white text-center transition-opacity hover:opacity-90"
                      style={{ backgroundColor: "#8DA089" }}
                    >
                      INTERESSE?
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
              Geïnteresseerd in een workshop of opleiding?
            </h2>
            <p className="font-body text-lg mb-8 max-w-2xl mx-auto" style={{ color: "#6B6560" }}>
              Neem contact op met Mascha voor meer informatie en beschikbare data
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="inline-block px-8 py-3 rounded font-body text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#8DA089" }}
              >
                BEL: {CONTACT_PHONE}
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-block px-8 py-3 rounded font-body text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#8DA089" }}
              >
                MAIL: {CONTACT_EMAIL}
              </a>
            </div>
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
                  <a href={`tel:${CONTACT_PHONE}`} className="opacity-80 hover:opacity-100">{CONTACT_PHONE}</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <a href={`mailto:${CONTACT_EMAIL}`} className="opacity-80 hover:opacity-100">{CONTACT_EMAIL}</a>
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
