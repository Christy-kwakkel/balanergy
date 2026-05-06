/*
 * BALANERGY WORKSHOPS & OPLEIDINGEN PAGE
 * Design: "Warme Aarde – Organisch & Sensueel"
 * Workshops and training courses on one page, clearly separated
 */

import { Link } from "wouter";
import { Phone, Mail, BookOpen } from "lucide-react";
import Navigation from "@/components/Navigation";
import ExpandableCard from "@/components/ExpandableCard";

const CONTACT_PHONE = "06-42874405";
const CONTACT_EMAIL = "balanergy@hotmail.com";

const workshops = [
  {
    id: "ontspanning-hoofd",
    title: "Workshop ontspanningsmassage hoofd, handen en voeten",
    subtitle: "Workshop",
    description: "Leer de belangrijkste grepen en technieken.",
    fullDescription: "Je leert in vogelvlucht de belangrijkste grepen en technieken voor ontspanningsmassage van hoofd, handen en voeten, do's and don'ts, de opbouw van een massage, materiaalgebruik en houding. Inclusief handout met de grepen en basale kennis van je workshop om mee naar huis te nemen.",
    prices: [
      { duration: "2 uur", price: "€75 per persoon / €140 voor 2 personen" },
    ],
  },
  {
    id: "ontspanning-heel",
    title: "Workshop ontspanningsmassage hele lichaam",
    subtitle: "Workshop",
    description: "Leer de belangrijkste grepen en technieken voor het hele lichaam.",
    fullDescription: "Je leert in vogelvlucht de belangrijkste grepen en technieken voor ontspanningsmassage van het hele lichaam, do's and don'ts, de opbouw van een massage, materiaalgebruik en houding. Inclusief handout met de grepen en basale kennis van je workshop om mee naar huis te nemen.",
    prices: [
      { duration: "5-6 uur", price: "€225 per persoon" },
    ],
  },
  {
    id: "klachtgerichte",
    title: "Workshop klachtgerichte/sport massage",
    subtitle: "Workshop",
    description: "Leer klachtgerichte massage voor specifieke lichaamsdelen.",
    fullDescription: "Je leert in vogelvlucht de belangrijkste grepen en technieken voor klacht gerichte massage van de nek, shoulders, rug en bil- en bekkenspierenovenbenenen achterkant, do's and don'ts, de opbouw van een massage, materiaalgebruik en houding. Inclusief handout met de grepen en basale kennis van je workshop om mee naar huis te nemen.\n\nGeef bij je boeking duidelijk aan of de workshop voor 1 of 2 personen moet worden. Indien je alleen komt, dan neem je een model mee op wie je kunt oefenen.",
    prices: [
      { duration: "3-3,5 uur", price: "€125 per persoon / €225 voor 2 personen" },
    ],
  },
];

