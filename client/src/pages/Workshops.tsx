/*
 * BALANERGY WORKSHOPS & OPLEIDINGEN PAGE
 * Design: "Warme Aarde – Organisch & Sensueel"
 * Workshops and training courses on one page, clearly separated
 */

import { useEffect } from "react";
import { Link } from "wouter";
import { Phone, Mail, BookOpen } from "lucide-react";
import Navigation from "@/components/Navigation";

const CONTACT_PHONE = "06-42874405";
const CONTACT_EMAIL = "balanergy@hotmail.com";

const workshops = [
  {
    id: "ontspanning-achterkant",
    title: "Ontspanningsmassage Achterkant Lichaam",
    description: "Learn neck, shoulders, and back relaxation massage techniques. Includes handout with techniques and basic knowledge.",
    duration: "2.5-4 hours (1-2 people)",
    price: "€99 per person / €175 for 2 people",
  },
  {
    id: "thaise-level1",
    title: "Thaise Massage Level 1",
    description: "Thai acupressure and yoga massage front body (feet, legs, arms, hands, belly, chest, head). Can be done without massage table.",
    duration: "2.5-4 hours (1-2 people)",
    price: "€125 per person / €225 for 2 people",
  },
  {
    id: "thaise-level2",
    title: "Thaise Massage Level 2",
    description: "Thai massage back body and side positions (feet, legs, buttocks, back, neck, shoulders). Complements Level 1. Can be done without massage table.",
    duration: "2.5-4 hours (1-2 people)",
    price: "€125 per person / €225 for 2 people",
  },
  {
    id: "ontspanning-hoofd",
    title: "Ontspanningsmassage Hoofd, Handen en Voeten",
    description: "Learn head, hands, and feet relaxation massage techniques. Includes handout with techniques and basic knowledge.",
    duration: "2 hours",
    price: "€75 per person / €140 for 2 people",
  },
  {
    id: "ontspanning-heel",
    title: "Ontspanningsmassage Hele Lichaam",
    description: "Complete full body relaxation massage (neck, shoulders, back, legs, arms, hands, head, feet). Includes handout with techniques and basic knowledge.",
    duration: "5-6 hours",
    price: "€225 per person",
  },
  {
    id: "klachtgerichte",
    title: "Klachtgerichte/Sportmassage",
    description: "Complaint-focused massage (neck, shoulders, back, hip/pelvic muscles, upper back legs). Includes handout with techniques and basic knowledge.",
    duration: "3-3.5 hours",
    price: "€125 per person / €225 for 2 people",
  },
];

const trainings = [
  {
    id: "thaise-level1",
    title: "Opleiding Thaise Yogamassage Level 1",
    description: "Learn the fundamentals of Thai yoga massage. Front body techniques including feet, legs, arms, hands, belly, chest, and head. Maximum 2 people per training.",
    duration: "Multiple sessions",
    price: "On request",
  },
  {
    id: "thaise-level2",
    title: "Opleiding Thaise Yogamassage Level 2",
    description: "Advanced Thai yoga massage techniques for back body and side positions. Complements Level 1. Maximum 2 people per training.",
    duration: "Multiple sessions",
    price: "On request",
  },
  {
    id: "klachtgerichte",
    title: "Opleiding Klachtgerichte Massage",
    description: "Professional complaint-focused massage training. Learn to treat specific pain areas and movement complaints. Maximum 2 people per training.",
    duration: "Multiple sessions",
    price: "On request",
  },
  {
    id: "ontspanning-volledig",
    title: "Volledige Opleiding Ontspanningsmassage",
    description: "Complete relaxation massage training covering the entire body. Includes water, herbal tea, and course materials. Available in Dutch or English.",
    duration: "Multiple sessions",
    price: "On request",
  },
];

