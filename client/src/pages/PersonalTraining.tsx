/**
 * BALANERGY PERSONAL TRAINING PAGE
 * Design: "Warme Aarde – Organisch & Sensueel"
 * Personal training and one-on-one coaching
 */

import { Link } from "wouter";
import { Phone, Mail } from "lucide-react";

const ONLINE_AGENDA_URL = "https://www.supersaas.nl/schedule/balanergy/Balanergy";
const STUDIO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663495181631/fJXKTVuKN2f6PMKBQCtqnD/about-mascha-dvPzjAqj7qTAQ57W5UwV4y.webp";

const trainings = [
  {
    id: "training-yoga-personal",
    title: "Personal Yoga Training",
    subtitle: "One-on-One Coaching",
    description:
      "Volledig op maat gemaakte yogalessen afgestemd op jouw niveau, doelen en lichaam. Of je nu beginner bent of gevorderd, elke les wordt speciaal voor jou ontworpen.",
    image: STUDIO_IMAGE,
    prices: [
      { duration: "Per sessie", price: "Prijs op aanvraag" },
    ],
    tag: "Populair",
  },
  {
    id: "training-body-balance",
    title: "Les Mills Body Balance",
    subtitle: "One-on-One Coaching",
    description:
      "Persoonlijke Body Balance training die yoga, pilates en tai chi combineert. Perfect voor het verbeteren van balans, flexibiliteit en innerlijke rust.",
    image: STUDIO_IMAGE,
    prices: [
      { duration: "Per sessie", price: "Prijs op aanvraag" },
    ],
    tag: null,
  },
  {
    id: "training-power-yoga",
    title: "Power Yoga Training",
    subtitle: "One-on-One Coaching",
    description:
      "Intensieve, persoonlijke yogalessen gericht op kracht en flexibiliteit. Aanpassingen per persoon voor optimale resultaten.",
    image: STUDIO_IMAGE,
    prices: [
      { duration: "Per sessie", price: "Prijs op aanvraag" },
    ],
    tag: null,
  },
  {
    id: "training-wellness",
    title: "Wellness & Lifestyle Coaching",
    subtitle: "Holistische Begeleiding",
    description:
      "Persoonlijke coaching gericht op totale gezondheid, stress management en leefstijl. Combinatie van massage, yoga en advies.",
    image: STUDIO_IMAGE,
    prices: [
      { duration: "Per sessie", price: "Prijs op aanvraag" },
    ],
    tag: null,
  },
  {
    id: "training-recovery",
    title: "Recovery & Rehabilitation",
    subtitle: "Gericht Herstel",
    description:
      "Persoonlijke training gericht op herstel na blessures of ziektes. Veilig en effectief onder begeleiding van Mascha.",
    image: STUDIO_IMAGE,
    prices: [
      { duration: "Per sessie", price: "Prijs op aanvraag" },
    ],
    tag: null,
  },
  {
    id: "training-custom",
    title: "Custom Training Program",
    subtitle: "Volledig Op Maat",
    description:
      "Laat Mascha een volledig trainings- en wellnessprogram voor je samenstellen. Gebaseerd op jouw doelen, lichaam en leefstijl.",
    image: STUDIO_IMAGE,
    prices: [
      { duration: "Consultation", price: "Prijs op aanvraag" },
    ],
    tag: null,
  },
];

