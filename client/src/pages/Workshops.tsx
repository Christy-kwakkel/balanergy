/*
 * BALANERGY WORKSHOPS & OPLEIDINGEN PAGE
 * Design: "Warme Aarde – Organisch & Sensueel"
 * Workshops and training courses on one page, clearly separated
 */

import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Phone, Mail, BookOpen, ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";

const CONTACT_PHONE = "06-42874405";
const CONTACT_EMAIL = "balanergy@hotmail.com";

const workshops = [
  {
    id: "ontspanning-hoofd",
    title: "Workshop ontspanningsmassage hoofd, handen en voeten",
    description: "Leer de belangrijkste grepen en technieken.",
    fullDescription: "Je leert in vogelvlucht de belangrijkste grepen en technieken voor ontspanningsmassage van hoofd, handen en voeten, do's and don'ts, de opbouw van een massage, materiaalgebruik en houding. Inclusief handout met de grepen en basale kennis van je workshop om mee naar huis te nemen.",
    duration: "2 uur",
    price: "€75 per persoon / €140 voor 2 personen",
  },
  {
    id: "ontspanning-heel",
    title: "Workshop ontspanningsmassage hele lichaam",
    description: "Leer de belangrijkste grepen en technieken voor het hele lichaam.",
    fullDescription: "Je leert in vogelvlucht de belangrijkste grepen en technieken voor ontspanningsmassage van het hele lichaam, do's and don'ts, de opbouw van een massage, materiaalgebruik en houding. Inclusief handout met de grepen en basale kennis van je workshop om mee naar huis te nemen.",
    duration: "5-6 uur",
    price: "€225 per persoon",
  },
  {
    id: "klachtgerichte",
    title: "Workshop klachtgerichte/sport massage",
    description: "Leer klachtgerichte massage voor specifieke lichaamsdelen.",
    fullDescription: "Je leert in vogelvlucht de belangrijkste grepen en technieken voor klacht gerichte massage van de nek, shoulders, rug en bil- en bekkenspierenovenbenenen achterkant, do's and don'ts, de opbouw van een massage, materiaalgebruik en houding. Inclusief handout met de grepen en basale kennis van je workshop om mee naar huis te nemen.\n\nGeef bij je boeking duidelijk aan of de workshop voor 1 of 2 personen moet worden. Indien je alleen komt, dan neem je een model mee op wie je kunt oefenen.",
    duration: "3-3,5 uur",
    price: "€125 per persoon / €225 voor 2 personen",
  },
];

