/*
 * BALANERGY HOME PAGE
 * Design: "Warme Aarde – Organisch & Sensueel"
 * Sections: Hero, Intro, Diensten, Over Mij, Reviews, Contact
 * Responsive: Desktop (3-col grid) → Tablet (2-col) → Mobile (1-col + sticky footer)
 */

import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, ChevronDown, Menu, X, Star, Calendar } from "lucide-react";

const ONLINE_AGENDA_URL = "https://balanergy.salonized.com/bookings/new";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663495181631/fJXKTVuKN2f6PMKBQCtqnD/hero-massage-7TjQGLyDBijKFozQs3yYZd.webp";
const STUDIO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663495181631/fJXKTVuKN2f6PMKBQCtqnD/about-mascha-dvPzjAqj7qTAQ57W5UwV4y.webp";
const THAI_MASSAGE_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663495181631/fJXKTVuKN2f6PMKBQCtqnD/thai-massage-card-2Too8mGBKCNKbSUtmar8wB.webp";
const REFLEXOLOGY_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663495181631/fJXKTVuKN2f6PMKBQCtqnD/reflexology-card-EQ6LwzB9aYoSACiAE3ScrU.webp";

// Unsplash for relaxation massage card
const RELAXATION_IMAGE = "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80";
const YOGA_IMAGE = "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80";

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

const reviews = [
  {
    name: "Sandra V.",
    rating: 5,
    text: "Mascha heeft gouden handen! De Thaise yogamassage was precies wat ik nodig had na een stressvolle periode. Ik voelde me daarna zo licht en ontspannen. Zeker een aanrader!",
    date: "2024",
  },
  {
    name: "Peter K.",
    rating: 5,
    text: "Professionele en persoonlijke aanpak. Mascha luistert goed naar wat je nodig hebt en past de behandeling daar perfect op aan. De sfeer in de praktijk is heerlijk rustig.",
    date: "2024",
  },
  {
    name: "Marieke B.",
    rating: 5,
    text: "Al jaren kom ik bij Balanergy voor mijn maandelijkse massage. De voetreflexologie is fantastisch – je merkt echt dat Mascha weet wat ze doet. Altijd een fijn moment voor mezelf.",
    date: "2024",
  },
];

const qualifications = [
  "2023 – Triggerpointherapie",
  "2022 – Sportmassage",
  "2021 – Beweegcoach & Trainingsleer",
  "2019 – Docentenopleiding Power Yoga 2",
  "2018 – Docentenopleiding Thaise Yogamassage gevorderden",
  "2018 – Docentenopleiding Voetreflexologie",
  "2016 – Docentenopleiding Thaise yogamassage beginners",
  "2015 – Basis & gevorderden Thaise yogamassage (ITM Chiang Mai)",
  "2015 – Opleiding Thaise voetreflexologie",
  "2014 – Basisopleiding Ontspanningsmassage & klachtgerichte massage",
];

