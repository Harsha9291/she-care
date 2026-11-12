import { motion } from "framer-motion";
import { Leaf, FlaskConical, Heart, ShieldCheck, Recycle } from "lucide-react";

const benefits = [
  { icon: Leaf, title: "Plant-Based", sub: "Ingredients" },
  { icon: FlaskConical, title: "No Harsh", sub: "Chemicals" },
  { icon: Heart, title: "Gynecologist", sub: "Tested" },
  { icon: ShieldCheck, title: "Skin Safe", sub: "& Gentle" },
  { icon: Recycle, title: "Better for You", sub: "& the Planet" },
];

export default function BottomBenefits() {
  return (
    <section
      id="benefits"
      className="relative overflow-hidden bg-gradient-to-b from-[#EDF6E8] via-[#E0F0D8] to-[#C7E2B8] px-5 py-10 sm:px-10"
    >
      <div className="absolute -bottom-32 left-0 h-60 w-60 rounded-full bg-green-400/30 blur-3xl" />

      <div className="relative mx-auto max-w-[1300px]">
        <div className="mb-9 flex items-center justify-center gap-3">
          <span className="hidden h-px flex-1 bg-gradient-to-r from-transparent to-green-400 sm:block" />
          <Leaf size={22} className="fill-green-600 text-green-700" />

          <h2 className="text-center font-serif text-2xl font-bold italic text-green-950 sm:text-3xl">
            Herbal Comfort for Every Period
          </h2>

          <Leaf size={22} className="fill-green-600 text-green-700" />
          <span className="hidden h-px flex-1 bg-gradient-to-l from-transparent to-green-400 sm:block" />
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {benefits.map(({ icon: Icon, title, sub }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex items-center justify-center gap-3"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white bg-white/85 text-green-700 shadow-lg">
                <Icon size={23} />
              </div>

              <div>
                <p className="text-xs font-extrabold text-green-950 sm:text-sm">
                  {title}
                </p>
                <p className="text-xs font-medium text-green-800/70">{sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
