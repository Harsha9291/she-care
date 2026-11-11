import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const faqs = [
  { q: "How often should I change my pad?", a: "Every 4–6 hours, or sooner if the flow is heavy. Regular changes keep you fresh and prevent irritation." },
  { q: "Are SheCare pads safe for sensitive skin?", a: "Yes. They are dermatologically tested, fragrance-free and made with a soft cotton-like top layer to avoid rashes." },
  { q: "Can I use pads at night?", a: "Absolutely. Our overnight range has extra length and wider back coverage for up to 12 hours of leak-proof sleep." },
  { q: "What is the difference between pads and period pants?", a: "Pads stick inside underwear, while period pants are absorbent underwear on their own – washable, flexible and great for back-up or light days." },
  { q: "Are your eco-friendly pads really biodegradable?", a: "Yes, they use plant-based materials that break down much faster than regular pads. Dispose of them in a bin, never flush." },
  { q: "How does the Period Tracker work?", a: "Enter your last period date and cycle length. We estimate your next period, ovulation day and fertile window. It's an estimate, not medical advice." },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-linear-to-b from-blush to-white py-22">
      <div className="mx-auto w-[92%] max-w-205">
        <SectionHead eyebrow="FAQ" title="Questions?" highlight="We've got answers" />
        <div className="grid gap-3.5">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.06} y={24}>
                <div
                  className={`overflow-hidden rounded-[20px] border bg-white shadow-xl shadow-pink-200/40 transition ${
                    isOpen ? "border-brand/40" : "border-pink-100"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className={`flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold transition ${
                      isOpen ? "text-brand" : "text-plum"
                    }`}
                  >
                    {f.q}
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${
                        isOpen ? "bg-brand text-white" : "bg-pink-100 text-brand"
                      }`}
                    >
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-[14.5px]">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}