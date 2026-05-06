/*
 * BALANERGY ARRANGEMENTEN PAGE
 * Design: "Warme Aarde – Organisch & Sensueel"
 * All arrangements, actions, and special offers on one page
 */

import { Link } from "wouter";
import { Phone, Mail, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import ExpandableCard from "@/components/ExpandableCard";

const ONLINE_AGENDA_URL = "https://www.supersaas.nl/schedule/balanergy/Balanergy";

const acties = [
  {
    id: "thaise-actie",
    title: "Kom kennis maken met Thaise yogamassage",
    subtitle: "Actie",
    description: "Krijg een massage tegen dit scherpe actietarief!",
    fullDescription: "Per persoon eenmalig te boeken tegen dit scherpe actietarief. Niet cumuleerbaar met andere acties, kortingen of aanbiedingen.",
    prices: [
      { duration: "60 min", price: "€ 52,50" },
      { duration: "90 min", price: "€ 72,50" },
    ],
    note: "Niet cumuleerbaar met andere acties, kortingen of aanbiedingen.",
  },
  {
    id: "reflexologie-actie",
    title: "Kom kennis maken met voetreflexologie",
    subtitle: "Actie",
    description: "Boek een behandeling met Thaise en westerse technieken.",
    fullDescription: "Thaise en westerse technieken worden gecombineerd. Niet cumuleerbaar met andere acties, kortingen of aanbiedingen.",
    prices: [
      { duration: "45 min", price: "€ 42,50" },
    ],
    note: "Niet cumuleerbaar met andere acties, kortingen of aanbiedingen.",
  },
  {
    id: "scrub-actie",
    title: "Scrub, achterkant lichaam",
    subtitle: "Actie",
    description: "Ontdoe je huid van dode huidcellen.",
    fullDescription: "Om je huid gezond en mooi te laten worden en houden, is het belangrijk deze zo nu en dan te ontdoen van dode huidcellen door deze te scrubben. Omdat je zelf niet bij je rug kunt kun je vanaf nu een scrub van de achterkant van je lichaam boeken (rug, billen indien gewenst, achterkant benen) voor slechts 6,95 extra bij je behandeling. Vermeld dit bij je boeking en krijg deze heerlijk scrub met een essentiële olie naar keuze bij je behandeling! Indien je via de online agenda reserveert voor een massage, vermeld dan in de opmerking erbij dat je ook graag een scrub behandeling wilt toevoegen.",
    prices: [
      { duration: "Extra", price: "€ 6,95" },
    ],
    note: "Voeg toe bij je boeking in de opmerkingen.",
  },
];

const seizoensArrangementen = [
  {
    id: "winter",
    title: "Winter arrangement",
    subtitle: "Tafel",
    description: "Stimulerende massage met westerse en oosterse technieken.",
    fullDescription: "Ben je toe aan je lijf voorbereiding op de winter? Dit arrangement maakt gebruik van een stevige maar rustige gegeven, stimulerende massage met zowel westerse als oosterse massagetechnieken met essentiële olie naar keuze om het lichaam energie te geven en op te peppen. Er wordt begonnen met een scrub van de rug, nek en shoulders en achterkant van de benen, precies die delen waar je zelf minder makkelijk bij kunt. Daarna volgt een massage van rug, nek en shoulders, gevolgd door de achterkant van de benen, armen en handen indien tijd over, het hoofd en ter afsluiting is er aandacht voor het meest belaste onderdeelvan je lijf: je voeten! Na de behandeling zul je je energiek en verfrist voelen en ben je klaar voor de winter!",
    prices: [
      { duration: "60 min", price: "€ 59,-" },
      { duration: "90 min", price: "€ 79,-" },
    ],
  },
  {
    id: "balsem-sinaasappel",
    title: "Balsem sinaasappel-kaneel arrangement",
    subtitle: "Tafel",
    description: "Start met kaneel of sinaasappel etherische oliebad.",
    fullDescription: "Je behandeling start met een kaneel of sinaasappel etherische oliebad van je voeten. Hierna worden bij een uur rug, nek, shoulders en indien gewenst de bilspieren ingesmeerd met verwarmende therapeutische balsem, bij 90 minuten ook de voor- en achterkant van de benen. Daarna volgt de massage met verwarmde, etherische olie van rug, nek, shoulders en bilspieren, aangevuld met een keuze uit voor- of achterkant benen, voeten, handen of hoofd. Bij 90 minuten komen al deze onderdelenaan de beurt en bepalen we in overleg waar jij behoefte aan hebt!",
    prices: [
      { duration: "60 min", price: "€ 59,-" },
      { duration: "90 min", price: "€ 79,-" },
    ],
  },
  {
    id: "balsem-thais",
    title: "Balsem kaneel/sinaasappel arrangement Thais",
    subtitle: "Mat",
    description: "Start met warm voetbad met essentiële olie.",
    fullDescription: "Deze massage start met een warm voetbad met essentiële naar keuze kaneel of sinaasappel olie. Vervolgens worden rug, nek, shoulders, indien gewenst bilspieren, en achterkant benen ingesmeerd met een verwarmende therapeutische balsem, waardoor de acupressuur en stretch massage technieken extra functioneel worden en je spieren nog beter loskomen.\n\nHierna trek je een joggingbroek en shirt of vest met lange mouwen aan volgt een Thaise massage van 60 of 90 minuten, met keuze uit een ontspannende of therapeutische massage. Bij 60 minuten betekent dat voeten, benen, armen, handen, achterkant benen, bilspieren, rug, nek, en shoulders en als afsluiter een zittende houding waarin je shoulders gestrekt en gemasseerd worden. Bij 90 minuten wordt zijligging toegevoegd en krijg je ook een hoofdmassage. In overleg is de inhoud persoonlijk af te stemmen.",
    prices: [
      { duration: "60 min", price: "€ 62,50" },
      { duration: "90 min", price: "€ 82,50" },
    ],
  },
];

const vasteArrangementen = [
  {
    id: "antistress",
    title: "Antistress massage",
    subtitle: "Tafel",
    description: "Ontspannende massage met zwaartepunt op rug, nek en schouders.",
    fullDescription: "Ontspannende massage met zwaartepunt op rug, nek, schouders, handen, voeten en hoofd. Na afloop krijg je een miniflesje massageolie met anti-stress essentiële olie mee naar huis.",
    prices: [
      { duration: "60 min", price: "€ 59,-" },
      { duration: "90 min", price: "€ 79,-" },
    ],
  },
  {
    id: "thai-western",
    title: "Thai Western massage",
    subtitle: "Mat & Tafel",
    description: "Start op mat met voetbad, massage met yogastretches.",
    fullDescription: "Start op mat met voetbad, massage van armen, handen, voeten, benen en rug met yogastretches. Vervolgens op tafel rug, nek, schouders en hoofd.",
    prices: [
      { duration: "90 min", price: "€ 82,50" },
      { duration: "120 min", price: "€ 100,-" },
    ],
    tag: "Meest geboekt",
  },
  {
    id: "combi-thai-reflexologie",
    title: "Combi Thaise yogamassage en voetreflexologie",
    subtitle: "Mat",
    description: "Thaise yogamassage met voetreflexologie en warm voetenbad.",
    fullDescription: "Thaise yogamassage met ongeveer 15-20 minuten voetreflexologie. Start met warm voetenbad en kopje kruiden- of vruchtenthee naar keuze.",
    prices: [
      { duration: "60 min", price: "€ 59,-" },
      { duration: "90 min", price: "€ 79,-" },
    ],
  },
  {
    id: "indian-summer",
    title: "Indian summer arrangement",
    subtitle: "Tafel",
    description: "Start met voetenbad en kopje thee, daarna stevige scrub.",
    fullDescription: "Start met voetenbad en kopje thee, daarna stevige scrub van rug en achterkant benen, gevolgd door massage van rug, nek, schouders, achterkant benen en bilspieren.",
    prices: [
      { duration: "60 min", price: "€ 59,-" },
      { duration: "90 min", price: "€ 79,-" },
    ],
  },
  {
    id: "samui-zwangerschap",
    title: "Samui zwangerschapsarrangement",
    subtitle: "Tafel of Mat",
    description: "Speciaal voor zwangeren met warm voetenbad en lavendelolie.",
    fullDescription: "Speciaal voor zwangeren. Start met warm voetenbad met lavendelolie en kopje kruidenthee. Ontspannende massage van hoofd, gezicht, nek, schouders, armen, handen en voeten.",
    prices: [
      { duration: "60 min", price: "€ 59,-" },
      { duration: "90 min", price: "€ 79,-" },
    ],
  },
];

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
              Speciale combinaties en aanbiedingen voor een unieke ervaring
            </p>
          </div>
        </section>

        {/* Acties Section */}
        <section className="py-12">
          <div className="container">
            <h2 className="font-display text-3xl font-bold mb-8" style={{ color: "#3E3A37" }}>
              Acties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {acties.map((a) => (
                <ExpandableCard
                  key={a.id}
                  title={a.title}
                  subtitle={a.subtitle}
                  description={a.description}
                  fullDescription={a.fullDescription}
                  prices={a.prices}
                  note={a.note}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Seizoen Arrangementen Section */}
        <section className="py-12 bg-white">
          <div className="container">
            <h2 className="font-display text-3xl font-bold mb-8" style={{ color: "#3E3A37" }}>
              Seizoen Arrangementen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {seizoensArrangementen.map((a) => (
                <ExpandableCard
                  key={a.id}
                  title={a.title}
                  subtitle={a.subtitle}
                  description={a.description}
                  fullDescription={a.fullDescription}
                  prices={a.prices}
                />
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {vasteArrangementen.map((a) => (
                <ExpandableCard
                  key={a.id}
                  title={a.title}
                  subtitle={a.subtitle}
                  description={a.description}
                  fullDescription={a.fullDescription}
                  prices={a.prices}
                  tag={a.tag}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 bg-white">
          <div className="container max-w-3xl">
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold mb-6" style={{ color: "#3E3A37" }}>
                Vragen over arrangementen?
              </h2>
              <p className="font-body text-lg mb-8" style={{ color: "#6B6560" }}>
                Neem contact op voor meer informatie of om een arrangement naar wens samen te stellen.
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

const CONTACT_PHONE = "06-42874405";
const CONTACT_EMAIL = "balanergy@hotmail.com";
