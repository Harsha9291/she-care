import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const reviews = [
  { name: "Priya S.", city: "Varanasi", emoji: "👩🏻", text: "Itna soft pad maine pehle kabhi use nahi kiya. Rashes bilkul band ho gaye!" },
  { name: "Ananya R.", city: "Delhi", emoji: "👩🏽", text: "Night me leak ka tension khatam. Period pants toh game changer hain." },
  { name: "Fatima K.", city: "Dubai", emoji: "👩🏾", text: "Tracker bahut helpful hai, next period ka sahi idea mil jata hai." },
];

export default function Testimonials() {
  return (
    <section className="py-22">
      <div className="mx-auto w-[92%] max-w-300">
        <SectionHead eyebrow="Love Notes" title="Loved by" highlight="thousands of women" />
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -8 }}
                className="relative h-full rounded-3xl border border-pink-100 bg-white p-7 shadow-xl shadow-pink-200/40"
              >
                <Quote size={36} className="absolute right-6 top-6 text-pink-100" fill="currentColor" />
                <div className="mb-3 flex gap-0.5 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="mb-5 text-[15px]">“{r.text}”</p>
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-linear-to-br from-blush to-blush2 text-2xl">
                    {r.emoji}
                  </span>
                  <div className="leading-tight">
                    <b className="block text-plum">{r.name}</b>
                    <small>{r.city}</small>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}