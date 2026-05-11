/*
 * BALANERGY PERSONAL TRAINING PAGE
 * Design: "Warme Aarde – Organisch & Sensueel"
 * Personal yoga and Body Balance training offerings
 */

import { Link } from "wouter";
import { Phone, Mail, Dumbbell, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";

const ONLINE_AGENDA_URL = "https://www.supersaas.nl/schedule/balanergy/Balanergy";
const CONTACT_PHONE = "06-42874405";
const CONTACT_EMAIL = "balanergy@hotmail.com";

const benefits = [
  "Yoga of Body Balance op individueel afgestemde manier",
  "Leren welke houdingen bij jouw lichaam passen",
  "Directe feedback en correctie op je practice",
  "Specifieke fysieke of mentale doelen bereiken",
  "1 op 1 begeleiding in houding en ademhaling",
  "Voor beginners en gevorderden",
];

const trainings = [
  {
    title: "1 Losse Les",
    subtitle: "Personal Techniektraining, Yoga of Body Balance",
    duration: "60 minuten",
    price: "€39,-",
    description: "Eenmalige sessie voor kennismaking of aanvulling op je reguliere training.",
  },
  {
    title: "Serie van 2 Lessen",
    subtitle: "Personal Training",
    duration: "2 × 60 minuten",
    price: "€76,-",
    description: "Korte serie om je training op gang te brengen met persoonlijke begeleiding.",
  },
  {
    title: "Serie van 4 Lessen",
    subtitle: "Personal Training",
    duration: "4 × 60 minuten",
    price: "€150,-",
    description: "Volledige introductie met voortgang en aanpassingen naar jouw niveau.",
  },
  {
    title: "Serie van 6 Lessen",
    subtitle: "Personal Training",
    duration: "6 × 60 minuten",
    price: "€230,-",
    description: "Uitgebreide training met diepere focus op technieken en doelstellingen.",
  },

];

function TrainingCard({ title, subtitle, duration, price, description }: { title: string; subtitle: string; duration: string; price: string; description: string }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col h-full">
      <div className="mb-4">
        <h3 className="font-display text-lg font-bold mb-1" style={{ color: "#3E3A37" }}>
          {title}
        </h3>
        <p className="font-body text-xs font-semibold" style={{ color: "#8DA089" }}>
          {subtitle}
        </p>
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
        href={ONLINE_AGENDA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-2 rounded font-body text-xs font-semibold text-white text-center transition-opacity hover:opacity-90"
        style={{ backgroundColor: "#8DA089" }}
      >
        BOEK NU
      </a>
    </div>
  );
}

export default function PersonalTraining() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FCF9F5" }}>
      <Navigation />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-2" style={{ color: "#3E3A37" }}>
              Personal Training
            </h1>
            <p className="font-body text-lg" style={{ color: "#8DA089" }}>
              Yoga en Body Balance op maat voor jou
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-12 bg-white">
          <div className="container max-w-3xl">
            <p className="font-body text-base leading-relaxed mb-6" style={{ color: "#6B6560" }}>
              Wil jij yoga of Body Balance op een individueel afgestemde manier leren? Bij Balanergy bieden we persoonlijke trainingen waarbij jij centraal staat. Of je nu beginner bent of al ervaring hebt, we passen het programma volledig aan jouw kennis, ervaring en persoonlijke doelen.
            </p>
            <p className="font-body text-base leading-relaxed" style={{ color: "#6B6560" }}>
              Je krijgt 1 op 1 begeleiding met directe feedback en correctie op je practice. Alle trainingen zijn inclusief gebruik van een yogamat indien gewenst, en vinden plaats in de praktijkruimte van Balanergy.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12">
          <div className="container">
            <h2 className="font-display text-3xl font-bold mb-8" style={{ color: "#3E3A37" }}>
              Waarom Personal Training?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <CheckCircle size={24} style={{ color: "#8DA089" }} className="flex-shrink-0 mt-1" />
                  <p className="font-body text-base" style={{ color: "#6B6560" }}>
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Options Section */}
        <section className="py-12">
          <div className="container">
            <div className="flex items-center gap-3 mb-8">
              <Dumbbell size={24} style={{ color: "#C69C6D" }} />
              <h2 className="font-display text-3xl font-bold" style={{ color: "#3E3A37" }}>
                Training Pakketten
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {trainings.map((training, idx) => (
                <TrainingCard key={idx} {...training} />
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-12 bg-white">
          <div className="container max-w-3xl">
            <h2 className="font-display text-2xl font-bold mb-6" style={{ color: "#3E3A37" }}>
              Hoe Werkt Het?
            </h2>
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="font-body font-semibold text-lg mb-2" style={{ color: "#3E3A37" }}>
                  Losse Lessen
                </h3>
                <p className="font-body text-base" style={{ color: "#6B6560" }}>
                  Losse lessen in de praktijkruimte van Balanergy zijn online boekbaar via onze agenda.
                </p>
              </div>
              <div>
                <h3 className="font-body font-semibold text-lg mb-2" style={{ color: "#3E3A37" }}>
                  Trainingspakketten
                </h3>
                <p className="font-body text-base" style={{ color: "#6B6560" }}>
                  Voor trainingspakketten of lessen op locatie, neem contact op via telefoon of email. We plannen dan samen een moment in dat bij jou past.
                </p>
              </div>
              <div>
                <h3 className="font-body font-semibold text-lg mb-2" style={{ color: "#3E3A37" }}>
                  Zakelijke Trainingen
                </h3>
                <p className="font-body text-base" style={{ color: "#6B6560" }}>
                  Body Balance, Hatha yoga of Power Yoga lessen voor bedrijven zijn beschikbaar op aanvraag.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 p-6 mb-8" style={{ borderColor: "#C69C6D", backgroundColor: "rgba(198,156,109,0.1)" }}>
              <p className="font-body text-base font-semibold mb-2" style={{ color: "#3E3A37" }}>
                💡 Cadeau Idee
              </p>
              <p className="font-body text-base" style={{ color: "#6B6560" }}>
                Personal Training is ook superleuk en origineel om cadeau te doen! Geef iemand de kans om op een persoonlijke manier fit en gezond te worden.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-body text-lg font-semibold" style={{ color: "#3E3A37" }}>
                Neem Contact Op
              </h3>
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

        {/* Cancellation Policy Section */}
        <section className="py-12 bg-white">
          <div className="container max-w-3xl">
            <div className="bg-yellow-50 border-l-4 p-6" style={{ borderColor: "#C69C6D", backgroundColor: "rgba(198,156,109,0.1)" }}>
              <p className="font-body text-base font-semibold mb-3" style={{ color: "#3E3A37" }}>
                ⚠️ Annuleringsbeleid
              </p>
              <p className="font-body text-base leading-relaxed mb-3" style={{ color: "#6B6560" }}>
                <strong>Let op:</strong> Vanwege de volle agenda worden afspraken die minder dan 24 uur van tevoren worden afgezegd, ongeacht de reden, in rekening gebracht.
              </p>
              <p className="font-body text-base leading-relaxed" style={{ color: "#6B6560" }}>
                <strong>Uitzondering:</strong> Wanneer je iemand anders in jouw plaats laat komen voor dezelfde tijdsduur, dan geldt dit niet.
              </p>
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
              Boek je eerste les of neem contact op voor meer informatie
            </p>
            <a
              href={ONLINE_AGENDA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded font-body text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#8DA089" }}
            >
              BOEK NU
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
                <li><Link href="/" className="opacity-80 hover:opacity-100">Home</Link></li>
                <li><Link href="/behandelingen" className="opacity-80 hover:opacity-100">Behandelingen</Link></li>
                <li><Link href="/over-mij" className="opacity-80 hover:opacity-100">Over Mij</Link></li>
                <li><Link href="/arrangementen" className="opacity-80 hover:opacity-100">Arrangementen</Link></li>
                <li><Link href="/workshops" className="opacity-80 hover:opacity-100">Workshops & Opleidingen</Link></li>
                <li><Link href="/personal-training" className="opacity-80 hover:opacity-100">Personal Training</Link></li>
                <li><Link href="/contact" className="opacity-80 hover:opacity-100">Contact</Link></li>
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
