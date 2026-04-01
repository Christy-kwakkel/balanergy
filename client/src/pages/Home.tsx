/**
 * BALANERGY HOME PAGE
 * Design: "Warme Aarde – Organisch & Sensueel"
 * Landing page with hero, intro, and links to subpages
 */

import { Link } from "wouter";
import { Phone, Mail, ArrowRight } from "lucide-react";

const ONLINE_AGENDA_URL = "https://www.supersaas.nl/schedule/balanergy/Balanergy";
const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663495181631/fJXKTVuKN2f6PMKBQCtqnD/hero-massage-7TjQGLyDBijKFozQs3yYZd.webp";

const reviews = [
  {
    name: "Claudia Scholten",
    rating: 5,
    text: "Want all the attention and time for you? Want to stretch and relax? Need some loving attention? Balanergy has it all. The Thai yoga massage is highly recommended.",
  },
  {
    name: "Gerbrig Noordenbos",
    rating: 5,
    text: "Today I had a wonderful massage with Mascha from Balanergy. Highly recommended! Mascha is very enthusiastic, sweet, and knowledgeable. I felt completely relaxed and happy and will definitely schedule another appointment!",
  },
  {
    name: "Angelique Junte",
    rating: 5,
    text: "At Mascha's, you can have your massage done exactly as you wish. She gives fantastic massages; my body feels ready to face the world again afterwards.",
  },
];