export default function Workshops() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Workshops & Opleidingen | Balanergy";
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FCF9F5" }}>
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-2" style={{ color: "#3E3A37" }}>
              Workshops & Opleidingen
            </h1>
            <p className="font-body text-lg" style={{ color: "#8DA089" }}>
              Leer massagetechnieken of verdiep je kennis met onze workshops en professionele trainingen
            </p>
          </div>
        </section>

        {/* Workshops Section */}
        <section className="py-12">
          <div className="container">
            <h2 className="font-display text-3xl font-bold mb-8" style={{ color: "#3E3A37" }}>
              Workshops
            </h2>
            <p className="font-body text-base mb-8" style={{ color: "#6B6560" }}>
              Onze workshops zijn perfect voor iedereen die massagetechnieken wil leren voor vrienden en familie. Workshops kunnen met 1 of 2 personen worden gedaan.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workshops.map((w) => (
                <div
                  key={w.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col"
                  style={{ borderTop: "1px solid rgba(198,156,109,0.15)" }}
                >
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-display text-lg font-bold mb-3" style={{ color: "#3E3A37" }}>
                      {w.title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed mb-6 flex-1" style={{ color: "#6B6560" }}>
                      {w.description}
                    </p>
                  </div>

                  <div className="border-t" style={{ borderColor: "rgba(141,160,137,0.2)" }} />

                  <div className="p-6">
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between font-body text-sm">
                        <span style={{ color: "#6B6560" }}>Duration</span>
                        <span style={{ color: "#8DA089", fontWeight: "600" }}>{w.duration}</span>
                      </div>
                      <div className="flex justify-between font-body text-sm">
                        <span style={{ color: "#6B6560" }}>Price</span>
                        <span style={{ color: "#8DA089", fontWeight: "600" }}>{w.price}</span>
                      </div>
                    </div>

                    <a
                      href={`tel:${CONTACT_PHONE}`}
                      className="block w-full py-3 rounded font-body text-sm font-semibold text-white text-center transition-opacity hover:opacity-90"
                      style={{ backgroundColor: "#8DA089" }}
                    >
                      CONTACT VOOR BOEKING
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Opleidingen Section */}
        <section className="py-12" style={{ backgroundColor: "rgba(141,160,137,0.05)" }}>
          <div className="container">
            <h2 className="font-display text-3xl font-bold mb-8" style={{ color: "#3E3A37" }}>
              Professionele Opleidingen
            </h2>
            <p className="font-body text-base mb-8" style={{ color: "#6B6560" }}>
              Onze professionele trainingen zijn ontworpen voor iedereen die massagetherapie serieus wil nemen. Massage is in Nederland een vrij beroep. Trainingen kunnen individueel of met 1 ander persoon worden gedaan, met of zonder model. Beschikbaar in Nederlands en Engels.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trainings.map((t) => (
                <div
                  key={t.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col"
                  style={{ borderTop: "1px solid rgba(198,156,109,0.15)" }}
                >
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-display text-lg font-bold mb-3" style={{ color: "#3E3A37" }}>
                      {t.title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed mb-6 flex-1" style={{ color: "#6B6560" }}>
                      {t.description}
                    </p>
                  </div>

                  <div className="border-t" style={{ borderColor: "rgba(141,160,137,0.2)" }} />

                  <div className="p-6">
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between font-body text-sm">
                        <span style={{ color: "#6B6560" }}>Duration</span>
                        <span style={{ color: "#8DA089", fontWeight: "600" }}>{t.duration}</span>
                      </div>
                      <div className="flex justify-between font-body text-sm">
                        <span style={{ color: "#6B6560" }}>Price</span>
                        <span style={{ color: "#8DA089", fontWeight: "600" }}>{t.price}</span>
                      </div>
                    </div>

                    <a
                      href={`tel:${CONTACT_PHONE}`}
                      className="block w-full py-3 rounded font-body text-sm font-semibold text-white text-center transition-opacity hover:opacity-90"
                      style={{ backgroundColor: "#8DA089" }}
                    >
                      CONTACT VOOR INSCHRIJVING
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Info Section */}
        <section className="py-12">
          <div className="container max-w-3xl">
            <h2 className="font-display text-2xl font-bold mb-6" style={{ color: "#3E3A37" }}>
              Belangrijke Informatie
            </h2>
            <div className="space-y-6 font-body text-sm" style={{ color: "#6B6560" }}>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: "#3E3A37" }}>
                  Workshop vs. Opleiding
                </h3>
                <p>
                  Workshops zijn korte, praktische sessies om basisvaardigheden te leren. Opleidingen zijn uitgebreide trainingen voor professioneel gebruik.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: "#3E3A37" }}>
                  Groepsgrootte
                </h3>
                <p>
                  Workshops en trainingen kunnen met maximaal 2 personen worden gedaan. Dit zorgt voor persoonlijke aandacht en aangepaste instructie.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: "#3E3A37" }}>
                  Wat is inbegrepen
                </h3>
                <p>
                  Trainingen inclusief water, kruidenthee, en cursusmateriaal (reader/boek). Workshops inclusief handout met technieken en basiskennis.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: "#3E3A37" }}>
                  Belastingaftrek
                </h3>
                <p>
                  Trainingskosten zijn vaak aftrekbaar voor zakelijke doeleinden. Raadpleeg je accountant voor details.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6" style={{ color: "#3E3A37" }}>
              Wil je meer informatie?
            </h2>
            <p className="font-body text-lg mb-8 max-w-2xl mx-auto" style={{ color: "#6B6560" }}>
              Neem contact op voor meer details, beschikbaarheid en inschrijving
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="inline-block px-8 py-3 rounded font-body text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#8DA089" }}
              >
                BEL NU
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-block px-8 py-3 rounded font-body text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#C69C6D" }}
              >
                STUUR EMAIL
              </a>
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
                <li><Link href="/"><div className="opacity-80 hover:opacity-100 cursor-pointer">Home</div></Link></li>
                <li><Link href="/behandelingen"><div className="opacity-80 hover:opacity-100 cursor-pointer">Behandelingen</div></Link></li>
                <li><Link href="/arrangementen"><div className="opacity-80 hover:opacity-100 cursor-pointer">Arrangementen</div></Link></li>
                <li><Link href="/over-mij"><div className="opacity-80 hover:opacity-100 cursor-pointer">Over Mij</div></Link></li>
                <li><Link href="/contact"><div className="opacity-80 hover:opacity-100 cursor-pointer">Contact</div></Link></li>
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