const trainings = [
  {
    id: "thaise-level1",
    title: "Volledige opleiding Thaise yogamassage level 1",
    description: "Wil je Thaise yogamassage leren?",
    fullDescription: "Wil je Thaise yogamassage leren? Dat kan in duo's (of eventueel alleen, dan neem je een model mee), door de opleiding BalaneryThai Yoga massage te doen, volgens de principes en leermethoden van ITM Chiangmai. Iedereen kan zich aanmelden, zowel leken als (ervaren) masseurs.\n\nDe opleiding certificeert je om daarna in te stromen op level 2, het gevorderden level met nog meer houdingenm.\n\nWat leer je?\n- 64 basisposities van Thaise yogamassage level 1\n- Voorkant posities, van voeten tot gezicht, zittende houdingenm, shoulders en bovenrug\n- De belangrijkste energielijnen, de Sen lijnen\n- Je leert stretches en acupressuur punten\n- Diepe buikmassage, Hara werk\n- Je leert op de juiste manier gebruik te maken van je lichaamgewicht, door je duimen, handpalmen, ellebogen, knieën en voeten te gebruiken in de massage\n\nWat krijg je?\n- Een duidelijk lesboek met uitleg en aanduidingen\n- Een praktijkexamen aan het einde van je opleiding met internationale certificering\n- Lestijden en data in overleg, de opleiding bestaat uit 6 lessen van 2,5 a 3 uur. In de eerste 4 lessen leer je de 64 posities, de 5e les is herhaling en examentraining, vragen stellen en achtergronden, de 6e les is het praktijkexamen\n- Inclusief een gratis Thaise yogamassage van 60 minuten!\n- Onbeperkt water en kruidenthee\n- Onbeperkte mogelijkheid tot het stellen van vragen via de telefoon of mail na de opleiding",
    duration: "6 lessen van 2,5-3 uur",
    price: "€699 per persoon",
  },
  {
    id: "klachtgerichte",
    title: "Volledige opleiding klachtgerichte massage",
    description: "Professionele klachtgerichte massagetraining.",
    fullDescription: "Volledige opleiding klachtgerichte massage, 7-8 ochtenden of middagen van 2 weekenddagen, dagdelen in overleg\n\n- Kennismaking, inventarisatie kennis niveau, persoonlijke doelen\n- Massage basics, do's and don'ts, contra indicaties\n- Anamnesegespreken formulier\n- Werkhouding\n- Uitgebreide anatomie van de belangrijkste botten en spieren\n- Een praktijk opstarten, waar moet je rekening mee houden\n- Lessen massage van de rug, nek, shoulders, armen, handen, achterkant en voorkant benen, hoofd, voeten, buik en borst\n- Herhalingsles en gelegenheid tot extra oefenen\n- Afsluitend praktijkexamen\n- Inclusief massageboek en diploma\n- Aan het einde van deze opleiding heb je alles in huis om zelf een praktijk te gaan starten, nadat je met casestudies praktijkervaring hebt opgedaan\n- Inclusief gratis klachtgerichte massage van een uur!",
    duration: "7-8 ochtenden of middagen",
    price: "€650 per persoon",
  },
  {
    id: "ontspanning-volledig",
    title: "Volledige opleiding ontspanningsmassage",
    description: "Volledige ontspanningsmassagetraining.",
    fullDescription: "Volledige opleiding ontspanningsmassage, 7-8 ochtenden of middagen van ongeveer 3-3,5 uur of 2 weekenddagen, dagdelen in overleg\n\n- Kennismaking, inventarisatie kennis niveau, persoonlijke doelen\n- Massage basics, do's and don'ts, contra-indicaties\n- Werkhouding\n- Globale anatomie van de belangrijkste botten en spieren\n- Lessen massage van de rug, nek, shoulders, armen, handen, achterkant en voorkant benen, hoofd en voeten\n- Herhalingsles en gelegenheid tot extra oefenen\n- Afsluitend praktijkexamen\n- Inclusief massageboek en diploma\n- Een praktijk opstarten, waar moet je rekening mee houden\n- Aan het einde van deze opleiding heb je alles in huis om zelf een praktijk te gaan starten, nadat je met casestudies praktijkervaring hebt opgedaan\n- Inclusief gratis ontspanningsmassage van een uur!",
    duration: "7-8 ochtenden of middagen",
    price: "€650 per persoon",
  },
];