export default function Home() {
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
              <a className="font-body text-sm font-medium" style={{ color: "#8DA089" }}>
                Home
              </a>
            </Link>
            <Link href="/behandelingen">
              <a className="font-body text-sm font-medium hover:opacity-70" style={{ color: "#6B6560" }}>
                Behandelingen
              </a>
            </Link>
            <Link href="/arrangementen">
              <a className="font-body text-sm font-medium hover:opacity-70" style={{ color: "#6B6560" }}>
                Arrangementen
              </a>
            </Link>
            <Link href="/workshops">
              <a className="font-body text-sm font-medium hover:opacity-70" style={{ color: "#6B6560" }}>
                Workshops
              </a>
            </Link>
            <Link href="/personal-training">
              <a className="font-body text-sm font-medium hover:opacity-70" style={{ color: "#6B6560" }}>
                Personal Training
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
        <section
          className="relative h-96 md:h-screen flex items-center justify-start overflow-hidden"
          style={{
            backgroundImage: `url('${HERO_IMAGE}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }} />
          <div className="container relative z-10">
            <div className="max-w-2xl">
              <p className="font-body text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#E8D5C4" }}>
                Praktijk voor Thaise yogamassage & voetreflexologie
              </p>
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: "white" }}>
                Breng je energie<br />
                <span style={{ fontStyle: "italic", color: "#E8D5C4" }}>weer in balans</span>
              </h1>
              <p className="font-body text-lg mb-8 max-w-xl" style={{ color: "#F5F1ED" }}>
                Balanergy is de praktijk van Mascha Kwakkel in IJsselmuiden — centraal gelegen tussen Kampen en Zwolle. Hier staat jouw lichaam en geest centraal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={ONLINE_AGENDA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded font-body text-sm font-semibold text-white transition-opacity hover:opacity-90 text-center"
                  style={{ backgroundColor: "#C69C6D" }}
                >
                  AFSPRAAK BOEKEN
                </a>
                <Link href="/behandelingen">
                  <a className="px-6 py-3 rounded font-body text-sm font-semibold border-2 transition-all hover:opacity-90 text-center" style={{ borderColor: "white", color: "white" }}>
                    BEKIJK BEHANDELINGEN
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl">
              <p className="font-body text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#8DA089" }}>
                Welkom bij Balanergy
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8" style={{ color: "#3E3A37" }}>
                Meer dan een massage
              </h2>
              <div className="space-y-4 font-body text-lg leading-relaxed" style={{ color: "#6B6560" }}>
                <p>
                  Balanergy biedt Thaise yogamassage, ontspanningsmassages, anti-stress massages, sportmassage en voetreflexologie — maar ook technieklessen yoga en Personal Training in IJsselmuiden.
                </p>
                <p>
                  Balanergy is er om jouw fysieke en mentale gezondheid te versterken en je ontspanning te waarborgen, door door te gaan waar de gemiddelde massage eindigt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16" style={{ backgroundColor: "rgba(141,160,137,0.05)" }}>
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="font-display text-4xl font-bold mb-2" style={{ color: "#8DA089" }}>
                  10+
                </p>
                <p className="font-body text-sm" style={{ color: "#6B6560" }}>
                  Jaar ervaring
                </p>
              </div>
              <div className="text-center">
                <p className="font-display text-4xl font-bold mb-2" style={{ color: "#8DA089" }}>
                  6×
                </p>
                <p className="font-body text-sm" style={{ color: "#6B6560" }}>
                  Opleiding in Thailand
                </p>
              </div>
              <div className="text-center">
                <p className="font-display text-4xl font-bold mb-2" style={{ color: "#8DA089" }}>
                  15+
                </p>
                <p className="font-body text-sm" style={{ color: "#6B6560" }}>
                  Opleidingen & cursussen
                </p>
              </div>
              <div className="text-center">
                <p className="font-display text-4xl font-bold mb-2" style={{ color: "#8DA089" }}>
                  100%
                </p>
                <p className="font-body text-sm" style={{ color: "#6B6560" }}>
                  Persoonlijke aanpak
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="font-display text-4xl font-bold mb-12" style={{ color: "#3E3A37" }}>
              Onze Diensten
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Link href="/behandelingen">
                <a className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <h3 className="font-display text-lg font-bold mb-3" style={{ color: "#3E3A37" }}>
                    Behandelingen
                  </h3>
                  <p className="font-body text-sm mb-4" style={{ color: "#6B6560" }}>
                    Massages en behandelingen
                  </p>
                  <div className="flex items-center gap-2" style={{ color: "#8DA089" }}>
                    <span className="font-body text-xs font-semibold">Bekijk meer</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              </Link>
              <Link href="/arrangementen">
                <a className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <h3 className="font-display text-lg font-bold mb-3" style={{ color: "#3E3A37" }}>
                    Arrangementen
                  </h3>
                  <p className="font-body text-sm mb-4" style={{ color: "#6B6560" }}>
                    Speciale pakketten
                  </p>
                  <div className="flex items-center gap-2" style={{ color: "#8DA089" }}>
                    <span className="font-body text-xs font-semibold">Bekijk meer</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              </Link>
              <Link href="/workshops">
                <a className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <h3 className="font-display text-lg font-bold mb-3" style={{ color: "#3E3A37" }}>
                    Workshops
                  </h3>
                  <p className="font-body text-sm mb-4" style={{ color: "#6B6560" }}>
                    Leer van Mascha
                  </p>
                  <div className="flex items-center gap-2" style={{ color: "#8DA089" }}>
                    <span className="font-body text-xs font-semibold">Bekijk meer</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              </Link>
              <Link href="/personal-training">
                <a className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <h3 className="font-display text-lg font-bold mb-3" style={{ color: "#3E3A37" }}>
                    Personal Training
                  </h3>
                  <p className="font-body text-sm mb-4" style={{ color: "#6B6560" }}>
                    Op maat coaching
                  </p>
                  <div className="flex items-center gap-2" style={{ color: "#8DA089" }}>
                    <span className="font-body text-xs font-semibold">Bekijk meer</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "rgba(141,160,137,0.05)" }}>
          <div className="container">
            <h2 className="font-display text-4xl font-bold mb-12" style={{ color: "#3E3A37" }}>
              Wat klanten zeggen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reviews.map((review, idx) => (
                <div key={idx} className="bg-white p-8 rounded-lg shadow-sm">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} style={{ color: "#C69C6D" }}>
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="font-body text-base mb-6 leading-relaxed" style={{ color: "#6B6560" }}>
                    "{review.text}"
                  </p>
                  <p className="font-body text-sm font-semibold" style={{ color: "#3E3A37" }}>
                    {review.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container text-center">
            <h2 className="font-display text-4xl font-bold mb-6" style={{ color: "#3E3A37" }}>
              Klaar om je afspraak in te boeken?
            </h2>
            <p className="font-body text-lg mb-8 max-w-2xl mx-auto" style={{ color: "#6B6560" }}>
              Kies je behandeling en boek direct online via onze agenda, of neem contact met ons op
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={ONLINE_AGENDA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded font-body text-sm font-semibold text-white transition-opacity hover:opacity-90 text-center"
                style={{ backgroundColor: "#8DA089" }}
              >
                ONLINE AGENDA
              </a>
              <Link href="/contact">
                <a className="px-8 py-3 rounded font-body text-sm font-semibold border-2 transition-all hover:opacity-90 text-center" style={{ borderColor: "#8DA089", color: "#8DA089" }}>
                  CONTACTEER ONS
                </a>
              </Link>
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