function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".fade-up");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAllQual, setShowAllQual] = useState(false);
  const [expandAbout, setExpandAbout] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useScrollAnimation();

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FCF9F5", color: "#3E3A37" }}>
      {/* ─── NAVIGATION ─── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{ backgroundColor: "rgba(252, 249, 245, 0.95)", backdropFilter: "blur(8px)", borderBottom: "1px solid rgba(198, 156, 109, 0.2)" }}
      >
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => scrollTo("hero")} className="flex flex-col leading-none">
            <span className="font-display text-2xl font-semibold" style={{ color: "#3E3A37", letterSpacing: "-0.02em" }}>
              Balanergy
            </span>
            <span className="text-xs font-body" style={{ color: "#8DA089", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              IJsselmuiden
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {[
              { label: "Behandelingen", id: "diensten" },
              { label: "Over Mij", id: "over-mij" },
              { label: "Ervaringen", id: "reviews" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="font-body text-sm font-medium transition-colors hover:text-[#8DA089]"
                style={{ color: "#6B6560", letterSpacing: "0.02em" }}
              >
                {item.label}
              </button>
            ))}
            <a
              href={ONLINE_AGENDA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
              style={{ padding: "0.5rem 1.25rem", minHeight: "unset" }}
            >
              Online Agenda
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} style={{ color: "#3E3A37" }} /> : <Menu size={24} style={{ color: "#3E3A37" }} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="md:hidden absolute top-16 left-0 right-0 z-50 py-4 px-6 flex flex-col gap-4"
            style={{ backgroundColor: "#FCF9F5", borderBottom: "1px solid rgba(198, 156, 109, 0.2)" }}
          >
            {[
              { label: "Behandelingen", id: "diensten" },
              { label: "Over Mij", id: "over-mij" },
              { label: "Ervaringen", id: "reviews" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="font-body text-base font-medium text-left py-2 border-b"
                style={{ color: "#3E3A37", borderColor: "rgba(198, 156, 109, 0.2)" }}
              >
                {item.label}
              </button>
            ))}
            <a
              href={ONLINE_AGENDA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center mt-2"
            >
              Online Agenda Boeken
            </a>
          </div>
        )}
      </header>

      {/* ─── HERO ─── */}
      <section
        id="hero"
        ref={heroRef}
        className="relative flex items-end pb-24 pt-16"
        style={{ overflow: "hidden", minHeight: "100svh" }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        {/* Gradient overlay – dark at bottom-left for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(30,25,20,0.72) 0%, rgba(30,25,20,0.45) 50%, rgba(30,25,20,0.15) 100%)",
          }}
        />

        <div className="container relative z-10">
          <div className="max-w-2xl">
            <p
              className="font-accent text-lg mb-3 fade-up"
              style={{ color: "#D4B896", animationDelay: "0.1s" }}
            >
              Praktijk voor Thaise yogamassage & voetreflexologie
            </p>
            <h1
              className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 fade-up"
              style={{ color: "#FCF9F5", lineHeight: "1.1", animationDelay: "0.2s" }}
            >
              Breng je energie
              <br />
              <em style={{ color: "#D4B896" }}>weer in balans</em>
            </h1>
            <p
              className="font-body text-lg mb-8 fade-up"
              style={{ color: "rgba(252,249,245,0.85)", maxWidth: "520px", animationDelay: "0.3s" }}
            >
              Balanergy is de praktijk van Mascha Kwakkel in IJsselmuiden — centraal gelegen tussen Kampen en Zwolle. Hier staat jouw lichaam en geest centraal.
            </p>
            <div className="flex flex-wrap gap-4 fade-up" style={{ animationDelay: "0.4s" }}>
              <a
                href={ONLINE_AGENDA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                Afspraak Boeken
              </a>
              <button
                onClick={() => scrollTo("diensten")}
                className="btn-outline-sage"
                style={{ borderColor: "rgba(252,249,245,0.7)", color: "#FCF9F5" }}
              >
                Bekijk Behandelingen
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollTo("intro")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Scroll naar beneden"
        >
          <ChevronDown size={32} style={{ color: "rgba(252,249,245,0.6)" }} />
        </button>
      </section>

      {/* ─── INTRO ─── */}
      <section id="intro" className="py-16 md:py-24" style={{ backgroundColor: "#FCF9F5" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center fade-up">
            <p className="font-accent text-xl mb-4" style={{ color: "#C69C6D" }}>
              Welkom bij Balanergy
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6" style={{ color: "#3E3A37" }}>
              Meer dan een massage
            </h2>
            <div className="gold-divider mb-8 mx-auto" style={{ maxWidth: "120px" }} />
            <p className="font-body text-lg leading-relaxed mb-4" style={{ color: "#6B6560" }}>
              Balanergy biedt Thaise yogamassage, ontspanningsmassages, anti-stress massages, sportmassage en voetreflexologie — maar ook technieklessen yoga en Personal Training in IJsselmuiden.
            </p>
            <p className="font-body text-lg leading-relaxed" style={{ color: "#6B6560" }}>
              Balanergy is er om jouw fysieke en mentale gezondheid te versterken en je ontspanning te waarborgen, door door te gaan waar de gemiddelde massage eindigt.
            </p>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { number: "10+", label: "Jaar ervaring" },
              { number: "6×", label: "Opleiding in Thailand" },
              { number: "15+", label: "Opleidingen & cursussen" },
              { number: "100%", label: "Persoonlijke aanpak" },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center fade-up p-6 rounded-lg"
                style={{ backgroundColor: "#F5EFE6", animationDelay: `${i * 0.1}s` }}
              >
                <div className="font-display text-3xl font-bold mb-1" style={{ color: "#8DA089" }}>
                  {stat.number}
                </div>
                <div className="font-body text-sm" style={{ color: "#6B6560" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DIENSTEN ─── */}
      <section id="diensten" className="py-16 md:py-24" style={{ backgroundColor: "#F5EFE6" }}>
        <div className="container">
          <div className="text-center mb-12 fade-up">
            <p className="font-accent text-xl mb-3" style={{ color: "#C69C6D" }}>
              Behandelingen & Prijzen
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4" style={{ color: "#3E3A37" }}>
              Kies wat bij jou past
            </h2>
            <div className="gold-divider mx-auto" style={{ maxWidth: "120px" }} />
            <p className="font-body text-base mt-4 max-w-xl mx-auto" style={{ color: "#6B6560" }}>
              Van ontspannend tot therapeutisch — er is altijd een behandeling die op dit moment bij jou past, bij je stemming, je lichaam en het seizoen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((t, i) => (
              <div
                key={t.id}
                className="treatment-card rounded-xl overflow-hidden fade-up"
                style={{
                  backgroundColor: "#FCF9F5",
                  boxShadow: "0 4px 20px rgba(62,58,55,0.08)",
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
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
                <div className="p-5">
                  <p className="font-body text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#8DA089" }}>
                    {t.subtitle}
                  </p>
                  <h3 className="font-display text-xl font-semibold mb-3" style={{ color: "#3E3A37" }}>
                    {t.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed mb-4" style={{ color: "#6B6560" }}>
                    {t.description}
                  </p>

                  {/* Prices */}
                  <div className="border-t pt-4 mb-4" style={{ borderColor: "rgba(198,156,109,0.25)" }}>
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
                    className="block text-center btn-primary text-sm w-full font-semibold"
                    style={{ padding: "0.75rem 1rem", display: "flex", alignItems: "center", justifyContent: "center" }}
                  >
                    Boek Nu
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Booking note */}
          <div
            className="mt-10 p-5 rounded-lg fade-up"
            style={{ backgroundColor: "rgba(141,160,137,0.12)", border: "1px solid rgba(141,160,137,0.3)" }}
          >
            <p className="font-body text-sm text-center" style={{ color: "#6B6560" }}>
              <strong style={{ color: "#3E3A37" }}>Let op:</strong> Afspraken die minder dan 24 uur van tevoren worden afgezegd, worden ongeacht de reden in rekening gebracht. Betalen kan contant, via Tikkie of per factuur.
            </p>
          </div>
        </div>
      </section>

      {/* ─── OVER MIJ ─── */}
      <section id="over-mij" className="py-16 md:py-24" style={{ backgroundColor: "#FCF9F5" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Image column */}
            <div className="fade-up">
              <div className="relative">
                <img
                  src={STUDIO_IMAGE}
                  alt="De praktijkruimte van Balanergy"
                  className="w-full rounded-xl object-cover"
                  style={{ maxHeight: "600px", boxShadow: "0 20px 60px rgba(62,58,55,0.15)" }}
                />
                {/* Decorative gold border */}
                <div
                  className="absolute -bottom-4 -right-4 w-full h-full rounded-xl -z-10"
                  style={{ border: "2px solid rgba(198,156,109,0.4)" }}
                />
              </div>

              {/* Qualifications */}
              <div
                className="mt-8 p-6 rounded-xl"
                style={{ backgroundColor: "#F5EFE6" }}
              >
                <h4 className="font-body text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#8DA089" }}>
                  Opleidingen Mascha
                </h4>
                <ul className="space-y-1">
                  {(showAllQual ? qualifications : qualifications.slice(0, 5)).map((q, i) => (
                    <li key={i} className="font-body text-sm" style={{ color: "#6B6560" }}>
                      {q}
                    </li>
                  ))}
                </ul>
                {!showAllQual && (
                  <button
                    onClick={() => setShowAllQual(true)}
                    className="mt-3 font-body text-sm font-semibold"
                    style={{ color: "#8DA089" }}
                  >
                    + Toon alle opleidingen
                  </button>
                )}
              </div>
            </div>

            {/* Text column */}
            <div className="fade-up" style={{ animationDelay: "0.2s" }}>
              <p className="font-accent text-xl mb-3" style={{ color: "#C69C6D" }}>
                Over mij
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-2" style={{ color: "#3E3A37" }}>
                Balanergy is Mascha Kwakkel
              </h2>
              <div className="gold-divider mb-6" style={{ maxWidth: "80px" }} />

              <div className="space-y-4 font-body text-base leading-relaxed" style={{ color: "#6B6560" }}>
                <p>
                  Even voorstellen: Ik ben Mascha Kwakkel en woon met mijn man en kinderen in IJsselmuiden. Na jaren van leidinggevende- en coachende functies, wilde ik een andere kant van mezelf verder ontwikkelen waardoor ik meer op- en vanuit mijn gevoel kon werken. Dat werd iets wat ik al jaren graag ontving én gaf, vanuit de filosofie dat aanraking helend werkt: massage!
                </p>
                <p>
                  En wat gaat er vervolgens een wereld voor je open, want er is zo ontzettend veel mogelijk in de wondere wereld die massage heet! Ik ben begonnen bij de basis, met een opleiding klassieke ontspanningsmassage en het leren behandelen van specifieke klachten. Daarna volgde als snel voetreflexologie en de moeder aller massages, wat mij betreft: Traditionele Thaise yogamassage!
                </p>

                {/* Chiang Mai highlight */}
                <div
                  className="p-4 rounded-lg my-4"
                  style={{ backgroundColor: "#F5EFE6", borderLeft: "3px solid #C69C6D" }}
                >
                  <h4 className="font-body font-semibold mb-2" style={{ color: "#3E3A37" }}>
                    Mijn Opleiding in Chiang Mai
                  </h4>
                  <p className="text-sm">
                    Na vele jaren van deze verrukkelijke massages ondergaan in de 7 keer dat ik Thailand bezocht heb, wilde ik van deze eeuwenoude, helende, veelzijdige massage mijn "signature dish" maken. Ik heb de stoute schoenen aangetrokken en ben naar Chiang Mai, Thailand gereisd voor een opleiding Nuad Boran bij de internationale school ITM Chiang Mai. Het was enorm bijzonder om dit helemaal alleen te doen.
                  </p>
                </div>

                {/* Expandable section on mobile */}
                <div className={`space-y-4 ${!expandAbout ? "hidden md:block" : ""}`}>
                  <p>
                    Alles kwam uiteindelijk bij elkaar met het besluit Balanergy op te richten, waarbij elke behandeling zich richt op een hernieuwde balans in jouw energie en tot rust komen, en waar alle elementen van functioneel, aangenaam, breed holistisch en esthetiek bij elkaar komen.
                  </p>

                  <div
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: "#F5EFE6", borderLeft: "3px solid #8DA089" }}
                  >
                    <h4 className="font-body font-semibold mb-2" style={{ color: "#3E3A37" }}>
                      Mijn Filosofie
                    </h4>
                    <p className="text-sm">
                      Mijn missie is daar waar ik kan helpen met helen. Ik werk holistisch: ik maak een inschatting van wie je bent, hoe je in elkaar zit, wat je thema's zijn en wat je uitstraalt — en pas per keer mijn behandeling daar op aan. Anderzijds kijk ik naar het totaalplaatje van spieren, pezen en bindweefsel, en integreer ik zenuwstelselkalmering, leefstijladviezen en omgaan met stress en mental load.
                    </p>
                  </div>

                  <p>
                    Bij Balanergy sta jij centraal, met waar jij en jouw lijf op dat moment behoefte aan hebben. Ik bied een scala aan massages en personal yoga training in allerlei vormen, waardoor er altijd wel een is die op dit moment bij jou past.
                  </p>
                  <p className="font-accent text-lg" style={{ color: "#C69C6D" }}>
                    "Gun jezelf een stuk heling, ontspanning en herstel."
                  </p>
                </div>

                {/* Mobile expand button */}
                <button
                  className="md:hidden font-body text-sm font-semibold mt-2"
                  style={{ color: "#8DA089" }}
                  onClick={() => setExpandAbout(!expandAbout)}
                >
                  {expandAbout ? "Lees minder ↑" : "Lees meer over mijn filosofie ↓"}
                </button>
              </div>

              <div className="mt-8">
                <a
                  href={ONLINE_AGENDA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Maak een Afspraak
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <section id="reviews" className="py-16 md:py-24" style={{ backgroundColor: "#3D4A3E" }}>
        <div className="container">
          <div className="text-center mb-12 fade-up">
            <p className="font-accent text-xl mb-3" style={{ color: "#C69C6D" }}>
              Ervaringen
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4" style={{ color: "#FCF9F5" }}>
              Wat klanten zeggen
            </h2>
            <div className="gold-divider mx-auto" style={{ maxWidth: "120px" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="p-6 rounded-xl fade-up"
                style={{
                  backgroundColor: "rgba(252,249,245,0.07)",
                  border: "1px solid rgba(198,156,109,0.25)",
                  animationDelay: `${i * 0.15}s`,
                }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, si) => (
                    <Star key={si} size={16} fill="#C69C6D" style={{ color: "#C69C6D" }} />
                  ))}
                </div>
                <p className="font-body text-base leading-relaxed mb-4" style={{ color: "rgba(252,249,245,0.85)" }}>
                  "{review.text}"
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-body text-sm font-semibold" style={{ color: "#D4B896" }}>
                    {review.name}
                  </span>
                  <span className="font-body text-xs" style={{ color: "rgba(252,249,245,0.4)" }}>
                    {review.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT & LOCATIE ─── */}
      <section id="contact" className="py-16 md:py-24" style={{ backgroundColor: "#FCF9F5" }}>
        <div className="container">
          <div className="text-center mb-12 fade-up">
            <p className="font-accent text-xl mb-3" style={{ color: "#C69C6D" }}>
              Contact & Locatie
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4" style={{ color: "#3E3A37" }}>
              Kom langs in IJsselmuiden
            </h2>
            <div className="gold-divider mx-auto" style={{ maxWidth: "120px" }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="fade-up space-y-6">
              <div
                className="p-6 rounded-xl"
                style={{ backgroundColor: "#F5EFE6" }}
              >
                <h3 className="font-display text-xl font-semibold mb-6" style={{ color: "#3E3A37" }}>
                  Balanergy
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} style={{ color: "#8DA089", flexShrink: 0, marginTop: "2px" }} />
                    <div>
                      <p className="font-body font-semibold text-sm" style={{ color: "#3E3A37" }}>Adres</p>
                      <p className="font-body text-sm" style={{ color: "#6B6560" }}>
                        Kreeft 45<br />8271KL IJsselmuiden<br />
                        <span className="text-xs">(Centraal tussen Kampen en Zwolle)</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={20} style={{ color: "#8DA089", flexShrink: 0, marginTop: "2px" }} />
                    <div>
                      <p className="font-body font-semibold text-sm" style={{ color: "#3E3A37" }}>Telefoon / App</p>
                      <a href="tel:0642874405" className="font-body text-sm hover:text-[#8DA089] transition-colors" style={{ color: "#6B6560" }}>
                        06-42874405
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail size={20} style={{ color: "#8DA089", flexShrink: 0, marginTop: "2px" }} />
                    <div>
                      <p className="font-body font-semibold text-sm" style={{ color: "#3E3A37" }}>E-mail</p>
                      <a href="mailto:balanergy@hotmail.com" className="font-body text-sm hover:text-[#8DA089] transition-colors" style={{ color: "#6B6560" }}>
                        balanergy@hotmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={20} style={{ color: "#8DA089", flexShrink: 0, marginTop: "2px" }} />
                    <div>
                      <p className="font-body font-semibold text-sm" style={{ color: "#3E3A37" }}>Openingstijden</p>
                      <p className="font-body text-sm" style={{ color: "#6B6560" }}>
                        Op afspraak — bekijk de online agenda voor beschikbaarheid.<br />
                        Zaterdag alleen op aanvraag.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking info */}
              <div
                className="p-6 rounded-xl"
                style={{ backgroundColor: "rgba(141,160,137,0.12)", border: "1px solid rgba(141,160,137,0.3)" }}
              >
                <h4 className="font-body font-semibold mb-3" style={{ color: "#3E3A37" }}>
                  Afspraak maken
                </h4>
                <p className="font-body text-sm leading-relaxed mb-4" style={{ color: "#6B6560" }}>
                  Afspraken kunt u inboeken via de online agenda, telefonisch of via mail/app. Heb je een specifieke voorkeur voor een dag of tijdstip? Plan dan bij voorkeur minimaal twee afspraken vooruit.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={ONLINE_AGENDA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2"
                    style={{ padding: "0.6rem 1.25rem" }}
                  >
                    <Calendar size={16} />
                    Online Agenda
                  </a>
                  <a
                    href="tel:0642874405"
                    className="btn-outline-sage flex items-center gap-2"
                    style={{ padding: "0.6rem 1.25rem" }}
                  >
                    <Phone size={16} />
                    Bel Nu
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="rounded-xl overflow-hidden" style={{ boxShadow: "0 4px 20px rgba(62,58,55,0.1)", height: "400px" }}>
                <iframe
                  title="Balanergy locatie IJsselmuiden"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.2!2d5.9248!3d52.5518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c7e2c9b8b8b8b8%3A0x0!2sKreeft+45%2C+8271+KL+IJsselmuiden!5e0!3m2!1snl!2snl!4v1701234567890!5m2!1snl!2snl&q=Kreeft+45,+8271+KL+IJsselmuiden,+Netherlands"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="font-body text-xs mt-3 text-center" style={{ color: "#9B948E" }}>
                Kreeft 45, 8271KL IJsselmuiden — centraal gelegen tussen Kampen en Zwolle
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-10" style={{ backgroundColor: "#3D4A3E" }}>
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="font-display text-2xl font-semibold" style={{ color: "#FCF9F5" }}>
                Balanergy
              </p>
              <p className="font-body text-sm mt-1" style={{ color: "rgba(252,249,245,0.6)" }}>
                Praktijk voor Thaise yogamassage & voetreflexologie
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="font-body text-sm" style={{ color: "rgba(252,249,245,0.6)" }}>
                © {new Date().getFullYear()} Balanergy — Mascha Kwakkel
              </p>
              <p className="font-body text-xs mt-1" style={{ color: "rgba(252,249,245,0.4)" }}>
                Kreeft 45, 8271KL IJsselmuiden · 06-42874405
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* ─── STICKY MOBILE FOOTER ─── */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex"
        style={{ boxShadow: "0 -4px 20px rgba(62,58,55,0.15)" }}
      >
        <a
          href="tel:0642874405"
          className="flex-1 flex items-center justify-center gap-2 py-4 font-body font-semibold text-sm"
          style={{ backgroundColor: "#8DA089", color: "white", minHeight: "56px" }}
        >
          <Phone size={18} />
          Bel Nu
        </a>
        <a
          href={ONLINE_AGENDA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-4 font-body font-semibold text-sm"
          style={{ backgroundColor: "#C69C6D", color: "white", minHeight: "56px" }}
        >
          <Calendar size={18} />
          Boek Online
        </a>
      </div>

      {/* Bottom padding for mobile sticky footer */}
      <div className="md:hidden h-14" />
    </div>
  );
}