// Workshop Card Component with Expandable Description
function WorkshopCard({ id, title, description, fullDescription, duration, price }: { id: string; title: string; description: string; fullDescription: string; duration: string; price: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full justify-between"
      style={{ borderTop: "1px solid rgba(198,156,109,0.15)" }}
    >
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-display text-xl font-bold mb-1" style={{ color: "#3E3A37" }}>
          {title}
        </h3>
        <p className="font-body text-sm leading-relaxed mb-6 flex-1" style={{ color: "#6B6560", height: "3em", overflow: "hidden" }}>
          {description}
        </p>

        {/* Expandable Full Description */}
        <div className="mb-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 font-body text-sm font-semibold transition-all"
            style={{ color: "#8DA089" }}
          >
            <span>{isExpanded ? "Lees minder" : "Lees meer"}</span>
            <ChevronDown
              size={16}
              style={{
                transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
          </button>

          {isExpanded && (
            <div
              className="mt-4 p-4 rounded bg-white border"
              style={{ borderColor: "rgba(141,160,137,0.2)", backgroundColor: "rgba(141,160,137,0.05)" }}
            >
              <p className="font-body text-sm leading-relaxed whitespace-pre-wrap" style={{ color: "#6B6560" }}>
                {fullDescription}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t" style={{ borderColor: "rgba(141,160,137,0.2)" }} />

      {/* Duration and Price */}
      <div className="p-6">
        <div className="mb-3">
          <p className="font-body text-sm mb-1" style={{ color: "#6B6560" }}>
            <span style={{ fontWeight: "600" }}>Duur:</span> {duration}
          </p>
          <p className="font-body text-sm" style={{ color: "#8DA089", fontWeight: "600" }}>
            {price}
          </p>
        </div>

        {/* Contact Button */}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="block w-full py-3 rounded font-body text-sm font-semibold text-white text-center transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#8DA089" }}
        >
          MEER INFO
        </a>
      </div>
    </div>
  );
}

// Training Card Component with Expandable Description
function TrainingCard({ id, title, description, fullDescription, duration, price }: { id: string; title: string; description: string; fullDescription: string; duration: string; price: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full justify-between"
      style={{ borderTop: "1px solid rgba(198,156,109,0.15)" }}
    >
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-display text-xl font-bold mb-1" style={{ color: "#3E3A37" }}>
          {title}
        </h3>
        <p className="font-body text-sm leading-relaxed mb-6 flex-1" style={{ color: "#6B6560", height: "3em", overflow: "hidden" }}>
          {description}
        </p>

        {/* Expandable Full Description */}
        <div className="mb-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 font-body text-sm font-semibold transition-all"
            style={{ color: "#8DA089" }}
          >
            <span>{isExpanded ? "Lees minder" : "Lees meer"}</span>
            <ChevronDown
              size={16}
              style={{
                transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
          </button>

          {isExpanded && (
            <div
              className="mt-4 p-4 rounded bg-white border"
              style={{ borderColor: "rgba(141,160,137,0.2)", backgroundColor: "rgba(141,160,137,0.05)" }}
            >
              <p className="font-body text-sm leading-relaxed whitespace-pre-wrap" style={{ color: "#6B6560" }}>
                {fullDescription}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t" style={{ borderColor: "rgba(141,160,137,0.2)" }} />

      {/* Duration and Price */}
      <div className="p-6">
        <div className="mb-3">
          <p className="font-body text-sm mb-1" style={{ color: "#6B6560" }}>
            <span style={{ fontWeight: "600" }}>Duur:</span> {duration}
          </p>
          <p className="font-body text-sm" style={{ color: "#8DA089", fontWeight: "600" }}>
            {price}
          </p>
        </div>

        {/* Contact Button */}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="block w-full py-3 rounded font-body text-sm font-semibold text-white text-center transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#8DA089" }}
        >
          MEER INFO
        </a>
      </div>
    </div>
  );
}

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
            <p className="font-body text-base mb-8 max-w-3xl" style={{ color: "#6B6560" }}>
              Korte workshops waarin je de basisprincipes van massage leert. Perfecte introductie voor beginners of aanvulling voor ervaren therapeuten.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 items-stretch">
              {workshops.map((w) => (
                <WorkshopCard key={w.id} {...w} />
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
            <p className="font-body text-base mb-8 max-w-3xl" style={{ color: "#6B6560" }}>
              Volledige professionele opleidingen met certificering. Ideaal voor degenen die een massagepraktijk willen starten of hun vaardigheden willen verdiepen.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {trainings.map((t) => (
                <TrainingCard key={t.id} {...t} />
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-12">
          <div className="container max-w-3xl">
            <div className="bg-white rounded-lg p-8" style={{ borderTop: "4px solid #C69C6D" }}>
              <h3 className="font-display text-2xl font-bold mb-4" style={{ color: "#3E3A37" }}>
                Meer informatie?
              </h3>
              <p className="font-body text-base leading-relaxed mb-6" style={{ color: "#6B6560" }}>
                Heb je vragen over de workshops of opleidingen? Neem contact met ons op! We helpen je graag bij het kiezen van de juiste opleiding voor jouw doelen.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone size={20} style={{ color: "#8DA089" }} />
                  <a href={`tel:${CONTACT_PHONE}`} className="font-body text-base" style={{ color: "#8DA089" }}>
                    {CONTACT_PHONE}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} style={{ color: "#8DA089" }} />
                  <a href={`mailto:${CONTACT_EMAIL}`} className="font-body text-base" style={{ color: "#8DA089" }}>
                    {CONTACT_EMAIL}
                  </a>
                </div>
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
