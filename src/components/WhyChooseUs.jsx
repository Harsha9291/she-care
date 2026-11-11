import { motion } from "framer-motion";
import { Feather, ShieldCheck, Heart, Recycle } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const items = [
  { icon: Feather, title: "Ultra Soft", text: "Cotton-like top layer that feels gentle and cloud-soft all day long." },
  { icon: ShieldCheck, title: "Leak Proof", text: "Advanced 5-layer absorption with side guards for 12-hour protection." },
  { icon: Heart, title: "Skin Friendly", text: "Dermatologically tested, rash-free and free from harsh chemicals." },
  { icon: Recycle, title: "Eco Conscious", text: "Biodegradable options for a cleaner planet and a better tomorrow." },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-22">
      <div className="mx-auto w-[92%] max-w-300">
        <SectionHead
          eyebrow="Why Choose Us"
          title="Care that you can"
          highlight="feel"
          sub="Designed by women, for women – every detail is made for your comfort."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -10, rotateX: 6, rotateY: -6 }}
                style={{ transformPerspective: 800 }}
                className="group relative h-full overflow-hidden rounded-3xl border border-pink-100 bg-white p-7 text-center shadow-xl shadow-pink-200/40"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-pink-100 opacity-0 blur-2xl transition group-hover:opacity-100" />
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="relative mx-auto mb-5 grid h-17 w-17 -rotate-6 place-items-center rounded-[22px] bg-linear-to-br from-brand to-lilac text-white shadow-lg shadow-brand/30"
                >
                  <Icon size={28} />
                </motion.div>
                <h3 className="relative mb-2 text-xl font-semibold text-plum">{title}</h3>
                <p className="relative text-sm">{text}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}