export default function PersonalTraining() {
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
            <Link href="/personal-training">
              <a className="font-body text-sm font-medium" style={{ color: "#8DA089" }}>
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
        <section className="py-12 md:py-16">
          <div className="container">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-2" style={{ color: "#3E3A37" }}>
              Personal Training
            </h1>
            <p className="font-body text-lg" style={{ color: "#8DA089" }}>
              Volledig op maat gemaakte trainingen en coaching
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-12">
          <div className="container max-w-3xl">
            <p className="font-body text-lg leading-relaxed mb-6" style={{ color: "#6B6560" }}>
              Bij Balanergy bieden we persoonlijke trainingen en coaching die volledig op jouw behoeften zijn afgestemd. Of je nu wilt beginnen met yoga, je wilt herstellen van een blessure, of je zoekt een holistische benadering van gezondheid — Mascha werkt met jou samen aan jouw doelen.
            </p>
            <p className="font-body text-lg leading-relaxed" style={{ color: "#6B6560" }}>
              Elke sessie is uniek en gericht op wat jij op dat moment nodig hebt. Dit is het ultieme wellness experience.
            </p>
          </div>
        </section>

        {/* Training Options Grid */}
        <section className="py-12">
          <div className="container">
            <h2 className="font-display text-3xl font-bold mb-8" style={{ color: "#3E3A37" }}>
              Trainingsopties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainings.map((training) => (
                <div key={training.id} className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full">
                  {/* Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={training.image}
                      alt={training.title}
                      className="w-full h-full object-cover"
                    />
                    {training.tag && (
                      <div
                        className="absolute top-3 left-3 px-3 py-1 rounded text-xs font-semibold text-white"
                        style={{ backgroundColor: "#C69C6D" }}
                      >
                        {training.tag}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <p className="font-body text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#8DA089" }}>
                      {training.subtitle}
                    </p>
                    <h3 className="font-display text-lg font-bold mb-3" style={{ color: "#3E3A37" }}>
                      {training.title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed mb-4 flex-grow" style={{ color: "#6B6560" }}>
                      {training.description}
                    </p>

                    {/* Prices */}
                    <div className="space-y-2 mb-4 pb-4 border-b" style={{ borderColor: "#E8D5C4" }}>
                      {training.prices.map((price, idx) => (
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
                      href="mailto:balanergy@hotmail.com"
                      className="w-full py-2 rounded font-body text-sm font-semibold text-white text-center transition-opacity hover:opacity-90"
                      style={{ backgroundColor: "#8DA089" }}
                    >
                      MEER INFO
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12" style={{ backgroundColor: "rgba(141,160,137,0.05)" }}>
          <div className="container max-w-3xl">
            <h2 className="font-display text-3xl font-bold mb-8" style={{ color: "#3E3A37" }}>
              Hoe het werkt
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-lg font-bold mb-2" style={{ color: "#3E3A37" }}>
                  1. Intake Gesprek
                </h3>
                <p className="font-body text-base" style={{ color: "#6B6560" }}>
                  We starten met een uitgebreid gesprek over jouw doelen, huidige situatie en wat je wilt bereiken.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold mb-2" style={{ color: "#3E3A37" }}>
                  2. Persoonlijk Plan
                </h3>
                <p className="font-body text-base" style={{ color: "#6B6560" }}>
                  Mascha stelt een volledig op maat gemaakt trainings- en wellnessplan voor je samen.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold mb-2" style={{ color: "#3E3A37" }}>
                  3. Regelmatige Sessies
                </h3>
                <p className="font-body text-base" style={{ color: "#6B6560" }}>
                  Je volgt regelmatige sessies, waarbij elke les wordt aangepast op basis van je voortgang.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold mb-2" style={{ color: "#3E3A37" }}>
                  4. Voortgang & Aanpassingen
                </h3>
                <p className="font-body text-base" style={{ color: "#6B6560" }}>
                  We evalueren regelmatig en passen het plan aan voor optimale resultaten.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12">
          <div className="container text-center">
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "#3E3A37" }}>
              Klaar voor je persoonlijke trainingsplan?
            </h2>
            <p className="font-body text-lg mb-6" style={{ color: "#6B6560" }}>
              Neem contact op voor een gratis intake gesprek
            </p>
            <a
              href="mailto:balanergy@hotmail.com"
              className="inline-block px-8 py-3 rounded font-body text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#8DA089" }}
            >
              STUUR EEN BERICHT
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
                <li><Link href="/personal-training"><a className="opacity-80 hover:opacity-100">Personal Training</a></Link></li>
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
