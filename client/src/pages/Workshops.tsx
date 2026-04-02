/*
 * BALANERGY WORKSHOPS & OPLEIDINGEN PAGE
 * Design: "Warme Aarde – Organisch & Sensueel"
 * All workshops, trainings, and educational offerings on one page
 */

import { Link } from "wouter";
import { Phone, Mail, BookOpen } from "lucide-react";
import Navigation from "@/components/Navigation";

const ONLINE_AGENDA_URL = "https://www.supersaas.nl/schedule/balanergy/Balanergy";
const CONTACT_PHONE = "06-42874405";
const CONTACT_EMAIL = "balanergy@hotmail.com";

const workshops = [
  {
    title: "Workshop Massage Kennismaking",
    description: "Maak kennis met wat massage omvat en waar je rekening mee dient te houden. Perfect voor beginners die willen ontdekken of massage iets voor hen is.",
    duration: "Op aanvraag",
    price: "€45,-",
  },
  {
    title: "Workshop Rug- en Schoudermassage",
    description: "Leer verantwoorde technieken om je familie en vrienden een prettige rug-, nek- en schoudermassage te geven.",
    duration: "Op aanvraag",
    price: "€65,-",
  },
  {
    title: "Workshop Ontspanningsmassage",
    description: "Leer klassieke grepen en technieken gecombineerd met Thaise technieken voor ontspanningsmassage.",
    duration: "Op aanvraag",
    price: "€75,-",
  },
];

const trainings = [
  {
    title: "Volledige Massageopleiding",
    subtitle: "Professioneel",
    description: "Leer het hele lichaam anatomisch en verantwoord te masseren. Inclusief water, thee en reader/boek. Maximaal 2 personen per groep. Beschikbaar in Nederlands en Engels.",
    duration: "Op aanvraag",
    price: "Op aanvraag",
  },
  {
    title: "Deelmassage Opleiding",
    subtitle: "Gespecialiseerd",
    description: "Specialiseer je in specifieke lichaamsdelen zoals rug, nek, schouders, voeten of hoofd. Ideaal voor beginners.",
    duration: "Op aanvraag",
    price: "Op aanvraag",
  },
  {
    title: "Thaise Massage Opleiding",
    subtitle: "Geavanceerd",
    description: "Leer traditionele Thaise massagetechnieken gecombineerd met westerse methoden. Inclusief alle materialen en ondersteuning.",
    duration: "Op aanvraag",
    price: "Op aanvraag",
  },
];

function OfferingCard({ title, subtitle, description, duration, price }: { title: string; subtitle?: string; description: string; duration: string; price: string }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col h-full">
      <div className="mb-4">
        <h3 className="font-display text-lg font-bold mb-1" style={{ color: "#3E3A37" }}>
          {title}
        </h3>
        {subtitle && (
          <p className="font-body text-xs font-semibold" style={{ color: "#8DA089" }}>
            {subtitle}
          </p>
        )}
      </div>
      <p className="font-body text-sm leading-relaxed mb-4 flex-1" style={{ color: "#6B6560" }}>
        {description}
      </p>
      <div className="border-t my-4" style={{ borderColor: "rgba(141,160,137,0.2)" }} />
      <div className="flex justify-between items-center mb-4">
        <span className="font-body text-xs" style={{ color: "#6B6560" }}>
          {duration}
        </span>
        <span className="font-display text-lg font-bold" style={{ color: "#8DA089" }}>
          {price}
        </span>
      </div>
      <a
        href={`tel:${CONTACT_PHONE}`}
        className="w-full py-2 rounded font-body text-xs font-semibold text-white text-center transition-opacity hover:opacity-90"
        style={{ backgroundColor: "#8DA089" }}
      >
        MEER INFO
      </a>
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
              Leer masseren en yoga van een ervaren professional
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-12 bg-white">
          <div className="container max-w-3xl">
            <p className="font-body text-base leading-relaxed mb-6" style={{ color: "#6B6560" }}>
              Massage in Nederland is een vrij beroep. Wie echter regelmatig een massage krijgt, voelt al snel of iemand weet wat hij of zij doet en gedegen is opgeleid. Mascha Kwakkel van Balanergy heeft diverse (docenten)opleidingen massage gevolgd en een ruime praktijkervaring en wil deze graag delen.
            </p>
            <p className="font-body text-base leading-relaxed mb-6" style={{ color: "#6B6560" }}>
              Bij Balanergy kun je kiezen voor een volledige, professionele opleiding om het hele lichaam te leren masseren, of een deelmassage leren beheersen. Je kunt ook eerst een workshop volgen om te kijken of het iets voor je is. De workshops en opleidingen zijn een mix van klassieke grepen en technieken, gecombineerd met Thaise technieken.
            </p>
            <p className="font-body text-base leading-relaxed" style={{ color: "#6B6560" }}>
              Elke opleiding doe je met maximaal 2 personen. Je kunt samen de opleiding doen en op elkaar oefenen, of privé werken met een massagemodel. Alle opleidingen kunnen in het Nederlands of Engels gegeven worden en zijn inclusief water, thee en reader/boek.
            </p>
          </div>
        </section>

        {/* Workshops Section */}
        <section className="py-12">
          <div className="container">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen size={24} style={{ color: "#C69C6D" }} />
              <h2 className="font-display text-3xl font-bold" style={{ color: "#3E3A37" }}>
                Workshops
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {workshops.map((workshop, idx) => (
                <OfferingCard key={idx} title={workshop.title} description={workshop.description} duration={workshop.duration} price={workshop.price} />
              ))}
            </div>
          </div>
        </section>

        {/* Trainings Section */}
        <section className="py-12">
          <div className="container">
            <h2 className="font-display text-3xl font-bold mb-8" style={{ color: "#3E3A37" }}>
              Professionele Opleidingen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {trainings.map((training, idx) => (
                <OfferingCard key={idx} {...training} />
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-12 bg-white">
          <div className="container max-w-3xl">
            <h2 className="font-display text-2xl font-bold mb-6" style={{ color: "#3E3A37" }}>
              Meer Informatie
            </h2>
            <p className="font-body text-base leading-relaxed mb-6" style={{ color: "#6B6560" }}>
              Wil je meer weten over de workshops en opleidingen? Neem contact op met Mascha via telefoon of email. Je kunt ook direct een moment inplannen voor een kennismakingsgesprek.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Phone size={20} style={{ color: "#8DA089" }} className="mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body font-semibold" style={{ color: "#3E3A37" }}>
                    Telefoon
                  </p>
                  <a href={`tel:${CONTACT_PHONE}`} className="font-body text-base" style={{ color: "#8DA089" }}>
                    {CONTACT_PHONE}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={20} style={{ color: "#8DA089" }} className="mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body font-semibold" style={{ color: "#3E3A37" }}>
                    Email
                  </p>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="font-body text-base" style={{ color: "#8DA089" }}>
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6" style={{ color: "#3E3A37" }}>
              Klaar om te beginnen?
            </h2>
            <p className="font-body text-lg mb-8 max-w-2xl mx-auto" style={{ color: "#6B6560" }}>
              Neem contact op voor meer informatie over workshops en opleidingen
            </p>
            <a
              href={`tel:${CONTACT_PHONE}`}
              className="inline-block px-8 py-3 rounded font-body text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#8DA089" }}
            >
              BEL NU
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
                <li><Link href="/arrangementen"><a className="opacity-80 hover:opacity-100">Arrangementen</a></Link></li>
                <li><Link href="/workshops"><a className="opacity-80 hover:opacity-100">Workshops</a></Link></li>
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