const trainings = [
  {
    id: "thaise-level1",
    title: "Volledige opleiding Thaise yogamassage level 1",
    subtitle: "Opleiding",
    description: "Wil je Thaise yogamassage leren?",
    fullDescription: "Wil je Thaise yogamassage leren? Dat kan in duo's (of eventueel alleen, dan neem je een model mee), door de opleiding BalaneryThai Yoga massage te doen, volgens de principes en leermethoden van ITM Chiangmai. Iedereen kan zich aanmelden, zowel leken als (ervaren) masseurs.\n\nDe opleiding certificeert je om daarna in te stromen op level 2, het gevorderden level met nog meer houdingenm.\n\nWat leer je?\n- 64 basisposities van Thaise yogamassage level 1\n- Voorkant posities, van voeten tot gezicht, zittende houdingenm, shoulders en bovenrug\n- De belangrijkste energielijnen, de Sen lijnen\n- Je leert stretches en acupressuur punten\n- Diepe buikmassage, Hara werk\n- Je leert op de juiste manier gebruik te maken van je lichaamgewicht, door je duimen, handpalmen, ellebogen, knieën en voeten te gebruiken in de massage\n\nWat krijg je?\n- Een duidelijk lesboek met uitleg en aanduidingen\n- Een praktijkexamen aan het einde van je opleiding met internationale certificering\n- Lestijden en data in overleg, de opleiding bestaat uit 6 lessen van 2,5 a 3 uur. In de eerste 4 lessen leer je de 64 posities, de 5e les is herhaling en examentraining, vragen stellen en achtergronden, de 6e les is het praktijkexamen\n- Inclusief een gratis Thaise yogamassage van 60 minuten!\n- Onbeperkt water en kruidenthee\n- Onbeperkte mogelijkheid tot het stellen van vragen via de telefoon of mail na de opleiding",
    prices: [
      { duration: "6 lessen van 2,5-3 uur", price: "€699 per persoon" },
    ],
  },
  {
    id: "klachtgerichte-opleiding",
    title: "Volledige opleiding klachtgerichte massage",
    subtitle: "Opleiding",
    description: "Professionele klachtgerichte massagetraining.",
    fullDescription: "Volledige opleiding klachtgerichte massage, 7-8 ochtenden of middagen van 2 weekenddagen, dagdelen in overleg\n\n- Kennismaking, inventarisatie kennis niveau, persoonlijke doelen\n- Massage basics, do's and don'ts, contra indicaties\n- Anamnesegespreken formulier\n- Werkhouding\n- Uitgebreide anatomie van de belangrijkste botten en spieren\n- Een praktijk opstarten, waar moet je rekening mee houden\n- Lessen massage van de rug, nek, shoulders, armen, handen, achterkant en voorkant benen, hoofd, voeten, buik en borst\n- Herhalingsles en gelegenheid tot extra oefenen\n- Afsluitend praktijkexamen\n- Inclusief massageboek en diploma\n- Aan het einde van deze opleiding heb je alles in huis om zelf een praktijk te gaan starten, nadat je met casestudies praktijkervaring hebt opgedaan\n- Inclusief gratis klachtgerichte massage van een uur!",
    prices: [
      { duration: "7-8 ochtenden of middagen", price: "€650 per persoon" },
    ],
  },
  {
    id: "ontspanning-volledig",
    title: "Volledige opleiding ontspanningsmassage",
    subtitle: "Opleiding",
    description: "Volledige ontspanningsmassagetraining.",
    fullDescription: "Volledige opleiding ontspanningsmassage, 7-8 ochtenden of middagen van ongeveer 3-3,5 uur of 2 weekenddagen, dagdelen in overleg\n\n- Kennismaking, inventarisatie kennis niveau, persoonlijke doelen\n- Massage basics, do's and don'ts, contra-indicaties\n- Werkhouding\n- Globale anatomie van de belangrijkste botten en spieren\n- Lessen massage van de rug, nek, shoulders, armen, handen, achterkant en voorkant benen, hoofd en voeten\n- Herhalingsles en gelegenheid tot extra oefenen\n- Afsluitend praktijkexamen\n- Inclusief massageboek en diploma\n- Een praktijk opstarten, waar moet je rekening mee houden\n- Aan het einde van deze opleiding heb je alles in huis om zelf een praktijk te gaan starten, nadat je met casestudies praktijkervaring hebt opgedaan\n- Inclusief gratis ontspanningsmassage van een uur!",
    prices: [
      { duration: "7-8 ochtenden of middagen", price: "€650 per persoon" },
    ],
  },
];

