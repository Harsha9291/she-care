import { motion } from "framer-motion";
import { Flower2, Heart, Share2, MessageCircle, Send, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const social = [
  { icon: Heart, label: "Instagram" },
  { icon: Share2, label: "Facebook" },
  { icon: MessageCircle, label: "Twitter" },
  { icon: Send, label: "YouTube" },
];

const linkCls = "mb-2.5 flex items-center gap-2 text-sm transition hover:text-[#ffb3d4]";

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-linear-to-br from-plum to-[#5a2468] pt-32 text-[#e9d6f1]">
      {/* CTA banner */}
      <div className="absolute inset-x-0 top-0 -translate-y-1/2 px-[4%]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto flex max-w-300 flex-col items-center justify-between gap-5 overflow-hidden rounded-4xl bg-linear-to-r from-brand via-brand2 to-lilac px-8 py-10 text-center text-white shadow-2xl shadow-brand/40 md:flex-row md:text-left"
        >
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
          <div>
            <h3 className="text-2xl font-bold sm:text-3xl">Ready for comfortable periods? 💜</h3>
            <p className="text-pink-50">Join 50K+ women who switched to SheCare.</p>
          </div>
          {/* <motion.a
            whileHover={{ y: -4, scale: 1.05 }}
            href="#products"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-brand shadow-xl"
          >
            Shop Now <ArrowRight size={18} />
          </motion.a> */}
        </motion.div>
      </div>

      <div className="mx-auto grid w-[92%] max-w-300 gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr]">
        <div>
          <a href="#home" className="flex items-center gap-2.5 text-[#ffb3d4]">
            <Flower2 size={32} />
            <span className="flex flex-col leading-none">
              <b className="text-2xl text-white">SheCare</b>
              <small className="text-[9.5px] text-white">Period Care for Every Woman</small>
            </span>
          </a>
          <p className="my-4 max-w-75 text-sm">
            Ultra-soft, leak-proof and skin-friendly period care, made with love for modern women.
          </p>
          <div className="flex gap-2.5">
            {social.map(({ icon: Icon, label }) => (
              <motion.a
                key={label}
                href="#"
                aria-label={label}
                whileHover={{ y: -5, scale: 1.1 }}
                className="grid h-9.5 w-9.5 place-items-center rounded-full bg-white/10 transition hover:bg-brand"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-white">About</h4>
          <a href="#why" className={linkCls}>Our Story</a>
          <a href="#products" className={linkCls}>Products</a>
          <a href="#tracker" className={linkCls}>Period Tracker</a>
          <a href="#survey" className={linkCls}>Survey</a>
          <a href="#faq" className={linkCls}>FAQ</a>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-white">Legal</h4>
          <a href="#" className={linkCls}>Privacy Policy</a>
          <a href="#" className={linkCls}>Terms of Service</a>
          <a href="#" className={linkCls}>Refund Policy</a>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-white">Contact</h4>
          <p className={linkCls}><Mail size={16} /> hello@shecare.in</p>
          <p className={linkCls}><Phone size={16} /> +91 98765 43210</p>
          <p className={linkCls}><MapPin size={16} /> Varanasi, India</p>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 p-5 text-center text-[13px]">
        © {new Date().getFullYear()} SheCare. All rights reserved.
      </div>
    </footer>
  );
}