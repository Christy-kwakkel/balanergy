/**
 * BALANERGY CONTACT PAGE
 * Design: "Warme Aarde – Organisch & Sensueel"
 * Contact information, location, and booking details
 */

import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";

const ONLINE_AGENDA_URL = "https://www.supersaas.nl/schedule/balanergy/Balanergy";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FCF9F5" }}>
      <Navigation />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-2" style={{ color: "#3E3A37" }}>
              Contact & Locatie
            </h1>
            <p className="font-body text-lg" style={{ color: "#8DA089" }}>
              Kom langs in IJsselmuiden of neem contact op
            </p>
          </div>
        </section>

        {/* Contact Info Grid */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Address */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <MapPin size={32} style={{ color: "#8DA089" }} />
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2" style={{ color: "#3E3A37" }}>
                      Adres
                    </h3>
                    <p className="font-body text-base" style={{ color: "#6B6560" }}>
                      Kreeft 45<br />
                      8271KL IJsselmuiden<br />
                      <span className="text-sm opacity-80">
                        (Centraal tussen Kampen en Zwolle)
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <Phone size={32} style={{ color: "#8DA089" }} />
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2" style={{ color: "#3E3A37" }}>
                      Telefoon
                    </h3>
                    <a
                      href="tel:0642874405"
                      className="font-body text-base font-semibold hover:opacity-70"
                      style={{ color: "#8DA089" }}
                    >
                      06-42874405
                    </a>
                    <p className="font-body text-sm mt-2" style={{ color: "#6B6560" }}>
                      Ook bereikbaar via WhatsApp
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <Mail size={32} style={{ color: "#8DA089" }} />
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2" style={{ color: "#3E3A37" }}>
                      E-mail
                    </h3>
                    <a
                      href="mailto:balanergy@hotmail.com"
                      className="font-body text-base font-semibold hover:opacity-70"
                      style={{ color: "#8DA089" }}
                    >
                      balanergy@hotmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-white p-8 rounded-lg shadow-sm mb-12">
              <div className="flex items-start gap-4 mb-4">
                <Clock size={32} style={{ color: "#8DA089" }} />
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold mb-4" style={{ color: "#3E3A37" }}>
                    Openingstijden
                  </h3>
                  <p className="font-body text-base mb-4" style={{ color: "#6B6560" }}>
                    <strong>Op afspraak</strong> — Bekijk de online agenda voor beschikbaarheid.
                  </p>
                </div>
              </div>
            </div>

            {/* Booking Info */}
            <div className="bg-white p-8 rounded-lg shadow-sm" style={{ backgroundColor: "rgba(141,160,137,0.05)" }}>
              <div className="flex items-start gap-4 mb-4">
                <Calendar size={32} style={{ color: "#8DA089" }} />
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold mb-4" style={{ color: "#3E3A37" }}>
                    Afspraken Maken
                  </h3>
                  <div className="space-y-4 font-body text-base" style={{ color: "#6B6560" }}>
                    <p>
                      Afspraken kunt u inboeken via:
                    </p>
                    <ul className="space-y-3 ml-4">
                      <li>✓ Online agenda (direct beschikbaarheid zien)</li>
                      <li>✓ Telefonisch/app: <a href="tel:0642874405" className="font-semibold hover:opacity-70" style={{ color: "#8DA089" }}>06-42874405</a></li>
                      <li>✓ Via mail: <a href="mailto:balanergy@hotmail.com" className="font-semibold hover:opacity-70" style={{ color: "#8DA089" }}>balanergy@hotmail.com</a></li>
                    </ul>
                    <p className="mt-4">
                      <strong>Tip:</strong> Heb je een specifieke voorkeur voor een dag of tijdstip? Plan dan bij voorkeur minimaal twee afspraken vooruit.
                    </p>
                    <p className="text-sm opacity-80 mt-4">
                      <strong>Let op:</strong> Afspraken die minder dan 24 uur van tevoren worden afgezegd, worden ongeacht de reden in rekening gebracht. Betalen kan contant, via Tikkie of per factuur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12" style={{ backgroundColor: "rgba(141,160,137,0.05)" }}>
          <div className="container">
            <h2 className="font-display text-2xl font-bold mb-8" style={{ color: "#3E3A37" }}>
              Onze Locatie
            </h2>
            <div className="w-full h-96 rounded-lg shadow-sm overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.8649999999998!2d5.9!3d52.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c7e5e5e5e5e5e5%3A0x0!2sKreeft%2045%2C%208271%20KL%20IJsselmuiden!5e0!3m2!1snl!2snl!4v1234567890"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12">
          <div className="container text-center">
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "#3E3A37" }}>
              Klaar om je afspraak in te boeken?
            </h2>
            <p className="font-body text-lg mb-6" style={{ color: "#6B6560" }}>
              Bekijk de beschikbaarheid en boek direct online
            </p>
            <a
              href={ONLINE_AGENDA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded font-body text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#8DA089" }}
            >
              ONLINE AGENDA
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