export default function Workshops() {
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
              Leer massagetechnieken van een professioneel therapeut
            </p>
          </div>
        </section>

        {/* Workshops Section */}
        <section className="py-12">
          <div className="container">
            <h2 className="font-display text-3xl font-bold mb-8" style={{ color: "#3E3A37" }}>
              Workshops
            </h2>
            <p className="font-body text-lg mb-8" style={{ color: "#6B6560" }}>
              Korte workshops waarin je de basisprincipes van massage leert. Perfecte introductie voor beginners of aanvulling voor ervaren therapeuten.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {workshops.map((w) => (
                <ExpandableCard
                  key={w.id}
                  title={w.title}
                  subtitle={w.subtitle}
                  description={w.description}
                  fullDescription={w.fullDescription}
                  prices={w.prices}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Trainings Section */}
        <section className="py-12 bg-white">
          <div className="container">
            <h2 className="font-display text-3xl font-bold mb-8" style={{ color: "#3E3A37" }}>
              Volledige Opleidingen
            </h2>
            <p className="font-body text-lg mb-8" style={{ color: "#6B6560" }}>
              Volledige professionele opleidingen met certificering. Ideaal voor degenen die een massagepraktijk willen starten of hun vaardigheden willen verdiepen.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {trainings.map((t) => (
                <ExpandableCard
                  key={t.id}
                  title={t.title}
                  subtitle={t.subtitle}
                  description={t.description}
                  fullDescription={t.fullDescription}
                  prices={t.prices}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12">
          <div className="container max-w-3xl">
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold mb-6" style={{ color: "#3E3A37" }}>
                Meer informatie?
              </h2>
              <p className="font-body text-lg mb-8" style={{ color: "#6B6560" }}>
                Heb je vragen over de workshops of opleidingen? Neem contact met ons op! We helpen je graag bij het kiezen van de juiste opleiding voor jouw doelen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded font-body text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#8DA089" }}
                >
                  <Phone size={18} />
                  {CONTACT_PHONE}
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded font-body text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#8DA089" }}
                >
                  <Mail size={18} />
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t" style={{ borderColor: "rgba(198,156,109,0.15)" }}>
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-display text-lg font-bold mb-4" style={{ color: "#3E3A37" }}>
                Navigatie
              </h3>
              <nav className="space-y-2">
                <Link href="/" className="block font-body text-sm hover:underline" style={{ color: "#6B6560" }}>
                  Home
                </Link>
                <Link href="/behandelingen" className="block font-body text-sm hover:underline" style={{ color: "#6B6560" }}>
                  Behandelingen
                </Link>
                <Link href="/over-mij" className="block font-body text-sm hover:underline" style={{ color: "#6B6560" }}>
                  Over Mij
                </Link>
                <Link href="/arrangementen" className="block font-body text-sm hover:underline" style={{ color: "#6B6560" }}>
                  Arrangementen
                </Link>
                <Link href="/workshops" className="block font-body text-sm hover:underline" style={{ color: "#6B6560" }}>
                  Workshops & Opleidingen
                </Link>
                <Link href="/personal-training" className="block font-body text-sm hover:underline" style={{ color: "#6B6560" }}>
                  Personal Training
                </Link>
                <Link href="/contact" className="block font-body text-sm hover:underline" style={{ color: "#6B6560" }}>
                  Contact
                </Link>
              </nav>
            </div>

            <div>
              <h3 className="font-display text-lg font-bold mb-4" style={{ color: "#3E3A37" }}>
                Contact
              </h3>
              <div className="space-y-2">
                <a href={`tel:${CONTACT_PHONE}`} className="block font-body text-sm hover:underline" style={{ color: "#6B6560" }}>
                  {CONTACT_PHONE}
                </a>
                <a href={`mailto:${CONTACT_EMAIL}`} className="block font-body text-sm hover:underline" style={{ color: "#6B6560" }}>
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg font-bold mb-4" style={{ color: "#3E3A37" }}>
                Informatie
              </h3>
              <Link href="/info" className="block font-body text-sm hover:underline" style={{ color: "#6B6560" }}>
                Algemene Informatie
              </Link>
            </div>
          </div>

          <div className="border-t pt-8 text-center" style={{ borderColor: "rgba(198,156,109,0.15)" }}>
            <p className="font-body text-sm" style={{ color: "#8DA089" }}>
              © 2024 Balanergy. Alle rechten voorbehouden.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
