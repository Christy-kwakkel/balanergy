/**
 * BALANERGY INFO PAGE
 * Design: "Warme Aarde – Organisch & Sensueel"
 * Downloadable documents and resources
 */

import { Link } from "wouter";
import { Phone, Mail, Download } from "lucide-react";
import Navigation from "@/components/Navigation";

const documents = [
  {
    id: "prijzen",
    title: "Prijzen",
    description: "Actuele prijslijst van alle behandelingen, arrangementen en services per 1 januari 2026",
    date: "1 januari 2026",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663495181631/fJXKTVuKN2f6PMKBQCtqnD/PrijzenBalanergyper1-1-2026_ecd9a526.pdf",
  },
  {
    id: "persoonsgegevens",
    title: "Persoonsgegevens Formulier",
    description: "Formulier voor het invullen van uw persoonsgegevens",
    date: "Op aanvraag",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663495181631/fJXKTVuKN2f6PMKBQCtqnD/Uwpersoonsgegevens_01ec79e5.pdf",
  },
  {
    id: "anamnese",
    title: "Anamnese Formulier",
    description: "Gezondheids- en anamneseformulier voor nieuwe klanten",
    date: "Op aanvraag",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663495181631/fJXKTVuKN2f6PMKBQCtqnD/Anamneseformuliermassagetherapie_4db9c927.pdf",
  },
];

export default function Info() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FCF9F5" }}>
      <Navigation />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-2" style={{ color: "#3E3A37" }}>
              Informatie & Documenten
            </h1>
            <p className="font-body text-lg" style={{ color: "#8DA089" }}>
              Downloadbare documenten en formulieren
            </p>
          </div>
        </section>

        {/* Documents Section */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  className="rounded-lg p-6 border transition-all"
                  style={{
                    backgroundColor: "white",
                    borderColor: "#E8DDD5",
                  }}
                >
                  <div className="mb-4">
                    <h3 className="font-display text-xl font-bold mb-2" style={{ color: "#3E3A37" }}>
                      {doc.title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed" style={{ color: "#6B6560", height: "3em", overflow: "hidden" }}>
                      {doc.description}
                    </p>
                  </div>

                  <div className="mb-6 pb-6 border-b" style={{ borderColor: "#E8DDD5" }}>
                    <p className="font-body text-xs" style={{ color: "#8DA089" }}>
                      {doc.date}
                    </p>
                  </div>

                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded font-body text-sm font-semibold text-white text-center transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#8DA089" }}
                  >
                    <Download size={16} />
                    DOWNLOAD
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-12">
          <div className="container max-w-3xl">
            <div className="bg-white rounded-lg p-8" style={{ borderColor: "#E8DDD5", border: "1px solid #E8DDD5" }}>
              <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "#3E3A37" }}>
                Meer Informatie Nodig?
              </h2>
              <p className="font-body text-base mb-6" style={{ color: "#6B6560" }}>
                Heb je vragen over onze services, prijzen of formulieren? Neem gerust contact met ons op. We helpen je graag!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:0642874405"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded font-body text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#8DA089" }}
                >
                  <Phone size={16} />
                  bel: 06-42874405
                </a>
                <a
                  href="mailto:balanergy@hotmail.com"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded font-body text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#8DA089" }}
                >
                  <Mail size={16} />
                  mail: balanergy@hotmail.com
                </a>
              </div>
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
