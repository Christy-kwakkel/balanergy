/**
 * BALANERGY BEHANDELINGEN PAGE
 * Design: "Warme Aarde – Organisch & Sensueel"
 * All treatments on one page, no submenus
 */

import { Link } from "wouter";
import { Phone, Mail, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import ExpandableCard from "@/components/ExpandableCard";

const ONLINE_AGENDA_URL =
  "https://www.supersaas.nl/schedule/balanergy/Balanergy";

const treatments = [
  {
    id: "thai",
    title: "Thaise Yogamassage",
    subtitle: "Thais",
    description:
      "Traditionele Thaise yogamassage met strekking en acupressuurtechnieken. Geschikt voor iedereen van 10 tot 100 jaar oud.",
    fullDescription:
      "Dit is de traditionele vorm van yogamassage, zoals die in Noord-Thailand ook het meest wordt gegeven, en deze vindt plaats op een comfortabele traditionele Thaise rolmatras van kapok katoen. Hiermee is er optimale bewegingsvrijheid om de yoga stretches te kunnen doen, in combinatie met acupressuur massage.\n\nHoe langer de tijdsduur, hoe meer tijd er per lichaamdsdeel is. Deze massage kan niet op locatie gegeven worden.",
    prices: [
      { duration: "60 min", price: "€ 59,-" },
      { duration: "75 min", price: "€ 69,-" },
      { duration: "90 min", price: "€ 79,-" },
      { duration: "120 min", price: "€ 99,-" },
    ],
    tag: "Signature Dish!",
  },
  {
    id: "ontspanning",
    title: "Ontspanningsmassage",
    subtitle: "Ontspanning",
    description:
      "Diepe ontspanningsmassage met essentiële oliën. Minimaal 45 minuten voor ware ontspanning. Kan steviger uitgevoerd worden als je dat wilt.",
    fullDescription:
      "Ontspanningsmassages hebben als doel tot een diepe ontspanning komen en alles even kunnen loslaten. Er wordt gemasseerd met een essentiële olie naar keuze (gemengd met een basisolie).\n\nEen ontspanningsmassage wordt aangeboden vanaf minimaal 45 minuten, omdat écht loslaten en ontspannen nauwelijks lukt in 30 minuten. Een ontspanningsmassage kan beslist ook steviger worden uitgevoerd voor wie dat prettig vindt, ontspanning kent vele vormen. Wil je graag dat eventuele knopen of triggerpoints ook worden aangepakt tijdens je massage en behandeld worden met magnesiumolie en/of Thaise balsems? Boek dan een combinatie massage.",
    prices: [
      { duration: "45 min", price: "€ 45,-" },
      { duration: "60 min", price: "€ 55,-" },
      { duration: "75 min", price: "€ 65,-" },
      { duration: "90 min", price: "€ 75,-" },
      { duration: "120 min", price: "€ 95,-" },
    ],
  },
  {
    id: "combinatiemassage",
    title: "Combinatiemassage",
    subtitle: "Combinatie",
    description:
      "Mix van ontspannings- en sportmassage. Behandelt specifieke probleemgebieden terwijl je overall ontspanning behoudt. Minimaal 45 minuten.",
    fullDescription:
      "Bij een combinatiemassage wordt er een combi gemaakt tussen ontspanningsmassage en sportmassage. Hierbij kun je denken aan therapeutisch werk voor bijvoorbeeld rug, nek en schouders en een ontspannende massage van bijvoorbeeld voeten, hoofd, benen, armen. Omdat een deelmassage voor het behandelen van een specifieke klacht afhankelijk van het lichaamsdeel 15-45 minuten duurt, is het minimum voor een combinatiemassage 45 minuten.",
    prices: [
      { duration: "45 min", price: "€ 45,-" },
      { duration: "60 min", price: "€ 55,-" },
      { duration: "75 min", price: "€ 65,-" },
      { duration: "90 min", price: "€ 75,-" },
      { duration: "120 min", price: "€ 95,-" },
    ],
    tag: "Meest geboekt",
  },
  {
    id: "sportmassage",
    title: "Sportmassage",
    subtitle: "Klachtgericht",
    description:
      "Voor pijn, blessures en overbelasting van specifieke lichaamsdelen. Niet alleen voor sporters—voor iedereen met bewegingsklachten zoals hoofdpijn, rugpijn en nek-/schouderklachten.",
    fullDescription:
      "Een sportmassage richt zich op één of meer klachten in de vorm van pijn, blessures of overbelasting van specifieke lichaamsdelen, wat niet voorbehouden is aan sporters, maar voor iedereen met klachten in het bewegingsapparaat. Hierbij kan gedacht worden aan hoofdpijn, onderrugklachten, bekkenklachten, nek- en schouderklachten. Deze massage is vaak steviger dan de ontspannende massage en er wordt gewerkt met andere petrissage, frictie en tapotage technieken en elementen uit de Thaise acupressuur massage om dieper te kunnen inwerken op het spierweefsel. Er wordt onder meer gewerkt met een speciale massagebalsem of magnesiumolie voor overbelaste of pijnlijke spieren om het effect van de massage nog verder te versterken. Ook als je geen concrete klachten hebt, is een massage nooit overbodige luxe, doordat je je lichaam en hoofd ermee in balans kunt houden en daarmee preventief werkt.",
    prices: [
      { duration: "30 min", price: "€ 35,-" },
      { duration: "45 min", price: "€ 45,-" },
      { duration: "60 min", price: "€ 55,-" },
      { duration: "75 min", price: "€ 65,-" },
      { duration: "90 min", price: "€ 75,-" },
      { duration: "120 min", price: "€ 95,-" },
    ],
  },
  {
    id: "rugpijnmassage",
    title: "Rugpijnmassage",
    subtitle: "Gespecialiseerd",
    description:
      "Gespecialiseerde behandeling van boven- en onderrug met Thaise acupressuur en klachtgerichte massage. Gebruikt speciale Thaise balsem voor diep spierwerk.",
    fullDescription:
      "Balanergy biedt een speciale boven- en onderrugklachten-massage aan. Deze bestaat uit een intensieve behandeling van het onderrug-bekken-billen en benen gebied waarbij een combinatie plaatsvindt van Thaise acupressuurmassage en klachtgerichte (olie)massage. Er wordt gemasseerd met een speciale Thaise balsem die extra diep inwerkt op de spieren. De massage is intensief maar ook erg ontspannend omdat het een directe verlichting biedt. De behandeling onderscheidt zich van een fysiotherapie behandeling omdat de behandeling dus behalve functioneel ook nog steeds een ontspannende massage is.\n\nVeel vrouwen (en zo nu en dan ook mannen) hebben vaak last van de onderrug. Dit kan veel oorzaken hebben, waaronder acute pijn door een overbelasting, stress, pijn door verweking van de spieren door bijvoorbeeld menstruatie of zwangerschap of langdurige idiopathische pijn. Pijn wordt onderverdeeld in drie tijdscategorieën, te weten acute pijn korter dan 6 weken, semi chronisch van 6 tot 12 weken of langer dan 12 weken, wat dan chronisch genoemd wordt. Voor alle varianten kan (regelmatige) massage verlichting bieden. Soms is het nodig of praktischer om je ook te verwijzen naar fysiotherapie, manuele therapie, muskuloskeletale geneeskunde of chiropractie die in combinatie met massages goede resultaten kunnen bieden, via onder andere dry needling, manipulaties of zachte standscorrecties.\n\nDe onderrug is een nogal breed begrip waarbij vaak het hele gebied rondom het heiligbeen, stuitje en de heupgordel bedoeld wordt. Het zal je dan wellicht ook niet verbazen dat veel onderrugklachten bij vrouwen feitelijk klachten zijn die hun oorsprong vinden in de spieren rondom het bekken en heiligbeen met andere woorden, in de billen dus! De billen bestaan uit meerdere grote spieren die samen eigenlijk het grootste gewicht van je lijf dragen en je rug ondersteunen om rechttop te blijven, samen met de spieren rondom de wervelkolom. Op zich geen wonder dus dat in ons drukke leven deze spieren en dan voornamelijk de grote bilspier (m.gluteus maximus) maar ook de middelgrote en kleine bilspier (m.gluteus medius en minimus) vaak erg geïrriteerd zijn, regelmatig in combinatie met de aanhechtingen in de liezen en diep van binnen de m.ilio psoas.\n\nIn de bovenrug geven de monnikskapspier (m.trapezius) en meerdere oppervlakkige en diepliggende spieren zoals de m.erector spinae, m. supraspinatus en m. levator scapula, vaak klachten in bovenrug en nek. Veel mensen zetten stress lichamelijk vast door de schouders (vaak ongemerkt) op te trekken, waardoor er teveel spanning op het gebied komt. Ook klachten in de nek en bovenrug kunnen bij de bovenrug-massage goed behandeld worden, deze klachten ontstaan tegenwoordig vaak door beeldschermgebruik op de bank of tafel, waarbij je teveel naar beneden kijkt.\n\nBij de opmerking kun je aangeven of je een onderrug- of bovenrug-massage nodig hebt, of eventueel een combinatie. Deze klachten zijn vaak niet gisteren ontstaan, dus na een eerste behandeling zul je zeker verlichting voelen, maar om problemen blijvend op te lossen en daarna bij te houden, zijn vaak een aantal behandelingen meer nodig. Ik adviseer daarom om te starten met 3 a 4 behandelingen kort op elkaar, om daarna het klachtengebied bij te houden door eens in de 4 tot 6 weken de rug opnieuw los te laten werken. Let op: wil je graag in kuurverband gemasseerd worden, plan je eerste behandeling dan in overleg tijdig in zodat er voldoende ruimte is in de agenda om een aantal behandelingen relatief kort na elkaar te plannen.",
    prices: [
      { duration: "30 min", price: "€ 35,-" },
      { duration: "45 min", price: "€ 45,-" },
    ],
  },
  {
    id: "hoofdpijnmassages",
    title: "Hoofdpijnmassages",
    subtitle: "Gespecialiseerd",
    description:
      "Drie gespecialiseerde typen: stress-/spanningsmigraine, nek-/schouder-gerelateerde hoofdpijn, en sinuscongestie-hoofdpijn met pepermuntolie en Thaise balsem.",
    fullDescription:
      "Regelmatig optredende hoofdpijn komt helaas vaak en veel voor en kan diverse oorzaken hebben, zoals hoofdpijn door spanning, door verstopte holtes, of hoofdpijn die veroorzaakt wordt door klachten vanuit de nek en/of schouders. Voor elk type heeft Balanergy een aparte massage ontwikkeld om deze klachten aan te pakken. \n\n\nHoofdpijnmassage door stress en spanning:\nDeze uiterst ontspannende massage wordt spanning in het lichaam die vaak in de bovenrug gaat vastzitten losgewerkt. Ook het hoofd, waar de spanning letterlijk en figuurlijk vandaan komt, wordt uitgebreid meegenomen. \n\n\nHoofdpijnmassage door nek- en schouderklachten:\nBij deze massage worden westerse en Thaise technieken gecombineerd om het schouder- en nekgebied bij een aantal belangrijke spieren los te maken, waardoor knopen en strengen verminderen en daarmee de toevoer van zuurstofrijk bloed naar het hoofd bevorderd wordt.\n\n\nHoofdpijnmassage door verstopte holtes:\nBij deze massage wordt het hoofd, het gezicht en de bovenkant van de rug, nek en schouders gemasseerd. Door massage van het gezicht en dan met name bij de holtes krijg je meer lucht. Er wordt gemasseerd met pepermuntolie en Thaise balsem die het kunnen doorademen via de neus verbeteren.",
    prices: [{ duration: "30 min", price: "€ 35,-" }],
  },
  {
    id: "reflexology",
    title: "Voetreflexologie",
    subtitle: "Reflexologie",
    description:
      "Voetreflexologie en massage met Thaise en westerse technieken. Bij 60 minuten worden ook de onderbenen tot aan de knie gemasseerd.",
    fullDescription:
      "Voetreflexologie bij Balanergy kan voor 30 of 60 minuten. Hierbij kun je kiezen of je een reflexologie behandeling wilt, of een normale voetmassage. Bij een uur reflexologie en normale voetmassage worden ook de onderbenen tot en met de knie gemasseerd.",
    prices: [
      { duration: "30 min", price: "€ 35,-" },
      { duration: "60 min", price: "€ 55,-" },
    ],
  },
];

export default function Behandelingen() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#FCF9F5" }}
    >
      <Navigation />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <h1
              className="font-display text-4xl md:text-5xl font-bold mb-2"
              style={{ color: "#3E3A37" }}
            >
              Behandelingen & Prijzen
            </h1>
            <p className="font-body text-lg" style={{ color: "#8DA089" }}>
              Van ontspannend tot therapeutisch — er is altijd een behandeling
              die op dit moment bij jou past
            </p>
          </div>
        </section>

        {/* Treatments Grid */}
        <section className="py-12">
          <div className="container">
            <h2
              className="font-display text-3xl font-bold mb-8"
              style={{ color: "#3E3A37" }}
            >
              Onze Behandelingen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {treatments.map(t => (
                <ExpandableCard
                  key={t.id}
                  title={t.title}
                  subtitle={t.subtitle}
                  description={t.description}
                  fullDescription={t.fullDescription}
                  prices={t.prices}
                  tag={t.tag}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Cancellation Policy Section */}
        <section className="py-12 bg-white">
          <div className="container max-w-3xl">
            <div
              className="bg-yellow-50 border-l-4 p-6"
              style={{
                borderColor: "#C69C6D",
                backgroundColor: "rgba(198,156,109,0.1)",
              }}
            >
              <p
                className="font-body text-base font-semibold mb-3"
                style={{ color: "#3E3A37" }}
              >
                ⚠️ Annuleringsbeleid
              </p>
              <p
                className="font-body text-base leading-relaxed mb-3"
                style={{ color: "#6B6560" }}
              >
                <strong>Let op:</strong> Vanwege de volle agenda worden
                afspraken die minder dan 24 uur van tevoren worden afgezegd,
                ongeacht de reden, in rekening gebracht.
              </p>
              <p
                className="font-body text-base leading-relaxed"
                style={{ color: "#6B6560" }}
              >
                <strong>Uitzondering:</strong> Wanneer je iemand anders in jouw
                plaats laat komen voor dezelfde tijdsduur, dan geldt dit niet.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12">
          <div className="container max-w-3xl">
            <h2
              className="font-display text-2xl font-bold mb-6"
              style={{ color: "#3E3A37" }}
            >
              Vragen over behandelingen?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Phone size={32} style={{ color: "#8DA089" }} className="mx-auto mb-3" />
                <p
                  className="font-body text-sm font-semibold mb-1"
                  style={{ color: "#3E3A37" }}
                >
                  Bel
                </p>
                <p className="font-body text-sm" style={{ color: "#6B6560" }}>
                  +31 (0)6 12 34 56 78
                </p>
              </div>
              <div className="text-center">
                <Mail size={32} style={{ color: "#8DA089" }} className="mx-auto mb-3" />
                <p
                  className="font-body text-sm font-semibold mb-1"
                  style={{ color: "#3E3A37" }}
                >
                  E-mail
                </p>
                <p className="font-body text-sm" style={{ color: "#6B6560" }}>
                  info@balanergy.nl
                </p>
              </div>
              <div className="text-center">
                <Calendar size={32} style={{ color: "#8DA089" }} className="mx-auto mb-3" />
                <p
                  className="font-body text-sm font-semibold mb-1"
                  style={{ color: "#3E3A37" }}
                >
                  Agenda
                </p>
                <a
                  href={ONLINE_AGENDA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm hover:opacity-70 transition-opacity"
                  style={{ color: "#8DA089" }}
                >
                  Bekijk beschikbaarheid
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
