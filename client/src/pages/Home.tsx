/**
 * BALANERGY HOME PAGE
 * Design: "Warme Aarde – Organisch & Sensueel"
 * Landing page with hero, intro, and links to subpages
 */

import { Link } from "wouter";
import { Phone, Mail, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";

const ONLINE_AGENDA_URL = "https://www.supersaas.nl/schedule/balanergy/Balanergy";
const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663495181631/fJXKTVuKN2f6PMKBQCtqnD/hero-massage-7TjQGLyDBijKFozQs3yYZd.webp";

const reviews = [
  {
    name: "Claudia S.",
    rating: 5,
    text: "Wil je alle aandacht en tijd voor jezelf? Wil je stretchen en ontspannen? Balanergy heeft het allemaal. De Thaise yogamassage is zeer aan te bevelen.",
  },
  {
    name: "Gerbrig N.",
    rating: 5,
    text: "Vandaag had ik een heerlijke massage met Mascha van Balanergy. Zeer aan te bevelen! Mascha is erg enthousiast, lief en kundig. Ik voelde me volledig ontspannen en blij en zal zeker nog een afspraak inplannen!",
  },
  {
    name: "Angelique J.",
    rating: 5,
    text: "Bij Mascha kun je je massage precies zo laten doen als je wilt. Ze geeft fantastische massages; mijn lichaam voelt zich klaar om de wereld weer aan te gaan.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FCF9F5" }}>
      <Navigation />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center overflow-hidden"
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
              <div className="flex flex-col gap-4 justify-start">
                <a
                  href={ONLINE_AGENDA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 rounded font-body text-sm font-semibold text-white text-center transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#C69C6D", width: '200px' }}
                >
                  AFSPRAAK BOEKEN
                </a>
                <Link href="/behandelingen">
                  <a className="px-6 py-3 rounded font-body text-sm font-semibold border-2 text-center transition-all hover:opacity-90 w-full sm:w-auto" style={{ borderColor: "white", color: "white" }}>
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
                  3×
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Link href="/behandelingen">
                <div className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                  <h3 className="font-display text-2xl font-bold mb-4" style={{ color: "#3E3A37" }}>
                    Behandelingen
                  </h3>
                  <p className="font-body text-base mb-4" style={{ color: "#6B6560" }}>
                    Ontdek onze volledige aanbod van massages en behandelingen met prijzen
                  </p>
                  <div className="flex items-center gap-2" style={{ color: "#8DA089" }}>
                    <span className="font-body text-sm font-semibold">Bekijk meer</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
              <Link href="/arrangementen">
                <div className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                  <h3 className="font-display text-2xl font-bold mb-4" style={{ color: "#3E3A37" }}>
                    Arrangementen
                  </h3>
                  <p className="font-body text-base mb-4" style={{ color: "#6B6560" }}>
                    Ontdek onze speciale arrangementen, seizoensgebonden aanbiedingen en acties met korting
                  </p>
                  <div className="flex items-center gap-2" style={{ color: "#8DA089" }}>
                    <span className="font-body text-sm font-semibold">Bekijk meer</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
              <Link href="/workshops">
                <div className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                  <h3 className="font-display text-2xl font-bold mb-4" style={{ color: "#3E3A37" }}>
                    Workshops & Opleidingen
                  </h3>
                  <p className="font-body text-base mb-4" style={{ color: "#6B6560" }}>
                    Leer technieken en verdiep je kennis met onze workshops
                  </p>
                  <div className="flex items-center gap-2" style={{ color: "#8DA089" }}>
                    <span className="font-body text-sm font-semibold">Bekijk meer</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
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
          <div className="container">
            <h2 className="font-display text-4xl font-bold mb-6" style={{ color: "#3E3A37" }}>
              Klaar om je afspraak in te boeken?
            </h2>
            <p className="font-body text-lg mb-8" style={{ color: "#6B6560" }}>
              Kies je behandeling en boek direct online via onze agenda, of neem contact met ons op
            </p>
            <div className="flex flex-col gap-4 justify-start">
              <a
                href={ONLINE_AGENDA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 rounded font-body text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#8DA089", width: '175px' }}
              >
                ONLINE AGENDA
              </a>
              <Link href="/contact">
                <a className="px-8 py-3 rounded font-body text-sm font-semibold border-2 transition-all hover:opacity-90 w-full sm:w-auto" style={{ borderColor: "#8DA089", color: "#8DA089" }}>
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
