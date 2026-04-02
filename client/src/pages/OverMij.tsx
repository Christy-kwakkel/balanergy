/**
 * BALANERGY OVER MIJ PAGE
 * Design: "Warme Aarde – Organisch & Sensueel"
 * Mascha's complete story and philosophy
 */

import { Link } from "wouter";
import { Phone, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";

const ONLINE_AGENDA_URL = "https://www.supersaas.nl/schedule/balanergy/Balanergy";
const STUDIO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663495181631/fJXKTVuKN2f6PMKBQCtqnD/about-mascha-dvPzjAqj7qTAQ57W5UwV4y.webp";

export default function OverMij() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FCF9F5" }}>
      <Navigation />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-2" style={{ color: "#3E3A37" }}>
              Wie is Balanergy?
            </h1>
            <p className="font-body text-lg" style={{ color: "#8DA089" }}>
              Ontmoet Mascha Kwakkel, therapeut en oprichter van Balanergy
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={STUDIO_IMAGE}
                  alt="Mascha Kwakkel"
                  className="rounded-lg shadow-sm w-full h-auto"
                />
              </div>
              <div>
                <h2 className="font-display text-3xl font-bold mb-6" style={{ color: "#3E3A37" }}>
                  Balanergy is Mascha Kwakkel
                </h2>
                <div className="space-y-4 font-body text-base leading-relaxed" style={{ color: "#6B6560" }}>
                  <p>
                    Even voorstellen: Ik ben Mascha Kwakkel en woon met mijn man en kinderen in IJsselmuiden. Na jaren van leidinggevende- en coachende functies, wilde ik een andere kant van mezelf verder ontwikkelen waardoor ik meer op- en vanuit mijn gevoel kon werken. Dat werd iets wat ik al jaren graag ontving én gaf, vanuit de filosofie dat aanraking helend werkt: massage!
                  </p>
                  <p>
                    En wat gaat er vervolgens een wereld voor je open, want er is zo ontzettend veel mogelijk in de wondere wereld die massage heet! Ik ben begonnen bij de basis, met een opleiding klassieke ontspanningsmassage en het leren behandelen van specifieke klachten. Daarna volgde als snel voetreflexologie en de moeder aller massages, wat mij betreft: Traditionele Thaise yogamassage!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Thailand Journey */}
        <section className="py-12" style={{ backgroundColor: "rgba(141,160,137,0.05)" }}>
          <div className="container">
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl font-bold mb-6" style={{ color: "#3E3A37" }}>
                Mijn Opleiding in Chiang Mai
              </h2>
              <div className="space-y-4 font-body text-base leading-relaxed" style={{ color: "#6B6560" }}>
                <p>
                  Na vele jaren van deze verrukkelijke massages ondergaan in de 7 keer dat ik Thailand bezocht heb, wilde ik van deze eeuwenoude, helende, veelzijdige massage mijn "signature dish" maken. Ik heb de stoute schoenen aangetrokken en ben naar Chiang Mai, Thailand gereisd voor een opleiding Nuad Boran bij de internationale school ITM Chiang Mai. Het was enorm bijzonder om dit helemaal alleen te doen.
                </p>
                <p>
                  Alles kwam uiteindelijk bij elkaar met het besluit Balanergy op te richten, waarbij elke behandeling zich richt op een hernieuwde balans in jouw energie en tot rust komen, en waar alle elementen van functioneel, aangenaam, breed holistisch en esthetiek bij elkaar komen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl font-bold mb-6" style={{ color: "#3E3A37" }}>
                Mijn Filosofie
              </h2>
              <div className="space-y-4 font-body text-base leading-relaxed" style={{ color: "#6B6560" }}>
                <p>
                  Mijn missie is daar waar ik kan helpen met helen. Ik werk holistisch: ik maak een inschatting van wie je bent, hoe je in elkaar zit, wat je thema's zijn en wat je uitstraalt — en pas per keer mijn behandeling daar op aan. Anderzijds kijk ik naar het totaalplaatje van spieren, pezen en bindweefsel, en integreer ik zenuwstelselkalmering, leefstijladviezen en omgaan met stress en mental load.
                </p>
                <p>
                  Bij Balanergy sta jij centraal, met waar jij en jouw lijf op dat moment behoefte aan hebben. Ik bied een scala aan massages en personal yoga training in allerlei vormen, waardoor er altijd wel een is die op dit moment bij jou past.
                </p>
                <blockquote
                  className="italic text-lg py-4 px-6 rounded"
                  style={{ backgroundColor: "rgba(198,156,109,0.1)", borderLeft: "4px solid #C69C6D", color: "#3E3A37" }}
                >
                  "Gun jezelf een stuk heling, ontspanning en herstel."
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Qualifications */}
        <section className="py-12" style={{ backgroundColor: "rgba(141,160,137,0.05)" }}>
          <div className="container">
            <h2 className="font-display text-3xl font-bold mb-8" style={{ color: "#3E3A37" }}>
              Mijn Opleidingen
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-display text-lg font-bold mb-4" style={{ color: "#3E3A37" }}>
                    Thaise Massage & Voetreflexologie
                  </h3>
                  <ul className="space-y-2 font-body text-base" style={{ color: "#6B6560" }}>
                    <li className="flex items-start gap-3">
                      <span className="text-lg mt-1" style={{ color: "#8DA089" }}>✓</span>
                      <span>2018 – Docentenopleiding Thaise Yogamassage Gevorderden</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg mt-1" style={{ color: "#8DA089" }}>✓</span>
                      <span>2018 – Docentenopleiding Voetreflexologie</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg mt-1" style={{ color: "#8DA089" }}>✓</span>
                      <span>2018 – Thaise Kruidenstempelmassage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg mt-1" style={{ color: "#8DA089" }}>✓</span>
                      <span>2016 – Docentenopleiding Thaise Yogamassage Beginners</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg mt-1" style={{ color: "#8DA089" }}>✓</span>
                      <span>2016 – Opleiding Sen (Energielijnen)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg mt-1" style={{ color: "#8DA089" }}>✓</span>
                      <span>2015 – Basis en Gevorderden Opleiding Thaise Yogamassage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg mt-1" style={{ color: "#8DA089" }}>✓</span>
                      <span>2015 – Opleiding Thaise Voetreflexologie</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg mt-1" style={{ color: "#8DA089" }}>✓</span>
                      <span>2015 – Opleiding Therapeutische Yogamassage</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold mb-4" style={{ color: "#3E3A37" }}>
                    Yoga, Coaching & Specialisaties
                  </h3>
                  <ul className="space-y-2 font-body text-base" style={{ color: "#6B6560" }}>
                    <li className="flex items-start gap-3">
                      <span className="text-lg mt-1" style={{ color: "#8DA089" }}>✓</span>
                      <span>2023 – Triggerpointherapie</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg mt-1" style={{ color: "#8DA089" }}>✓</span>
                      <span>2022 – Sportmassage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg mt-1" style={{ color: "#8DA089" }}>✓</span>
                      <span>2021 – Beweegcoach</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg mt-1" style={{ color: "#8DA089" }}>✓</span>
                      <span>2021 – Trainingsleer</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg mt-1" style={{ color: "#8DA089" }}>✓</span>
                      <span>2021 – Inspanningsfysiologie</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg mt-1" style={{ color: "#8DA089" }}>✓</span>
                      <span>2021 – Functionele Anatomie</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg mt-1" style={{ color: "#8DA089" }}>✓</span>
                      <span>2019 – Docentenopleiding Power Yoga 2</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg mt-1" style={{ color: "#8DA089" }}>✓</span>
                      <span>2018 – Docentenopleiding Power Yoga 1</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg mt-1" style={{ color: "#8DA089" }}>✓</span>
                      <span>2015 – Docentenopleiding Kinderyoga</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg mt-1" style={{ color: "#8DA089" }}>✓</span>
                      <span>2014 – Basisopleiding Ontspanningsmassage & Klachtgerichte Massage</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12">
          <div className="container text-center">
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "#3E3A37" }}>
              Klaar om kennis te maken?
            </h2>
            <p className="font-body text-lg mb-6" style={{ color: "#6B6560" }}>
              Boek je eerste behandeling en ervaar zelf de Balanergy filosofie
            </p>
            <a
              href={ONLINE_AGENDA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded font-body text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#8DA089" }}
            >
              BOEK JE AFSPRAAK
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
                <li><Link href="/over-mij"><a className="opacity-80 hover:opacity-100">Over Mij</a></Link></li>
                <li><Link href="/arrangementen"><a className="opacity-80 hover:opacity-100">Arrangementen</a></Link></li>
                <li><Link href="/workshops"><a className="opacity-80 hover:opacity-100">Workshops & Opleidingen</a></Link></li>
                <li><Link href="/personal-training"><a className="opacity-80 hover:opacity-100">Personal Training</a></Link></li>
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
