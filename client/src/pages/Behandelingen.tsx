import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

const ONLINE_AGENDA_URL = "https://www.supersaas.nl/schedule/balanergy/Balanergy";

export default function Behandelingen() {
  const treatments = [
    {
      id: "ontspanning",
      title: "Ontspanningsmassage",
      category: "Relaxation",
      description: "Deep relaxation massage with essential oils. Minimum 45 minutes for true relaxation. Can be performed firmer if preferred.",
      pricing: [
        { duration: "45 min", price: "€45,-" },
        { duration: "60 min", price: "€55,-" },
        { duration: "75 min", price: "€65,-" },
        { duration: "90 min", price: "€75,-" },
        { duration: "120 min", price: "€95,-" },
      ],
    },
    {
      id: "sportmassage",
      title: "Sportmassage",
      category: "Complaint-based",
      description: "For pain, injuries, and overuse of specific body parts. Not just for athletes—for anyone with movement complaints including headaches, lower back pain, and neck/shoulder issues.",
      pricing: [
        { duration: "30 min", price: "€35,-" },
        { duration: "45 min", price: "€45,-" },
        { duration: "60 min", price: "€55,-" },
        { duration: "75 min", price: "€65,-" },
        { duration: "90 min", price: "€75,-" },
        { duration: "120 min", price: "€95,-" },
      ],
    },
    {
      id: "combinatie",
      title: "Combinatiemassage",
      category: "Combination",
      description: "Mix of relaxation and sports massage. Treats specific problem areas while maintaining overall relaxation. Minimum 45 minutes.",
      pricing: [
        { duration: "45 min", price: "€45,-" },
        { duration: "60 min", price: "€55,-" },
        { duration: "75 min", price: "€65,-" },
        { duration: "90 min", price: "€75,-" },
        { duration: "120 min", price: "€95,-" },
      ],
    },
    {
      id: "rugpijn",
      title: "Rugpijnmassage",
      category: "Specialized",
      description: "Specialized upper and lower back treatment combining Thai acupressure and complaint-focused massage. Uses special Thai balm for deep muscle work. Intensive yet relaxing.",
      pricing: [
        { duration: "30 min", price: "€35,-" },
        { duration: "45 min", price: "€45,-" },
      ],
    },
    {
      id: "hoofdpijn",
      title: "Hoofdpijnmassages",
      category: "Specialized",
      description: "Three specialized types: stress/tension headaches, neck/shoulder-related headaches, and sinus congestion headaches (with peppermint oil and Thai balm).",
      pricing: [
        { duration: "30 min", price: "€35,-" },
      ],
    },
    {
      id: "thaise",
      title: "Thaise Yogamassage",
      category: "Thai",
      description: "Traditional Thai yoga massage combining stretching and acupressure techniques.",
      pricing: [
        { duration: "60 min", price: "€59,-" },
        { duration: "75 min", price: "€69,-" },
        { duration: "90 min", price: "€79,-" },
      ],
    },
    {
      id: "voetreflexologie",
      title: "Voetreflexologie",
      category: "Reflexology",
      description: "Foot reflexology and massage combining Thai and Western techniques.",
      pricing: [
        { duration: "Combi Thai-Westers 30 min", price: "€35,-" },
        { duration: "Combi Thai-Westers 60 min", price: "€55,-" },
        { duration: "Voet- en beenmassage 30 min", price: "€35,-" },
        { duration: "Voet- en beenmassage 60 min", price: "€55,-" },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container py-4 flex justify-between items-center">
          <Link href="/">
            <a className="font-display text-2xl font-bold" style={{ color: "#3E3A37" }}>
              Balanergy
            </a>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/"><a className="font-body text-sm font-medium hover:opacity-70" style={{ color: "#6B6560" }}>Home</a></Link>
            <Link href="/behandelingen"><a className="font-body text-sm font-medium" style={{ color: "#8DA089" }}>Behandelingen</a></Link>
            <Link href="/arrangementen"><a className="font-body text-sm font-medium hover:opacity-70" style={{ color: "#6B6560" }}>Arrangementen</a></Link>
            <Link href="/workshops"><a className="font-body text-sm font-medium hover:opacity-70" style={{ color: "#6B6560" }}>Workshops</a></Link>
            <Link href="/personal-training"><a className="font-body text-sm font-medium hover:opacity-70" style={{ color: "#6B6560" }}>Personal Training</a></Link>
            <Link href="/over-mij"><a className="font-body text-sm font-medium hover:opacity-70" style={{ color: "#6B6560" }}>Over Mij</a></Link>
            <Link href="/contact"><a className="font-body text-sm font-medium hover:opacity-70" style={{ color: "#6B6560" }}>Contact</a></Link>
          </nav>
          <a href={ONLINE_AGENDA_URL} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded font-body text-sm font-semibold text-white" style={{ backgroundColor: "#8DA089" }}>BOEK NU</a>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 md:py-16" style={{ backgroundColor: "#FCF9F5" }}>
          <div className="container">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "#3E3A37" }}>
              Behandelingen
            </h1>
            <p className="font-body text-lg" style={{ color: "#6B6560" }}>
              Ontdek ons volledige aanbod van massages en behandelingen
            </p>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mb-12">
              <p className="font-body text-base mb-4" style={{ color: "#6B6560" }}>
                Er zijn diverse mogelijkheden voor behandelingen, van ontspannend tot stevig en van traditionele westerse oliemassage tot Thaise yogamassage en voetreflexologie. Kies wat bij jou past of maak een afspraak via telefoon, e-mail of onze online agenda.
              </p>
              <p className="font-body text-base mb-4" style={{ color: "#6B6560" }}>
                Voor de eerste behandeling kan je gevraagd worden om een anamneseformulier in te vullen. Dit formulier helpt ons om een goede indruk te krijgen van je gezondheid en eventuele klachtgebieden.
              </p>
            </div>
          </div>
        </section>

        {/* Treatments Grid */}
        <section className="py-12 md:py-16" style={{ backgroundColor: "rgba(141,160,137,0.05)" }}>
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {treatments.map((treatment) => (
                <div key={treatment.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 rounded text-xs font-semibold" style={{ backgroundColor: "rgba(141,160,137,0.1)", color: "#8DA089" }}>
                      {treatment.category}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3" style={{ color: "#3E3A37" }}>
                    {treatment.title}
                  </h3>
                  <p className="font-body text-sm mb-4 leading-relaxed" style={{ color: "#6B6560" }}>
                    {treatment.description}
                  </p>
                  <div className="border-t" style={{ borderColor: "#E8E3DE" }} />
                  <div className="mt-4 mb-4">
                    {treatment.pricing.map((price, idx) => (
                      <div key={idx} className="flex justify-between font-body text-sm mb-2">
                        <span style={{ color: "#6B6560" }}>{price.duration}</span>
                        <span className="font-semibold" style={{ color: "#8DA089" }}>
                          {price.price}
                        </span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={ONLINE_AGENDA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-4 py-2 rounded font-body text-sm font-semibold text-white text-center transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#8DA089" }}
                  >
                    BOEK NU
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Info */}
        <section className="py-12 md:py-16">
          <div className="container max-w-3xl">
            <h2 className="font-display text-2xl font-bold mb-6" style={{ color: "#3E3A37" }}>
              Belangrijke Informatie
            </h2>
            <div className="space-y-4 font-body text-base" style={{ color: "#6B6560" }}>
              <p>
                <strong style={{ color: "#3E3A37" }}>Langere sessies:</strong> Hoe langer de tijdsduur, hoe beter de prijs per minuut.
              </p>
              <p>
                <strong style={{ color: "#3E3A37" }}>Annuleringsbeleid:</strong> Afspraken die minder dan 24 uur van tevoren worden afgezegd, worden in rekening gebracht. Wanneer je iemand anders in jouw plaats laat komen voor dezelfde tijdsduur, geldt dit niet.
              </p>
              <p>
                <strong style={{ color: "#3E3A37" }}>Betaalmogelijkheden:</strong> Contant, Tikkie, of per factuur voor zakelijk.
              </p>
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
                  <a href="tel:0642874405" className="opacity-80 hover:opacity-100">06-42874405</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <a href="mailto:balanergy@hotmail.com" className="opacity-80 hover:opacity-100">balanergy@hotmail.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span className="opacity-80">Kreeft 45, IJsselmuiden</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }} />
          <div className="pt-8 text-center font-body text-sm opacity-60">
            <p>&copy; 2026 Balanergy. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
