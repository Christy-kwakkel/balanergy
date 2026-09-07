/**
 * BALANERGY FAQ COMPONENT
 * Design: "Warme Aarde – Organisch & Sensueel"
 * Accessible accordion-style answers for practical booking and treatment questions.
 */

import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "Welke behandeling past bij mijn klacht of behoefte?",
    answer:
      "Dat hangt af van wat je lichaam en geest op dit moment nodig hebben. Bij lichamelijke spanning, zoals een stijve nek, vastzittende schouders of rugklachten, kan een klachtgerichte massage passend zijn. Voor herstel, ontspanning of ondersteuning bij stress kun je ook kiezen voor Thaise yogamassage, een ontspanningsmassage of voetreflexologie. Twijfel je? Neem gerust contact op; we stemmen samen af wat bij jou past.",
  },
  {
    question: "Kan ik ook komen met stress, overprikkeling of burn-outklachten?",
    answer:
      "Ja, je bent welkom wanneer je behoefte hebt aan rust, aandacht en een moment uit je hoofd. Een behandeling kan ontspanning en lichaamsbewustzijn ondersteunen, maar vervangt geen medische of psychologische begeleiding. Bij ernstige, nieuwe of aanhoudende klachten is het belangrijk om ook contact op te nemen met je huisarts of behandelaar.",
  },
  {
    question: "Met welke lichamelijke klachten kan ik terecht?",
    answer:
      "Je kunt onder andere contact opnemen bij spanning in de nek en schouders, een vermoeide of stijve rug, beperkte bewegelijkheid, spiervermoeidheid na het sporten of langdurig zitten. Tijdens de intake bespreken we wat je ervaart en welke aanpak verantwoord en prettig voelt. Er wordt geen diagnose gesteld.",
  },
  {
    question: "Wat trek ik aan tijdens een behandeling?",
    answer:
      "Voor Thaise yogamassage draag je gemakkelijk zittende kleding waarin je vrij kunt bewegen. Bij andere massages kun je je gedeeltelijk uitkleden; je blijft altijd bedekt met een doek en houdt zelf de regie over wat comfortabel voelt. Bij twijfel kun je dit vooraf bespreken.",
  },
  {
    question: "Hoe kan ik een afspraak maken?",
    answer:
      "Je kunt direct een moment kiezen via de online agenda. Liever eerst overleggen? Bel of app via WhatsApp naar 06-42874405, of stuur een e-mail naar balanergy@hotmail.com.",
  },
  {
    question: "Zijn er situaties waarin een behandeling niet verstandig is?",
    answer:
      "Bespreek gezondheidsproblemen, zwangerschap, recente blessures, koorts, acute ontstekingen of medicijngebruik vooraf. Bij twijfel stemmen we samen af of uitstel of overleg met je huisarts of behandelaar verstandiger is.",
  },
];

export default function FaqSection() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "rgba(141,160,137,0.05)" }}>
      <div className="container">
        <div className="max-w-3xl">
          <p
            className="font-body text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#8DA089" }}
          >
            Praktische vragen
          </p>
          <h2
            className="font-display text-4xl font-bold mb-4"
            style={{ color: "#3E3A37" }}
          >
            Veelgestelde vragen
          </h2>
          <p className="font-body text-lg leading-relaxed mb-8" style={{ color: "#6B6560" }}>
            Wil je weten welke behandeling bij je past, wat je kunt verwachten of hoe je een afspraak maakt? Hieronder vind je de belangrijkste informatie.
          </p>

          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="group bg-white rounded-lg shadow-sm">
                <summary
                  className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-body text-base font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DA089]"
                  style={{ color: "#3E3A37" }}
                >
                  <span>{item.question}</span>
                  <ChevronDown size={18} className="shrink-0 transition-transform group-open:rotate-180" style={{ color: "#8DA089" }} />
                </summary>
                <div className="px-5 pb-5 font-body text-base leading-relaxed" style={{ color: "#6B6560" }}>
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
